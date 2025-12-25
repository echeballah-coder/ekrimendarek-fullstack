"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Karim B.",
        role: "Entrepreneur, Alger",
        avatar: "KB",
        rating: 5,
        text: "J'ai loué une voiture pour un voyage d'affaires à Oran. Le processus était incroyablement simple et le véhicule était exactement comme sur les photos."
    },
    {
        name: "Sarah M.",
        role: "Voyageuse fréquente",
        avatar: "SM",
        rating: 5,
        text: "Après des années de frustration avec les agences traditionnelles, Kerya est une vraie bouffée d'air frais. Transparence totale sur les prix."
    },
    {
        name: "Ahmed T.",
        role: "Chef d'entreprise, Constantine",
        avatar: "AT",
        rating: 5,
        text: "Notre entreprise utilise la plateforme pour toutes nos locations. Le service client est exceptionnel et la qualité toujours au rendez-vous."
    },
    {
        name: "Fatima Z.",
        role: "Professeure, Oran",
        avatar: "FZ",
        rating: 5,
        text: "Location simple et rapide pour les vacances en famille. Les agences sont fiables et le support répond vite. Je recommande !"
    }
];

export function TestimonialsSection() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.2 });
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="py-28 bg-lovable-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-lovable-primary/3 blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-lovable-terracotta/5 blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="container-emd relative">
                {/* Section header */}
                <div
                    ref={titleRef as any}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span
                        className={cn(
                            "inline-block text-sm font-medium text-lovable-primary mb-4 font-sans uppercase tracking-wider transition-all duration-500",
                            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        Témoignages
                    </span>
                    <h2
                        className={cn(
                            "font-serif text-3xl sm:text-4xl lg:text-5xl text-lovable-foreground mb-4 transition-all duration-700 delay-100",
                            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        Ce que nos clients disent
                    </h2>
                    <p
                        className={cn(
                            "text-lg text-muted/80 font-sans transition-all duration-700 delay-200",
                            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        Des milliers de clients satisfaits nous font confiance chaque jour.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div ref={cardsRef as any} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative bg-lovable-surface-elevated rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${200 + index * 120}ms` }}
                        >
                            {/* Quote icon */}
                            <Quote
                                className={cn(
                                    "absolute top-4 right-4 w-8 h-8 text-lovable-primary/10 transition-all duration-500",
                                    cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                )}
                                style={{ transitionDelay: `${400 + index * 120}ms` }}
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            "w-4 h-4 fill-lovable-primary text-lovable-primary transition-all duration-300",
                                            cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        )}
                                        style={{ transitionDelay: `${300 + index * 100 + i * 50}ms` }}
                                    />
                                ))}
                            </div>

                            <p className="text-muted/80 leading-relaxed mb-6 font-sans text-sm">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-lovable-primary/10 flex items-center justify-center text-lovable-primary font-semibold text-sm font-sans group-hover:bg-lovable-primary group-hover:text-lovable-primary-foreground transition-colors duration-300">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-medium text-lovable-foreground text-sm font-sans">{testimonial.name}</div>
                                    <div className="text-xs text-muted/60 font-sans">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
