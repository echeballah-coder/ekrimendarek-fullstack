"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";

// You might need to add hero-car.jpg to the assets folder or use a placeholder
const heroCar = "/assets/landing/hero-car.jpg";

export function CTASection() {
    const router = useRouter();
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section className="py-28 lg:py-36 relative overflow-hidden bg-lovable-primary">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src={heroCar}
                    alt="Voiture de luxe"
                    fill
                    className={cn(
                        "object-cover transition-all duration-1000",
                        isVisible ? "scale-100 blur-0" : "scale-105 blur-sm"
                    )}
                    sizes="100vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-lovable-primary/80 via-lovable-primary/75 to-lovable-terracotta/70" />
            </div>

            {/* Animated subtle patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={cn(
                        "absolute -top-32 -left-32 w-[500px] h-[500px] bg-lovable-primary-foreground/10 rounded-full blur-3xl transition-all duration-1000 delay-300",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                    )}
                />
                <div
                    className={cn(
                        "absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-lovable-terracotta/20 rounded-full blur-3xl transition-all duration-1000 delay-500",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                    )}
                />
            </div>

            {/* Decorative circles */}
            <div
                className={cn(
                    "absolute top-16 right-16 w-24 h-24 border border-lovable-primary-foreground/20 rounded-full hidden lg:block transition-all duration-700 delay-700",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                )}
            />
            <div
                className={cn(
                    "absolute bottom-16 left-16 w-16 h-16 border border-lovable-primary-foreground/20 rounded-full hidden lg:block transition-all duration-700 delay-900",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                )}
            />

            <div className="container-emd relative z-10">
                <div
                    ref={ref as any}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Badge */}
                    <span
                        className={cn(
                            "inline-flex items-center gap-2 text-sm font-medium text-lovable-primary-foreground/90 mb-6 font-sans uppercase tracking-wider bg-lovable-primary-foreground/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/20 transition-all duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        <Sparkles className="w-4 h-4" />
                        Prêt à démarrer ?
                    </span>

                    {/* Heading */}
                    <h2
                        className={cn(
                            "font-serif text-3xl sm:text-4xl lg:text-5xl text-lovable-primary-foreground mb-6 transition-all duration-700 delay-150",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        Réservez votre véhicule <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2">
                            en quelques clics
                            <svg
                                className={cn(
                                    "absolute -bottom-2 left-0 w-full h-3 text-lovable-primary-foreground/30 transition-all duration-700 delay-500",
                                    isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                )}
                                style={{ transformOrigin: 'left' }}
                                viewBox="0 0 200 12"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p
                        className={cn(
                            "text-lg text-lovable-primary-foreground/80 mb-10 max-w-xl mx-auto font-sans transition-all duration-700 delay-300",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        Rejoignez des milliers de clients satisfaits. Acompte de 5% seulement,
                        solde à la prise en charge.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={cn(
                            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-450",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <button
                            onClick={() => router.push("/reservation/start")}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-lovable-primary-foreground text-lovable-primary font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Commencer une réservation
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-lovable-primary/10 to-transparent" />
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-lovable-primary-foreground/10 text-lovable-primary-foreground font-medium rounded-full border border-lovable-primary-foreground/30 backdrop-blur-sm transition-all duration-300 hover:bg-lovable-primary-foreground/20 hover:border-lovable-primary-foreground/50"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Nous contacter
                        </button>
                    </div>

                    {/* Contact links */}
                    <div
                        className={cn(
                            "flex flex-wrap items-center justify-center gap-6 mt-12 transition-all duration-700 delay-600",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        <a
                            href="tel:+213555000000"
                            className="flex items-center gap-2 text-lovable-primary-foreground/70 hover:text-lovable-primary-foreground transition-all duration-300 text-sm font-sans bg-lovable-primary-foreground/5 px-4 py-2 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/10 hover:border-lovable-primary-foreground/30"
                        >
                            <Phone className="w-4 h-4" />
                            +213 555 000 000
                        </a>
                        <span className="text-lovable-primary-foreground/50 text-sm bg-lovable-primary-foreground/5 px-4 py-2 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/10">
                            support@kerya.dz
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
