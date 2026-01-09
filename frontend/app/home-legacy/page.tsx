import { SearchBar } from "@/features/search/components/SearchBar"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { HeroTitleAnimated } from "@/components/home/HeroTitleAnimated"
import { cn } from "@/lib/utils"

export default function HomeLegacy() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Legacy Warning Banner */}
            <div className="bg-yellow-50 border-b border-yellow-200 p-6 text-center shadow-inner">
                <div className="container-emd flex flex-col items-center gap-4">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-400 px-3 py-1 text-xs uppercase tracking-widest font-bold">
                        Legacy
                    </Badge>
                    <h1 className="text-2xl font-bold text-yellow-900">
                        Accueil (ancienne version)
                    </h1>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/">
                            <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                                Aller à la nouvelle Home
                            </Button>
                        </Link>
                        <Link href="/recherche">
                            <Button variant="outline" size="sm" className="border-yellow-600 text-yellow-700 hover:bg-yellow-100">
                                Aller à la recherche
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Original Home Content */}
            <div className="opacity-75 pointer-events-none select-none filter grayscale-[0.3]">
                {/* Hero Section Premium */}
                <section className="relative px-4 py-16 lg:py-24 overflow-hidden hero-gradient-bg">
                    <div className="container-emd relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Gauche : Contenu principal */}
                            <AnimatedSection className="hero-panel space-y-6">
                                <Badge className="badge-brand">
                                    Tiers de confiance • Réservation sécurisée
                                </Badge>

                                <HeroTitleAnimated />

                                <p className="text-lg text-muted">
                                    Agences vérifiées, acompte 5% en ligne, solde sur place.<br />
                                    Conditions claires et support réactif.
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href="/recherche">
                                        <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                            Trouver une voiture
                                        </Button>
                                    </Link>
                                    <Link href="/comment-ca-marche">
                                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                            Comment ça marche ?
                                        </Button>
                                    </Link>
                                </div>

                                {/* Trust line */}
                                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-muted">
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand">✓</span>
                                        <span>Acompte 5%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand">✓</span>
                                        <span>Paiement sécurisé</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand">✓</span>
                                        <span>Annulation encadrée</span>
                                    </div>
                                </div>

                                {/* SearchBar intégrée */}
                                <div className="pt-6">
                                    <SearchBar />
                                </div>
                            </AnimatedSection>

                            {/* Droite : Card suggestion */}
                            <AnimatedSection delay={0.2} className="hidden lg:block">
                                <Card className="card border-border/50 shadow-lg">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-brandSoft flex items-center justify-center text-brand text-2xl">
                                                🚗
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-text">Suggestion populaire</h3>
                                                <p className="text-sm text-muted">Alger - Constantine</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Durée moyenne</span>
                                                <span className="font-medium text-text">3-5 jours</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Prix moyen/jour</span>
                                                <span className="font-medium text-text">5 800 DA</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted">Catégorie populaire</span>
                                                <span className="font-medium text-text">Citadine</span>
                                            </div>
                                        </div>
                                        <Link href="/recherche?wilaya=alger">
                                            <Button variant="ghost" size="sm" className="w-full">
                                                Voir les offres →
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Comment ça marche */}
                <AnimatedSection delay={0.1} className="py-16 bg-surface border-y border-border">
                    <div className="container-emd">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-text mb-4">Comment ça marche ?</h2>
                            <p className="text-muted">Louer une voiture n&apos;a jamais été aussi simple.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "1. Cherchez", desc: "Trouvez le véhicule idéal parmi des milliers d'offres en Algérie." },
                                { title: "2. Réservez", desc: "Bloquez le véhicule avec un petit acompte sécurisé (5%)." },
                                { title: "3. Roulez", desc: "Payez le reste en agence et profitez de la route !" }
                            ].map((step, i) => (
                                <div key={i} className="text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-brandSoft text-brand flex items-center justify-center text-xl font-bold mx-auto">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                                    <p className="text-muted">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Pourquoi nous choisir */}
                <AnimatedSection delay={0.2} className="py-16">
                    <div className="container-emd">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-text mb-4">Pourquoi choisir ALGERENT ?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Agences Vérifiées", desc: "Nous vérifions l'identité et le registre de commerce de chaque loueur." },
                                { title: "Prix en Dinar (DZD)", desc: "Transparence totale, payez en monnaie locale sans frais cachés." },
                                { title: "Support Local", desc: "Une équipe basée à Alger à votre écoute 7j/7." },
                                { title: "Acompte CIB/Edahabia", desc: "Paiement sécurisé avec vos cartes nationales." }
                            ].map((feature, i) => (
                                <Card key={i} className="card-soft border-border/50 hover:border-brand/50 transition-colors">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold text-text mb-2">{feature.title}</h3>
                                        <p className="text-sm text-muted">{feature.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}
