/**
 * Module de Persistance Locale des Réservations
 * 
 * Ce module gère la sauvegarde et la récupération des réservations
 * dans le localStorage du navigateur pour simuler une persistance
 * côté client sans backend.
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

/**
 * Récupère toutes les réservations sauvegardées localement
 * 
 * @returns Tableau de réservations (vide si aucune ou erreur)
 * 
 * Protection SSR : Retourne un tableau vide côté serveur
 * Gestion d'erreur : Parse JSON sécurisé avec try/catch
 */
export const getLocalBookings = (): Booking[] => {
    // Protection SSR : localStorage n'existe que côté client
    if (typeof window === "undefined") return [];

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Failed to parse local bookings:", error);
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
 * - Sauvegarde le tout dans localStorage
 * 
 * Protection SSR : Ne fait rien côté serveur
 */
export const saveBooking = (booking: Booking): void => {
    if (typeof window === "undefined") return;

    try {
        const currentBookings = getLocalBookings();
        const updatedBookings = [...currentBookings, booking];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
    } catch (error) {
        console.error("Failed to save local booking:", error);
    }
};
