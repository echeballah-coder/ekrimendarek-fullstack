/**
 * Module de Persistance Locale des Réservations avec Versioning
 * 
 * Ce module gère la sauvegarde et la récupération des réservations
 * dans le localStorage du navigateur pour simuler une persistance
 * côté client sans backend.
 * 
 * Format versionné :
 * - { version: 1, items: Booking[] }
 * 
 * Migration automatique :
 * - Si ancien format (Booking[]) détecté, migration transparente vers v1
 * - Si JSON invalide, réinitialisation propre avec warning
 * 
 * Utilisation :
 * - getLocalBookings() : Récupère toutes les réservations sauvegardées
 * - saveBooking(booking) : Ajoute une nouvelle réservation
 * 
 * Note : Compatible SSR Next.js (vérifie si window existe)
 */

import { Booking } from "@/data/mockBookings";

/** Clé utilisée dans localStorage pour stocker les réservations */
const STORAGE_KEY = "ekrimendarek_bookings";

/** Version actuelle du schéma de stockage */
const STORAGE_VERSION = 1;

/** Structure versionnée du stockage */
interface BookingsStorage {
    version: number;
    items: Booking[];
}

/**
 * Récupère toutes les réservations sauvegardées localement
 * 
 * @returns Tableau de réservations (vide si aucune ou erreur)
 * 
 * Protection SSR : Retourne un tableau vide côté serveur
 * Gestion d'erreur : Parse JSON sécurisé avec try/catch
 * Migration : Convertit automatiquement l'ancien format (Booking[]) vers v1
 */
export const getLocalBookings = (): Booking[] => {
    // Protection SSR : localStorage n'existe que côté client
    if (typeof window === "undefined") return [];

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];

        const parsed = JSON.parse(stored);

        // Migration : ancien format (tableau brut) vers nouveau format versionné
        if (Array.isArray(parsed)) {
            console.warn("Migrating bookings from legacy format to v1");
            const migratedStorage: BookingsStorage = {
                version: STORAGE_VERSION,
                items: parsed
            };
            // Réécrire immédiatement au nouveau format
            localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedStorage));
            return parsed;
        }

        // Format versionné
        if (parsed.version === STORAGE_VERSION && Array.isArray(parsed.items)) {
            return parsed.items;
        }

        // Format inconnu ou version future non supportée
        console.warn("Unknown bookings storage format, resetting to empty");
        return [];

    } catch (error) {
        console.warn("Failed to parse local bookings, resetting storage:", error);
        // Réinitialiser proprement en cas d'erreur
        try {
            const emptyStorage: BookingsStorage = {
                version: STORAGE_VERSION,
                items: []
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyStorage));
        } catch (resetError) {
            console.error("Failed to reset storage:", resetError);
        }
        return [];
    }
};

/**
 * Sauvegarde une nouvelle réservation dans localStorage
 * 
 * @param booking - Objet réservation à sauvegarder
 * 
 * Comportement :
 * - Charge les réservations existantes
 * - Ajoute la nouvelle à la fin du tableau
 * - Sauvegarde le tout dans localStorage au format versionné
 * 
 * Protection SSR : Ne fait rien côté serveur
 */
export const saveBooking = (booking: Booking): void => {
    if (typeof window === "undefined") return;

    try {
        const currentBookings = getLocalBookings();
        const updatedBookings = [...currentBookings, booking];

        const storage: BookingsStorage = {
            version: STORAGE_VERSION,
            items: updatedBookings
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    } catch (error) {
        console.error("Failed to save local booking:", error);
    }
};
