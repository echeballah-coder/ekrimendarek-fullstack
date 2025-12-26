"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Calendar, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Wilayas d'Algérie
const WILAYAS = [
    "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif",
    "Tizi Ouzou", "Béjaïa", "Tlemcen", "Batna", "Tipaza", "Boumerdès"
];

// Lieux par wilaya (exemple simplifié)
const LIEUX_BY_WILAYA: Record<string, string[]> = {
    "Alger": ["Aéroport Houari Boumediene", "Centre-ville", "Bab Ezzouar", "Hydra"],
    "Oran": ["Aéroport Ahmed Ben Bella", "Centre-ville", "Es Senia"],
    "Constantine": ["Aéroport Mohamed Boudiaf", "Centre-ville"],
    // Autres wilayas utilisent un défaut
};

// Classes de véhicules
const VEHICLE_CLASSES = [
    { value: "economique", label: "Économique" },
    { value: "compacte", label: "Compacte" },
    { value: "berline", label: "Berline" },
    { value: "suv", label: "SUV" },
    { value: "luxe", label: "Luxe" },
];

interface HomeReservationSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function HomeReservationSheet({ open, onOpenChange }: HomeReservationSheetProps) {
    const router = useRouter();

    // Form state
    const [wilaya, setWilaya] = useState("");
    const [lieu, setLieu] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [vehicleClass, setVehicleClass] = useState("");

    // Validation errors
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Lieux disponibles selon la wilaya
    const [availableLieux, setAvailableLieux] = useState<string[]>([]);

    // Reset lieu when wilaya changes
    useEffect(() => {
        if (wilaya) {
            const lieux = LIEUX_BY_WILAYA[wilaya] || ["Centre-ville", "Aéroport"];
            setAvailableLieux(lieux);
            setLieu(""); // Reset lieu selection
        }
    }, [wilaya]);

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
        if (!lieu) newErrors.lieu = "Veuillez sélectionner un lieu";
        if (!pickupDate) newErrors.pickupDate = "Veuillez sélectionner une date de retrait";
        if (!returnDate) newErrors.returnDate = "Veuillez sélectionner une date de retour";

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
        params.set("lieu", lieu);
        params.set("pickupDate", pickupDate);
        params.set("returnDate", returnDate);
        if (vehicleClass) params.set("classe", vehicleClass);

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
                            // Lovable glassmorphism premium
                            "bg-lovable-card/95 backdrop-blur-xl",
                            "border border-border/50 shadow-2xl shadow-black/20",
                            // Mobile: bottom sheet
                            "bottom-0 left-0 right-0 rounded-t-3xl max-h-[85vh]",
                            // Desktop: centered modal
                            "md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
                            "md:rounded-3xl md:max-w-2xl md:w-full md:max-h-[90vh]"
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
                        <div className="sticky top-0 z-10 bg-lovable-card/98 backdrop-blur-xl border-b border-border/50 px-6 py-4 flex items-center justify-between">
                            <h2 id="reservation-title" className="font-serif text-2xl text-lovable-foreground">
                                Commencer une réservation
                            </h2>
                            <button
                                onClick={() => onOpenChange(false)}
                                className="p-2 rounded-full hover:bg-lovable-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-lovable-primary"
                                aria-label="Fermer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Form Container */}
                        <div className="overflow-y-auto max-h-[calc(85vh-80px)] md:max-h-[calc(90vh-80px)]">
                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Wilaya */}
                                <div className="space-y-2">
                                    <label htmlFor="wilaya" className="flex items-center gap-2 text-sm font-medium text-lovable-foreground">
                                        <MapPin className="w-4 h-4 text-lovable-primary" />
                                        Wilaya <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="wilaya"
                                        value={wilaya}
                                        onChange={(e) => setWilaya(e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border bg-lovable-background text-lovable-foreground",
                                            "focus:outline-none focus:ring-2 focus:ring-lovable-primary transition-all",
                                            errors.wilaya ? "border-red-500" : "border-border"
                                        )}
                                        required
                                    >
                                        <option value="">Sélectionner une wilaya</option>
                                        {WILAYAS.map((w) => (
                                            <option key={w} value={w}>{w}</option>
                                        ))}
                                    </select>
                                    {errors.wilaya && (
                                        <p className="text-sm text-red-500">{errors.wilaya}</p>
                                    )}
                                </div>

                                {/* Lieu */}
                                <div className="space-y-2">
                                    <label htmlFor="lieu" className="flex items-center gap-2 text-sm font-medium text-lovable-foreground">
                                        <MapPin className="w-4 h-4 text-lovable-primary" />
                                        Lieu de retrait <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="lieu"
                                        value={lieu}
                                        onChange={(e) => setLieu(e.target.value)}
                                        disabled={!wilaya}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border bg-lovable-background text-lovable-foreground",
                                            "focus:outline-none focus:ring-2 focus:ring-lovable-primary transition-all",
                                            "disabled:opacity-50 disabled:cursor-not-allowed",
                                            errors.lieu ? "border-red-500" : "border-border"
                                        )}
                                        required
                                    >
                                        <option value="">Sélectionner un lieu</option>
                                        {availableLieux.map((l) => (
                                            <option key={l} value={l}>{l}</option>
                                        ))}
                                    </select>
                                    {errors.lieu && (
                                        <p className="text-sm text-red-500">{errors.lieu}</p>
                                    )}
                                </div>

                                {/* Dates */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Pickup Date */}
                                    <div className="space-y-2">
                                        <label htmlFor="pickupDate" className="flex items-center gap-2 text-sm font-medium text-lovable-foreground">
                                            <Calendar className="w-4 h-4 text-lovable-primary" />
                                            Date de retrait <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="pickupDate"
                                            value={pickupDate}
                                            onChange={(e) => setPickupDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border bg-lovable-background text-lovable-foreground",
                                                "focus:outline-none focus:ring-2 focus:ring-lovable-primary transition-all",
                                                errors.pickupDate ? "border-red-500" : "border-border"
                                            )}
                                            required
                                        />
                                        {errors.pickupDate && (
                                            <p className="text-sm text-red-500">{errors.pickupDate}</p>
                                        )}
                                    </div>

                                    {/* Return Date */}
                                    <div className="space-y-2">
                                        <label htmlFor="returnDate" className="flex items-center gap-2 text-sm font-medium text-lovable-foreground">
                                            <Calendar className="w-4 h-4 text-lovable-primary" />
                                            Date de retour <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="returnDate"
                                            value={returnDate}
                                            onChange={(e) => setReturnDate(e.target.value)}
                                            min={pickupDate || new Date().toISOString().split('T')[0]}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border bg-lovable-background text-lovable-foreground",
                                                "focus:outline-none focus:ring-2 focus:ring-lovable-primary transition-all",
                                                errors.returnDate ? "border-red-500" : "border-border"
                                            )}
                                            required
                                        />
                                        {errors.returnDate && (
                                            <p className="text-sm text-red-500">{errors.returnDate}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Vehicle Class (optional) */}
                                <div className="space-y-2">
                                    <label htmlFor="vehicleClass" className="flex items-center gap-2 text-sm font-medium text-lovable-foreground">
                                        <Car className="w-4 h-4 text-lovable-primary" />
                                        Classe de véhicule (optionnel)
                                    </label>
                                    <select
                                        id="vehicleClass"
                                        value={vehicleClass}
                                        onChange={(e) => setVehicleClass(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-lovable-background text-lovable-foreground focus:outline-none focus:ring-2 focus:ring-lovable-primary transition-all"
                                    >
                                        <option value="">Toutes les classes</option>
                                        {VEHICLE_CLASSES.map((vc) => (
                                            <option key={vc.value} value={vc.value}>{vc.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Microcopy */}
                                <div className="bg-lovable-primary/10 border border-lovable-primary/20 rounded-xl p-4">
                                    <p className="text-sm text-muted">
                                        💡 <span className="font-medium">Mode démo</span> : Disponibilité à confirmer auprès de l&apos;agence.
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-lovable-primary text-lovable-primary-foreground font-semibold py-4 px-6 rounded-xl shadow-lg shadow-lovable-primary/30 hover:shadow-xl hover:shadow-lovable-primary/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lovable-primary focus:ring-offset-2"
                                >
                                    Afficher les résultats
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
