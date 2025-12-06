import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Vehicle } from "@/data/mockVehicles"

interface VehicleCardProps {
    vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-[4/3] w-full bg-brand-background/50">
                {/* Placeholder for real image implementation using Next.js Image */}
                <div className="absolute inset-0 flex items-center justify-center text-brand-textMuted bg-brand-surface border-b border-brand-border">
                    {/* Simple text placeholder until real images are used */}
                    <span className="text-sm font-medium">{vehicle.title}</span>
                </div>
            </div>

            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start gap-2">
                    <div>
                        <h3 className="font-bold text-lg text-brand-text line-clamp-1">{vehicle.title}</h3>
                        <p className="text-sm text-brand-textMuted flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-brand-accent">
                                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.62.83.799 1.654 1.382 2.274 1.766a11.267 11.267 0 00.758.434l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                            </svg>
                            {vehicle.location}
                        </p>
                    </div>
                    {vehicle.isVerified && (
                        <Badge variant="success" className="shrink-0 text-[10px] px-1.5 py-0">Vérifié</Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className="p-4 pt-2 space-y-3">
                {/* Features Chips */}
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-normal text-xs">{vehicle.gearbox}</Badge>
                    <Badge variant="secondary" className="font-normal text-xs">{vehicle.fuel}</Badge>
                    <span className="text-xs text-brand-textMuted flex items-center ml-auto">
                        ★ {vehicle.rating} ({vehicle.reviewCount})
                    </span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-brand-border/50 mt-auto bg-brand-surface/50">
                <div className="flex flex-col">
                    <span className="text-xs text-brand-textMuted">À partir de</span>
                    <span className="text-lg font-bold text-brand-accent">
                        {vehicle.pricePerDay} <span className="text-sm font-normal text-brand-textMuted">DA/j</span>
                    </span>
                </div>
                <Button size="sm">
                    Voir détails
                </Button>
            </CardFooter>
        </Card>
    )
}
