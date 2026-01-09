"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import Link from "next/link"

/**
 * Page de santé DEV : vérification rapide des tokens, thèmes, et composants
 * Accessible uniquement en développement via /dev/health
 */
export default function DevHealthPage() {
    const [mounted, setMounted] = useState(false)
    const { theme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Tokens à afficher (swatches)
    const tokens = [
        { name: "bg", class: "bg-bg", desc: "Fond principal" },
        { name: "surface", class: "bg-surface", desc: "Surface cards" },
        { name: "surface2", class: "bg-surface2", desc: "Surface alt" },
        { name: "border", class: "bg-border", desc: "Bordures" },
        { name: "text", class: "bg-text", desc: "Texte principal" },
        { name: "muted", class: "bg-muted", desc: "Texte secondaire" },
        { name: "brand", class: "bg-brand", desc: "Primary emerald" },
        { name: "brand2", class: "bg-brand2", desc: "Secondary teal" },
        { name: "warning", class: "bg-warning", desc: "Amber warning" },
        { name: "danger", class: "bg-danger", desc: "Red error" },
    ]

    // Navigation sanity - pages clés
    const keyPages = [
        { label: "Home", path: "/" },
        { label: "Recherche", path: "/recherche" },
        { label: "Réservation", path: "/reservation" },
        { label: "Login", path: "/auth/login" },
        { label: "Account", path: "/account" },
    ]

    return (
        <div className="min-h-screen bg-bg">
            <div className="container-emd py-8 sm:py-12 space-y-8">
                {/* Header */}
                <header className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-text">Dev Health</h1>
                    <p className="text-muted text-sm sm:text-base">
                        Vérification rapide des tokens, thèmes, et composants UI
                    </p>
                </header>

                {/* Bloc 1: Theme */}
                <section className="card p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-text">Thème</h2>
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex-shrink-0">
                                <ThemeToggle />
                            </div>
                            {mounted && (
                                <div className="text-sm text-muted space-y-1">
                                    <p>
                                        <span className="font-medium text-text">Actif:</span>{" "}
                                        <span className="font-mono text-brand">{theme}</span>
                                    </p>
                                    <p>
                                        <span className="font-medium text-text">Résolu:</span>{" "}
                                        <span className="font-mono text-brand2">{resolvedTheme}</span>
                                    </p>
                                </div>
                            )}
                            {!mounted && (
                                <div className="text-sm text-muted">Chargement...</div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Bloc 2: Tokens */}
                <section className="card p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-text">Tokens EMD</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tokens.map((token) => (
                            <div
                                key={token.name}
                                className="card-soft p-4 space-y-2 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-lg ${token.class} border border-border shadow-sm flex-shrink-0`}
                                        aria-label={`Couleur ${token.name}`}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-mono text-sm font-semibold text-text truncate">
                                            --{token.name}
                                        </p>
                                        <p className="text-xs text-muted truncate">{token.desc}</p>
                                    </div>
                                </div>
                                <div
                                    className={`text-xs px-2 py-1 rounded border ${token.class === "bg-text" || token.class === "bg-bg"
                                        ? "text-white border-white/20"
                                        : "text-text border-border"
                                        }`}
                                    style={
                                        token.class === "bg-text" || token.class === "bg-bg"
                                            ? { backgroundColor: `rgb(var(--${token.name}))` }
                                            : {}
                                    }
                                >
                                    Sample text
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bloc 3: Components */}
                <section className="card p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-text">Composants UI</h2>

                    {/* Buttons */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                            Boutons
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="btn-primary">Primary</button>
                            <button className="btn-secondary">Secondary</button>
                            <button className="btn-ghost">Ghost</button>
                            <button className="btn-primary" disabled>
                                Disabled
                            </button>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                            Inputs
                        </h3>
                        <div className="space-y-4 max-w-md">
                            <div className="space-y-1">
                                <label htmlFor="input-normal" className="text-sm font-medium text-text">
                                    Normal input
                                </label>
                                <input
                                    id="input-normal"
                                    type="text"
                                    placeholder="Entrez du texte..."
                                    className="input"
                                />
                                <p className="help-text">Texte d&apos;aide normal</p>
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="input-error" className="text-sm font-medium text-text">
                                    Error input
                                </label>
                                <input
                                    id="input-error"
                                    type="text"
                                    placeholder="Input avec erreur..."
                                    className="input input-error"
                                    aria-invalid="true"
                                    aria-describedby="error-msg"
                                />
                                <p id="error-msg" className="error-text">
                                    Ce champ contient une erreur
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                            Badges
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="badge-brand">Brand</span>
                            <span className="badge-muted">Muted</span>
                            <span className="badge-warning">Warning</span>
                            <span className="badge-danger">Danger</span>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                            Cards
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                            <div className="card p-4">
                                <p className="font-medium text-text mb-1">Card</p>
                                <p className="text-sm text-muted">
                                    Carte avec bg-surface + border
                                </p>
                            </div>
                            <div className="card-soft p-4">
                                <p className="font-medium text-text mb-1">Card Soft</p>
                                <p className="text-sm text-muted">
                                    Carte avec bg-surface2 + border
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bloc 4: Navigation Sanity */}
                <section className="card p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-text">Navigation Sanity</h2>
                    <div className="space-y-3">
                        <p className="text-sm text-muted">
                            Cette page utilise le layout global. Header/Footer devraient être visibles.
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-text">Pages clés :</p>
                            <ul className="space-y-2">
                                {keyPages.map((page) => (
                                    <li key={page.path}>
                                        <Link
                                            href={page.path}
                                            className="link text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                                        >
                                            <span>→</span>
                                            <span>{page.label}</span>
                                            <span className="font-mono text-xs text-muted">
                                                {page.path}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Footer Info */}
                <footer className="text-center text-xs text-muted pt-8 border-t border-border">
                    <p>
                        🔧 Page de développement • ALGERENT Frontend • Next.js 14 + TailwindCSS
                    </p>
                </footer>
            </div>
        </div>
    )
}
