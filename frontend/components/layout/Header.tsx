"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { getSession, clearSession, UserSession } from "@/lib/authSession"
import { toast } from "sonner"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { NAV_PRIMARY, isActivePath } from "@/lib/routes"

export function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const [session, setSession] = useState<UserSession | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setSession(getSession())
    }, [])

    const handleLogout = () => {
        clearSession()
        setSession(null)
        toast.success("Déconnexion réussie")
        router.push("/")
    }

    // Prevent hydration issues
    if (!mounted) return null

    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-surface/95 backdrop-blur supports-[backdrop-filter]:bg-brand-surface/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight text-brand-accent">
                        EkriMenDarek
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_PRIMARY.map((item) => {
                        const isActive = isActivePath(pathname, item.href)
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative pb-1 ${isActive
                                        ? "text-brand-accent"
                                        : "text-brand-text hover:text-brand-accent"
                                    }`}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    {session ? (
                        // Connecté
                        <>
                            <span className="hidden lg:block text-sm text-brand-textMuted">
                                Bonjour, <span className="font-medium text-brand-text">{session.fullName || session.email}</span>
                            </span>
                            <Link href="/account" className="hidden md:block text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                                Mon compte
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="hidden md:block text-sm font-medium text-brand-textMuted hover:text-brand-error transition-colors"
                            >
                                Déconnexion
                            </button>
                        </>
                    ) : (
                        // Déconnecté
                        <>
                            <Link href="/auth/login" className="hidden md:block text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                                Connexion
                            </Link>
                            <Link href="/auth/signup">
                                <Button variant="primary" size="sm" className="hidden sm:inline-flex">
                                    Inscription
                                </Button>
                            </Link>
                        </>
                    )}

                    <Link href="/agence/dashboard" className="hidden md:block text-sm font-medium text-brand-textMuted hover:text-brand-accent transition-colors px-3 py-1.5 border border-brand-accent/30 rounded-md">
                        Espace Agence
                    </Link>

                    {/* Mobile Menu Placeholder - Simple Icon for now */}
                    <button className="md:hidden text-brand-text p-2">
                        <span className="sr-only">Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
