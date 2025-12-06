import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Header() {
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
                    <Link href="/" className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                        Accueil
                    </Link>
                    <Link href="/recherche" className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                        Trouver une voiture
                    </Link>
                    <Link href="#" className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                        Agences
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/account" className="hidden md:block text-sm font-medium text-brand-text hover:text-brand-accent transition-colors">
                        Mon compte
                    </Link>
                    <Link href="/agence/dashboard" className="hidden md:block text-sm font-medium text-brand-textMuted hover:text-brand-accent transition-colors px-3 py-1.5 border border-brand-accent/30 rounded-md">
                        Espace Agence
                    </Link>
                    <Button variant="primary" size="sm" className="hidden sm:inline-flex">
                        Voir les offres
                    </Button>
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
