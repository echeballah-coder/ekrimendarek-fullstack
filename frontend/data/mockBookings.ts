import { mockVehicles } from "./mockVehicles";

export type BookingStatus = 'PENDING_PAYMENT' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

export interface Booking {
    id: string;
    vehicleId: string;
    startDate: string; // ISO Date
    endDate: string;   // ISO Date
    totalAmount: number;
    depositAmount: number;
    status: BookingStatus;
    agencyName: string;
}

// Helper to find vehicle details (in a real app this would be a join or separate fetch)
const getVehicle = (id: string) => mockVehicles.find(v => v.id === id);

export const mockBookings: Booking[] = [
    {
        id: 'RES-DZ-2024-001',
        vehicleId: '1', // Dacia Stepway
        startDate: '2024-06-15',
        endDate: '2024-06-20', // 5 days
        totalAmount: 29000, // 5 * 5800
        depositAmount: 1450, // 5% (29000 * 0.05)
        status: 'COMPLETED',
        agencyName: 'Agence AutoLoc Zeralda'
    },
    {
        id: 'RES-DZ-2024-089',
        vehicleId: '3', // Hyundai Tucson
        startDate: '2024-12-20',
        endDate: '2024-12-27', // 7 days
        totalAmount: 98000, // 7 * 14000
        depositAmount: 4900, // 5% (98000 * 0.05)
        status: 'CONFIRMED',
        agencyName: 'Constantine Rent Car'
    },
    {
        id: 'RES-DZ-2024-102',
        vehicleId: '2', // Clio 5
        startDate: '2025-01-10',
        endDate: '2025-01-12', // 2 days
        totalAmount: 13000, // 2 * 6500
        depositAmount: 650, // 5% (13000 * 0.05)
        status: 'PENDING_PAYMENT',
        agencyName: 'Oran Drive'
    }
];
