"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"

export default function LegalPage() {
    const [cookiePrefs, setCookiePrefs] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    })
    const [prefsSaved, setPrefsSaved] = useState(false)

    const handleSavePrefs = () => {
        setPrefsSaved(true)
        setTimeout(() => setPrefsSaved(false), 3000)
    }

    const handleRejectAll = () => {
        setCookiePrefs({
            essential: true,
            analytics: false,
            marketing: false,
        })
        setPrefsSaved(true)
        setTimeout(() => setPrefsSaved(false), 3000)
    }

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Légal</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Conditions, confidentialité & cookies
                </h1>
                <p className="text-muted max-w-2xl">
                    Ces informations sont fournies à titre indicatif pour la démo. La version finale sera validée juridiquement avant mise en production.
                </p>
                <p className="text-xs text-muted">
                    Dernière mise à jour : Décembre 2025 (mode démo).
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="secondary">Aide & FAQ</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="ghost">Contact</Button>
                </Link>
                <Link href={ROUTES.LOCATIONS}>
                    <Button variant="ghost">Trouver une agence</Button>
                </Link>
            </div>

            {/* Sommaire */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Sommaire</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="#terms" className="link">
                            Conditions d&apos;utilisation
                        </a>
                    </li>
                    <li>
                        <a href="#privacy" className="link">
                            Politique de confidentialité
                        </a>
                    </li>
                    <li>
                        <a href="#cookies" className="link">
                            Cookies
                        </a>
                    </li>
                </ul>
                <p className="text-xs text-muted">
                    Astuce : utilisez ce sommaire pour accéder rapidement à une section.
                </p>
            </div>

            {/* Section 1: Terms */}
            <section id="terms" className="space-y-4 scroll-mt-20">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">Conditions d&apos;utilisation</h2>
                    <p className="text-sm text-muted">
                        Règles d&apos;utilisation du service de réservation de véhicules.
                    </p>
                </div>

                <div className="card p-6 space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Objet du service</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            EkriMenDarek est une plateforme de mise en relation entre des agences de location de véhicules et des clients. Nous facilitons la réservation en ligne, mais le contrat de location est conclu directement entre le client et l&apos;agence partenaire.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Compte utilisateur</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Les informations fournies lors de l&apos;inscription doivent être exactes et à jour.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Vous êtes responsable de la confidentialité de vos identifiants.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Un seul compte par personne physique est autorisé.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Réservation et paiement</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Un acompte de 5% est requis pour confirmer votre réservation (mode démo).</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Le solde est à régler directement en agence lors du retrait du véhicule.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Les tarifs affichés incluent la TVA et l&apos;assurance de base sauf mention contraire.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Responsabilités</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Le locataire est responsable du véhicule pendant toute la durée de location.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Tout dommage ou infraction doit être signalé immédiatement à l&apos;agence.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Le non-respect des conditions peut entraîner l&apos;annulation de la réservation.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Annulation & modification</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Les conditions d&apos;annulation et de modification sont définies par chaque agence et affichées lors de la réservation. En général, une annulation gratuite est possible jusqu&apos;à 72h avant le retrait.
                        </p>
                    </div>
                </div>

                <div className="card-soft p-5 space-y-2">
                    <p className="text-sm font-medium text-text">⚠️ Important</p>
                    <p className="text-sm text-muted leading-relaxed">
                        En production, les conditions détaillées seront visibles avant confirmation de réservation. Chaque agence peut avoir des conditions spécifiques qui prévalent.
                    </p>
                </div>

                <a href="#sommaire" className="text-sm text-brand hover:underline inline-block">
                    ← Retour au sommaire
                </a>
            </section>

            {/* Section 2: Privacy */}
            <section id="privacy" className="space-y-4 scroll-mt-20">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">Politique de confidentialité</h2>
                    <p className="text-sm text-muted">
                        Comment nous collectons, utilisons et protégeons vos données personnelles.
                    </p>
                </div>

                <div className="card p-6 space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Données collectées</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Données de compte</strong> : nom complet, email, téléphone (nécessaires au service)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Documents KYC</strong> : pièce d&apos;identité, permis de conduire, selfie (pour vérification d&apos;identité)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Données de réservation</strong> : dates, véhicule, agence, historique</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Données de paiement</strong> : via prestataires sécurisés (Chargily, Satim)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Finalités</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Création et gestion de votre compte</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Traitement et suivi de vos réservations</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Support client et assistance</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span>Prévention de la fraude et respect des obligations légales</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Accès et partage</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Vos données sont accessibles uniquement par les administrateurs autorisés et les agences partenaires concernées par vos réservations. Nous ne vendons jamais vos données à des tiers. Les documents KYC ne sont jamais affichés en clair dans l&apos;interface utilisateur.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Conservation</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Les données de compte et réservations sont conservées pendant la durée nécessaire au service, puis archivées selon les obligations légales. Les durées exactes seront définies en production.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Vos droits</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Accès</strong> : consulter vos données personnelles</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Correction</strong> : modifier vos informations</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-text">
                                <span className="text-brand mt-0.5">•</span>
                                <span><strong>Suppression</strong> : demander l&apos;effacement de vos données</span>
                            </li>
                        </ul>
                        <p className="text-sm text-muted leading-relaxed">
                            Pour exercer vos droits, contactez-nous via la <Link href="/contact" className="text-brand hover:underline">page contact</Link>.
                        </p>
                    </div>
                </div>

                <div className="card-soft p-5 space-y-2">
                    <p className="text-sm font-medium text-text">🔒 Sécurité</p>
                    <ul className="space-y-1 text-sm text-muted">
                        <li>• Chiffrement des données sensibles (documents KYC)</li>
                        <li>• Accès restreint aux administrateurs autorisés uniquement</li>
                        <li>• Logs d&apos;accès pour traçabilité</li>
                        <li>• Serveurs sécurisés et sauvegardes régulières</li>
                    </ul>
                </div>

                {/* Privacy FAQ */}
                <div className="space-y-3">
                    <h3 className="text-base font-semibold text-text">Questions fréquentes</h3>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Pourquoi demander des documents d&apos;identité ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            La vérification KYC (Know Your Customer) protège tous les utilisateurs contre la fraude et garantit la conformité légale. C&apos;est une exigence standard pour les services de location de véhicules.
                        </p>
                    </details>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Qui peut voir mes documents KYC ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Seuls les administrateurs autorisés peuvent consulter vos documents dans un environnement sécurisé pour validation. Vos documents ne sont jamais affichés en clair dans l&apos;interface publique et sont protégés par chiffrement.
                        </p>
                    </details>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Comment demander la suppression de mes données ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Contactez-nous via la <Link href="/contact" className="text-brand hover:underline">page contact</Link> en indiquant &quot;Demande de suppression RGPD&quot; dans le sujet. Nous traiterons votre demande dans les meilleurs délais, sous réserve des obligations légales de conservation.
                        </p>
                    </details>
                </div>

                <a href="#sommaire" className="text-sm text-brand hover:underline inline-block">
                    ← Retour au sommaire
                </a>
            </section>

            {/* Section 3: Cookies */}
            <section id="cookies" className="space-y-4 scroll-mt-20">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text">Cookies</h2>
                    <p className="text-sm text-muted">
                        Informations sur les cookies et gestion de vos préférences.
                    </p>
                </div>

                <div className="card p-6 space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Qu&apos;est-ce qu&apos;un cookie ?</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies permettent de mémoriser vos préférences et d&apos;améliorer votre expérience de navigation.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-text">Catégories de cookies</h3>
                        <ul className="space-y-3">
                            <li className="space-y-1">
                                <p className="text-sm font-medium text-text">🔒 Cookies essentiels</p>
                                <p className="text-sm text-muted">
                                    Nécessaires au fonctionnement du site (authentification, panier, sécurité). Ils ne peuvent pas être désactivés.
                                </p>
                            </li>
                            <li className="space-y-1">
                                <p className="text-sm font-medium text-text">🎨 Cookies de préférences</p>
                                <p className="text-sm text-muted">
                                    Mémorisent vos choix (thème clair/sombre, langue). Exemple : le thème est stocké localement via localStorage.
                                </p>
                            </li>
                            <li className="space-y-1">
                                <p className="text-sm font-medium text-text">📊 Cookies de mesure d&apos;audience</p>
                                <p className="text-sm text-muted">
                                    Permettent de comprendre comment vous utilisez le site pour améliorer l&apos;expérience (Google Analytics, etc.).
                                </p>
                            </li>
                            <li className="space-y-1">
                                <p className="text-sm font-medium text-text">📢 Cookies marketing</p>
                                <p className="text-sm text-muted">
                                    Utilisés pour afficher des publicités ciblées. Non activés en mode démo.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Cookie Preferences */}
                <div className="card p-6 space-y-4">
                    <h3 className="text-base font-semibold text-text">Préférences cookies (démo)</h3>

                    <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-not-allowed opacity-60">
                            <input
                                type="checkbox"
                                checked={cookiePrefs.essential}
                                disabled
                                className="mt-0.5"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-text">Cookies essentiels</p>
                                <p className="text-xs text-muted">Toujours activés (nécessaires au fonctionnement)</p>
                            </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={cookiePrefs.analytics}
                                onChange={(e) =>
                                    setCookiePrefs({ ...cookiePrefs, analytics: e.target.checked })
                                }
                                className="mt-0.5"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-text">Mesure d&apos;audience</p>
                                <p className="text-xs text-muted">Statistiques anonymes d&apos;utilisation</p>
                            </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={cookiePrefs.marketing}
                                onChange={(e) =>
                                    setCookiePrefs({ ...cookiePrefs, marketing: e.target.checked })
                                }
                                className="mt-0.5"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-text">Marketing</p>
                                <p className="text-xs text-muted">Publicités personnalisées</p>
                            </div>
                        </label>
                    </div>

                    <p className="text-xs text-muted">
                        Mode démo : ces préférences ne déclenchent aucune collecte réelle.
                    </p>

                    {prefsSaved && (
                        <div className="card-soft p-3 border-l-4 border-brand" role="status">
                            <p className="text-sm text-text">✅ Préférences enregistrées (démo)</p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button variant="primary" onClick={handleSavePrefs}>
                            Enregistrer (démo)
                        </Button>
                        <Button variant="secondary" onClick={handleRejectAll}>
                            Tout refuser
                        </Button>
                    </div>
                </div>

                <a href="#sommaire" className="text-sm text-brand hover:underline inline-block">
                    ← Retour au sommaire
                </a>
            </section>

            {/* Footer Mode Demo */}
            <p className="text-xs text-muted text-center">
                Mode démo : ces contenus sont indicatifs. La version finale sera revue avec un conseiller juridique et alignée sur les obligations applicables en Algérie.
            </p>
        </div>
    )
}
