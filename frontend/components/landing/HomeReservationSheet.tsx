"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Calendar, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Wilayas d'Algérie
const WILAYAS = [
    "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif",
    "Tizi Ouzou", "Béjaïa", "Tlemcen", "Batna", "Tipaza", "Boumerdès"
];

interface HomeReservationSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function HomeReservationSheet({ open, onOpenChange }: HomeReservationSheetProps) {
    const router = useRouter();

    // Form state - Simplifié
    const [wilaya, setWilaya] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    // Validation errors
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Prevent body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                onOpenChange(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onOpenChange]);

    // Validation
    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!wilaya) newErrors.wilaya = "Veuillez sélectionner une wilaya";
        if (!pickupDate) newErrors.pickupDate = "Veuillez sélectionner une date";
        if (!returnDate) newErrors.returnDate = "Veuillez sélectionner une date";

        // Validate dates
        if (pickupDate && returnDate) {
            const pickup = new Date(pickupDate);
            const returnD = new Date(returnDate);
            if (returnD < pickup) {
                newErrors.returnDate = "La date de retour doit être après le retrait";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        // Build query params
        const params = new URLSearchParams();
        params.set("wilaya", wilaya);
        params.set("pickupDate", pickupDate);
        params.set("returnDate", returnDate);

        // Navigate to search page
        router.push(`/recherche?${params.toString()}`);

        // Close sheet
        onOpenChange(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => onOpenChange(false)}
                        aria-hidden="true"
                    />

                    {/* Sheet/Modal */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="reservation-title"
                        className={cn(
                            "fixed z-50 overflow-hidden",
                            // Beige/Cream styling
                            "bg-[hsl(40,30%,92%)]",
                            "border border-[hsl(40,15%,80%)] shadow-2xl shadow-black/15",
                            // Mobile: bottom sheet
                            "bottom-0 left-0 right-0 rounded-t-3xl",
                            // Desktop: centered modal
                            "md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
                            "md:rounded-3xl md:max-w-4xl md:w-full"
                        )}
                        initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            damping: 35,
                            stiffness: 400,
                            mass: 0.8
                        }}
                    >
                        {/* Header */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-[hsl(40,15%,80%)]">
                            <div>
                                <h2 id="reservation-title" className="font-serif text-2xl text-[hsl(0,0%,20%)] mb-1">
                                    Rechercher un véhicule
                                </h2>
                                <p className="text-sm text-[hsl(0,0%,40%)]">
                                    Trouvez la voiture idéale près de chez vous
                                </p>
                            </div>
                            <button
                                onClick={() => onOpenChange(false)}
                                className="p-2.5 rounded-full hover:bg-[hsl(40,20%,85%)] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(160,40%,28%)]"
                                aria-label="Fermer"
                            >
                                <X className="w-5 h-5 text-[hsl(0,0%,30%)]" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6">
                            {/* Fields Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {/* Wilaya */}
                                <div className="space-y-2">
                                    <label htmlFor="wilaya" className="flex items-center gap-2 text-sm font-medium text-[hsl(0,0%,25%)]">
                                        <MapPin className="w-4 h-4 text-[hsl(160,40%,28%)]" />
                                        Lieu de prise en charge
                                    </label>
                                    <select
                                        id="wilaya"
                                        value={wilaya}
                                        onChange={(e) => setWilaya(e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3.5 rounded-xl",
                                            "bg-[hsl(40,20%,85%)] text-[hsl(0,0%,20%)]",
                                            "border-2 transition-all",
                                            "focus:outline-none focus:ring-2 focus:ring-[hsl(160,40%,28%)] focus:border-transparent",
                                            "placeholder:text-[hsl(0,0%,50%)]",
                                            errors.wilaya ? "border-red-500" : "border-transparent"
                                        )}
                                        required
                                    >
                                        <option value="">Sélectionner une wilaya</option>
                                        {WILAYAS.map((w) => (
                                            <option key={w} value={w}>{w}</option>
                                        ))}
                                    </select>
                                    {errors.wilaya && (
                                        <p className="text-xs text-red-600">{errors.wilaya}</p>
                                    )}
                                </div>

                                {/* Pickup Date */}
                                <div className="space-y-2">
                                    <label htmlFor="pickupDate" className="flex items-center gap-2 text-sm font-medium text-[hsl(0,0%,25%)]">
                                        <Calendar className="w-4 h-4 text-[hsl(160,40%,28%)]" />
                                        Date de départ
                                    </label>
                                    <input
                                        type="date"
                                        id="pickupDate"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className={cn(
                                            "w-full px-4 py-3.5 rounded-xl",
                                            "bg-[hsl(40,20%,85%)] text-[hsl(0,0%,20%)]",
                                            "border-2 transition-all",
                                            "focus:outline-none focus:ring-2 focus:ring-[hsl(160,40%,28%)] focus:border-transparent",
                                            errors.pickupDate ? "border-red-500" : "border-transparent"
                                        )}
                                        required
                                    />
                                    {errors.pickupDate && (
                                        <p className="text-xs text-red-600">{errors.pickupDate}</p>
                                    )}
                                </div>

                                {/* Return Date */}
                                <div className="space-y-2">
                                    <label htmlFor="returnDate" className="flex items-center gap-2 text-sm font-medium text-[hsl(0,0%,25%)]">
                                        <Calendar className="w-4 h-4 text-[hsl(160,40%,28%)]" />
                                        Date de retour
                                    </label>
                                    <input
                                        type="date"
                                        id="returnDate"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        min={pickupDate || new Date().toISOString().split('T')[0]}
                                        className={cn(
                                            "w-full px-4 py-3.5 rounded-xl",
                                            "bg-[hsl(40,20%,85%)] text-[hsl(0,0%,20%)]",
                                            "border-2 transition-all",
                                            "focus:outline-none focus:ring-2 focus:ring-[hsl(160,40%,28%)] focus:border-transparent",
                                            errors.returnDate ? "border-red-500" : "border-transparent"
                                        )}
                                        required
                                    />
                                    {errors.returnDate && (
                                        <p className="text-xs text-red-600">{errors.returnDate}</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[hsl(160,40%,28%)] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-[hsl(160,40%,24%)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(160,40%,28%)] focus:ring-offset-2 flex items-center justify-center gap-2"
                            >
                                <Search className="w-5 h-5" />
                                Rechercher des véhicules
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
