"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import {
    Zap,
    Clock,
    MapPin,
    Headphones,
    Lock,
    ChevronLeft,
    ChevronRight,
    LucideIcon
} from "lucide-react";

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    stat?: string;
    statLabel?: string;
}

const features: Feature[] = [
    {
        icon: Zap,
        title: "Réservation instantanée",
        description: "Confirmez votre véhicule en quelques secondes, sans paperasse ni attente.",
        stat: "30s",
        statLabel: "en moyenne"
    },
    {
        icon: Clock,
        title: "Flexibilité totale",
        description: "Modifiez ou annulez gratuitement jusqu'à 24h avant le départ.",
        stat: "24h",
        statLabel: "avant départ"
    },
    {
        icon: MapPin,
        title: "Réseau national",
        description: "Plus de 200 agences partenaires à travers toute la France.",
        stat: "200+",
        statLabel: "agences"
    },
    {
        icon: Headphones,
        title: "Support 24/7",
        description: "Une équipe disponible jour et nuit pour vous accompagner.",
        stat: "24/7",
        statLabel: "disponible"
    },
    {
        icon: Lock,
        title: "Paiement sécurisé",
        description: "Transactions cryptées et données protégées par SSL.",
        stat: "SSL",
        statLabel: "crypté"
    }
];

export function FeaturesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const autoplayInterval = 4000;

    const scrollToIndex = useCallback((index: number) => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / features.length;
            carouselRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth"
            });
            setActiveIndex(index);
        }
    }, []);

    const goNext = useCallback(() => {
        const nextIndex = activeIndex === features.length - 1 ? 0 : activeIndex + 1;
        scrollToIndex(nextIndex);
    }, [activeIndex, scrollToIndex]);

    const goPrev = useCallback(() => {
        const prevIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
        scrollToIndex(prevIndex);
    }, [activeIndex, scrollToIndex]);

    // Auto-play with loop
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            goNext();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [isPaused, goNext]);

    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollPosition = carouselRef.current.scrollLeft;
            const cardWidth = carouselRef.current.scrollWidth / features.length;
            const newIndex = Math.round(scrollPosition / cardWidth);

            if (newIndex !== activeIndex && newIndex >= 0 && newIndex < features.length) {
                setActiveIndex(newIndex);
            }
        }
    };

    // Touch handlers for smooth swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setIsPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                goNext();
            } else {
                goPrev();
            }
        }
        setIsPaused(false);
    };

    return (
        <section className="py-20 lg:py-28 bg-lovable-background overflow-hidden">
            <div className="container-emd max-w-6xl">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="text-sm font-medium text-lovable-forest tracking-wide uppercase mb-2 font-sans">
                            Fonctionnalités
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-lovable-foreground tracking-tight">
                            Pourquoi nous choisir
                        </h2>
                    </div>

                    {/* Navigation arrows */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={goPrev}
                            aria-label="Previous slide"
                            className="w-10 h-10 rounded-full border border-lovable-foreground/20 text-lovable-foreground flex items-center justify-center transition-all duration-200 hover:bg-lovable-foreground hover:text-lovable-background"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goNext}
                            aria-label="Next slide"
                            className="w-10 h-10 rounded-full border border-lovable-foreground/20 text-lovable-foreground flex items-center justify-center transition-all duration-200 hover:bg-lovable-foreground hover:text-lovable-background"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 touch-pan-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <div className="group h-full rounded-2xl border border-border/60 bg-lovable-card p-6 transition-all duration-300 hover:border-lovable-forest/30 hover:shadow-md">
                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded-lg bg-lovable-forest/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-lovable-forest/15">
                                        <Icon className="w-5 h-5 text-lovable-forest" strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-medium text-lovable-foreground text-lg mb-2 font-serif">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted/80 text-sm leading-relaxed mb-5 font-sans">
                                        {feature.description}
                                    </p>

                                    {/* Stat */}
                                    {feature.stat && (
                                        <div className="pt-4 border-t border-border/40">
                                            <span className="font-semibold text-xl text-lovable-foreground">{feature.stat}</span>
                                            <span className="text-xs text-muted/60 ml-2">{feature.statLabel}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                activeIndex === index
                                    ? "w-6 bg-lovable-forest"
                                    : "w-1.5 bg-muted/30 hover:bg-muted/50"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
