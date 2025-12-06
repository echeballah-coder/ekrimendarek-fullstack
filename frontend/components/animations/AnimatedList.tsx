"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
    children: ReactNode
    className?: string
}

export function AnimatedList({ children, className }: AnimatedListProps) {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = shouldReduceMotion ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
    } : staggerContainer

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

    const itemVariants = shouldReduceMotion ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 }
    } : fadeInUp

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}
