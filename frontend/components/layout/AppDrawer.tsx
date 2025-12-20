"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Drawer } from "./Drawer"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { getSession, clearSession, getUserDisplayName, UserSession } from "@/lib/authSession"
import { ROUTES } from "@/lib/routes"
import { toast } from "sonner"

/**
 * AppDrawer - Menu drawer de l'application
 * 
 * Structure avec sections: Compte (auth logique), Thème, FAQ, Paramètres
 */

export interface AppDrawerProps {
    open: boolean
    onClose: () => void
}

export function AppDrawer({ open, onClose }: AppDrawerProps) {
    const router = useRouter()
    const [session, setSession] = useState<UserSession | null>(null)

    useEffect(() => {
        if (open) {
            setSession(getSession())
        }
    }, [open])

    const handleLogout = () => {
        clearSession()
        setSession(null)
        toast.success("Déconnexion réussie")
        onClose()
        router.push("/")
    }

    const handleNavigate = (href: string) => {
        onClose() // Fermer le drawer après navigation
        router.push(href)
    }

    return (
        <Drawer open={open} onClose={onClose} title="Menu">
            <div className="space-y-6">
                {/* Section 1: Compte */}
                <section className="space-y-3">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        Compte
                    </h3>
                    <div className="card-soft p-4 space-y-3">
                        {session ? (
                            // Connecté
                            <>
                                <div className="flex items-center gap-2">
                                    <span className="badge-brand text-xs">Connecté</span>
                                    <span className="text-sm text-text">
                                        Bienvenue, <span className="font-medium">{getUserDisplayName(session)}</span>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => handleNavigate(ROUTES.ACCOUNT)}
                                        className="btn-primary w-full"
                                    >
                                        Accéder à mon compte
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="btn-ghost w-full"
                                    >
                                        Déconnexion
                                    </button>
                                </div>
                            </>
                        ) : (
                            // Déconnecté
                            <>
                                <p className="text-sm text-muted">
                                    Connectez-vous pour gérer vos réservations.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => handleNavigate(ROUTES.AUTH_LOGIN)}
                                        className="btn-primary w-full"
                                    >
                                        Connexion/Adhésion
                                    </button>
                                    <button
                                        onClick={() => handleNavigate(ROUTES.AUTH_SIGNUP)}
                                        className="btn-secondary w-full"
                                    >
                                        Créer un compte
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Section 2: Thème */}
                <section className="space-y-3">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        Thème
                    </h3>
                    <div className="card-soft p-4 space-y-3">
                        <ThemeToggle />
                        <p className="text-xs text-muted">
                            Choisissez l&apos;apparence du site.
                        </p>
                    </div>
                </section>

                {/* Section 3: FAQ */}
                <section className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        FAQ
                    </h3>
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            Questions fréquentes (à venir)
                        </p>
                    </div>
                </section>

                {/* Section 4: Paramètres */}
                <section className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        Paramètres
                    </h3>
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            Paramètres (à venir)
                        </p>
                    </div>
                </section>
            </div>
        </Drawer>
    )
}
