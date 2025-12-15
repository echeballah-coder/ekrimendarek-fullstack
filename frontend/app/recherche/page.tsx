"use client"

import { SearchBar } from "@/features/search/components/SearchBar"
import { VehicleCard } from "@/features/vehicle/components/VehicleCard"
import { mockVehicles } from "@/data/mockVehicles"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { AnimatedList, AnimatedItem } from "@/components/animations/AnimatedList"

export default function SearchPage() {
    // Load vehicles immediately (no artificial delay)
    const vehicles = mockVehicles

    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Search Section */}
            <AnimatedSection className="bg-brand-surface border-b border-brand-border py-8 shadow-sm relative z-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-brand-text mb-2">Résultats de votre recherche</h1>
                    <p className="text-brand-textMuted mb-6">Trouvez la voiture idéale pour votre prochain déplacement.</p>
                    <div className="max-w-4xl">
                        <SearchBar />
                    </div>
                </div>
            </AnimatedSection>

            {/* Results Grid */}
            <section className="flex-1 bg-brand-background py-12">
                <div className="container mx-auto px-4">
                    {vehicles.length > 0 ? (
                        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vehicles.map((vehicle) => (
                                <AnimatedItem key={vehicle.id}>
                                    <VehicleCard vehicle={vehicle} />
                                </AnimatedItem>
                            ))}
                        </AnimatedList>
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
