"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, MapPin, Calendar, Search, ShieldCheck, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Wilayas list for select
const WILAYAS = ["Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif", "Tizi Ouzou", "Béjaïa", "Tlemcen", "Batna"];

export function HeroSection() {
    const router = useRouter();
    const {
        ref: heroRef,
        isVisible: heroVisible
    } = useScrollReveal({
        threshold: 0.1
    });

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [location, setLocation] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    // Removed scrollY state in favor of framer-motion useScroll
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // useScroll hook for performant scroll animations
    const { scrollY } = useScroll();

    // Transforms for parallax/blur effects
    const yBackground = useTransform(scrollY, [0, 1000], [0, 150]);
    const blurAmount = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(8px)"]);
    const overlayOpacity = useTransform(scrollY, [0, 500], [0.35, 0.5]);
    const yDecoration1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const yDecoration2 = useTransform(scrollY, [0, 1000], [0, 250]);
    const yGradient1 = useTransform(scrollY, [0, 1000], [0, 50]);
    const yGradient2 = useTransform(scrollY, [0, 1000], [0, 80]);

    // Trigger entrance animations after mount
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.set("wilaya", location);
        if (pickupDate) params.set("pickupDate", pickupDate);
        if (returnDate) params.set("returnDate", returnDate);

        setIsSearchOpen(false);
        router.push(`/recherche${params.toString() ? `?${params.toString()}` : ""}`);
    };

    // Handle mouse movement for cursor glow
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    // Use a high-quality placeholder image
    const heroImageUrl = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670";

    return (
        <section
            ref={(node) => {
                if (heroRef) (heroRef as any).current = node;
                if (sectionRef) (sectionRef as any).current = node;
            }}
            className="relative min-h-screen overflow-hidden bg-lovable-background"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Hero Background Image - Dark atmospheric style with multi-layer parallax */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Background layer - slowest parallax */}
                <motion.div
                    className="relative w-full h-full will-change-transform"
                    style={{
                        y: yBackground,
                        filter: blurAmount,
                    }}
                >
                    <Image
                        src={heroImageUrl}
                        alt="Voiture de luxe"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                </motion.div>

                {/* Dark overlay - intensifies on scroll */}
                <motion.div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        backgroundColor: "rgba(0,0,0,1)", // Base black, opacity handled by motion
                        opacity: overlayOpacity
                    }}
                />

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-lovable-primary/10 blur-3xl will-change-transform"
                    style={{ y: yDecoration1 }}
                />
                <motion.div
                    className="absolute bottom-[30%] left-[5%] w-48 h-48 rounded-full bg-lovable-primary/5 blur-2xl will-change-transform"
                    style={{ y: yDecoration2 }}
                />

                {/* Gradient overlays */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-lovable-background via-transparent to-transparent will-change-transform"
                    style={{ y: yGradient1 }}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lovable-background/70 via-lovable-background/20 to-transparent will-change-transform"
                    style={{ y: yGradient2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-lovable-background/20 via-transparent to-transparent" />

                {/* Cursor glow effect */}
                <div
                    className={cn(
                        "pointer-events-none absolute w-[500px] h-[500px] rounded-full transition-opacity duration-500",
                        isHovering ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                        left: mousePos.x - 250,
                        top: mousePos.y - 250,
                        background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)`,
                        filter: 'blur(40px)',
                        transform: 'translate3d(0,0,0)',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container-emd min-h-screen flex flex-col justify-center pt-28 pb-32">
                <div className="max-w-3xl">
                    {/* Trust Badge */}
                    <div className={cn(
                        "inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-lovable-card/80 backdrop-blur-md border border-border/50 mb-8 shadow-lg",
                        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isLoaded && heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-lovable-primary fill-lovable-primary" />
                            ))}
                        </div>
                        <span className="w-px h-4 bg-border" />
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-lovable-primary" />
                            <span className="text-sm font-medium text-lovable-foreground font-lovable">
                                Tiers de confiance certifié
                            </span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className={cn(
                        "font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-lovable-foreground leading-[1.1] mb-6",
                        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150",
                        isLoaded && heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        L&apos;excellence de la <br />
                        <span className="lovable-text-gradient">location automobile</span>
                    </h1>

                    {/* Subtitle */}
                    <p className={cn(
                        "text-lg lg:text-xl text-muted/80 mb-10 max-w-xl leading-relaxed font-lovable",
                        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300",
                        isLoaded && heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        Agences partenaires vérifiées, acompte 5% sécurisé,
                        <span className="text-lovable-foreground font-medium"> solde sur place</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className={cn(
                        "flex flex-wrap items-center gap-4",
                        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms]",
                        isLoaded && heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-lovable-primary text-lovable-primary-foreground font-semibold text-lg rounded-full shadow-xl shadow-lovable-primary/30 hover:shadow-2xl hover:shadow-lovable-primary/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                        >
                            Commencer une réservation
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <Link href="/comment-ca-marche" className="inline-flex items-center gap-2 px-6 py-4 bg-lovable-card/60 backdrop-blur-sm border border-border/50 text-lovable-foreground font-medium rounded-full hover:bg-lovable-card hover:border-border transition-all duration-300">
                            Comment ça marche ?
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {
                    !isSearchOpen && (
                        <div
                            className={cn(
                                "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group",
                                "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[800ms]",
                                isLoaded && heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            onClick={() => {
                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                            }}
                        >
                            <span className="text-xs font-medium text-muted/60 uppercase tracking-widest group-hover:text-lovable-foreground transition-colors">
                                Découvrir
                            </span>
                            <div className="relative w-6 h-10 rounded-full border-2 border-muted/30 group-hover:border-lovable-primary/70 transition-colors flex justify-center">
                                <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-lovable-primary animate-bounce" />
                            </div>
                        </div>
                    )
                }
            </div>

            {/* Search Modal */}
            <div className={
                cn(
                    "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500",
                    isSearchOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )
            }>
                <div
                    className="absolute inset-0 bg-lovable-background/60 backdrop-blur-sm"
                    onClick={() => setIsSearchOpen(false)}
                />

                <div className={cn(
                    "relative w-full max-w-3xl bg-lovable-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-500",
                    isSearchOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                )}>
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
                        <div>
                            <h3 className="text-lg font-semibold text-lovable-foreground">Rechercher un véhicule</h3>
                            <p className="text-sm text-muted/80">Trouvez la voiture idéale près de chez vous</p>
                        </div>
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted/60 hover:text-lovable-foreground transition-all"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="flex items-center gap-1.5 text-sm font-medium text-lovable-foreground mb-2">
                                    <MapPin className="w-4 h-4 text-lovable-primary" />
                                    Lieu
                                </label>
                                <select
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-lovable-foreground focus:outline-none focus:ring-2 focus:ring-lovable-primary/30 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="">Toute l&apos;Algérie</option>
                                    {WILAYAS.map(wilaya => <option key={wilaya} value={wilaya.toLowerCase()}>{wilaya}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-sm font-medium text-lovable-foreground mb-2">
                                    <Calendar className="w-4 h-4 text-lovable-primary" />
                                    Départ
                                </label>
                                <input
                                    type="date"
                                    value={pickupDate}
                                    onChange={e => setPickupDate(e.target.value)}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-lovable-foreground focus:outline-none focus:ring-2 focus:ring-lovable-primary/30 transition-all"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-sm font-medium text-lovable-foreground mb-2">
                                    <Calendar className="w-4 h-4 text-lovable-primary" />
                                    Retour
                                </label>
                                <input
                                    type="date"
                                    value={returnDate}
                                    onChange={e => setReturnDate(e.target.value)}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-lovable-foreground focus:outline-none focus:ring-2 focus:ring-lovable-primary/30 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSearch}
                            className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 bg-lovable-primary text-lovable-primary-foreground font-semibold rounded-xl shadow-lg shadow-lovable-primary/20 hover:bg-lovable-primary/90 transition-all"
                        >
                            <Search className="w-5 h-5" />
                            Rechercher des véhicules
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
