/**
 * Reservation Draft Management (Demo)
 * 
 * Saves reservation context (vehicleId, dates, locations) to localStorage
 * before redirecting unauthenticated users to login.
 * 
 * SECURITY: Never stores sensitive data (email, phone, payment info, KYC files).
 * Only stores context/IDs.
 */

export interface ReservationDraftV1 {
    version: 1
    createdAt: string
    vehicleId?: string
    pickupWilaya?: string
    pickupPlace?: string
    returnDifferent?: "0" | "1"
    returnWilaya?: string
    returnPlace?: string
    pickupDate?: string
    pickupTime?: string
    returnDate?: string
    returnTime?: string
}

const DRAFT_STORAGE_KEY = "emd_reservation_draft_v1"

/**
 * Load reservation draft from localStorage (SSR-safe)
 */
export function loadReservationDraft(): ReservationDraftV1 | null {
    if (typeof window === "undefined") return null

    try {
        const stored = localStorage.getItem(DRAFT_STORAGE_KEY)
        if (!stored) return null

        const parsed = JSON.parse(stored) as ReservationDraftV1

        // Validate version
        if (parsed.version !== 1) {
            console.warn("[ReservationDraft] Invalid version, clearing draft")
            clearReservationDraft()
            return null
        }

        return parsed
    } catch (error) {
        console.warn("[ReservationDraft] Failed to load draft:", error)
        return null
    }
}

/**
 * Save reservation draft to localStorage (SSR-safe)
 * Only saves if partial contains at least one useful field
 */
export function saveReservationDraft(partial: Partial<ReservationDraftV1>): void {
    if (typeof window === "undefined") return

    try {
        // Check if partial has at least one useful field (not version/createdAt)
        const hasUsefulData = Object.keys(partial).some(
            (key) => key !== "version" && key !== "createdAt" && partial[key as keyof ReservationDraftV1]
        )

        if (!hasUsefulData) {
            // Don't save empty draft
            return
        }

        const draft: ReservationDraftV1 = {
            version: 1,
            createdAt: new Date().toISOString(),
            ...partial,
        }

        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft))
    } catch (error) {
        console.warn("[ReservationDraft] Failed to save draft:", error)
    }
}

/**
 * Clear reservation draft from localStorage (SSR-safe)
 */
export function clearReservationDraft(): void {
    if (typeof window === "undefined") return

    try {
        localStorage.removeItem(DRAFT_STORAGE_KEY)
    } catch (error) {
        console.warn("[ReservationDraft] Failed to clear draft:", error)
    }
}
