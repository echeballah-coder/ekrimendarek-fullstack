import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button, buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { mockBookings, BookingStatus } from "@/data/mockBookings"
import { getEnrichedBookings } from "@/lib/mockDataHelpers"
import { cn } from "@/lib/utils"
import { AnimatedList, AnimatedItem } from "@/components/animations/AnimatedList"

export const metadata: Metadata = {
    title: "Mon Compte - EkriMenDarek",
    description: "Gérez vos réservations de véhicules.",
}

const statusMap: Record<BookingStatus, { label: string; variant: "default" | "secondary" | "outline" | "warning" }> = {
    PENDING_PAYMENT: { label: "En attente d'acompte", variant: "warning" },
    CONFIRMED: { label: "Confirmée (Acompte payé)", variant: "default" },
    COMPLETED: { label: "Terminée", variant: "outline" },
    CANCELLED: { label: "Annulée", variant: "secondary" },
}

export default function AccountPage() {
    const bookings = getEnrichedBookings(mockBookings)

    return (
        <div className="min-h-screen bg-brand-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-text">Mon Compte</h1>
                        <p className="text-brand-textMuted mt-2">
                            Ceci est un espace de démonstration. Aucune donnée n&apos;est persistée.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-brand-text">Mes Réservations ({bookings.length})</h2>

                    <div className="grid grid-cols-1 gap-6">
                        {bookings.length > 0 ? (
                            <AnimatedList className="grid grid-cols-1 gap-6">
                                {bookings.map((booking) => {
                                    const statusInfo = statusMap[booking.status] || { label: booking.status, variant: 'secondary' }

                                    return (
                                        <AnimatedItem key={booking.id}>
                                            <Card className="overflow-hidden hover:border-brand-accent/50 transition-colors">
                                                <div className="flex flex-col md:flex-row">
                                                    {/* Mobile/Desktop Image placeholder */}
                                                    <div className="w-full md:w-48 h-32 bg-brand-surface md:border-r border-brand-border flex items-center justify-center shrink-0 order-1 md:order-1">
                                                        <span className="text-xs text-brand-textMuted">
                                                            {booking.vehicle ? booking.vehicle.title : "Véhicule retiré"}
                                                        </span>
                                                    </div>

                                                    <div className="flex-1 flex flex-col p-0 order-2 md:order-2">
                                                        <CardHeader className="pb-2">
                                                            <div className="flex justify-between items-start">
                                                                <div>
                                                                    <CardTitle className="text-lg text-brand-text">
                                                                        {booking.vehicle ? booking.vehicle.title : "Véhicule inconnu"}
                                                                    </CardTitle>
                                                                    <CardDescription className="mt-1">
                                                                        Réf: {booking.id} • Du {new Date(booking.startDate).toLocaleDateString()} au {new Date(booking.endDate).toLocaleDateString()}
                                                                    </CardDescription>
                                                                </div>
                                                                <Badge variant={statusInfo.variant} className="shrink-0">
                                                                    {statusInfo.label}
                                                                </Badge>
                                                            </div>
                                                        </CardHeader>

                                                        <CardContent className="pb-2">
                                                            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-text/80">
                                                                <div>
                                                                    <span className="text-brand-textMuted block text-xs">Lieu de prise en charge</span>
                                                                    {booking.vehicle?.location || "N/A"}
                                                                </div>
                                                                <div>
                                                                    <span className="text-brand-textMuted block text-xs">Total</span>
                                                                    {booking.totalAmount.toLocaleString()} DA
                                                                </div>
                                                                <div>
                                                                    <span className="text-brand-textMuted block text-xs">Acompte (15%)</span>
                                                                    <span className="font-medium text-brand-accent">{booking.depositAmount.toLocaleString()} DA</span>
                                                                </div>
                                                            </div>
                                                        </CardContent>

                                                        <CardFooter className="pt-2 mt-auto border-t border-brand-border/50 bg-brand-surface/30">
                                                            <div className="flex gap-3 w-full justify-end">
                                                                <Link
                                                                    href={`/vehicule/${booking.vehicleId}`}
                                                                    className={cn(buttonBaseStyles, buttonVariants.ghost, buttonSizes.sm)}
                                                                >
                                                                    Voir le véhicule
                                                                </Link>
                                                                {/* Demo action */}
                                                                {booking.status === 'PENDING_PAYMENT' && (
                                                                    <Button size="sm" variant="primary">Payer l&apos;acompte</Button>
                                                                )}
                                                            </div>
                                                        </CardFooter>
                                                    </div>
                                                </div>
                                            </Card>
                                        </AnimatedItem>
                                    )
                                })}
                            </AnimatedList>
                        ) : (
                            <div className="text-center py-16 bg-brand-surface rounded-lg border border-brand-border/50">
                                <div className="w-16 h-16 bg-brand-background border border-brand-border rounded-full flex items-center justify-center mx-auto mb-4 text-brand-textMuted">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-brand-text mb-2">Aucune réservation</h3>
                                <p className="text-brand-textMuted mb-6 max-w-sm mx-auto">
                                    Vous n&apos;avez pas encore effectué de réservation. Trouvez votre prochain véhicule dès maintenant !
                                </p>
                                <Link
                                    href="/recherche"
                                    className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
                                >
                                    Parcourir les offres
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
