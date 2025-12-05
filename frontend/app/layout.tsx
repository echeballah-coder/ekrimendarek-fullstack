import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'EkriMenDarek - Location de voitures en Algérie',
    description: 'Plateforme de location de voitures simplifiée pour l\'Algérie',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body className={`${inter.variable} font-sans bg-brand-background text-brand-text antialiased`}>
                {children}
            </body>
        </html>
    )
}
