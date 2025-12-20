"use client"

import { useEffect, useRef } from "react"

/**
 * Drawer générique - Menu défilant depuis la droite
 * 
 * Composant UI accessible avec gestion du focus et overlay
 * Utilisé pour les menus mobiles, panneaux latéraux, etc.
 */

export interface DrawerProps {
    open: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export function Drawer({ open, onClose, title, children }: DrawerProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    // Focus management: focus close button when drawer opens
    useEffect(() => {
        if (open && closeButtonRef.current) {
            closeButtonRef.current.focus()
        }
    }, [open])

    // Escape key to close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                onClose()
            }
        }

        if (open) {
            document.addEventListener("keydown", handleEscape)
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
        }
    }, [open, onClose])

    // Don't render if not open
    if (!open) return null

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer Panel */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label={title || "Menu"}
                className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface border-l border-border shadow-2xl
                          transform transition-transform duration-300 ease-out
                          flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <h2 className="text-lg font-semibold text-text">
                        {title || "Menu"}
                    </h2>
                    <button
                        ref={closeButtonRef}
                        onClick={onClose}
                        className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface2 transition-colors"
                        aria-label="Fermer le menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </>
    )
}
