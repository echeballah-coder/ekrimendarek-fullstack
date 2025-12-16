"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

/**
 * Toggle pour changer le thème (Clair / Système / Sombre)
 * Évite les hydration mismatches avec mounted state
 */
export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Évite hydration mismatch : rien avant le mount
    if (!mounted) {
        return (
            <div className="flex gap-1 p-1 bg-surface2 rounded-xl border border-border">
                <div className="w-16 h-8" />
            </div>
        )
    }

    const themes = [
        { value: "light", label: "Clair", icon: "☀️" },
        { value: "system", label: "Sys", icon: "💻" },
        { value: "dark", label: "Sombre", icon: "🌙" },
    ]

    return (
        <div
            role="group"
            aria-label="Changer le thème"
            className="flex gap-1 p-1 bg-surface2 rounded-xl border border-border"
        >
            {themes.map(({ value, label, icon }) => {
                const isActive = theme === value
                return (
                    <button
                        key={value}
                        onClick={() => setTheme(value)}
                        aria-pressed={isActive}
                        className={`
                            px-2 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium
                            transition-all duration-200
                            flex items-center gap-1.5
                            ${isActive
                                ? "bg-brand/10 text-brand border border-brand/25"
                                : "text-muted hover:text-text hover:bg-surface"
                            }
                        `}
                    >
                        <span className="text-base sm:text-lg">{icon}</span>
                        <span className="hidden sm:inline">{label}</span>
                    </button>
                )
            })}
        </div>
    )
}
