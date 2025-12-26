import Link from "next/link"
import { ROUTES } from "@/lib/routes"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

export function Footer() {
    return (
        <footer className="bg-lovable-surface-elevated border-t-2 border-lovable-primary/20 mt-auto shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            <div className="container-emd py-10 sm:py-12 space-y-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Col 1: Brand */}
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <Logo variant="auto" width={48} height={48} />
                            <p className="text-sm text-muted leading-relaxed">
                                Location de véhicules simple, transparente, et accessible en Algérie.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <Mail className="w-4 h-4 text-brand" />
                                <a href="mailto:support@ekrimendarek.dz" className="link">
                                    support@ekrimendarek.dz
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <Phone className="w-4 h-4 text-brand" />
                                <span>+213 ... (à définir)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <MapPin className="w-4 h-4 text-brand" />
                                <span>Algérie</span>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-muted hover:text-brand transition-colors focus-visible:ring-2 focus-visible:ring-brand2 rounded"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-muted hover:text-brand transition-colors focus-visible:ring-2 focus-visible:ring-brand2 rounded"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-xs text-muted pt-2">
                            Mode démo : certaines données sont indicatives.
                        </p>
                    </div>

                    {/* Col 2: Réservation */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text">Réservation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={ROUTES.RESERVATION_START} className="link text-sm">
                                    Commencer une réservation
                                </Link>
                            </li>
                            <li>
                                <Link href={ROUTES.RESERVATION_MANAGE} className="link text-sm">
                                    Gérer une réservation
                                </Link>
                            </li>
                            <li>
                                <Link href={ROUTES.RECEIPT} className="link text-sm">
                                    Obtenir un reçu
                                </Link>
                            </li>
                            <li>
                                <Link href={ROUTES.VEHICLES} className="link text-sm">
                                    Parcourir véhicules
                                </Link>
                            </li>
                            <li>
                                <Link href={ROUTES.LOCATIONS} className="link text-sm">
                                    Trouver une agence
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Support */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/aide" className="link text-sm">
                                    Aide & FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="link text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Légal & Documentation */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text">Légal & Documentation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={ROUTES.LEGAL} className="link text-sm">
                                    Conditions & confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href={ROUTES.DOCUMENTATION} className="link text-sm">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
                        <p>© 2025 EkriMenDarek — Tous droits réservés.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/aide" className="link text-xs">
                                Aide
                            </Link>
                            <Link href="/contact" className="link text-xs">
                                Contact
                            </Link>
                            <Link href={ROUTES.LEGAL} className="link text-xs">
                                Légal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
