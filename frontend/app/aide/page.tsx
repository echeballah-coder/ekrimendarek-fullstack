import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function AidePage() {
    const themes = [
        { id: "conditions", badge: "📋", title: "Conditions de location", desc: "Âge, permis, caution" },
        { id: "paiement", badge: "💳", title: "Paiement & acompte", desc: "Moyens de paiement, acompte 5%" },
        { id: "reservations", badge: "📅", title: "Réservations", desc: "Réserver, modifier, annuler" },
        { id: "documents", badge: "🆔", title: "Documents (KYC)", desc: "Vérification d'identité" },
        { id: "agences", badge: "🏢", title: "Agences", desc: "Retrait, restitution" },
        { id: "sinistre", badge: "🚨", title: "Sinistre & assistance", desc: "Accident, panne" },
        { id: "compte", badge: "👤", title: "Compte", desc: "Mes réservations, infos" },
        { id: "pro", badge: "🤝", title: "Espace agence", desc: "Devenir partenaire" },
    ]

    return (
        <div className="container-emd py-10 sm:py-12 space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Centre d&apos;aide</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Aide & FAQ
                </h1>
                <p className="text-muted max-w-2xl">
                    Pour aller plus vite, choisissez un thème. Les réponses les plus courantes sont ici.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href={ROUTES.RESERVATION_MANAGE}>
                    <Button variant="secondary">Gérer une réservation</Button>
                </Link>
                <Link href={ROUTES.SEARCH}>
                    <Button variant="ghost">Aller à la recherche</Button>
                </Link>
                <Link href={ROUTES.ACCOUNT}>
                    <Button variant="ghost">Mon compte</Button>
                </Link>
            </div>

            {/* Thèmes Grid */}
            <div className="card p-6 space-y-4" id="themes">
                <h2 className="text-lg font-semibold text-text">Choisissez un thème</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {themes.map((theme) => (
                        <Link
                            key={theme.id}
                            href={`#${theme.id}`}
                            className="card-soft p-4 hover:bg-surface transition-colors group"
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">{theme.badge}</span>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium text-text group-hover:text-brand transition-colors">
                                        {theme.title}
                                    </p>
                                    <p className="text-xs text-muted">{theme.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <p className="text-xs text-muted">
                    Dernière mise à jour : mode démo (contenu indicatif).
                </p>
            </div>

            {/* Section 1: Conditions */}
            <section id="conditions" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">📋 Conditions de location</h2>
                <p className="text-sm text-muted">
                    Tout ce que vous devez savoir avant de louer un véhicule.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Qui peut louer une voiture ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Pour louer un véhicule, vous devez être majeur (18 ans minimum, variable selon catégorie de véhicule) et disposer d&apos;un permis de conduire valide depuis au moins 1 an. Les conditions exactes sont affichées lors de la réservation.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Âge minimum et permis : comment ça marche ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            L&apos;âge minimum varie selon la catégorie : 21 ans pour les citadines, 23 ans pour les berlines et SUV, 25 ans pour les utilitaires. Votre permis doit être valide et avoir au moins 1 an d&apos;ancienneté. Un permis international peut être requis selon votre pays d&apos;origine.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Caution et responsabilités : à quoi m&apos;attendre ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Une caution (montant variable selon véhicule) est demandée au retrait. Elle est restituée au retour si le véhicule est en bon état. L&apos;assurance tous risques est incluse, avec franchise standard. Les détails sont communiqués avant confirmation de réservation.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Puis-je rendre la voiture dans une autre agence ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Oui, le service de restitution dans une agence différente est disponible gratuitement. Sélectionnez simplement l&apos;agence de restitution lors de votre réservation.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 2: Paiement */}
            <section id="paiement" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">💳 Paiement & acompte</h2>
                <p className="text-sm text-muted">
                    Modalités de paiement, acompte et remboursement.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Pourquoi demander un acompte de 5% ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            L&apos;acompte de 5% confirme votre réservation et bloque le véhicule pour vos dates. Le solde est à régler lors du retrait du véhicule en agence. Cela garantit la disponibilité tout en limitant l&apos;engagement financier initial.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quels moyens de paiement sont disponibles ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Au démarrage, nous utilisons Chargily (solution locale algérienne).</p>
                            <p>Prochainement :</p>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                <li>Satim (cartes bancaires algériennes)</li>
                                <li>PayPal / Stripe (paiements internationaux, selon disponibilité)</li>
                            </ul>
                            <p className="text-xs">Le solde peut être réglé en espèces ou carte en agence.</p>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quand est-ce que je paie le solde ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Le solde (95% restant) est à régler directement en agence lors du retrait du véhicule, en espèces ou par carte bancaire selon les moyens acceptés par l&apos;agence.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Reçu et preuve de paiement : où les retrouver ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Une confirmation par email est envoyée après chaque paiement. Vous pouvez également consulter l&apos;historique dans votre espace compte (section &quot;Mes réservations&quot;, bientôt disponible).
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Paiement refusé : que faire ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Vérifiez d&apos;abord votre solde et les limites de votre carte. Si le problème persiste, contactez notre support ou essayez un autre moyen de paiement. La réservation reste ouverte pendant 30 minutes.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 3: Réservations */}
            <section id="reservations" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">📅 Réservation, modification, annulation</h2>
                <p className="text-sm text-muted">
                    Gérer vos réservations du début à la fin.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Comment réserver en quelques étapes ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>La réservation se fait en 4 étapes :</p>
                            <ol className="list-decimal list-inside ml-2 space-y-1">
                                <li>Choisissez vos dates et votre agence sur <Link href={ROUTES.RESERVATION_START} className="text-brand hover:underline">la page de réservation</Link></li>
                                <li>Sélectionnez votre véhicule parmi les résultats</li>
                                <li>Remplissez vos informations et confirmez</li>
                                <li>Payez l&apos;acompte de 5% pour valider</li>
                            </ol>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Puis-je modifier mes dates ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Oui, vous pouvez modifier vos dates jusqu&apos;à 48h avant le retrait, sous réserve de disponibilité. Rendez-vous sur <Link href={ROUTES.RESERVATION_MANAGE} className="text-brand hover:underline">gérer une réservation</Link> avec votre numéro de confirmation.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Comment annuler ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Vous pouvez annuler via <Link href={ROUTES.RESERVATION_MANAGE} className="text-brand hover:underline">gérer une réservation</Link>. Annulation gratuite jusqu&apos;à 72h avant le retrait. Au-delà, l&apos;acompte peut être retenu (conditions selon agence).
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Je n&apos;ai pas reçu ma confirmation : que faire ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Vérifiez vos spams. Si vous ne trouvez toujours rien, contactez le support avec vos coordonnées. Vous pouvez aussi consulter vos réservations dans <Link href={ROUTES.ACCOUNT} className="text-brand hover:underline">votre compte</Link>.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Combien de temps la voiture est-elle retenue pour moi ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Une fois l&apos;acompte payé, le véhicule est bloqué pour vos dates complètes. Si vous arrivez en retard le jour du retrait (plus de 2h), contactez l&apos;agence pour éviter l&apos;annulation automatique.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 4: Documents KYC */}
            <section id="documents" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">🆔 Documents officiels (KYC)</h2>
                <p className="text-sm text-muted">
                    Vérification d&apos;identité et sécurité.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Pourquoi demander des documents à l&apos;inscription ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            La vérification d&apos;identité (KYC) protège tous les utilisateurs contre la fraude et garantit la conformité légale. C&apos;est une exigence standard pour les services de location.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quels documents sont requis ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Pour compléter votre profil, vous devez fournir :</p>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                <li>Pièce d&apos;identité ou passeport (recto/verso)</li>
                                <li>Permis de conduire valide (recto/verso)</li>
                                <li>Photo d&apos;identité ou selfie (preuve de vie)</li>
                            </ul>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Mes documents sont-ils visibles par tout le monde ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Non, jamais. Vos documents ne sont jamais affichés en clair sur le site et sont protégés par chiffrement. Seuls les administrateurs autorisés peuvent les consulter dans un environnement sécurisé pour validation.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quels sont les statuts de vérification ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Votre statut KYC peut être :</p>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                <li><strong>Non fourni</strong> : documents non encore envoyés</li>
                                <li><strong>En vérification</strong> : documents en cours de validation (24-48h)</li>
                                <li><strong>Validé</strong> : profil vérifié, vous pouvez réserver</li>
                                <li><strong>Refusé</strong> : documents illisibles ou non conformes (message explicatif)</li>
                            </ul>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Que faire si mon KYC est refusé ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Consultez le message explicatif dans votre compte. Corrigez les points mentionnés (qualité photo, document expiré, etc.) et soumettez à nouveau. Le support peut vous aider en cas de difficulté.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 5: Agences */}
            <section id="agences" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">🏢 Agences & retrait du véhicule</h2>
                <p className="text-sm text-muted">
                    Tout savoir sur le retrait et la restitution.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Comment choisir une agence ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Lors de la recherche, sélectionnez votre wilaya et ville. Les agences disponibles s&apos;afficheront avec leurs horaires et services. Vous pouvez retirer dans une agence et restituer dans une autre gratuitement.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Horaires et jours fériés : comment vérifier ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Les horaires sont affichés sur la fiche de chaque agence (bientôt disponible). En cas de jour férié, contactez directement l&apos;agence pour confirmer l&apos;ouverture.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Retrait et restitution : que dois-je apporter ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Au retrait, prévoyez :</p>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                <li>Votre pièce d&apos;identité</li>
                                <li>Votre permis de conduire original</li>
                                <li>Le voucher de réservation (email de confirmation)</li>
                                <li>Le paiement du solde (selon conditions)</li>
                            </ul>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Inspection du véhicule : comment ça se passe ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Au retrait, un état des lieux est réalisé avec l&apos;agence. Vérifiez ensemble l&apos;état du véhicule, le kilométrage et le niveau de carburant. À la restitution, même processus : l&apos;agence constate l&apos;état et restitue la caution si tout est conforme.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 6: Sinistre */}
            <section id="sinistre" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">🚨 Sinistre & assistance</h2>
                <p className="text-sm text-muted">
                    En cas d&apos;accident ou de panne.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Que faire en cas d&apos;accident ou panne ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Suivez ces étapes :</p>
                            <ol className="list-decimal list-inside ml-2 space-y-1">
                                <li>Sécurisez la zone et portez assistance si nécessaire</li>
                                <li>Contactez immédiatement l&apos;agence (numéro d&apos;urgence sur le contrat)</li>
                                <li>En cas d&apos;accident avec tiers, établissez un constat amiable</li>
                                <li>Prenez des photos si possible</li>
                                <li>Suivez les instructions de l&apos;agence pour le dépannage</li>
                            </ol>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quels justificatifs fournir ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Selon la situation : constat amiable, PV de police, photos des dommages, rapport de dépannage. L&apos;agence vous guidera sur les documents nécessaires pour traiter votre dossier.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Délais de traitement : à quoi s&apos;attendre ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Les délais varient selon la gravité : dépannage simple en quelques heures, traitement d&apos;un sinistre complexe en 7 à 15 jours. L&apos;agence vous tiendra informé de l&apos;avancement.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Litige : comment contacter le support ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            En cas de désaccord, contactez d&apos;abord l&apos;agence concernée. Si le litige persiste, écrivez au support central (voir section contact en bas de page) avec votre numéro de dossier et les détails du problème.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 7: Compte */}
            <section id="compte" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">👤 Compte & réservations</h2>
                <p className="text-sm text-muted">
                    Gérer votre profil et consulter vos réservations.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Où voir mes réservations ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Connectez-vous et accédez à <Link href={ROUTES.ACCOUNT} className="text-brand hover:underline">votre compte</Link>. La section &quot;Mes réservations&quot; liste toutes vos locations passées et à venir avec leurs statuts.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Pourquoi mes réservations n&apos;apparaissent pas ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            En mode démo, l&apos;affichage des réservations peut être incomplet. Essayez de rafraîchir la page ou de vous reconnecter. Si le problème persiste, vérifiez vos emails de confirmation qui contiennent toutes les infos nécessaires.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Modifier mes informations
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Dans <Link href={ROUTES.ACCOUNT} className="text-brand hover:underline">votre compte</Link>, section &quot;Profil&quot;, vous pouvez mettre à jour vos coordonnées, email et mot de passe. Toute modification d&apos;identité nécessite une re-vérification KYC.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Déconnexion / sécurité
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Déconnectez-vous toujours après utilisation sur un appareil partagé. Si vous suspectez une activité inhabituelle, changez immédiatement votre mot de passe et contactez le support.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Section 8: Espace agence */}
            <section id="pro" className="space-y-4 scroll-mt-20">
                <h2 className="text-xl font-semibold text-text">🤝 Espace agence (partenaires)</h2>
                <p className="text-sm text-muted">
                    Pour les professionnels qui souhaitent rejoindre la plateforme.
                </p>
                <div className="space-y-3">
                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Comment devenir agence partenaire ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Le processus de candidature sera disponible prochainement. Vous devrez soumettre votre dossier complet (registre de commerce, RIB, documents légaux) via un formulaire dédié. L&apos;équipe vous contactera pour la suite.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Quels documents sont demandés ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="text-sm text-muted mt-3 leading-relaxed space-y-2">
                            <p>Pour candidater, vous devez fournir :</p>
                            <ul className="list-disc list-inside ml-2 space-y-1">
                                <li>Registre de commerce (extrait récent)</li>
                                <li>RIB professionnel</li>
                                <li>Email et téléphone professionnels</li>
                                <li>Justificatifs d&apos;assurance flotte</li>
                                <li>Informations légales de l&apos;entreprise</li>
                            </ul>
                        </div>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Délai de validation
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Le processus de vérification prend généralement 5 à 10 jours ouvrés. Vous serez contacté par email pour toute information manquante ou pour confirmer l&apos;activation de votre compte agence.
                        </p>
                    </details>

                    <details className="card p-5 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Accès dashboard agence
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Une fois votre dossier validé, vous recevrez vos identifiants pour accéder au dashboard agence où vous pourrez gérer votre flotte, vos réservations, votre calendrier et vos statistiques.
                        </p>
                    </details>
                </div>
                <Link href="#themes" className="text-sm text-brand hover:underline inline-block">
                    ← Retour aux thèmes
                </Link>
            </section>

            {/* Contact card */}
            <div className="card-soft p-6 space-y-3">
                <h3 className="text-lg font-semibold text-text">Besoin d&apos;aide ?</h3>
                <p className="text-sm text-muted">
                    Pour une demande spécifique, contactez-nous : <a href="mailto:support@ekrimendarek.dz" className="text-brand hover:underline">support@ekrimendarek.dz</a>
                </p>
                <p className="text-xs text-muted">
                    Horaires : 7j/7 (mode démo)
                </p>
            </div>
        </div>
    )
}
