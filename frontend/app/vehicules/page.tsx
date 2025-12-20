import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function VehiculesPage() {
    return (
        <div className="container-emd py-10 sm:py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Parcourir véhicules
                    </h1>
                    <p className="text-muted">
                        Découvrez notre flotte complète : citadines, berlines, SUV et utilitaires.
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
                            <span>Catalogue complet avec photos HD</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Filtres par catégorie, transmission et tarif</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Fiches techniques détaillées (consommation, coffre, sièges)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Comparateur de véhicules (jusqu&apos;à 3)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Disponibilité en temps réel par agence</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href={ROUTES.SEARCH}>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Rechercher maintenant
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
                    <p className="text-sm font-medium text-text">🚗 Notre flotte</p>
                    <p className="text-sm text-muted">
                        Tous nos véhicules ont moins de 3 ans et sont régulièrement entretenus. Assurance tous risques incluse.
                    </p>
                </div>
            </div>
        </div>
    )
}
