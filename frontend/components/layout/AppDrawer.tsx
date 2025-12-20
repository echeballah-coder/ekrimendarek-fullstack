"use client"

import { Drawer } from "./Drawer"

/**
 * AppDrawer - Menu drawer de l'application
 * 
 * Structure avec sections placeholders (Compte, Thème, FAQ, Paramètres)
 * Contenu métier sera ajouté progressivement dans les prochaines étapes
 */

export interface AppDrawerProps {
    open: boolean
    onClose: () => void
}

export function AppDrawer({ open, onClose }: AppDrawerProps) {
    return (
        <Drawer open={open} onClose={onClose} title="Menu">
            <div className="space-y-6">
                {/* Section 1: Compte */}
                <section className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        Compte
                    </h3>
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            Espace compte (à venir)
                        </p>
                    </div>
                </section>

                {/* Section 2: Thème */}
                <section className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand uppercase tracking-wide">
                        Thème
                    </h3>
                    <div className="card-soft p-4">
                        <p className="text-sm text-muted">
                            Toggle thème ici (P1.4)
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
