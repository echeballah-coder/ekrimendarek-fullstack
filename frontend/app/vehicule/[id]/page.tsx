"use client"

import { useParams } from "next/navigation"
import { mockVehicles } from "@/data/mockVehicles"
import { Button, buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import Link from "next/link"

export default function VehicleDetailPage() {
    const params = useParams()
    const vehicle = mockVehicles.find((v) => v.id === params.id)

    if (!vehicle) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-3xl font-bold text-brand-text mb-4">Véhicule non trouvé</h1>
                <p className="text-brand-textMuted mb-8">Le véhicule que vous cherchez n&apos;existe pas ou a été retiré.</p>
                <Link
                    href="/recherche"
                    className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
                >
                    Retour à la recherche
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand-background py-8">
            <div className="container mx-auto px-4">
                {/* Header Breadcrumb-ish */}
                <div className="mb-6">
                    <Link href="/recherche" className="text-sm text-brand-textMuted hover:text-brand-accent mb-4 inline-block">
                        &larr; Retour aux résultats
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-brand-text">{vehicle.title}</h1>
                            <div className="flex items-center gap-2 mt-2 text-brand-textMuted">
                                <span>{vehicle.location}</span>
                                {vehicle.isVerified && (
                                    <Badge variant="success" className="text-xs">Agence vérifiée</Badge>
                                )}
                            </div>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-2xl font-bold text-brand-accent">{vehicle.pricePerDay} DA <span className="text-sm font-normal text-brand-textMuted">/jour</span></p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Gallery */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-brand-surface border border-brand-border flex items-center justify-center relative">
                            {/* Placeholder for real image */}
                            <div className="absolute inset-0 bg-brand-accentSoft/20" />
                            <span className="text-brand-textMuted text-lg relative z-10">Image du véhicule ({vehicle.title})</span>
                        </div>

                        {/* Description / Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Caractéristiques</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="p-3 bg-brand-background rounded-lg text-center border border-brand-border">
                                    <span className="block text-xs text-brand-textMuted mb-1">Boîte</span>
                                    <span className="font-medium text-brand-text">{vehicle.gearbox}</span>
                                </div>
                                <div className="p-3 bg-brand-background rounded-lg text-center border border-brand-border">
                                    <span className="block text-xs text-brand-textMuted mb-1">Carburant</span>
                                    <span className="font-medium text-brand-text">{vehicle.fuel}</span>
                                </div>
                                <div className="p-3 bg-brand-background rounded-lg text-center border border-brand-border">
                                    <span className="block text-xs text-brand-textMuted mb-1">Places</span>
                                    <span className="font-medium text-brand-text">5</span>
                                </div>
                                <div className="p-3 bg-brand-background rounded-lg text-center border border-brand-border">
                                    <span className="block text-xs text-brand-textMuted mb-1">Note</span>
                                    <span className="font-medium text-brand-text">{vehicle.rating} / 5</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Conditions Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Conditions de location</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-brand-text">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Âge minimum : 21 ans</li>
                                    <li>Permis de conduire : Validité depuis au moins 2 ans</li>
                                    <li>Kilométrage : Illimité dans la wilaya, 200km/j hors wilaya</li>
                                    <li>Caution : Chèque certifié ou empreinte bancaire (bientôt disponible)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Booking Card (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="shadow-lg border-brand-accent/20">
                                <CardContent className="p-6 space-y-6">
                                    <div className="md:hidden border-b border-brand-border pb-4">
                                        <p className="text-3xl font-bold text-brand-accent text-center">{vehicle.pricePerDay} DA <span className="text-sm font-normal text-brand-textMuted">/jour</span></p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-brand-text">Dates de location</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="p-2 border border-brand-border rounded-md bg-brand-background text-sm text-brand-textMuted text-center">Début</div>
                                            <div className="p-2 border border-brand-border rounded-md bg-brand-background text-sm text-brand-textMuted text-center">Fin</div>
                                        </div>
                                    </div>

                                    <div className="pt-4 space-y-3">
                                        <Button className="w-full" size="lg" variant="primary">
                                            Réserver ce véhicule
                                        </Button>
                                        <p className="text-xs text-center text-brand-textMuted">
                                            Aucun débit immédiat. Acompte sécurisé requis.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
