/**
 * KYC State Management (Demo)
 * 
 * Manages KYC document statuses in localStorage.
 * SECURITY: Never stores actual files, only status metadata.
 */

export type KycStatus = "missing" | "pending" | "approved" | "rejected"
export type KycDocKey = "passport" | "license" | "selfie"

export interface KycDocState {
    provided: boolean
    status: KycStatus
    updatedAt: string
    reason?: string // Rejection reason
}

export interface KycState {
    passport: KycDocState
    license: KycDocState
    selfie: KycDocState
    submittedAt?: string
    version: 1
}

const KYC_STORAGE_KEY = "emd_kyc_v1"

/**
 * Load KYC state from localStorage (SSR-safe)
 */
export function loadKycState(): KycState | null {
    if (typeof window === "undefined") return null

    try {
        const stored = localStorage.getItem(KYC_STORAGE_KEY)
        if (!stored) return null

        const parsed = JSON.parse(stored) as KycState

        // Validate version
        if (parsed.version !== 1) {
            console.warn("[KYC] Invalid version, clearing state")
            clearKycState()
            return null
        }

        return parsed
    } catch (error) {
        console.warn("[KYC] Failed to load state:", error)
        return null
    }
}

/**
 * Save KYC state to localStorage (SSR-safe)
 */
export function saveKycState(state: KycState): void {
    if (typeof window === "undefined") return

    try {
        localStorage.setItem(KYC_STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
        console.warn("[KYC] Failed to save state:", error)
    }
}

/**
 * Clear KYC state from localStorage (SSR-safe)
 */
export function clearKycState(): void {
    if (typeof window === "undefined") return

    try {
        localStorage.removeItem(KYC_STORAGE_KEY)
    } catch (error) {
        console.warn("[KYC] Failed to clear state:", error)
    }
}

/**
 * Initialize KYC state with pending status for all documents
 * Called after successful signup with all 3 documents uploaded
 */
export function initKycPending(): void {
    if (typeof window === "undefined") return

    try {
        const now = new Date().toISOString()

        const state: KycState = {
            passport: {
                provided: true,
                status: "pending",
                updatedAt: now,
            },
            license: {
                provided: true,
                status: "pending",
                updatedAt: now,
            },
            selfie: {
                provided: true,
                status: "pending",
                updatedAt: now,
            },
            submittedAt: now,
            version: 1,
        }

        saveKycState(state)
    } catch (error) {
        console.warn("[KYC] Failed to initialize pending state:", error)
    }
}
