"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { fadeInUp, defaultViewport } from "@/lib/animations";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// You might need to add hero-car.jpg to the assets folder or use a placeholder
const heroCar = "/assets/landing/hero-car.jpg";

export function CTASection() {
    const router = useRouter();

    return (
        <section className="py-28 lg:py-36 relative overflow-hidden bg-lovable-primary">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src={heroCar}
                    alt="Voiture de luxe"
                    fill
                    className="object-cover transition-all duration-1000"
                    sizes="100vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-lovable-primary/80 via-lovable-primary/75 to-lovable-terracotta/70" />
            </div>

            {/* Animated subtle patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-lovable-primary-foreground/10 rounded-full blur-3xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={defaultViewport}
                />
                <motion.div
                    className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-lovable-terracotta/20 rounded-full blur-3xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={defaultViewport}
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
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center gap-2 text-sm font-medium text-lovable-primary-foreground/90 mb-6 font-sans uppercase tracking-wider bg-lovable-primary-foreground/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/20"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                    >
                        <Sparkles className="w-4 h-4" />
                        Prêt à démarrer ?
                    </motion.span>

                    {/* Heading */}
                    <motion.h2
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lovable-primary-foreground mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Réservez votre véhicule <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2">
                            en quelques clics
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-lovable-primary-foreground/30"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={defaultViewport}
                                style={{ transformOrigin: 'left' }}
                                viewBox="0 0 200 12"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg text-lovable-primary-foreground/80 mb-10 max-w-xl mx-auto font-sans"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Rejoignez des milliers de clients satisfaits. Acompte de 5% seulement,
                        solde à la prise en charge.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.45 }}
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
                    </motion.div>

                    {/* Contact links */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-6 mt-12"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a
                            href="tel:+213555000000"
                            className="flex items-center gap-2 text-lovable-primary-foreground/70 hover:text-lovable-primary-foreground transition-all duration-300 text-sm font-sans bg-lovable-primary-foreground/5 px-4 py-2 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/10 hover:border-lovable-primary-foreground/30"
                        >
                            <Phone className="w-4 h-4" />
                            +213 555 000 000
                        </a>
                        <span className="text-lovable-primary-foreground/50 text-sm bg-lovable-primary-foreground/5 px-4 py-2 rounded-full backdrop-blur-sm border border-lovable-primary-foreground/10">
                            support@ekrimendarek.dz
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
