"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Award, BadgeCheck, Building2 } from "lucide-react";

const trustItems = [
    { icon: ShieldCheck, label: "Agences vérifiées" },
    { icon: Award, label: "Meilleurs prix" },
    { icon: BadgeCheck, label: "Qualité certifiée" },
    { icon: Building2, label: "Réseau national" },
];

export function TrustSection() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section className="py-16 bg-lovable-card/30 border-b border-border/50 relative overflow-hidden">
            {/* Subtle decorative line */}
            <div
                className={cn(
                    "absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-lovable-primary/30 to-lovable-primary/10 transition-all duration-1000",
                    isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                )}
                style={{ transformOrigin: 'top' }}
            />

            <div className="container-emd">
                <div
                    ref={ref as any}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16"
                >
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-center gap-3 group cursor-pointer transition-all duration-700 ease-out",
                                    isVisible
                                        ? "opacity-100 translate-y-0 blur-0"
                                        : "opacity-0 translate-y-6 blur-sm"
                                )}
                                style={{ transitionDelay: `${150 + index * 100}ms` }}
                            >
                                <div className="icon-glass w-11 h-11 rounded-full transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="w-5 h-5 text-lovable-primary relative z-10" />
                                </div>
                                <span className="text-sm font-medium text-lovable-foreground font-sans group-hover:text-lovable-primary transition-colors duration-300">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
