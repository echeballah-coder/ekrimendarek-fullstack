import { Metadata } from "next"
import { BookingsList } from "@/components/account/BookingsList"

export const metadata: Metadata = {
    title: "Mon Compte - EkriMenDarek",
    description: "Gérez vos réservations de véhicules.",
}

export default function AccountPage() {
    return (
        <div className="min-h-screen bg-brand-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-text">Mon Compte</h1>
                        <p className="text-brand-textMuted mt-2">
                            Ceci est un espace de démonstration. Vos nouvelles réservations sont sauvegardées localement.
                        </p>
                    </div>
                </div>

                <BookingsList />
            </div>
        </div>
    )
}
