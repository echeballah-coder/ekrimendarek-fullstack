export interface Vehicle {
    id: string
    title: string
    location: string
    pricePerDay: number
    imageUrl: string
    gearbox: 'Manuelle' | 'Automatique'
    fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Electrique'
    rating: number
    reviewCount: number
    isVerified: boolean
}

export const mockVehicles: Vehicle[] = [
    {
        id: '1',
        title: 'Dacia Logan',
        location: 'Tlemcen',
        pricePerDay: 4500,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Dacia+Logan',
        gearbox: 'Manuelle',
        fuel: 'Essence',
        rating: 4.8,
        reviewCount: 24,
        isVerified: true
    },
    {
        id: '2',
        title: 'Renault Clio 4',
        location: 'Alger',
        pricePerDay: 5500,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Clio+4',
        gearbox: 'Manuelle',
        fuel: 'Diesel',
        rating: 4.5,
        reviewCount: 12,
        isVerified: true
    },
    {
        id: '3',
        title: 'Peugeot 208',
        location: 'Oran',
        pricePerDay: 6000,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Peugeot+208',
        gearbox: 'Automatique',
        fuel: 'Essence',
        rating: 4.9,
        reviewCount: 8,
        isVerified: false
    },
    {
        id: '4',
        title: 'Volkswagen Golf 7',
        location: 'Constantine',
        pricePerDay: 9000,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Golf+7',
        gearbox: 'Automatique',
        fuel: 'Diesel',
        rating: 4.7,
        reviewCount: 32,
        isVerified: true
    },
    {
        id: '5',
        title: 'Hyundai Accent',
        location: 'Setif',
        pricePerDay: 5000,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Hyundai+Accent',
        gearbox: 'Manuelle',
        fuel: 'Essence',
        rating: 4.6,
        reviewCount: 15,
        isVerified: true
    },
    {
        id: '6',
        title: 'Kia Picanto',
        location: 'Annaba',
        pricePerDay: 4000,
        imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Kia+Picanto',
        gearbox: 'Automatique',
        fuel: 'Essence',
        rating: 4.4,
        reviewCount: 10,
        isVerified: false
    }
]
