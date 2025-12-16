"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
    children: ReactNode
    className?: string
}

export function AnimatedList({ children, className }: AnimatedListProps) {
    const shouldReduceMotion = useReducedMotion()
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile viewport on client-side only
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Mobile-optimized: no stagger, just fade
    const mobileContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    }

    // No animation variant
    const noAnimationContainerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    }

    // On mobile: lighter animation (no stagger, just fade)
    const containerVariants = shouldReduceMotion
        ? noAnimationContainerVariants
        : isMobile
            ? mobileContainerVariants
            : staggerContainer

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    )
}

// Component to wrap individual items in the list
export function AnimatedItem({ children, className }: { children: ReactNode, className?: string }) {
    const shouldReduceMotion = useReducedMotion()
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile viewport on client-side only
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // No animation variant (for reduced motion or mobile)
    const noAnimationItemVariants: Variants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 }
    }

    // On mobile: no animation for items (rely on parent)
    const itemVariants = shouldReduceMotion || isMobile ? noAnimationItemVariants : fadeInUp

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}
