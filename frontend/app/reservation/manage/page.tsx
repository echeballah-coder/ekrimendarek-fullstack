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

interface ReservationData {
    reference: string
    lastName: string
    email: string
    status: "Confirmée" | "Annulée"
    vehicle: string
    agency: string
    days: number
    deposit: string
    balance: string
    total: string
}

export default function ManageReservationPage() {
    const [formData, setFormData] = useState<FormData>({
        reservationNumber: "",
        lastName: "",
        email: "",
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [state, setState] = useState<"idle" | "loading" | "success" | "notFound" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")
    const [reservation, setReservation] = useState<ReservationData | null>(null)

    const maskEmail = (email: string): string => {
        const [local, domain] = email.split("@")
        if (!local || !domain) return email

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
        const delay = 600 + Math.random() * 400
        await new Promise((resolve) => setTimeout(resolve, delay))

        // Simulate not found
        if (formData.reservationNumber.includes("000")) {
            setState("notFound")
            setErrorMessage("Référence introuvable (démo).")
            return
        }

        // Simulate error
        if (formData.email.toLowerCase().includes("fail")) {
            setState("error")
            setErrorMessage("Impossible de charger la réservation (démo).")
            return
        }

        // Success - create mock reservation
        setReservation({
            reference: formData.reservationNumber,
            lastName: formData.lastName,
            email: formData.email,
            status: "Confirmée",
            vehicle: "Compacte — Volkswagen Golf 8",
            agency: "Agence Alger Centre",
            days: 3,
            deposit: "735 DA",
            balance: "13 965 DA",
            total: "14 700 DA",
        })

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
        setReservation(null)
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

    const handleCancel = () => {
        if (!reservation) return

        const confirmed = window.confirm(
            "Êtes-vous sûr de vouloir annuler cette réservation ? (Mode démo)"
        )

        if (confirmed) {
            setReservation({
                ...reservation,
                status: "Annulée",
            })
        }
    }

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Self-service</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Gérer une réservation
                </h1>
                <p className="text-muted max-w-2xl">
                    Modifiez ou annulez une réservation existante. En mode démo, les résultats sont indicatifs.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href={ROUTES.RECEIPT}>
                    <Button variant="secondary">Obtenir un reçu</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="ghost">Contact</Button>
                </Link>
            </div>

            {/* Search Form */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Rechercher une réservation</h2>

                {(state === "notFound" || state === "error") && (
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
                            Astuce démo : &quot;000&quot; → introuvable.
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
                            Astuce démo : &quot;fail&quot; → erreur technique.
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
                                    Recherche…
                                </span>
                            ) : (
                                "Rechercher"
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

            {/* Reservation Details */}
            {state === "success" && reservation && (
                <div className="card p-6 space-y-6" role="region" aria-live="polite">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
                        <div>
                            <h2 className="text-xl font-semibold text-text">Réservation (démo)</h2>
                            <p className="text-sm text-muted mt-1">
                                Détails de votre réservation
                            </p>
                        </div>
                        <span className={reservation.status === "Confirmée" ? "badge-brand" : "badge-danger"}>
                            {reservation.status}
                        </span>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Référence</p>
                            <p className="text-sm font-medium text-text">{reservation.reference}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Nom</p>
                            <p className="text-sm font-medium text-text">{reservation.lastName}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Email (masqué)</p>
                            <p className="text-sm font-medium text-text">{maskEmail(reservation.email)}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted">Statut</p>
                            <p className="text-sm font-medium text-text">{reservation.status}</p>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-base font-semibold text-text">Détails de la location</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Véhicule</p>
                                <p className="text-sm text-text">{reservation.vehicle}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Agence de retrait</p>
                                <p className="text-sm text-text">{reservation.agency}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Durée</p>
                                <p className="text-sm text-text">{reservation.days} jours</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Acompte 5%</p>
                                <p className="text-sm text-brand font-medium">{reservation.deposit}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Solde en agence</p>
                                <p className="text-sm text-text">{reservation.balance}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted">Total estimé</p>
                                <p className="text-base font-semibold text-text">{reservation.total}</p>
                            </div>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            ℹ️ Mode démo : la modification/annulation réelle sera activée via backend.
                        </p>
                    </div>

                    {/* Cancellation Note (if cancelled) */}
                    {reservation.status === "Annulée" && (
                        <div className="card-soft p-4 border-l-4 border-danger">
                            <p className="text-sm text-text font-medium">
                                ✓ Annulation enregistrée (démo). Conditions réelles selon l&apos;agence.
                            </p>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                        <button className="btn-secondary" disabled>
                            Modifier dates (bientôt)
                        </button>
                        {reservation.status === "Confirmée" && (
                            <button className="btn-ghost" onClick={handleCancel}>
                                Annuler la réservation (démo)
                            </button>
                        )}
                        <Link href={ROUTES.RECEIPT}>
                            <Button variant="primary">Obtenir un reçu</Button>
                        </Link>
                    </div>
                </div>
            )}

            {/* Help Section */}
            <div className="card-soft p-6 space-y-3">
                <h2 className="text-base font-semibold text-text">Besoin d&apos;aide ?</h2>
                <p className="text-sm text-muted">
                    Si vous rencontrez un problème avec votre réservation, consultez notre aide ou contactez-nous.
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
                Mode démo : la gestion de réservation sera connectée au backend (recherche, modification, annulation, reçu PDF).
            </p>
        </div>
    )
}
