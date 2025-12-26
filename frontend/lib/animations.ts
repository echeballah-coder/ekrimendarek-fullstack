import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18, // Reduced slightly for subtlety
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // "Branding" ease (sober & smooth)
        }
    }
}

// Stagger container for lists
// Orchestrates children animations
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Slightly faster stagger
            delayChildren: 0.05
        }
    }
}

// Simple fade in for smoother elements
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

// Viewport settings to trigger animation once
export const defaultViewport = {
    once: true,
    amount: 0.2,
    margin: "-10% 0px -10% 0px" // Trigger slightly before element is fully in view, but with margin
}
