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
import { Inter } from 'next/font/google'
import './globals.css'

/** Configuration de la font Inter (Google Fonts) */
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

/** Métadonnées SEO de l'application */
export const metadata: Metadata = {
    title: 'EkriMenDarek - Location de voitures en Algérie',
    description: 'Plateforme de location de voitures simplifiée pour l\'Algérie',
}

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'sonner' // Provider de toasts globaux
import { ThemeProvider } from '@/components/theme/ThemeProvider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans bg-brand-background text-brand-text antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
                <ThemeProvider>
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <Toaster position="top-right" richColors />
                </ThemeProvider>
            </body>
        </html>
    )
}
