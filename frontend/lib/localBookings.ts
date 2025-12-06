import { Booking } from "@/data/mockBookings";

const STORAGE_KEY = "ekrimendarek_bookings";

export const getLocalBookings = (): Booking[] => {
    if (typeof window === "undefined") return [];

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Failed to parse local bookings:", error);
        return [];
    }
};

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
