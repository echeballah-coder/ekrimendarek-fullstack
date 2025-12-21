/**
 * Post-Auth Redirect Helper
 * 
 * Handles redirects after login/signup with:
 * - returnTo query param support
 * - Draft reservation restoration
 * - Open redirect protection
 */

import { loadReservationDraft, clearReservationDraft } from "./reservationDraft"

/**
 * Sanitize returnTo URL to prevent open redirects
 * Only allows internal relative paths starting with "/"
 */
export function sanitizeReturnTo(input: string | null): string | null {
    if (!input) return null

    const trimmed = input.trim()

    // Block external URLs
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
        return null
    }

    // Block protocol-relative URLs
    if (trimmed.startsWith("//")) {
        return null
    }

    // Must start with "/"
    if (!trimmed.startsWith("/")) {
        return null
    }

    // Block empty paths
    if (trimmed === "/") {
        return "/"
    }

    return trimmed
}

/**
 * Build post-auth redirect URL with draft restoration
 * Merges draft reservation params if relevant route
 */
export function buildPostAuthRedirectUrl(params: {
    returnTo: string | null
    fallbackHref: string
}): string {
    const { returnTo, fallbackHref } = params

    // Sanitize returnTo
    const safe = sanitizeReturnTo(returnTo)
    const base = safe ?? fallbackHref

    // Load draft
    const draft = loadReservationDraft()

    // Routes where draft context is useful
    const relevantRoutes = ["/reservation", "/recherche", "/reservation/start", "/reservation/manage"]
    const isRelevantRoute = relevantRoutes.some(route => base.startsWith(route))

    if (!draft || !isRelevantRoute) {
        // No draft or not a relevant route, return base as-is
        return base
    }

    // Parse base URL to extract existing params
    let pathname = base
    let existingParams = new URLSearchParams()

    const questionIdx = base.indexOf("?")
    if (questionIdx !== -1) {
        pathname = base.substring(0, questionIdx)
        existingParams = new URLSearchParams(base.substring(questionIdx + 1))
    }

    // Merge draft params (don't overwrite existing)
    const draftParams = [
        { key: "vehicleId", value: draft.vehicleId },
        { key: "pickupWilaya", value: draft.pickupWilaya },
        { key: "pickupPlace", value: draft.pickupPlace },
        { key: "returnDifferent", value: draft.returnDifferent },
        { key: "returnWilaya", value: draft.returnWilaya },
        { key: "returnPlace", value: draft.returnPlace },
        { key: "pickupDate", value: draft.pickupDate },
        { key: "pickupTime", value: draft.pickupTime },
        { key: "returnDate", value: draft.returnDate },
        { key: "returnTime", value: draft.returnTime },
    ]

    let paramsAdded = false

    for (const { key, value } of draftParams) {
        if (value && !existingParams.has(key)) {
            existingParams.set(key, value)
            paramsAdded = true
        }
    }

    // Clear draft if we used it
    if (paramsAdded) {
        clearReservationDraft()
    }

    // Build final URL
    const search = existingParams.toString()
    return search ? `${pathname}?${search}` : pathname
}
