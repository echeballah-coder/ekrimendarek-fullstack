import { Booking } from "@/data/mockBookings"
import { mockVehicles, Vehicle } from "@/data/mockVehicles"

export interface EnrichedBooking extends Booking {
    vehicle?: Vehicle
}

export function getEnrichedBookings(bookings: Booking[]): EnrichedBooking[] {
    return bookings.map(booking => {
        const vehicle = mockVehicles.find(v => v.id === booking.vehicleId)
        return {
            ...booking,
            vehicle
        }
    }).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
}
