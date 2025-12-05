import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-brand-border bg-brand-surface">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-brand-accent">EkriMenDarek</h3>
                        <p className="text-sm text-brand-textMuted mt-1">
                            Plateforme de location de voitures en Algérie.
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        <Link href="#" className="text-sm text-brand-textMuted hover:text-brand-accent transition-colors">
                            À propos
                        </Link>
                        <Link href="#" className="text-sm text-brand-textMuted hover:text-brand-accent transition-colors">
                            CGU
                        </Link>
                        <Link href="#" className="text-sm text-brand-textMuted hover:text-brand-accent transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="#" className="text-sm text-brand-textMuted hover:text-brand-accent transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>

                <div className="mt-8 border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-brand-textMuted text-center md:text-left">
                        &copy; {new Date().getFullYear()} EkriMenDarek. Tous droits réservés.
                    </p>
                    <p className="text-xs text-brand-textMuted flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-success"></span>
                        Paiement sécurisé (CIB / Edahabia bientôt)
                    </p>
                </div>
            </div>
        </footer>
    )
}
