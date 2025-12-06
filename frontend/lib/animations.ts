import { Variants } from "framer-motion"

// Fade Up variant for sections and items
// Opacity 0 -> 1
// Y-axis 20px -> 0
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
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
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

// Simple fade in for smoother elements
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
}

// Viewport settings to trigger animation once when 20% of element is visible
export const defaultViewport = { once: true, amount: 0.2 }
