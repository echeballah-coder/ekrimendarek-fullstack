/**
 * Layout racine de l'application ALGERENT
 *
 * Ce fichier definit la structure globale de toutes les pages :
 * - Metadonnees SEO
 * - Configuration des fonts
 * - Structure HTML/Body
 * - Header/Footer communs
 * - Provider de notifications (Sonner Toaster)
 *
 * Note : ce layout est applique a toutes les pages de l'app
 */

import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";

/** Configuration des fonts Google Fonts */
const interUi = Manrope({ subsets: ["latin"], variable: "--font-ui" });
const interDisplay = DM_Serif_Display({ subsets: ["latin"], variable: "--font-display", weight: "400" });

/** Metadonnees SEO de l'application */
export const metadata: Metadata = {
    title: "ALGERENT - Location de voitures en Algérie",
    description: "Plateforme de location de voitures simplifiée pour l'Algérie",
};

import { LovableHeader } from "@/components/layout/LovableHeader";
import { LovableFooter } from "@/components/layout/LovableFooter";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { HeaderSpacer } from "@/components/layout/HeaderSpacer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                className={`${interUi.variable} ${interDisplay.variable} font-ui bg-bg text-text antialiased min-h-screen flex flex-col`}
                suppressHydrationWarning
            >
                <ThemeProvider>
                    <LovableHeader />
                    <HeaderSpacer />
                    <main className="flex-1">{children}</main>
                    <LovableFooter />
                    <Toaster position="top-right" richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
