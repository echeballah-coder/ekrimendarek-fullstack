/**
 * Utility functions for pricing calculations
 * 
 * These functions handle common pricing operations like:
 * - Calculating rental duration in days
 * - Computing total price based on daily rate
 * - Calculating deposit amount
 */

/**
 * Calculate the number of days between two dates
 * 
 * @param startDate - Start date in ISO format (YYYY-MM-DD)
 * @param endDate - End date in ISO format (YYYY-MM-DD)
 * @returns Number of days (minimum 1)
 * 
 * Rules:
 * - If dates are invalid or not provided, returns 0
 * - If endDate <= startDate, returns 1 (minimum rental period)
 * - Uses Math.ceil to round up partial days
 */
export function calculateDays(startDate: string, endDate: string): number {
    if (!startDate || !endDate) return 0

    const start = new Date(startDate)
    const end = new Date(endDate)

    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0

    const diffTime = Math.abs(end.getTime() - start.getTime())
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // Minimum 1 day rental
    return days === 0 ? 1 : days
}

/**
 * Calculate total rental price
 * 
 * @param dailyPrice - Price per day in DZD
 * @param days - Number of rental days
 * @returns Total price in DZD
 */
export function calculateTotal(dailyPrice: number, days: number): number {
    return days * dailyPrice
}

/**
 * Calculate deposit amount based on total and rate
 * 
 * @param total - Total rental price in DZD
 * @param rate - Deposit rate as decimal (e.g., 0.05 for 5%)
 * @returns Deposit amount in DZD (rounded)
 * 
 * Note: Uses Math.round for consistency with current implementation
 */
export function calculateDeposit(total: number, rate: number): number {
    return Math.round(total * rate)
}
