import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "warning" | "outline" | "secondary"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-brand-accent text-white hover:bg-brand-accentHighlight",
        secondary: "bg-brand-accentSoft text-brand-accent hover:bg-brand-surface border border-transparent",
        success: "bg-brand-success text-white hover:bg-opacity-90",
        warning: "bg-brand-warning text-white hover:bg-opacity-90",
        outline: "text-brand-text border border-brand-border hover:bg-brand-surface",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
