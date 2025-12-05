import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, id, ...props }, ref) => {
        const uniqueId = React.useId()
        const inputId = id || uniqueId

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-brand-text"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    className={cn(
                        "flex min-h-[80px] w-full rounded-lg border border-brand-border bg-brand-surface px-3 py-2 text-sm ring-offset-brand-background placeholder:text-brand-textMuted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50 text-brand-text shadow-sm transition-colors resize-y",
                        error && "border-brand-error focus-visible:ring-brand-error",
                        className
                    )}
                    ref={ref}
                    id={inputId}
                    {...props}
                />
                {error && (
                    <p className="text-xs text-brand-error font-medium">{error}</p>
                )}
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
