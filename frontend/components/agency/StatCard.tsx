import { Card, CardContent } from "@/components/ui/Card"

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: React.ReactNode;
}

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
    return (
        <Card className="border-brand-accent/20 hover:border-brand-accent/40 transition-colors">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-brand-textMuted mb-2">{title}</p>
                        <p className="text-3xl font-bold text-brand-text mb-1">{value}</p>
                        {subtitle && (
                            <p className="text-xs text-brand-textMuted">{subtitle}</p>
                        )}
                    </div>
                    {icon && (
                        <div className="text-brand-accent/70">
                            {icon}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
