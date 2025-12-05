import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Skeleton } from "@/components/ui/Skeleton"

export default function Home() {
    return (
        <div className="p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                        Emerald Road UI Kit
                    </h1>
                    <p className="text-brand-textMuted text-lg">
                        Composants de base pour EkriMenDarek.
                    </p>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">Boutons</h2>
                    <div className="flex flex-wrap gap-4 items-center p-6 bg-brand-surface rounded-xl border border-brand-border">
                        <Button variant="primary">Primary (Gradient)</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link Button</Button>
                        <Button variant="primary" isLoading>Loading</Button>
                        <Button variant="primary" disabled>Disabled</Button>
                    </div>
                </section>

                {/* Inputs */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">Formulaires</h2>
                    <div className="grid md:grid-cols-2 gap-6 p-6 bg-brand-surface rounded-xl border border-brand-border">
                        <Input label="Email Address" placeholder="exemple@ekrimendarek.dz" />
                        <Input label="Avec Erreur" placeholder="Erreur..." error="L'adresse email est invalide" />
                        <Textarea label="Commentaire" placeholder="Écrivez votre message..." className="md:col-span-2" />
                    </div>
                </section>

                {/* Cards & Badges */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">Cards & Badges</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle>Location Dacia Logan</CardTitle>
                                    <Badge variant="success">Disponible</Badge>
                                </div>
                                <p className="text-sm text-brand-textMuted">Tlemcen, Algérie</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-brand-text">Véhicule économique et robuste, idéal pour les routes locales. Climatisation incluse.</p>
                            </CardContent>
                            <CardFooter className="justify-between">
                                <span className="text-brand-accent font-bold text-lg">4500 DA<span className="text-brand-textMuted text-sm font-normal">/jour</span></span>
                                <Button size="sm">Réserver</Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-center items-center p-6 space-y-4">
                            <div className="flex gap-2">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="outline">Outline</Badge>
                            </div>
                            <div className="w-full space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </Card>
                    </div>
                </section>

            </div>
        </div>
    )
}
