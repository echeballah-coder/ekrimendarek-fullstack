import Link from "next/link"
import { ROUTES } from "@/lib/routes"

export default function DocumentationPage() {
    const resources = [
        {
            title: "Réserver une voiture",
            description: "Guide complet pour commencer une nouvelle réservation et choisir votre véhicule.",
            link: ROUTES.RESERVATION_START,
        },
        {
            title: "Gérer une réservation",
            description: "Consultez, modifiez ou annulez une réservation existante en toute simplicité.",
            link: ROUTES.RESERVATION_MANAGE,
        },
        {
            title: "Obtenir un reçu",
            description: "Téléchargez un reçu officiel pour vos réservations confirmées.",
            link: ROUTES.RECEIPT,
        },
        {
            title: "Aide & FAQ",
            description: "Trouvez des réponses aux questions fréquentes sur la location, le paiement, et plus.",
            link: "/aide",
        },
        {
            title: "Paiement & acompte",
            description: "Découvrez comment fonctionne le paiement et l'acompte de 5% pour réserver.",
            link: "/aide#paiement",
        },
        {
            title: "Conditions & confidentialité",
            description: "Consultez nos conditions d'utilisation, politique de confidentialité, et cookies.",
            link: ROUTES.LEGAL,
        },
    ]

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Documentation</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Documentation
                </h1>
                <p className="text-muted max-w-2xl">
                    Ressources pour comprendre la réservation, les documents requis, et le fonctionnement de notre plateforme en Algérie.
                </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((resource) => (
                    <Link
                        key={resource.title}
                        href={resource.link}
                        className="card-soft p-6 space-y-3 hover:border-brand transition-colors group"
                    >
                        <h2 className="text-base font-semibold text-text group-hover:text-brand transition-colors">
                            {resource.title}
                        </h2>
                        <p className="text-sm text-muted leading-relaxed">
                            {resource.description}
                        </p>
                        <div className="pt-2">
                            <span className="text-sm text-brand group-hover:underline">
                                Ouvrir →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Note */}
            <p className="text-xs text-muted text-center">
                Mode démo : contenu indicatif. La documentation complète sera enrichie avec l&apos;intégration backend.
            </p>
        </div>
    )
}
