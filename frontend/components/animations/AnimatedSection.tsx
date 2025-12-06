"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { fadeInUp, defaultViewport } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
    const shouldReduceMotion = useReducedMotion()

    // If reduced motion is preferred, use a simpler variant (just opacity) or no animation
    const variants = shouldReduceMotion ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    } : fadeInUp

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
