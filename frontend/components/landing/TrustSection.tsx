"use client";

import { cn } from "@/lib/utils";

import { fadeInUp, defaultViewport, staggerContainer } from "@/lib/animations";
import { ShieldCheck, Award, BadgeCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
    { icon: ShieldCheck, label: "Agences vérifiées" },
    { icon: Award, label: "Meilleurs prix" },
    { icon: BadgeCheck, label: "Qualité certifiée" },
    { icon: Building2, label: "Réseau national" },
];

export function TrustSection() {


    return (
        <section className="py-16 bg-lovable-card/30 border-b border-border/50 relative overflow-hidden">
            {/* Subtle decorative line */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-lovable-primary/30 to-lovable-primary/10"
                style={{ transformOrigin: 'top' }}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={defaultViewport}
                transition={{ duration: 1 }}
            />

            <div className="container-emd">
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 group cursor-pointer"
                                variants={fadeInUp}
                            >
                                <div className="icon-glass w-11 h-11 rounded-full transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="w-5 h-5 text-lovable-primary relative z-10" />
                                </div>
                                <span className="text-sm font-medium text-lovable-foreground font-sans group-hover:text-lovable-primary transition-colors duration-300">
                                    {item.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
