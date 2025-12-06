"use client"

import { useState, useEffect } from "react"
import { SearchBar } from "@/features/search/components/SearchBar"
import { VehicleCard } from "@/features/vehicle/components/VehicleCard"
import { mockVehicles, Vehicle } from "@/data/mockVehicles"
import { Skeleton } from "@/components/ui/Skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"

export default function SearchPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    useEffect(() => {
        // Simulate API latency
        const timer = setTimeout(() => {
            setVehicles(mockVehicles)
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Search Section */}
            <section className="bg-brand-surface border-b border-brand-border py-8 shadow-sm relative z-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-brand-text mb-2">Résultats de votre recherche</h1>
                    <p className="text-brand-textMuted mb-6">Trouvez la voiture idéale pour votre prochain déplacement.</p>
                    <div className="max-w-4xl">
                        <SearchBar />
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="flex-1 bg-brand-background py-12">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className="aspect-[4/3] bg-brand-accentSoft/30 animate-pulse" />
                                    <CardHeader className="p-4 space-y-2">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="flex gap-2">
                                            <Skeleton className="h-5 w-16" />
                                            <Skeleton className="h-5 w-16" />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-4 border-t border-brand-border/50 flex justify-between">
                                        <Skeleton className="h-8 w-24" />
                                        <Skeleton className="h-9 w-24" />
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : vehicles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vehicles.map((vehicle) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="w-16 h-16 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center mx-auto mb-4 text-brand-textMuted">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-brand-text mb-2">Aucun véhicule trouvé</h3>
                            <p className="text-brand-textMuted max-w-sm mx-auto">
                                Essayez de modifier vos critères de recherche ou réessayez plus tard.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
