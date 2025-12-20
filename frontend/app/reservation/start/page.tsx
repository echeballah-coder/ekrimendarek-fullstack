import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function ReservationStartPage() {
    return (
        <div className="container-emd py-10 sm:py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Commencer une réservation
                    </h1>
                    <p className="text-muted">
                        Recherchez une voiture, choisissez vos dates, puis confirmez en quelques étapes.
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
                            <span>Recherche par wilaya et dates</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Résultats avec filtres (catégorie, boîte, prix)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Détails du véhicule + conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Paiement d&apos;acompte (5%) puis solde sur place</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href={ROUTES.SEARCH}>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Aller à la recherche
                            </Button>
                        </Link>
                        <Link href={ROUTES.HOW_IT_WORKS}>
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Comment ça marche
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Conseil card */}
                <div className="card-soft p-4 space-y-2">
                    <p className="text-sm font-medium text-text">💡 Conseil</p>
                    <p className="text-sm text-muted">
                        Réservez au moins 48h à l&apos;avance pour garantir la disponibilité du véhicule de votre choix.
                    </p>
                </div>
            </div>
        </div>
    )
}
