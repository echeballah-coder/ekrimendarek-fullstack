import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function LocationsPage() {
    return (
        <div className="container-emd py-10 sm:py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Trouver une agence
                    </h1>
                    <p className="text-muted">
                        Localisez l&apos;agence la plus proche et consultez ses horaires d&apos;ouverture.
                    </p>
                </div>

                {/* Card principale */}
                <div className="card p-6 space-y-4">
                    <span className="badge-brand">Bientôt disponible</span>

                    <h2 className="text-lg font-semibold text-text">
                        À venir dans la V1
                    </h2>

                    <ul className="space-y-2 text-text">
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Carte interactive des agences par wilaya</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Filtres par ville et services disponibles</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Horaires d&apos;ouverture et jours fériés</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Contact direct (téléphone + email)</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href={ROUTES.SEARCH}>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Rechercher une voiture
                            </Button>
                        </Link>
                        <Link href={ROUTES.HOME}>
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Retour à l&apos;accueil
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Conseil card */}
                <div className="card-soft p-4 space-y-2">
                    <p className="text-sm font-medium text-text">📍 Bon à savoir</p>
                    <p className="text-sm text-muted">
                        Vous pouvez récupérer votre véhicule dans une agence et le restituer dans une autre (service gratuit).
                    </p>
                </div>
            </div>
        </div>
    )
}
