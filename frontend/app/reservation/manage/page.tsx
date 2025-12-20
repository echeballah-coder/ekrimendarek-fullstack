import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function ReservationManagePage() {
    return (
        <div className="container-emd py-10 sm:py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Gérer une réservation
                    </h1>
                    <p className="text-muted">
                        Modifiez ou annulez une réservation à partir de vos informations de confirmation.
                    </p>
                </div>

                {/* Card principale */}
                <div className="card p-6 space-y-4">
                    <span className="badge-muted">En développement</span>

                    <h2 className="text-lg font-semibold text-text">
                        À venir dans la V1
                    </h2>

                    <ul className="space-y-2 text-text">
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Recherche par numéro de réservation + email</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Visualisation complète des détails</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Modification des dates (sous conditions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Annulation avec remboursement partiel</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">•</span>
                            <span>Impression du voucher de réservation</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href={ROUTES.ACCOUNT}>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Accéder à mon compte
                            </Button>
                        </Link>
                        <Link href={ROUTES.SEARCH}>
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Nouvelle réservation
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Conseil card */}
                <div className="card-soft p-4 space-y-2">
                    <p className="text-sm font-medium text-text">📋 Important</p>
                    <p className="text-sm text-muted">
                        Conservez votre numéro de réservation et email de confirmation. Vous en aurez besoin pour gérer votre réservation.
                    </p>
                </div>
            </div>
        </div>
    )
}
