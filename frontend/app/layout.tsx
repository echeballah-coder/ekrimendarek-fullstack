/**
 * Layout Racine de l'Application EkriMenDarek
 * 
 * Ce fichier définit la structure globale de toutes les pages :
 * - Métadonnées SEO
 * - Configuration des fonts (Inter)
 * - Structure HTML/Body
 * - Header/Footer communs
 * - Provider de notifications (Sonner Toaster)
 * 
 * Note : Ce layout est appliqué à TOUTES les pages de l'app
 */

import type { Metadata } from 'next'
import { DM_Serif_Display, Fraunces } from 'next/font/google'
import './globals.css'

/** Configuration des fonts Google Fonts */
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }) // Deprecated: Replaced by Fraunces
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-ui' })

/** Métadonnées SEO de l'application */
export const metadata: Metadata = {
    title: 'EkriMenDarek - Location de voitures en Algérie',
    description: 'Plateforme de location de voitures simplifiée pour l\'Algérie',
}

import { LovableHeader } from '@/components/layout/LovableHeader'
import { LovableFooter } from '@/components/layout/LovableFooter'
import { Toaster } from 'sonner' // Provider de toasts globaux
import { ThemeProvider } from '@/components/theme/ThemeProvider'

import { HeaderSpacer } from '@/components/layout/HeaderSpacer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${dmSerif.variable} ${fraunces.variable} font-ui bg-bg text-text antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
                <ThemeProvider>
                    <LovableHeader />
                    <HeaderSpacer />
                    <main className="flex-1">
                        {children}
                    </main>
                    <LovableFooter />
                    <Toaster position="top-right" richColors />
                </ThemeProvider>
            </body>
        </html>
    )
}
