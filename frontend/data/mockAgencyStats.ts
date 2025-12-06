/**
 * Données Mock pour le Dashboard Agence (B2B)
 * 
 * Ce fichier contient toutes les données simulées pour le tableau de bord
 * des agences de location. Utilisé uniquement pour la démonstration.
 * 
 * Contenu :
 * - AgencyStats : Métriques clés (revenus, réservations, taux)
 * - MonthlyRevenue : Historique des revenus pour graphique
 * - RecentBooking : Réservations récentes pour tableau
 * 
 * Note : Les chiffres sont réalistes mais fictifs (ordres de grandeur DZD)
 */

export interface AgencyStats {
    totalRevenueMonth: number;      // Revenus totaux du mois (DZD)
    bookingsThisMonth: number;       // Nombre de réservations actives
    fleetUtilization: number;        // Taux d'occupation de la flotte (%)
    kycCompletionRate: number;       // Taux de complétion KYC clients (%)
}

export interface MonthlyRevenue {
    month: string;                   // Nom du mois (court)
    revenue: number;                 // Revenu du mois (DZD)
}

export interface RecentBooking {
    id: string;                      // Référence unique (ex: RES-DZ-2024-201)
    vehicleTitle: string;            // Nom du véhicule
    clientName: string;              // Initiales/Prénom du client
    startDate: string;               // Date début (ISO format)
    endDate: string;                 // Date fin (ISO format)
    status: 'PENDING_PAYMENT' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
    totalAmount: number;             // Montant total (DZD)
}

export const mockAgencyStats: AgencyStats = {
    totalRevenueMonth: 1250000, // DZD
    bookingsThisMonth: 42,
    fleetUtilization: 78, // %
    kycCompletionRate: 92, // %
};

export const mockMonthlyRevenue: MonthlyRevenue[] = [
    { month: 'Juil', revenue: 890000 },
    { month: 'Août', revenue: 1050000 },
    { month: 'Sept', revenue: 980000 },
    { month: 'Oct', revenue: 1120000 },
    { month: 'Nov', revenue: 1180000 },
    { month: 'Déc', revenue: 1250000 },
];

export const mockRecentBookings: RecentBooking[] = [
    {
        id: 'RES-DZ-2024-201',
        vehicleTitle: 'Dacia Sandero Stepway',
        clientName: 'Ahmed K.',
        startDate: '2024-12-20',
        endDate: '2024-12-25',
        status: 'CONFIRMED',
        totalAmount: 29000,
    },
    {
        id: 'RES-DZ-2024-202',
        vehicleTitle: 'Hyundai Tucson',
        clientName: 'Fatima B.',
        startDate: '2024-12-18',
        endDate: '2024-12-22',
        status: 'CONFIRMED',
        totalAmount: 56000,
    },
    {
        id: 'RES-DZ-2024-203',
        vehicleTitle: 'Renault Clio 5',
        clientName: 'Karim M.',
        startDate: '2024-12-21',
        endDate: '2024-12-23',
        status: 'PENDING_PAYMENT',
        totalAmount: 13000,
    },
    {
        id: 'RES-DZ-2024-204',
        vehicleTitle: 'Peugeot 301',
        clientName: 'Lina T.',
        startDate: '2024-12-15',
        endDate: '2024-12-20',
        status: 'COMPLETED',
        totalAmount: 25000,
    },
    {
        id: 'RES-DZ-2024-205',
        vehicleTitle: 'Toyota Hilux',
        clientName: 'Yacine S.',
        startDate: '2024-12-22',
        endDate: '2024-12-29',
        status: 'CONFIRMED',
        totalAmount: 126000,
    },
    {
        id: 'RES-DZ-2024-206',
        vehicleTitle: 'Skoda Fabia',
        clientName: 'Sarah D.',
        startDate: '2024-12-19',
        endDate: '2024-12-21',
        status: 'PENDING_PAYMENT',
        totalAmount: 12400,
    },
    {
        id: 'RES-DZ-2024-207',
        vehicleTitle: 'Seat Ibiza',
        clientName: 'Mehdi L.',
        startDate: '2024-12-14',
        endDate: '2024-12-16',
        status: 'COMPLETED',
        totalAmount: 12000,
    },
    {
        id: 'RES-DZ-2024-208',
        vehicleTitle: 'Hyundai Tucson',
        clientName: 'Amina R.',
        startDate: '2024-12-23',
        endDate: '2024-12-30',
        status: 'CONFIRMED',
        totalAmount: 98000,
    },
];
