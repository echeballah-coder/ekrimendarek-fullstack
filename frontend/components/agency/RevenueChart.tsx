"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { MonthlyRevenue } from "@/data/mockAgencyStats"

interface RevenueChartProps {
    data: MonthlyRevenue[];
}

export function RevenueChart({ data }: RevenueChartProps) {
    return (
        <Card className="border-brand-accent/20">
            <CardHeader>
                <CardTitle>Évolution des Revenus (6 derniers mois)</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis
                            dataKey="month"
                            stroke="#9CA3AF"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            stroke="#9CA3AF"
                            style={{ fontSize: '12px' }}
                            tickFormatter={(value) => `${(value / 1000)}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1F2937',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                                color: '#F3F4F6'
                            }}
                            formatter={(value: number) => [`${value.toLocaleString()} DA`, 'Revenus']}
                        />
                        <Bar
                            dataKey="revenue"
                            fill="#10b981"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
