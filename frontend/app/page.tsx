import { SearchBar } from "@/features/search/components/SearchBar"
import Link from "next/link"
import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import { AnimatedSection } from "@/components/animations/AnimatedSection"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <AnimatedSection className="relative px-4 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-brand-background pointer-events-none" />

                <div className="container mx-auto text-center relative z-10 space-y-8">
                    <Badge variant="secondary" className="mb-4">
                        Nouveau : Paiement sécurisé par CIB / Edahabia
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text max-w-4xl mx-auto">
                        Louez une voiture facilement <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-brand-gradient">partout en Algérie</span>
                    </h1>

                    <p className="text-xl text-brand-textMuted max-w-2xl mx-auto">
                        Plus de 500 agences vérifiées. Réservez en toute confiance avec un acompte sécurisé.
                    </p>

                    <div className="pt-8">
                        <SearchBar />
                    </div>
                </div>
            </AnimatedSection>

            {/* Comment ça marche */}
            <AnimatedSection delay={0.1} className="py-16 bg-brand-surface border-y border-brand-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-text mb-4">Comment ça marche ?</h2>
                        <p className="text-brand-textMuted">Louer une voiture n&apos;a jamais été aussi simple.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "1. Cherchez", desc: "Trouvez le véhicule idéal parmi des milliers d'offres." },
                            { title: "2. Réservez", desc: "Bloquez le véhicule avec un petit acompte sécurisé." },
                            { title: "3. Roulez", desc: "Récupérez les clés chez l'agence et profitez !" }
                        ].map((step, i) => (
                            <div key={i} className="text-center space-y-4">
                                <div className="w-12 h-12 rounded-full bg-brand-accentSoft text-brand-accent flex items-center justify-center text-xl font-bold mx-auto">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-brand-text">{step.title}</h3>
                                <p className="text-brand-textMuted">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Pourquoi nous choisir */}
            <AnimatedSection delay={0.2} className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-text mb-4">Pourquoi choisir EkriMenDarek ?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Agences Vérifiées", desc: "Nous vérifions l'identité de chaque loueur." },
                            { title: "Prix Transparents", desc: "Pas de frais cachés, vous payez ce que vous voyez." },
                            { title: "Support Local", desc: "Une équipe basée en Algérie à votre écoute 7j/7." },
                            { title: "Acompte Sécurisé", desc: "Votre réservation est garantie par notre plateforme." }
                        ].map((feature, i) => (
                            <Card key={i} className="border-brand-border/50 hover:border-brand-accent/50 transition-colors">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-brand-text mb-2">{feature.title}</h3>
                                    <p className="text-sm text-brand-textMuted">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/recherche" className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.lg)}>
                            Voir toutes les offres
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

        </div>
    )
}
