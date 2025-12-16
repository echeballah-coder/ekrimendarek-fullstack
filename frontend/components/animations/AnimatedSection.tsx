"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { fadeInUp, defaultViewport } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
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

    // Define mobile-optimized variant (opacity only, lighter)
    const mobileVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    }

    // No animation variant for reduced motion
    const noAnimationVariants: Variants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    }

    // If reduced motion is preferred, use no animation
    // If on mobile, use lighter animation (opacity only, no transform)
    // Otherwise use full fadeInUp
    const variants = shouldReduceMotion ? noAnimationVariants : isMobile ? mobileVariants : fadeInUp

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={variants}
            transition={{ delay }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    )
}
