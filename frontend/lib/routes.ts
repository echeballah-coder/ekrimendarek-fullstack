/**
 * Routes centralisées - Source unique de vérité
 * 
 * Ce fichier centralise toutes les routes de l'application avec des labels
 * enterprise-like (verbe + objet) pour standardiser la navigation.
 */

/**
 * Type pour un item de navigation
 */
export interface RouteItem {
    label: string
    href: string
    icon?: string // Optionnel, pour usage futur avec lucide-react
}

/**
 * ROUTES - Tous les chemins de l'application
 * Organisés par section pour faciliter la maintenance
 */
export const ROUTES = {
    // Pages principales
    HOME: "/",
    HOW_IT_WORKS: "/comment-ca-marche",
    SEARCH: "/recherche",
    VEHICLES: "/vehicules",

    // Réservation
    RESERVATION_START: "/reservation/start",
    RESERVATION_MANAGE: "/reservation/manage",
    RESERVATION: "/reservation",

    // Agences & Locations
    LOCATIONS: "/locations",
    AGENCY_DASHBOARD: "/agence/dashboard",

    // Authentification
    AUTH_LOGIN: "/auth/login",
    AUTH_SIGNUP: "/auth/signup",

    // Compte
    ACCOUNT: "/account",

    // Légal
    LEGAL: "/legal",

    // Reçu
    RECEIPT: "/receipt",

    // Documentation
    DOCUMENTATION: "/documentation",

    // Véhicule détail (fonction helper)
    vehicleDetail: (id: string | number) => `/vehicule/${id}`,

    // Dev (internal)
    DEV_HEALTH: "/dev/health",
} as const

/**
 * NAV_PRIMARY - Navigation principale (3 items)
 * Liens visibles dans le header pour tous les utilisateurs
 */
export const NAV_PRIMARY: RouteItem[] = [
    {
        label: "Accueil",
        href: ROUTES.HOME,
    },
    {
        label: "Comment ça marche",
        href: ROUTES.HOW_IT_WORKS,
    },
    {
        label: "Louer une voiture",
        href: ROUTES.RESERVATION_START,
    },
]

/**
 * UTIL_CTA - Call-to-Actions utilitaires (4 items)
 * Actions persistantes disponibles dans header/drawer
 * Labels au format "Verbe + Objet" (enterprise-like)
 */
export const UTIL_CTA: RouteItem[] = [
    {
        label: "Commencer une réservation",
        href: ROUTES.RESERVATION_START,
    },
    {
        label: "Gérer une réservation",
        href: ROUTES.RESERVATION_MANAGE,
    },
    {
        label: "Trouver une agence",
        href: ROUTES.LOCATIONS,
    },
    {
        label: "Parcourir véhicules",
        href: ROUTES.VEHICLES,
    },
]

/**
 * Helpers pour vérifier les routes actives
 */
export const isActivePath = (currentPath: string, targetPath: string): boolean => {
    return currentPath === targetPath
}

export const isActiveSection = (currentPath: string, sectionPrefix: string): boolean => {
    return currentPath.startsWith(sectionPrefix)
}
