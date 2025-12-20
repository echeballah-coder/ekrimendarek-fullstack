import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"
import { Car, Truck, Users, Zap, ArrowRight, CheckCircle, ShieldCheck, Wrench, Headphones } from "lucide-react"

export default function VehiculesPage() {
    const categories = [
        {
            icon: Car,
            title: "Citadine",
            description: "Parfaite pour la ville et les trajets quotidiens",
            features: ["Idéal ville", "Faible consommation", "2–4 bagages"],
            query: "categorie=citadine",
        },
        {
            icon: Car,
            title: "Compacte",
            description: "Polyvalente pour tous vos déplacements",
            features: ["Usage mixte", "Bon équilibre", "3–4 bagages"],
            query: "categorie=compacte",
        },
        {
            icon: Car,
            title: "Berline",
            description: "Confort et élégance pour vos trajets",
            features: ["Confort optimal", "Long trajet", "4–5 bagages"],
            query: "categorie=berline",
        },
        {
            icon: Truck,
            title: "SUV",
            description: "Espace et robustesse pour la famille",
            features: ["5–7 places", "Routes variées", "Grand coffre"],
            query: "categorie=suv",
        },
        {
            icon: Users,
            title: "Familiale",
            description: "Grand espace pour toute la famille",
            features: ["7 places", "Coffre XL", "Longs trajets"],
            query: "categorie=familiale",
        },
        {
            icon: Truck,
            title: "Utilitaire",
            description: "Volume et praticité pour professionnels",
            features: ["Usage pro", "Grand volume", "Charge utile"],
            query: "categorie=utilitaire",
        },
    ]

    const featuredVehicles = [
        {
            id: 1,
            name: "Volkswagen Golf 8",
            category: "Compacte",
            transmission: "Automatique",
            fuel: "Essence",
            priceDay: "4 900",
        },
        {
            id: 2,
            name: "Peugeot 208",
            category: "Citadine",
            transmission: "Manuelle",
            fuel: "Essence",
            priceDay: "3 500",
        },
        {
            id: 3,
            name: "Toyota Corolla",
            category: "Berline",
            transmission: "Automatique",
            fuel: "Hybride",
            priceDay: "5 900",
        },
        {
            id: 4,
            name: "Hyundai Tucson",
            category: "SUV",
            transmission: "Automatique",
            fuel: "Diesel",
            priceDay: "7 500",
        },
        {
            id: 5,
            name: "Renault Clio",
            category: "Citadine",
            transmission: "Manuelle",
            fuel: "Essence",
            priceDay: "3 200",
        },
        {
            id: 6,
            name: "Dacia Duster",
            category: "SUV",
            transmission: "Manuelle",
            fuel: "Diesel",
            priceDay: "5 500",
        },
        {
            id: 7,
            name: "Seat Leon",
            category: "Compacte",
            transmission: "Automatique",
            fuel: "Essence",
            priceDay: "4 500",
        },
        {
            id: 8,
            name: "Fiat 500",
            category: "Citadine",
            transmission: "Automatique",
            fuel: "Essence",
            priceDay: "3 800",
        },
    ]

    const fleetReasons = [
        {
            icon: CheckCircle,
            title: "Véhicules contrôlés",
            description: "Tous nos véhicules passent un contrôle technique rigoureux avant chaque location.",
        },
        {
            icon: Wrench,
            title: "Entretien régulier",
            description: "Maintenance préventive pour garantir fiabilité et sécurité sur tous vos trajets.",
        },
        {
            icon: ShieldCheck,
            title: "Conditions transparentes",
            description: "Tarifs clairs, assurance tous risques incluse, aucun frais caché.",
        },
        {
            icon: Headphones,
            title: "Support réactif",
            description: "Une équipe disponible pour répondre à toutes vos questions et urgences.",
        },
    ]

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Catalogue</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Parcourir les véhicules
                </h1>
                <p className="text-muted max-w-2xl">
                    Choisissez une catégorie, comparez, puis réservez en quelques minutes. Photos & disponibilité en temps réel arrivent bientôt.
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
                <Link href={ROUTES.LOCATIONS}>
                    <Button variant="ghost">Trouver une agence</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
            </div>

            {/* Categories Section */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">Catégories populaires</h2>
                    <p className="text-sm text-muted">
                        Inspiré des standards location : simple, lisible, orienté choix.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon
                        return (
                            <div key={cat.title} className="card-soft p-5 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 border border-brand/25">
                                        <Icon className="w-5 h-5 text-brand" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-text">{cat.title}</h3>
                                        <p className="text-sm text-muted mt-1">{cat.description}</p>
                                    </div>
                                </div>

                                <ul className="space-y-1">
                                    {cat.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-text">
                                            <span className="text-brand">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`${ROUTES.SEARCH}?${cat.query}`}
                                    className="btn-secondary w-full flex items-center justify-between"
                                >
                                    <span>Explorer</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Featured Vehicles Section */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">Sélection du moment</h2>
                    <p className="text-sm text-muted">
                        Exemples de véhicules. Les photos officielles seront intégrées dans la phase Branding.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredVehicles.map((vehicle) => (
                        <div key={vehicle.id} className="card p-5 space-y-3">
                            {/* Image Placeholder */}
                            <div className="h-36 rounded-2xl bg-border/40 flex items-center justify-center">
                                <Car className="w-12 h-12 text-muted" />
                            </div>

                            {/* Vehicle Info */}
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-text">{vehicle.name}</h3>
                                <p className="text-sm text-muted">
                                    {vehicle.category} • {vehicle.transmission} • {vehicle.fuel}
                                </p>
                            </div>

                            {/* Price */}
                            <p className="text-lg font-semibold text-brand">
                                {vehicle.priceDay} DA<span className="text-sm text-muted font-normal">/jour</span>
                            </p>

                            {/* Badges */}
                            <div className="flex gap-2">
                                <span className="badge-muted">Acompte 5%</span>
                                <span className="badge-brand">Agence vérifiée</span>
                            </div>

                            {/* CTA */}
                            <Link href={`/vehicule/${vehicle.id}`}>
                                <Button variant="primary" className="w-full">
                                    Voir détails
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Our Fleet Section */}
            <section className="card p-6 space-y-4">
                <h2 className="text-xl font-semibold text-text">Pourquoi notre flotte</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {fleetReasons.map((reason) => {
                        const Icon = reason.icon
                        return (
                            <div key={reason.title} className="flex items-start gap-3">
                                <Icon className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                                <div className="flex-1 space-y-1">
                                    <h3 className="text-sm font-semibold text-text">{reason.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Mode démo note */}
            <p className="text-xs text-muted text-center">
                Mode démo : certaines infos (photos HD, disponibilité par agence) seront activées avec l&apos;intégration backend.
            </p>
        </div>
    )
}
