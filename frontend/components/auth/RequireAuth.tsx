"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getSession, UserSession } from "@/lib/authSession"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Skeleton } from "@/components/ui/Skeleton"

interface RequireAuthProps {
    children: React.ReactNode
}

/**
 * Composant de garde d'authentification (mode démo)
 * 
 * Vérifie si l'utilisateur a une session active.
 * - Si session absente : affiche un message "Accès réservé" avec CTA login/signup
 * - Si session présente : affiche les children
 * 
 * ⚠️ MODE DÉMO : Vérification client-side uniquement, pas de sécurité réelle
 */
export function RequireAuth({ children }: RequireAuthProps) {
    const [session, setSession] = useState<UserSession | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check session on mount
        const currentSession = getSession()
        setSession(currentSession)
        setIsLoading(false)
    }, [])

    // Loading state: show skeleton to prevent flash
    if (isLoading) {
        return (
            <div className="min-h-screen bg-brand-background flex items-center justify-center px-4 py-12">
                <Card className="w-full max-w-md border-brand-border">
                    <CardHeader>
                        <Skeleton className="h-8 w-48 mx-auto" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
            </div>
        )
    }

    // No session: show access denied UI
    if (!session) {
        return (
            <div className="min-h-screen bg-brand-background flex items-center justify-center px-4 py-12">
                <Card className="w-full max-w-md border-brand-border">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Accès réservé</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-center text-brand-textMuted">
                            Connectez-vous pour accéder à votre espace client.
                        </p>

                        <div className="space-y-3">
                            <Link href="/auth/login" className="block">
                                <Button variant="primary" size="lg" className="w-full">
                                    Connexion
                                </Button>
                            </Link>

                            <Link href="/auth/signup" className="block">
                                <Button variant="secondary" size="lg" className="w-full">
                                    Créer un compte
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-4 border-t border-brand-border/50">
                            <p className="text-xs text-center text-brand-textMuted">
                                Vous avez déjà un compte ? Utilisez vos identifiants pour vous connecter.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // Session present: render children
    return <>{children}</>
}
