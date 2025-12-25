"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const partners = [
    "AutoLoc Alger",
    "Sahara Cars",
    "Atlas Rental",
    "Dzair Auto",
    "Casbah Motors",
    "Tassili Location",
    "Méditerranée Cars",
    "El Djazair Rent",
    "Aurès Auto",
    "Hoggar Location",
    "Chélif Cars",
    "Kabylie Rent",
];

export function PartnersMarquee() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section ref={ref as any} className="py-16 bg-lovable-background overflow-hidden relative border-y border-border/30">
            {/* Section reveal overlay */}
            <div
                className={cn(
                    "absolute inset-0 bg-lovable-background z-10 pointer-events-none transition-all duration-1000 ease-out",
                    isVisible ? "opacity-0" : "opacity-100"
                )}
            />

            <div className="container-emd mb-8">
                <p
                    className={cn(
                        "text-center text-muted/60 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-700 ease-out",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    Ils nous font confiance
                </p>
            </div>

            {/* Single row marquee */}
            <div
                className={cn(
                    "relative transition-all duration-700 delay-200",
                    isVisible ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-lovable-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-lovable-background to-transparent z-10" />

                <div className="flex items-center gap-12 animate-marquee">
                    {[...partners, ...partners, ...partners].map((name, index) => (
                        <span
                            key={index}
                            className="text-lovable-foreground font-serif text-xl md:text-2xl font-semibold whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
