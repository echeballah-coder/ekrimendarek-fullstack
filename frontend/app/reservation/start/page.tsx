"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

const WILAYAS_DATA: Record<string, string[]> = {
    Alger: ["Alger Centre", "Hydra", "Aéroport Houari Boumediene", "Bab Ezzouar"],
    Oran: ["Oran Centre", "Es Sénia", "Aéroport Ahmed Ben Bella"],
    Constantine: ["Constantine Centre", "El Khroub"],
    Annaba: ["Annaba Centre", "El Hadjar"],
    Blida: ["Blida Centre", "Boufarik"],
    "Tizi Ouzou": ["Tizi Ouzou Centre", "Azazga"],
    Sétif: ["Sétif Centre", "El Eulma"],
    Béjaïa: ["Béjaïa Centre", "Akbou"],
    Ouargla: ["Ouargla Centre", "Touggourt"],
    Batna: ["Batna Centre", "Barika"],
}

const TIME_OPTIONS = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"]
const AGE_OPTIONS = ["21–24 ans", "25–29 ans", "30–59 ans", "60+ ans"]
const VEHICLE_CLASSES = ["Tous", "Citadine", "Compacte", "Berline", "SUV", "Familiale", "Utilitaire"]

export default function ReservationStartPage() {
    const router = useRouter()

    // Location
    const [pickupWilaya, setPickupWilaya] = useState("")
    const [pickupPlace, setPickupPlace] = useState("")
    const [returnDifferent, setReturnDifferent] = useState(false)
    const [returnWilaya, setReturnWilaya] = useState("")
    const [returnPlace, setReturnPlace] = useState("")

    // Dates
    const [pickupDate, setPickupDate] = useState("")
    const [pickupTime, setPickupTime] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [returnTime, setReturnTime] = useState("")

    // Options
    const [ageGroup, setAgeGroup] = useState("")
    const [vehicleClass, setVehicleClass] = useState("Tous")

    // UI States
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const pickupPlaces = useMemo(() => pickupWilaya ? WILAYAS_DATA[pickupWilaya] || [] : [], [pickupWilaya])
    const returnPlaces = useMemo(() => returnWilaya ? WILAYAS_DATA[returnWilaya] || [] : [], [returnWilaya])

    const showDatesSection = useMemo(() => {
        return !!pickupWilaya && !!pickupPlace
    }, [pickupWilaya, pickupPlace])

    const showOptionsSection = useMemo(() => {
        return showDatesSection && !!pickupDate && !!pickupTime && !!returnDate && !!returnTime
    }, [showDatesSection, pickupDate, pickupTime, returnDate, returnTime])

    const canSubmit = useMemo(() => {
        const baseValid = pickupWilaya && pickupPlace && pickupDate && pickupTime && returnDate && returnTime
        const returnValid = !returnDifferent || (returnWilaya && returnPlace)
        return baseValid && returnValid && !isSubmitting
    }, [pickupWilaya, pickupPlace, pickupDate, pickupTime, returnDate, returnTime, returnDifferent, returnWilaya, returnPlace, isSubmitting])

    const validateDates = (): boolean => {
        const newErrors: Record<string, string> = {}

        if (!pickupDate) {
            newErrors.pickupDate = "La date de retrait est requise."
        }
        if (!returnDate) {
            newErrors.returnDate = "La date de retour est requise."
        }

        if (pickupDate && returnDate) {
            const pickup = new Date(pickupDate)
            const returnD = new Date(returnDate)

            if (returnD < pickup) {
                newErrors.returnDate = "La date de retour doit être après la date de retrait."
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!canSubmit) return

        if (!validateDates()) return

        setIsSubmitting(true)

        // Simulate loading
        const delay = 500 + Math.random() * 400
        await new Promise((resolve) => setTimeout(resolve, delay))

        // Build query params
        const params = new URLSearchParams({
            pickupWilaya,
            pickupPlace,
            returnDifferent: returnDifferent ? "1" : "0",
            ...(returnDifferent && { returnWilaya, returnPlace }),
            pickupDate,
            pickupTime,
            returnDate,
            returnTime,
            ageGroup: ageGroup || "25–29 ans",
            vehicleClass,
        })

        router.push(`${ROUTES.SEARCH}?${params.toString()}`)
    }

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Réservation</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Commencer une réservation
                </h1>
                <p className="text-muted max-w-2xl">
                    Choisissez votre lieu de retrait, vos dates, et parcourez notre sélection de véhicules. Simple, rapide, transparent.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.SEARCH}>
                    <Button variant="primary">Aller à la recherche</Button>
                </Link>
                <Link href={ROUTES.RESERVATION_MANAGE}>
                    <Button variant="secondary">Gérer une réservation</Button>
                </Link>
                <Link href={ROUTES.LOCATIONS}>
                    <Button variant="ghost">Trouver une agence</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
            </div>

            {/* Main Reservation Module */}
            <div className="card p-6 space-y-6">
                <h2 className="text-lg font-semibold text-text">Informations de réservation</h2>

                {/* A) Pickup Location */}
                <div className="space-y-4">
                    <h3 className="text-base font-medium text-text">Lieu de retrait</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="pickupWilaya" className="block text-sm font-medium text-text">
                                Wilaya <span className="text-danger">*</span>
                            </label>
                            <select
                                id="pickupWilaya"
                                value={pickupWilaya}
                                onChange={(e) => {
                                    setPickupWilaya(e.target.value)
                                    setPickupPlace("")
                                }}
                                className="input w-full"
                            >
                                <option value="">Sélectionnez une wilaya</option>
                                {Object.keys(WILAYAS_DATA).map((wilaya) => (
                                    <option key={wilaya} value={wilaya}>
                                        {wilaya}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="pickupPlace" className="block text-sm font-medium text-text">
                                Lieu <span className="text-danger">*</span>
                            </label>
                            <select
                                id="pickupPlace"
                                value={pickupPlace}
                                onChange={(e) => setPickupPlace(e.target.value)}
                                className="input w-full"
                                disabled={!pickupWilaya}
                            >
                                <option value="">
                                    {pickupWilaya ? "Sélectionnez un lieu" : "Choisissez d'abord une wilaya"}
                                </option>
                                {pickupPlaces.map((place) => (
                                    <option key={place} value={place}>
                                        {place}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button className="btn-ghost text-sm" disabled>
                        📍 Utiliser ma position (bientôt)
                    </button>
                    <p className="help-text">
                        La géolocalisation automatique sera disponible dans une prochaine version.
                    </p>
                </div>

                {/* B) One-way Toggle */}
                <div className="space-y-4 pt-4 border-t border-border">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={returnDifferent}
                            onChange={(e) => {
                                setReturnDifferent(e.target.checked)
                                if (!e.target.checked) {
                                    setReturnWilaya("")
                                    setReturnPlace("")
                                }
                            }}
                            className="mt-0.5"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-text">Retour dans une autre agence</p>
                            <p className="text-xs text-muted">
                                Location aller simple (frais supplémentaires possibles)
                            </p>
                        </div>
                    </label>

                    {returnDifferent && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                            <div className="space-y-2">
                                <label htmlFor="returnWilaya" className="block text-sm font-medium text-text">
                                    Wilaya de retour <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="returnWilaya"
                                    value={returnWilaya}
                                    onChange={(e) => {
                                        setReturnWilaya(e.target.value)
                                        setReturnPlace("")
                                    }}
                                    className="input w-full"
                                >
                                    <option value="">Sélectionnez une wilaya</option>
                                    {Object.keys(WILAYAS_DATA).map((wilaya) => (
                                        <option key={wilaya} value={wilaya}>
                                            {wilaya}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="returnPlace" className="block text-sm font-medium text-text">
                                    Lieu de retour <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="returnPlace"
                                    value={returnPlace}
                                    onChange={(e) => setReturnPlace(e.target.value)}
                                    className="input w-full"
                                    disabled={!returnWilaya}
                                >
                                    <option value="">
                                        {returnWilaya ? "Sélectionnez un lieu" : "Choisissez d'abord une wilaya"}
                                    </option>
                                    {returnPlaces.map((place) => (
                                        <option key={place} value={place}>
                                            {place}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* C) Dates & Times (Progressive) */}
                {showDatesSection && (
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-base font-medium text-text">Dates & heures</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="pickupDate" className="block text-sm font-medium text-text">
                                    Date de retrait <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="pickupDate"
                                    type="date"
                                    value={pickupDate}
                                    onChange={(e) => {
                                        setPickupDate(e.target.value)
                                        if (errors.pickupDate) {
                                            setErrors((prev) => {
                                                const newErrors = { ...prev }
                                                delete newErrors.pickupDate
                                                return newErrors
                                            })
                                        }
                                    }}
                                    className={`input w-full ${errors.pickupDate ? "input-error" : ""}`}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                {errors.pickupDate && (
                                    <p className="error-text">{errors.pickupDate}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="pickupTime" className="block text-sm font-medium text-text">
                                    Heure de retrait <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="pickupTime"
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                    className="input w-full"
                                >
                                    <option value="">Sélectionnez une heure</option>
                                    {TIME_OPTIONS.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="returnDate" className="block text-sm font-medium text-text">
                                    Date de retour <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="returnDate"
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => {
                                        setReturnDate(e.target.value)
                                        if (errors.returnDate) {
                                            setErrors((prev) => {
                                                const newErrors = { ...prev }
                                                delete newErrors.returnDate
                                                return newErrors
                                            })
                                        }
                                    }}
                                    className={`input w-full ${errors.returnDate ? "input-error" : ""}`}
                                    min={pickupDate || new Date().toISOString().split("T")[0]}
                                />
                                {errors.returnDate && (
                                    <p className="error-text">{errors.returnDate}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="returnTime" className="block text-sm font-medium text-text">
                                    Heure de retour <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="returnTime"
                                    value={returnTime}
                                    onChange={(e) => setReturnTime(e.target.value)}
                                    className="input w-full"
                                >
                                    <option value="">Sélectionnez une heure</option>
                                    {TIME_OPTIONS.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* D) Options (Progressive) */}
                {showOptionsSection && (
                    <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-base font-medium text-text">Options</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="ageGroup" className="block text-sm font-medium text-text">
                                    Âge du conducteur
                                </label>
                                <select
                                    id="ageGroup"
                                    value={ageGroup}
                                    onChange={(e) => setAgeGroup(e.target.value)}
                                    className="input w-full"
                                >
                                    <option value="">Sélectionnez une tranche d&apos;âge</option>
                                    {AGE_OPTIONS.map((age) => (
                                        <option key={age} value={age}>
                                            {age}
                                        </option>
                                    ))}
                                </select>
                                <p className="help-text">
                                    Peut influencer les frais d&apos;assurance
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="vehicleClass" className="block text-sm font-medium text-text">
                                    Classe de véhicule
                                </label>
                                <select
                                    id="vehicleClass"
                                    value={vehicleClass}
                                    onChange={(e) => setVehicleClass(e.target.value)}
                                    className="input w-full"
                                >
                                    {VEHICLE_CLASSES.map((vclass) => (
                                        <option key={vclass} value={vclass}>
                                            {vclass}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* E) CTA */}
                <div className="pt-4">
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="w-full"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Recherche…
                            </span>
                        ) : (
                            "Parcourir les véhicules"
                        )}
                    </Button>
                    {!canSubmit && !isSubmitting && (
                        <p className="help-text text-center mt-2" role="status" aria-live="polite">
                            Remplissez tous les champs requis pour continuer
                        </p>
                    )}
                </div>
            </div>

            {/* Conseil Card */}
            <div className="card-soft p-5 space-y-2">
                <p className="text-sm font-medium text-text">💡 Conseil</p>
                <p className="text-sm text-muted leading-relaxed">
                    Pour garantir la disponibilité, nous recommandons de réserver au moins 48h à l&apos;avance, surtout pour les périodes de forte demande (week-ends, vacances).
                </p>
            </div>

            {/* Acompte Card */}
            <div className="card-soft p-5 space-y-2">
                <p className="text-sm font-medium text-text">💳 Acompte 5%</p>
                <p className="text-sm text-muted leading-relaxed">
                    Un acompte de 5% du montant total est requis pour confirmer votre réservation. Le solde est à régler en agence lors du retrait du véhicule.
                </p>
            </div>

            {/* Footer Mode Demo */}
            <p className="text-xs text-muted text-center">
                Mode démo : la disponibilité temps réel et la confirmation finale seront activées via backend.
            </p>
        </div>
    )
}
