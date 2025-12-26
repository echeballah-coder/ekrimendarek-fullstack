"use client";

import { cn } from "@/lib/utils";

import { fadeInUp, defaultViewport } from "@/lib/animations";
import { motion } from "framer-motion";

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


    return (
        <section className="py-16 bg-lovable-background overflow-hidden relative border-y border-border/30">
            {/* Section reveal overlay */}
            <motion.div
                className="absolute inset-0 bg-lovable-background z-10 pointer-events-none"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="container-emd mb-8">
                <motion.p
                    className="text-center text-muted/60 text-xs uppercase tracking-[0.2em] font-medium"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    Ils nous font confiance
                </motion.p>
            </div>

            {/* Single row marquee */}
            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, delay: 0.2 }}
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
            </motion.div>
        </section>
    );
}
