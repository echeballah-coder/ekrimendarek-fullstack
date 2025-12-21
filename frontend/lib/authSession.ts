/**
 * Module de Gestion de Session Locale (Mode Démo)
 * 
 * ⚠️ MODE DÉMO : CECI N'EST PAS UNE AUTHENTIFICATION SÉCURISÉE
 * 
 * Ce module simule une authentification côté client uniquement via localStorage.
 * Il n'y a AUCUNE vérification serveur, AUCUN token JWT, AUCUNE sécurité réelle.
 * 
 * Usage :
 * - Pour prototypage et démonstration uniquement
 * - À remplacer par une vraie authentification avec backend avant production
 * 
 * Fonctions :
 * - getSession() : Récupère la session en cours
 * - setSession(session) : Enregistre une nouvelle session
 * - clearSession() : Déconnecte l'utilisateur
 */

/** Clé de stockage localStorage pour la session */
const SESSION_KEY = "ekrimendarek_auth_v1";

import { clearKycState } from "./kyc"
import { clearReservationDraft } from "./reservationDraft"

/** Structure de la session utilisateur */
export interface UserSession {
    email: string;
    fullName: string;
    role: "client" | "agency";
    createdAt: string;
}

/**
 * Récupère la session utilisateur actuelle
 * 
 * @returns Session utilisateur ou null si déconnecté
 * 
 * Protection SSR : Retourne null côté serveur
 */
export const getSession = (): UserSession | null => {
    if (typeof window === "undefined") return null;

    try {
        const stored = localStorage.getItem(SESSION_KEY);
        if (!stored) return null;

        const session = JSON.parse(stored) as UserSession;
        return session;
    } catch (error) {
        console.warn("Failed to parse session, clearing:", error);
        clearSession();
        return null;
    }
};

/**
 * Enregistre une nouvelle session utilisateur
 * 
 * @param session - Données de session à sauvegarder
 * 
 * Protection SSR : Ne fait rien côté serveur
 */
export const setSession = (session: UserSession): void => {
    if (typeof window === "undefined") return;

    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (error) {
        console.error("Failed to save session:", error);
    }
};

/**
 * Supprime la session utilisateur (déconnexion)
 * 
 * Protection SSR : Ne fait rien côté serveur
 */
export const clearSession = (): void => {
    if (typeof window === "undefined") return;

    try {
        localStorage.removeItem(SESSION_KEY);
        clearKycState(); // Purge KYC data on logout (demo)
        clearReservationDraft(); // Purge reservation draft on logout (demo)
    } catch (error) {
        console.error("Failed to clear session:", error);
    }
};

/**
 * Retourne le nom d'affichage de l'utilisateur (sans exposer l'email)
 * 
 * @param session - Session utilisateur
 * @returns Nom d'affichage (fullName si disponible, sinon "Utilisateur")
 */
export const getUserDisplayName = (session: UserSession | null): string => {
    if (!session) return "";

    // Priorité 1: fullName si disponible
    if (session.fullName && session.fullName.trim()) {
        return session.fullName.trim();
    }

    // Fallback: ne pas exposer l'email, retourner "Utilisateur"
    return "Utilisateur";
};
