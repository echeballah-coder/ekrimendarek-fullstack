import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
    size?: "sm" | "md" | "lg"
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-brand-gradient text-white hover:opacity-90 shadow-md",
            secondary: "bg-brand-surface text-brand-accent border border-brand-accent hover:bg-brand-accentSoft",
            outline: "border border-brand-border bg-transparent hover:bg-brand-surface text-brand-text",
            ghost: "hover:bg-brand-accentSoft text-brand-accent",
            link: "text-brand-accent underline-offset-4 hover:underline",
        }

        const sizes = {
            sm: "h-9 px-3 text-xs",
            md: "h-11 px-6 py-2.5 text-sm",
            lg: "h-12 px-8 text-base",
        }

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-inherit border-t-transparent" />
                )}
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
