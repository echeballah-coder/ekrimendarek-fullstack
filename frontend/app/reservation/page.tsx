"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { mockVehicles } from "@/data/mockVehicles"
import { Button, buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { saveBooking } from "@/lib/localBookings"
import { Booking } from "@/data/mockBookings"
import { toast } from "sonner"
import { calculateDays, calculateTotal, calculateDeposit } from "@/lib/pricing"
import { getSession } from "@/lib/authSession"
import { buildReturnTo, buildLoginUrl } from "@/lib/returnTo"

function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [isChecking, setIsChecking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // Check authentication
        const session = getSession()

        if (!session) {
            // Build returnTo URL
            const search = searchParams.toString()
            const returnTo = buildReturnTo(pathname, search ? `?${search}` : "")
            const loginUrl = buildLoginUrl(returnTo)

            // Redirect to login
            router.replace(loginUrl)
        } else {
            setIsAuthenticated(true)
        }

        setIsChecking(false)
    }, [router, pathname, searchParams])

    // Show loading/redirect UI while checking or redirecting
    if (isChecking || !isAuthenticated) {
        return (
            <div className="container-emd py-16 sm:py-20">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <span className="badge-muted">Accès requis</span>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                            Connexion nécessaire
                        </h1>
                        <p className="text-muted">
                            Pour continuer votre réservation, veuillez vous connecter.
                        </p>
                    </div>

                    <div className="card-soft p-8 space-y-6">
                        <div className="w-12 h-12 mx-auto rounded-full bg-brand/10 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-brand animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        </div>

                        <p className="text-sm text-muted" role="status" aria-live="polite">
                            Redirection…
                        </p>

                        <button
                            onClick={() => {
                                const search = searchParams.toString()
                                const returnTo = buildReturnTo(pathname, search ? `?${search}` : "")
                                router.push(buildLoginUrl(returnTo))
                            }}
                            className="btn-secondary"
                        >
                            Aller à la connexion
                        </button>
                    </div>

                    <p className="text-xs text-muted">
                        Mode démo : redirection automatique vers la page de connexion
                    </p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

function ReservationContent() {
    const searchParams = useSearchParams()
    const vehicleId = searchParams.get("vehicleId")
    const vehicle = mockVehicles.find((v) => v.id === vehicleId)

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isPaying, setIsPaying] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Calculations using pricing utilities
    const days = calculateDays(startDate, endDate)
    const pricePerDay = vehicle ? vehicle.pricePerDay : 0
    const total = calculateTotal(pricePerDay, days)
    const deposit = calculateDeposit(total, 0.05) // 5% deposit rate
    const remaining = total - deposit

    const handlePaymentSimulation = () => {
        setIsPaying(true)
        setTimeout(() => {
            if (vehicle && startDate && endDate) {
                const newBooking: Booking = {
                    id: `RES-LOC-${Date.now()}`,
                    vehicleId: vehicle.id,
                    startDate: startDate,
                    endDate: endDate,
                    totalAmount: total,
                    depositAmount: deposit,
                    status: 'PENDING_PAYMENT',
                    agencyName: `Agence ${vehicle.location.split(',')[0]}`,
                };
                saveBooking(newBooking);
                toast.success("✅ Réservation confirmée ! Acompte enregistré, reste à payer en agence.");
            }
            setIsPaying(false)
            setIsSuccess(true)
        }, 1500)
    }

    if (!vehicle) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-3xl font-bold text-brand-text mb-4">Véhicule non spécifié</h1>
                <p className="text-brand-textMuted mb-8">Veuillez sélectionner un véhicule avant de procéder à la réservation.</p>
                <Link
                    href="/recherche"
                    className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
                >
                    Retour à la recherche
                </Link>
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className="container mx-auto px-4 py-24 flex justify-center">
                <Card className="max-w-md w-full bg-brand-surface border-brand-success/50">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-brand-success/20 text-brand-success w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <CardTitle className="text-2xl text-brand-text">Réservation simulée !</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-brand-textMuted">
                        <p>Votre demande pour la <strong>{vehicle.title}</strong> a bien été prise en compte (simulation).</p>
                        <p className="mt-2 text-sm">L&apos;agence reviendra vers vous pour confirmer la disponibilité.</p>
                    </CardContent>
                    <CardFooter className="justify-center flex-col gap-3">
                        <Link
                            href="/kyc"
                            className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.lg, "w-full")}
                        >
                            Compléter ma vérification d&apos;identité
                        </Link>
                        <Link
                            href="/recherche"
                            className={cn(buttonBaseStyles, buttonVariants.outline, buttonSizes.md, "w-full")}
                        >
                            Retourner aux véhicules
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand-background py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-brand-text mb-8">Finaliser votre réservation</h1>

                <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Details & Dates */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>V

                                    éhicule sélectionné</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-4">
                                <div className="w-24 h-24 bg-brand-background rounded-md flex items-center justify-center border border-brand-border shrink-0">
                                    <span className="text-xs text-brand-textMuted">Image</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-brand-text">{vehicle.title}</h3>
                                    <p className="text-brand-textMuted">{vehicle.location}</p>
                                    <p className="text-brand-accent font-medium mt-1">{vehicle.pricePerDay} DA / jour</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Dates de location</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text mb-1">Date de début</label>
                                        <Input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text mb-1">Date de fin</label>
                                        <Input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            min={startDate}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Pricing & Payment */}
                    <div>
                        <Card className="sticky top-8 border-brand-accent/20">
                            <CardHeader>
                                <CardTitle>Récapitulatif</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between text-sm text-brand-textMuted">
                                    <span>Durée</span>
                                    <span>{days > 0 ? `${days} jours` : "-"}</span>
                                </div>
                                <div className="flex justify-between text-sm text-brand-textMuted border-b border-brand-border pb-4">
                                    <span>Prix unitaire</span>
                                    <span>{vehicle.pricePerDay} DA</span>
                                </div>
                                <div className="flex justify-between font-bold text-brand-text text-lg pt-2">
                                    <span>Total estimé</span>
                                    <span>{total > 0 ? `${total.toLocaleString()} DA` : "-"}</span>
                                </div>

                                <div className="bg-brand-background p-4 rounded-lg border border-brand-border space-y-2 mt-4">
                                    <div className="flex justify-between text-brand-accent font-bold">
                                        <span>Acompte à payer (5%)</span>
                                        <span>{deposit > 0 ? `${deposit.toLocaleString()} DA` : "-"}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-brand-textMuted">
                                        <span>Reste à payer en agence</span>
                                        <span>{remaining > 0 ? `${remaining.toLocaleString()} DA` : "-"}</span>
                                    </div>
                                    <p className="text-[10px] text-brand-textMuted mt-2 italic">
                                        * L&apos;acompte garantit votre réservation. Le reste sera réglé lors de la récupération du véhicule (Espèces ou TPE si disponible).
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant="primary"
                                    size="lg"
                                    disabled={days <= 0 || !startDate || !endDate || isPaying}
                                    onClick={handlePaymentSimulation}
                                    isLoading={isPaying}
                                >
                                    {isPaying ? "Traitement CIB/Edahabia..." : "Payer l'acompte (Simulation)"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default function ReservationPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
            <AuthGuard>
                <ReservationContent />
            </AuthGuard>
        </Suspense>
    )
}
