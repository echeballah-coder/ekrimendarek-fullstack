"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"

interface Agency {
    id: number
    name: string
    wilaya: string
    city: string
    addressShort: string
    phone: string
    hours: string
    tags: string[]
    services: string[]
    isOpen: boolean
}

const agencies: Agency[] = [
    {
        id: 1,
        name: "Agence Alger Centre",
        wilaya: "Alger",
        city: "Alger-Centre",
        addressShort: "Rue Didouche Mourad, Alger",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Retrait express", "Livraison possible", "Véhicules électriques"],
        isOpen: true,
    },
    {
        id: 2,
        name: "Agence Hydra",
        wilaya: "Alger",
        city: "Hydra",
        addressShort: "Chemin El Bakri, Hydra",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Parking sécurisé", "Service premium", "Véhicules de luxe"],
        isOpen: true,
    },
    {
        id: 3,
        name: "Agence Aéroport Houari Boumediene",
        wilaya: "Alger",
        city: "Dar El Beïda",
        addressShort: "Aéroport International",
        phone: "+213 ... (à définir)",
        hours: "6:00–23:00",
        tags: ["Aéroport"],
        services: ["Service 24/7", "Retrait immédiat", "Navette gratuite"],
        isOpen: true,
    },
    {
        id: 4,
        name: "Agence Oran Aéroport",
        wilaya: "Oran",
        city: "Es Sénia",
        addressShort: "Aéroport Ahmed Ben Bella",
        phone: "+213 ... (à définir)",
        hours: "7:00–22:00",
        tags: ["Aéroport"],
        services: ["Retrait express", "Parking gratuit", "Assistance 24/7"],
        isOpen: true,
    },
    {
        id: 5,
        name: "Agence Oran Centre",
        wilaya: "Oran",
        city: "Oran",
        addressShort: "Boulevard de la Soummam",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Large choix", "Devis gratuit", "Réservation en ligne"],
        isOpen: true,
    },
    {
        id: 6,
        name: "Agence Constantine Centre",
        wilaya: "Constantine",
        city: "Constantine",
        addressShort: "Avenue Aouati Mostefa",
        phone: "+213 ... (à définir)",
        hours: "9:00–17:00",
        tags: ["Centre-ville"],
        services: ["Véhicules tout-terrain", "GPS inclus", "Assurance complète"],
        isOpen: false,
    },
    {
        id: 7,
        name: "Agence Annaba",
        wilaya: "Annaba",
        city: "Annaba",
        addressShort: "Cours de la Révolution",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Véhicules récents", "Kilométrage illimité", "Support local"],
        isOpen: true,
    },
    {
        id: 8,
        name: "Agence Blida",
        wilaya: "Blida",
        city: "Blida",
        addressShort: "Boulevard Larbi Tebessi",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Petits prix", "Véhicules économiques", "Flexibilité horaire"],
        isOpen: true,
    },
    {
        id: 9,
        name: "Agence Tizi Ouzou",
        wilaya: "Tizi Ouzou",
        city: "Tizi Ouzou",
        addressShort: "Rue des Frères Bellahcene",
        phone: "+213 ... (à définir)",
        hours: "9:00–17:00",
        tags: ["Centre-ville"],
        services: ["Véhicules 4x4", "Routes de montagne", "Conseils itinéraire"],
        isOpen: true,
    },
    {
        id: 10,
        name: "Agence Sétif",
        wilaya: "Sétif",
        city: "Sétif",
        addressShort: "Avenue du 1er Novembre",
        phone: "+213 ... (à définir)",
        hours: "9:00–18:00",
        tags: ["Centre-ville"],
        services: ["Flotte variée", "Tarifs compétitifs", "Service rapide"],
        isOpen: true,
    },
]

const wilayaCities: Record<string, string[]> = {
    Alger: ["Alger-Centre", "Hydra", "Dar El Beïda", "Bab Ezzouar", "Kouba"],
    Oran: ["Oran", "Es Sénia", "Bir El Djir"],
    Constantine: ["Constantine", "El Khroub"],
    Annaba: ["Annaba", "El Hadjar"],
    Blida: ["Blida", "Boufarik"],
    "Tizi Ouzou": ["Tizi Ouzou", "Azazga"],
    Sétif: ["Sétif", "El Eulma"],
    Béjaïa: ["Béjaïa", "Akbou"],
    Ouargla: ["Ouargla", "Touggourt"],
    Batna: ["Batna", "Barika"],
}

export default function LocationsPage() {
    const [selectedWilaya, setSelectedWilaya] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [searchText, setSearchText] = useState("")
    const [filterOpenNow, setFilterOpenNow] = useState(false)
    const [filterAirport, setFilterAirport] = useState(false)

    const [searchState, setSearchState] = useState<"idle" | "loading" | "results" | "empty">("idle")
    const [filteredAgencies, setFilteredAgencies] = useState<Agency[]>([])

    const handleSearch = async () => {
        if (!selectedWilaya) {
            return
        }

        setSearchState("loading")

        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 300))

        // Filter agencies
        let results = agencies.filter((agency) => agency.wilaya === selectedWilaya)

        if (selectedCity) {
            results = results.filter((agency) => agency.city === selectedCity)
        }

        if (searchText) {
            results = results.filter(
                (agency) =>
                    agency.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    agency.addressShort.toLowerCase().includes(searchText.toLowerCase())
            )
        }

        if (filterOpenNow) {
            results = results.filter((agency) => agency.isOpen)
        }

        if (filterAirport) {
            results = results.filter((agency) => agency.tags.includes("Aéroport"))
        }

        setFilteredAgencies(results)
        setSearchState(results.length > 0 ? "results" : "empty")
    }

    const handleReset = () => {
        setSelectedWilaya("")
        setSelectedCity("")
        setSearchText("")
        setFilterOpenNow(false)
        setFilterAirport(false)
        setSearchState("idle")
        setFilteredAgencies([])
    }

    const availableCities = selectedWilaya ? wilayaCities[selectedWilaya] || [] : []

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Agences</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Trouver une agence
                </h1>
                <p className="text-muted max-w-2xl">
                    Choisissez une wilaya et une ville pour voir les agences disponibles. Les horaires et services seront précisés dans la version complète.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href={ROUTES.SEARCH}>
                    <Button variant="secondary">Aller à la recherche</Button>
                </Link>
                <Link href={ROUTES.RESERVATION_MANAGE}>
                    <Button variant="ghost">Gérer une réservation</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
            </div>

            {/* Search Module */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Rechercher une agence</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Wilaya Select */}
                    <div className="space-y-2">
                        <label htmlFor="wilaya" className="block text-sm font-medium text-text">
                            Wilaya <span className="text-danger">*</span>
                        </label>
                        <select
                            id="wilaya"
                            value={selectedWilaya}
                            onChange={(e) => {
                                setSelectedWilaya(e.target.value)
                                setSelectedCity("")
                            }}
                            className="input w-full"
                        >
                            <option value="">Sélectionnez une wilaya</option>
                            {Object.keys(wilayaCities).map((wilaya) => (
                                <option key={wilaya} value={wilaya}>
                                    {wilaya}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* City Select */}
                    <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-medium text-text">
                            Ville (optionnel)
                        </label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="input w-full"
                            disabled={!selectedWilaya}
                        >
                            <option value="">
                                {selectedWilaya ? "Toutes les villes" : "Sélectionnez une wilaya d'abord"}
                            </option>
                            {availableCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Search Text */}
                    <div className="space-y-2">
                        <label htmlFor="search" className="block text-sm font-medium text-text">
                            Nom d&apos;agence / quartier
                        </label>
                        <input
                            id="search"
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="input w-full"
                            placeholder="Ex : Kouba, Hydra, Aéroport..."
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filterOpenNow}
                            onChange={(e) => setFilterOpenNow(e.target.checked)}
                        />
                        <span className="text-sm text-text">Ouvert maintenant</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filterAirport}
                            onChange={(e) => setFilterAirport(e.target.checked)}
                        />
                        <span className="text-sm text-text">Aéroport</span>
                    </label>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                        variant="primary"
                        onClick={handleSearch}
                        disabled={!selectedWilaya || searchState === "loading"}
                    >
                        {searchState === "loading" ? "Recherche..." : "Rechercher"}
                    </Button>
                    <Button variant="secondary" onClick={handleReset}>
                        Réinitialiser
                    </Button>
                </div>

                {!selectedWilaya && searchState === "idle" && (
                    <p className="text-sm text-muted">Veuillez sélectionner une wilaya.</p>
                )}
            </div>

            {/* Results Section */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-text">Agences disponibles</h2>

                {/* Status Message */}
                <div aria-live="polite">
                    {searchState === "idle" && (
                        <p className="text-sm text-muted">
                            Sélectionnez une wilaya pour afficher les agences.
                        </p>
                    )}
                    {searchState === "loading" && (
                        <p className="text-sm text-muted">Recherche en cours…</p>
                    )}
                    {searchState === "results" && (
                        <p className="text-sm text-muted">
                            {filteredAgencies.length} agence(s) trouvée(s) pour {selectedWilaya}
                            {selectedCity && ` - ${selectedCity}`}.
                        </p>
                    )}
                    {searchState === "empty" && (
                        <p className="text-sm text-muted">
                            Aucune agence trouvée. Essayez une autre ville.
                        </p>
                    )}
                </div>

                {/* Loading Skeletons */}
                {searchState === "loading" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="card p-5 space-y-3">
                                <div className="h-6 bg-border/40 rounded" />
                                <div className="h-4 bg-border/40 rounded w-2/3" />
                                <div className="h-4 bg-border/40 rounded w-1/2" />
                                <div className="h-20 bg-border/40 rounded" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {searchState === "empty" && (
                    <div className="card-soft p-6 space-y-3">
                        <p className="text-sm text-text">
                            Aucune agence ne correspond à vos critères. Essayez de modifier votre recherche ou explorez toutes les wilayas.
                        </p>
                        <Link href={ROUTES.SEARCH}>
                            <Button variant="primary">Aller à la recherche de véhicules</Button>
                        </Link>
                    </div>
                )}

                {/* Results Grid */}
                {searchState === "results" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredAgencies.map((agency) => (
                            <div key={agency.id} className="card p-5 space-y-3">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base font-semibold text-text flex-1">
                                        {agency.name}
                                    </h3>
                                    <span className={agency.isOpen ? "badge-brand" : "badge-muted"}>
                                        {agency.isOpen ? "Ouvert" : "Fermé"}
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="space-y-1">
                                    <p className="text-sm text-muted">
                                        {agency.wilaya} • {agency.city}
                                    </p>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-muted">{agency.addressShort}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="badge-brand">Agence vérifiée</span>
                                    <span className="badge-muted">Acompte 5%</span>
                                    {agency.tags.includes("Aéroport") && (
                                        <span className="badge-warning">Aéroport</span>
                                    )}
                                </div>

                                {/* Services */}
                                <ul className="space-y-1">
                                    {agency.services.map((service) => (
                                        <li key={service} className="flex items-center gap-2 text-sm text-text">
                                            <CheckCircle className="w-3 h-3 text-brand flex-shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                {/* Actions */}
                                <div className="flex flex-col gap-2 pt-2">
                                    <Button variant="primary" className="w-full">
                                        <Link href={ROUTES.RESERVATION_START} className="w-full">
                                            Commencer ici
                                        </Link>
                                    </Button>
                                    <button className="btn-secondary w-full" disabled>
                                        Voir détails (bientôt)
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Map Placeholder */}
            <div className="card-soft p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Carte</h2>
                <p className="text-sm text-muted">
                    Carte interactive disponible dans la version complète.
                </p>
                <div className="h-48 rounded-2xl bg-border/40 flex items-center justify-center">
                    <p className="text-xs text-muted">Carte (bientôt)</p>
                </div>
            </div>

            {/* Mode démo note */}
            <p className="text-xs text-muted text-center">
                Mode démo : la disponibilité par agence et les horaires exacts seront synchronisés avec le backend.
            </p>
        </div>
    )
}
