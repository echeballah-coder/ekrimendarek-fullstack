export type BookingStatus = 'PENDING_PAYMENT' | 'PENDING_CONFIRMATION' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'

export interface Booking {
    id: string
    vehicleId: string
    startDate: string
    endDate: string
    totalAmount: number
    depositAmount: number
    status: BookingStatus
    createdAt: string
}

export const mockBookings: Booking[] = [
    {
        id: "BK-2023-001",
        vehicleId: "1", // Renault Clio 5
        startDate: "2023-12-10",
        endDate: "2023-12-15",
        totalAmount: 30000,
        depositAmount: 4500,
        status: 'PENDING_CONFIRMATION',
        createdAt: "2023-12-05T10:00:00Z"
    },
    {
        id: "BK-2023-002",
        vehicleId: "2", // Peugeot 208
        startDate: "2024-01-05",
        endDate: "2024-01-07",
        totalAmount: 14000,
        depositAmount: 2100,
        status: 'CONFIRMED',
        createdAt: "2023-12-01T14:30:00Z"
    },
    {
        id: "BK-2023-003",
        vehicleId: "3", // Dacia Sandero
        startDate: "2023-11-20",
        endDate: "2023-11-25",
        totalAmount: 22500,
        depositAmount: 3375,
        status: 'COMPLETED',
        createdAt: "2023-11-15T09:15:00Z"
    },
    {
        id: "BK-2023-004",
        vehicleId: "1", // Renault Clio 5
        startDate: "2023-10-10",
        endDate: "2023-10-10",
        totalAmount: 6000,
        depositAmount: 900,
        status: 'CANCELLED',
        createdAt: "2023-10-01T11:00:00Z"
    }
]
