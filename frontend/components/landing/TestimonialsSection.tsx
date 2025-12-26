"use client";

import { cn } from "@/lib/utils";

import { fadeInUp, defaultViewport } from "@/lib/animations";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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

    return (
        <section className="py-28 bg-lovable-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-lovable-primary/3 blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-lovable-terracotta/5 blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="container-emd relative">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        className="inline-block text-sm font-medium text-lovable-primary mb-4 font-sans uppercase tracking-wider"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                    >
                        Témoignages
                    </motion.span>
                    <motion.h2
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lovable-foreground mb-4"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Ce que nos clients disent
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted/80 font-sans"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Des milliers de clients satisfaits nous font confiance chaque jour.
                    </motion.p>
                </div>

                {/* Testimonials grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-lovable-surface-elevated rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            {/* Quote icon */}
                            <Quote
                                className="absolute top-4 right-4 w-8 h-8 text-lovable-primary/10 transition-all duration-500 opacity-100 scale-100"
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-lovable-primary text-lovable-primary"
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
