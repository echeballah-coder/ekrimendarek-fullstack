export interface Vehicle {
    id: string;
    title: string;
    type: 'Citadine' | 'Berline' | 'SUV' | 'Utilitaire' | 'Luxe' | 'Compacte';
    image: string; // URL placeholder
    pricePerDay: number; // En DZD
    rating: number;
    gearbox: 'Manuelle' | 'Automatique';
    fuel: 'Essence' | 'Diesel' | 'GPL' | 'Hybride' | 'Électrique';
    location: string;
    available: boolean;
    isVerified?: boolean;
    reviewCount?: number;
}

export const mockVehicles: Vehicle[] = [
    {
        id: '1',
        title: 'Dacia Sandero Stepway',
        type: 'Citadine',
        image: '/images/vehicles/stepway.jpg',
        pricePerDay: 5800,
        rating: 4.8,
        gearbox: 'Manuelle',
        fuel: 'Essence',
        location: 'Alger, Aéroport HB',
        available: true,
        isVerified: true,
        reviewCount: 42,
    },
    {
        id: '2',
        title: 'Renault Clio 5',
        type: 'Citadine',
        image: '/images/vehicles/clio5.jpg',
        pricePerDay: 6500,
        rating: 4.7,
        gearbox: 'Manuelle',
        fuel: 'Diesel',
        location: 'Oran, Centre-ville',
        available: true,
        isVerified: true,
        reviewCount: 98,
    },
    {
        id: '3',
        title: 'Hyundai Tucson',
        type: 'SUV',
        image: '/images/vehicles/tucson.jpg',
        pricePerDay: 14000,
        rating: 4.9,
        gearbox: 'Automatique',
        fuel: 'Diesel',
        location: 'Constantine, Aéroport',
        available: true,
        isVerified: true,
        reviewCount: 15,
    },
    {
        id: '4',
        title: 'Peugeot 301',
        type: 'Berline',
        image: '/images/vehicles/301.jpg',
        pricePerDay: 5000,
        rating: 4.5,
        gearbox: 'Manuelle',
        fuel: 'Essence',
        location: 'Sétif, Centre',
        available: true,
        reviewCount: 23,
    },
    {
        id: '5',
        title: 'Skoda Fabia',
        type: 'Citadine',
        image: '/images/vehicles/fabia.jpg',
        pricePerDay: 6200,
        rating: 4.6,
        gearbox: 'Automatique',
        fuel: 'Essence',
        location: 'Alger, Hydra',
        available: true,
        isVerified: true,
        reviewCount: 67,
    },
    {
        id: '6',
        title: 'Volkswagen Golf 8',
        type: 'Compacte',
        image: '/images/vehicles/golf8.jpg',
        pricePerDay: 12000,
        rating: 4.9,
        gearbox: 'Automatique',
        fuel: 'Diesel',
        location: 'Oran, Es-Senia',
        available: false,
        reviewCount: 8,
    },
    {
        id: '7',
        title: 'Toyota Hilux',
        type: 'Utilitaire',
        image: '/images/vehicles/hilux.jpg',
        pricePerDay: 18000,
        rating: 4.8,
        gearbox: 'Manuelle',
        fuel: 'Diesel',
        location: 'Hassi Messaoud',
        available: true,
        isVerified: true,
        reviewCount: 12,
    },
    {
        id: '8',
        title: 'Seat Ibiza',
        type: 'Citadine',
        image: '/images/vehicles/ibiza.jpg',
        pricePerDay: 6000,
        rating: 4.7,
        gearbox: 'Manuelle',
        fuel: 'Essence',
        location: 'Béjaïa, Aéroport',
        available: true,
        reviewCount: 56,
    }
];
