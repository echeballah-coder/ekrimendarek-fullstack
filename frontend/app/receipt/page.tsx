"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

interface FormData {
    reservationNumber: string
    lastName: string
    email: string
}

export default function ReceiptPage() {
    const [formData, setFormData] = useState<FormData>({
        reservationNumber: "",
        lastName: "",
        email: "",
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const maskEmail = (email: string): string => {
        const [local, domain] = email.split("@")
        if (!local || !domain) return email

        const visibleChars = Math.min(1, local.length)
        const masked = local.charAt(0) + "*".repeat(Math.max(3, local.length - 1))
        return `${masked}@${domain}`
    }

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {}

        if (!formData.reservationNumber || formData.reservationNumber.trim().length < 6) {
            newErrors.reservationNumber = "Le numéro de réservation doit contenir au moins 6 caractères."
        }

        if (!formData.lastName || formData.lastName.trim().length < 2) {
            newErrors.lastName = "Le nom de famille doit contenir au moins 2 caractères."
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Une adresse email valide est requise."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setErrorMessage("")

        if (!validateForm()) {
            return
        }

        setState("loading")

        // Simulate loading
        const delay = 500 + Math.random() * 400
        await new Promise((resolve) => setTimeout(resolve, delay))

        // Simulate errors
        if (formData.reservationNumber.includes("000")) {
            setState("error")
            setErrorMessage("Référence introuvable (démo)")
            return
        }

        if (formData.email.toLowerCase().includes("fail")) {
            setState("error")
            setErrorMessage("Impossible de générer le reçu (démo)")
            return
        }

        setState("success")
    }

    const handleReset = () => {
        setFormData({
            reservationNumber: "",
            lastName: "",
            email: "",
        })
        setErrors({})
        setState("idle")
        setErrorMessage("")
    }

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[field]
                return newErrors
            })
        }
    }

    const getCurrentDate = (): string => {
        return new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Reçu</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Obtenir un reçu
                </h1>
                <p className="text-muted max-w-2xl">
                    Téléchargez un reçu pour vos dossiers. En mode démo, l&apos;aperçu est indicatif.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href={ROUTES.RESERVATION_MANAGE}>
                    <Button variant="secondary">Gérer une réservation</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="ghost">Contact</Button>
                </Link>
            </div>

            {/* Form */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Informations de réservation</h2>

                {state === "error" && (
                    <div className="card-soft p-4 border-l-4 border-danger" role="alert" aria-live="polite">
                        <p className="text-sm text-danger font-medium">{errorMessage}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Reservation Number */}
                    <div className="space-y-2">
                        <label htmlFor="reservationNumber" className="block text-sm font-medium text-text">
                            Numéro de réservation <span className="text-danger">*</span>
                        </label>
                        <input
                            id="reservationNumber"
                            type="text"
                            value={formData.reservationNumber}
                            onChange={handleChange("reservationNumber")}
                            className={`input w-full ${errors.reservationNumber ? "input-error" : ""}`}
                            placeholder="EMD-2025-000123"
                            disabled={state === "loading"}
                        />
                        {errors.reservationNumber && (
                            <p className="error-text">{errors.reservationNumber}</p>
                        )}
                        <p className="help-text">
                            Astuce : utilisez &quot;000&quot; dans le numéro pour simuler une erreur.
                        </p>
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-text">
                            Nom de famille <span className="text-danger">*</span>
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange("lastName")}
                            className={`input w-full ${errors.lastName ? "input-error" : ""}`}
                            placeholder="Benali"
                            disabled={state === "loading"}
                        />
                        {errors.lastName && (
                            <p className="error-text">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text">
                            Email <span className="text-danger">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange("email")}
                            className={`input w-full ${errors.email ? "input-error" : ""}`}
                            placeholder="nom@email.com"
                            disabled={state === "loading"}
                        />
                        {errors.email && (
                            <p className="error-text">{errors.email}</p>
                        )}
                        <p className="help-text">
                            Astuce : utilisez &quot;fail&quot; dans l&apos;email pour simuler une erreur.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={state === "loading"}
                        >
                            {state === "loading" ? (
                                <span className="flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Génération…
                                </span>
                            ) : (
                                "Afficher le reçu"
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleReset}
                            disabled={state === "loading"}
                        >
                            Réinitialiser
                        </Button>
                    </div>
                </form>
            </div>

            {/* Receipt Preview */}
            {state === "success" && (
                <div className="card p-6 space-y-6" role="region" aria-live="polite">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
                        <div>
                            <h2 className="text-xl font-semibold text-text">Reçu (démo)</h2>
                            <p className="text-sm text-muted mt-1">
                                Aperçu de votre reçu de réservation
                            </p>
                        </div>
                        <span className="badge-brand">Généré</span>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Référence</p>
                            <p className="text-sm font-medium text-text">{formData.reservationNumber}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Nom</p>
                            <p className="text-sm font-medium text-text">{formData.lastName}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Email (masqué)</p>
                            <p className="text-sm font-medium text-text">{maskEmail(formData.email)}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Date d&apos;émission</p>
                            <p className="text-sm font-medium text-text">{getCurrentDate()}</p>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-base font-semibold text-text">Détails de la location</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Véhicule</p>
                                <p className="text-sm text-text">Compacte — Volkswagen Golf 8</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Période</p>
                                <p className="text-sm text-text">3 jours</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Tarif/jour</p>
                                <p className="text-sm text-text">4 900 DA</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Acompte 5%</p>
                                <p className="text-sm text-brand font-medium">735 DA</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Solde à payer en agence</p>
                                <p className="text-sm text-text">13 965 DA</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Total estimé</p>
                                <p className="text-base font-semibold text-text">14 700 DA</p>
                            </div>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            ℹ️ Mode démo : le reçu officiel sera disponible après paiement et validation.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                        <button className="btn-primary" disabled>
                            Télécharger PDF (bientôt)
                        </button>
                        <button
                            className="btn-ghost"
                            onClick={() => window.print()}
                        >
                            Imprimer
                        </button>
                    </div>
                </div>
            )}

            {/* Help Section */}
            <div className="card-soft p-6 space-y-3">
                <h2 className="text-base font-semibold text-text">Besoin d&apos;aide ?</h2>
                <p className="text-sm text-muted">
                    Si vous rencontrez un problème ou avez des questions sur votre réservation, nous sommes là pour vous aider.
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link href="/aide#reservations" className="link">
                        Consulter l&apos;aide réservations
                    </Link>
                    <span className="text-muted">•</span>
                    <Link href="/contact" className="link">
                        Contacter le support
                    </Link>
                </div>
            </div>

            {/* Footer Mode Demo */}
            <p className="text-xs text-muted text-center">
                Mode démo : la génération de reçus sera activée lors de l&apos;intégration backend.
            </p>
        </div>
    )
}
