"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, CreditCard, Car, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import Image from "next/image";

// Fixed Asset Paths (using public directory)
const stepSearchImg = "/assets/landing/step-search-new.jpg";
const stepReserveImg = "/assets/landing/step-reserve-new.jpg";
const stepDriveImg = "/assets/landing/step-drive-new.jpg";

const steps = [
    {
        image: stepSearchImg,
        icon: Search,
        step: "01",
        title: "Cherchez votre véhicule",
        description: "Parcourez des milliers d'offres vérifiées à travers toute l'Algérie. Filtrez par ville, catégorie et prix.",
        features: ["Recherche par wilaya", "Filtres avancés", "Photos HD"],
    },
    {
        image: stepReserveImg,
        icon: CreditCard,
        step: "02",
        title: "Réservez en ligne",
        description: "Bloquez votre véhicule avec un acompte sécurisé de seulement 5%. Confirmation instantanée.",
        features: ["Acompte 5%", "Paiement sécurisé", "Annulation flexible"],
    },
    {
        image: stepDriveImg,
        icon: Car,
        step: "03",
        title: "Récupérez et roulez",
        description: "Rendez-vous en agence, payez le solde restant et prenez la route en toute sérénité.",
        features: ["Retrait en agence", "Solde sur place", "Support 24/7"],
    }
];

export function HowItWorksSection() {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
    const [openItem, setOpenItem] = useState<string>("item-0");

    return (
        <section className="py-16 lg:py-24 bg-lovable-background relative overflow-hidden">
            <div className="container-emd max-w-5xl relative" ref={sectionRef as any}>
                {/* Header */}
                <div
                    className={cn(
                        "text-center mb-12 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lovable-primary/10 text-lovable-primary text-sm font-medium mb-4 font-sans">
                        Comment ça marche
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-lovable-foreground mb-3">
                        Louez en 3 étapes simples
                    </h2>
                    <p className="text-muted/80 font-sans max-w-lg mx-auto text-sm">
                        Un processus transparent et sécurisé, conçu pour vous faire gagner du temps.
                    </p>
                </div>

                {/* Accordion Steps */}
                <div
                    className={cn(
                        "transition-all duration-700 delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <Accordion
                        type="single"
                        collapsible
                        value={openItem}
                        onValueChange={setOpenItem}
                        className="space-y-3"
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isOpen = openItem === `item-${index}`;

                            return (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border rounded-xl overflow-hidden bg-lovable-card data-[state=open]:shadow-lg transition-all duration-300"
                                >
                                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/30">
                                        <div className="flex items-center gap-4 text-left w-full">
                                            {/* Step number & Icon */}
                                            <motion.div
                                                className={cn(
                                                    "flex items-center justify-center w-12 h-12 rounded-xl",
                                                    isOpen ? "bg-lovable-primary text-lovable-primary-foreground" : "bg-muted text-muted/60"
                                                )}
                                                animate={{
                                                    scale: isOpen ? 1.05 : 1,
                                                    rotate: isOpen ? 5 : 0
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </motion.div>

                                            {/* Title */}
                                            <div className="flex-1">
                                                <motion.span
                                                    className={cn(
                                                        "text-xs font-semibold uppercase tracking-wider block",
                                                        isOpen ? "text-lovable-primary" : "text-muted/60"
                                                    )}
                                                    animate={{ x: isOpen ? 4 : 0 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                >
                                                    Étape {step.step}
                                                </motion.span>
                                                <h3 className="font-serif text-lg text-lovable-foreground">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="p-0 overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            {isOpen && (
                                                <motion.div
                                                    className="relative overflow-hidden rounded-b-xl"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                >
                                                    {/* Background image with blur */}
                                                    <motion.div
                                                        className="absolute inset-0"
                                                        initial={{ scale: 1.2 }}
                                                        animate={{ scale: 1.1 }}
                                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                                    >
                                                        <Image
                                                            src={step.image}
                                                            alt={step.title}
                                                            fill
                                                            className="object-cover blur-sm"
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                        />
                                                        <div className="absolute inset-0 bg-lovable-background/80 backdrop-blur-sm" />
                                                    </motion.div>

                                                    {/* Content overlay */}
                                                    <div className="relative z-10 p-5">
                                                        <motion.p
                                                            className="text-lovable-foreground font-sans text-sm leading-relaxed mb-4"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1, duration: 0.3 }}
                                                        >
                                                            {step.description}
                                                        </motion.p>

                                                        {/* Features */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {step.features.map((feature, idx) => (
                                                                <motion.span
                                                                    key={idx}
                                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lovable-primary/20 backdrop-blur-sm border border-lovable-primary/30 rounded-full text-xs font-medium text-lovable-primary font-sans"
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.2 }}
                                                                >
                                                                    <Check className="w-3 h-3" />
                                                                    {feature}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>

                {/* Progress indicator */}
                <div
                    className={cn(
                        "flex justify-center gap-2 mt-8 transition-all duration-700 delay-400",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setOpenItem(`item-${index}`)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                openItem === `item-${index}`
                                    ? "bg-lovable-primary w-6"
                                    : "bg-muted/30 hover:bg-muted/50"
                            )}
                            aria-label={`Étape ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
