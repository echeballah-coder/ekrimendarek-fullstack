"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { mockVehicles } from "@/data/mockVehicles"
import { Button, buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import Link from "next/link"
import { cn } from "@/lib/utils"

function ReservationContent() {
    const searchParams = useSearchParams()
    const vehicleId = searchParams.get("vehicleId")
    const vehicle = mockVehicles.find((v) => v.id === vehicleId)

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isPaying, setIsPaying] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Calculations
    const start = startDate ? new Date(startDate) : null
    const end = endDate ? new Date(endDate) : null

    let days = 0
    if (start && end) {
        const diffTime = Math.abs(end.getTime() - start.getTime())
        days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        if (days === 0) days = 1 // Minimum 1 day
    }

    const pricePerDay = vehicle ? vehicle.pricePerDay : 0
    const total = days * pricePerDay
    const deposit = Math.round(total * 0.15)
    const remaining = total - deposit

    const handlePaymentSimulation = () => {
        setIsPaying(true)
        setTimeout(() => {
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
                    <CardFooter className="justify-center">
                        <Link
                            href="/recherche"
                            className={cn(buttonBaseStyles, buttonVariants.outline, buttonSizes.md)}
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Details & Dates */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Véhicule sélectionné</CardTitle>
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
                                        <span>Acompte à payer (15%)</span>
                                        <span>{deposit > 0 ? `${deposit.toLocaleString()} DA` : "-"}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-brand-textMuted">
                                        <span>Reste à payer sur place</span>
                                        <span>{remaining > 0 ? `${remaining.toLocaleString()} DA` : "-"}</span>
                                    </div>
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
                                    {isPaying ? "Traitement..." : "Simuler le paiement de l'acompte"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ReservationPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
            <ReservationContent />
        </Suspense>
    )
}
