"use client"

import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { StatCard } from "@/components/agency/StatCard"
import { RevenueChart } from "@/components/agency/RevenueChart"
import { mockAgencyStats, mockMonthlyRevenue, mockRecentBookings } from "@/data/mockAgencyStats"

const statusMap = {
    PENDING_PAYMENT: { label: "En attente", variant: "warning" as const },
    CONFIRMED: { label: "Confirmée", variant: "default" as const },
    COMPLETED: { label: "Terminée", variant: "outline" as const },
    CANCELLED: { label: "Annulée", variant: "secondary" as const },
}

export default function AgencyDashboard() {
    return (
        <div className="min-h-screen bg-brand-background py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-brand-text mb-2">
                        Tableau de bord agence
                    </h1>
                    <p className="text-brand-textMuted">
                        Vue d&apos;ensemble des performances de vos locations sur EkriMenDarek (données de démo)
                    </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Revenus du mois"
                        value={`${mockAgencyStats.totalRevenueMonth.toLocaleString()} DA`}
                        subtitle="Décembre 2024"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                    <StatCard
                        title="Réservations actives"
                        value={mockAgencyStats.bookingsThisMonth}
                        subtitle="Ce mois-ci"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        }
                    />
                    <StatCard
                        title="Taux d'occupation"
                        value={`${mockAgencyStats.fleetUtilization}%`}
                        subtitle="Flotte véhicules"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        }
                    />
                    <StatCard
                        title="KYC Complété"
                        value={`${mockAgencyStats.kycCompletionRate}%`}
                        subtitle="Des clients"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                </div>

                {/* Revenue Chart */}
                <div className="mb-8">
                    <RevenueChart data={mockMonthlyRevenue} />
                </div>

                {/* Recent Bookings Table */}
                <Card className="border-brand-accent/20">
                    <CardHeader>
                        <CardTitle>Réservations Récentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-brand-border">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-brand-textMuted">Réf</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-brand-textMuted">Véhicule</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-brand-textMuted">Client</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-brand-textMuted">Dates</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-brand-textMuted">Statut</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-brand-textMuted">Montant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockRecentBookings.map((booking) => (
                                        <tr key={booking.id} className="border-b border-brand-border/50 hover:bg-brand-surface/30 transition-colors">
                                            <td className="py-3 px-4 text-sm text-brand-textMuted">{booking.id}</td>
                                            <td className="py-3 px-4 text-sm font-medium text-brand-text">{booking.vehicleTitle}</td>
                                            <td className="py-3 px-4 text-sm text-brand-text">{booking.clientName}</td>
                                            <td className="py-3 px-4 text-sm text-brand-textMuted">
                                                {new Date(booking.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} - {new Date(booking.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                                            </td>
                                            <td className="py-3 px-4">
                                                <Badge variant={statusMap[booking.status].variant}>
                                                    {statusMap[booking.status].label}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-sm font-medium text-brand-accent text-right">
                                                {booking.totalAmount.toLocaleString()} DA
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 p-4 bg-brand-background rounded-lg border border-brand-border">
                            <p className="text-xs text-brand-textMuted text-center">
                                <strong>Note :</strong> Ces données sont simulées pour la démonstration. Aucune transaction réelle n&apos;est effectuée.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
