"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getSession, clearSession } from "@/lib/authSession"
import { loadReservationDraft, saveReservationDraft, clearReservationDraft } from "@/lib/reservationDraft"
import { loadKycState, clearKycState } from "@/lib/kyc"

export default function DevFlowPage() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [sessionStatus, setSessionStatus] = useState<string>("Chargement...")
    const [draftStatus, setDraftStatus] = useState<string>("Chargement...")
    const [kycStatus, setKycStatus] = useState<string>("Chargement...")
    const [lastAction, setLastAction] = useState<string>("")

    // DEV-only check
    const isDev = process.env.NODE_ENV === "development"

    useEffect(() => {
        setMounted(true)
        refreshState()
    }, [])

    const refreshState = () => {
        // Check session
        const session = getSession()
        setSessionStatus(session ? `✅ Connecté (${session.email})` : "❌ Non connecté")

        // Check draft
        const draft = loadReservationDraft()
        if (draft) {
            const params = Object.entries(draft)
                .filter(([k]) => k !== "version" && k !== "createdAt")
                .filter(([, v]) => v !== undefined)
            setDraftStatus(`✅ Présent (${params.length} params)`)
        } else {
            setDraftStatus("❌ Absent")
        }

        // Check KYC
        const kyc = loadKycState()
        setKycStatus(kyc ? "✅ Présent" : "❌ Absent")
    }

    const handleSeedDraft = () => {
        saveReservationDraft({
            vehicleId: "demo-123",
            pickupWilaya: "Alger",
            pickupPlace: "Hydra",
            pickupDate: "2025-12-26",
            pickupTime: "10:00",
            returnDate: "2025-12-29",
            returnTime: "10:00",
        })
        setLastAction("✅ Draft créé avec succès")
        refreshState()
        setTimeout(() => setLastAction(""), 3000)
    }

    const handleClearDraft = () => {
        clearReservationDraft()
        setLastAction("✅ Draft supprimé")
        refreshState()
        setTimeout(() => setLastAction(""), 3000)
    }

    const handleClearSession = () => {
        clearSession()
        setLastAction("✅ Session supprimée (+ KYC + Draft)")
        refreshState()
        setTimeout(() => setLastAction(""), 3000)
    }

    const handleClearKyc = () => {
        clearKycState()
        setLastAction("✅ KYC supprimé")
        refreshState()
        setTimeout(() => setLastAction(""), 3000)
    }

    if (!mounted) {
        return (
            <div className="container-emd py-16">
                <p className="text-muted">Chargement...</p>
            </div>
        )
    }

    if (!isDev) {
        return (
            <div className="container-emd py-16">
                <div className="card-soft p-8 max-w-2xl mx-auto text-center">
                    <h1 className="text-2xl font-semibold text-text mb-4">
                        Page DEV uniquement
                    </h1>
                    <p className="text-muted mb-6">
                        Cette page est disponible uniquement en mode développement.
                    </p>
                    <Link href="/" className="btn-primary">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container-emd py-16 sm:py-20">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <span className="badge-muted">DEV TOOL</span>
                    <h1 className="text-3xl font-semibold text-text mt-4">
                        Flow Auth — Test Tool
                    </h1>
                    <p className="text-muted mt-2">
                        Outil de test pour valider le flow E2E (P4.1–P4.3)
                    </p>
                </div>

                {/* Last Action */}
                {lastAction && (
                    <div className="card-soft p-4 border-l-4 border-brand" role="status" aria-live="polite">
                        <p className="text-sm text-brand font-medium">{lastAction}</p>
                    </div>
                )}

                {/* A) État actuel */}
                <div className="card p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-text">État actuel</h2>
                        <button onClick={refreshState} className="btn-ghost text-sm">
                            🔄 Rafraîchir
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-border">
                            <span className="text-sm font-medium text-text">Session</span>
                            <span className="text-sm text-muted">{sessionStatus}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                            <span className="text-sm font-medium text-text">Draft Réservation</span>
                            <span className="text-sm text-muted">{draftStatus}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm font-medium text-text">KYC State</span>
                            <span className="text-sm text-muted">{kycStatus}</span>
                        </div>
                    </div>

                    {/* Draft Preview */}
                    {loadReservationDraft() && (
                        <details className="mt-4">
                            <summary className="text-sm text-brand cursor-pointer hover:underline">
                                Voir JSON Draft (sanitisé)
                            </summary>
                            <pre className="mt-2 p-4 bg-bg rounded text-xs text-muted overflow-x-auto">
                                {JSON.stringify(loadReservationDraft(), null, 2)}
                            </pre>
                        </details>
                    )}
                </div>

                {/* B) Actions rapides */}
                <div className="card p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-text">Actions rapides</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={handleSeedDraft} className="btn-primary">
                            🌱 Seed Draft (démo)
                        </button>
                        <button onClick={handleClearDraft} className="btn-secondary">
                            🗑️ Clear Draft
                        </button>
                        <button onClick={handleClearSession} className="btn-secondary">
                            🚪 Clear Session
                        </button>
                        <button onClick={handleClearKyc} className="btn-secondary">
                            📋 Clear KYC
                        </button>
                    </div>

                    <p className="text-xs text-muted">
                        Note : &quot;Clear Session&quot; purge aussi le draft et le KYC (comportement logout)
                    </p>
                </div>

                {/* C) Lanceurs de scénarios */}
                <div className="card p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-text">Lanceurs de scénarios</h2>

                    <div className="space-y-3">
                        {/* S1 */}
                        <div className="card-soft p-4 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-text">S1 — /reservation (sans query)</p>
                                    <p className="text-xs text-muted mt-1">
                                        Attendu : redirect login, pas de draft
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push("/reservation")}
                                    className="btn-primary text-sm shrink-0"
                                >
                                    Lancer
                                </button>
                            </div>
                            <code className="text-xs text-muted block mt-2">/reservation</code>
                        </div>

                        {/* S2 */}
                        <div className="card-soft p-4 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-text">
                                        S2 — /reservation (avec contexte)
                                    </p>
                                    <p className="text-xs text-muted mt-1">
                                        Attendu : draft créé, redirect, restore après login
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        router.push(
                                            "/reservation?vehicleId=1&pickupWilaya=Alger&pickupPlace=Hydra&pickupDate=2025-12-26&pickupTime=10:00&returnDate=2025-12-29&returnTime=10:00"
                                        )
                                    }
                                    className="btn-primary text-sm shrink-0"
                                >
                                    Lancer
                                </button>
                            </div>
                            <code className="text-xs text-muted block mt-2 break-all">
                                /reservation?vehicleId=1&pickupWilaya=Alger&pickupPlace=Hydra&...
                            </code>
                        </div>

                        {/* S3 */}
                        <div className="card-soft p-4 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-text">
                                        S3 — Open redirect (malicious)
                                    </p>
                                    <p className="text-xs text-muted mt-1">
                                        Attendu : sanitize bloque, redirect vers /
                                    </p>
                                </div>
                                <button
                                    onClick={() => router.push("/auth/login?returnTo=https://evil.com")}
                                    className="btn-primary text-sm shrink-0"
                                >
                                    Lancer
                                </button>
                            </div>
                            <code className="text-xs text-muted block mt-2">
                                /auth/login?returnTo=https://evil.com
                            </code>
                        </div>

                        {/* S4 */}
                        <div className="card-soft p-4 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-text">
                                        S4 — Draft présent, pas de returnTo
                                    </p>
                                    <p className="text-xs text-muted mt-1">
                                        Attendu : redirect &quot;/&quot;, no crash, draft non purgé
                                    </p>
                                </div>
                                <button onClick={() => router.push("/auth/login")} className="btn-primary text-sm shrink-0">
                                    Lancer
                                </button>
                            </div>
                            <code className="text-xs text-muted block mt-2">/auth/login</code>
                            <p className="text-xs text-muted mt-2">
                                Astuce : Seed draft d&apos;abord via &quot;Actions rapides&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* D) Résultats attendus */}
                <details className="card p-6">
                    <summary className="text-xl font-semibold text-text cursor-pointer">
                        Résultats attendus (S1-S8)
                    </summary>

                    <div className="mt-4 space-y-4 text-sm">
                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S1 — Pas de query</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>Redirect vers /auth/login?returnTo=%2Freservation</li>
                                <li>Draft NON créé (pas de contexte)</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S2 — Avec contexte complet</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>Draft créé en localStorage</li>
                                <li>Redirect login avec returnTo encodé</li>
                                <li>Après login → retour /reservation avec params</li>
                                <li>Draft purgé</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S3 — Open redirect protection</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>sanitizeReturnTo() bloque https://evil.com</li>
                                <li>Redirect vers / (fallback)</li>
                                <li>PAS de redirection externe</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S4 — Draft sans returnTo</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>Redirect vers / (fallback)</li>
                                <li>No crash console</li>
                                <li>Draft non purgé (route &quot;/&quot; pas pertinente)</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S5 — Draft partiel (hasUsefulData=false)</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>saveReservationDraft détecte hasUsefulData = false</li>
                                <li>Draft NON créé</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S6 — Logout purge complète</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>Session supprimée</li>
                                <li>KYC supprimé</li>
                                <li>Draft supprimé</li>
                                <li>Aucun résidu</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S7 — Signup = Login</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>Même comportement que S2</li>
                                <li>Micro-copy différente</li>
                            </ul>
                        </div>

                        <div className="card-soft p-4">
                            <p className="font-medium text-text">S8 — Multi-user isolation</p>
                            <ul className="list-disc list-inside text-muted mt-2 space-y-1">
                                <li>User A logout → tout purgé</li>
                                <li>User B démarre propre</li>
                            </ul>
                        </div>
                    </div>
                </details>

                {/* Footer */}
                <div className="text-center">
                    <p className="text-xs text-muted">
                        Page DEV-only — Available uniquement en NODE_ENV=development
                    </p>
                </div>
            </div>
        </div>
    )
}
