"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ROUTES } from "@/lib/routes"

export default function KycPage() {
    const router = useRouter()

    useEffect(() => {
        // Auto-redirect after 800ms
        const timer = setTimeout(() => {
            router.push(ROUTES.SETTINGS_DOCUMENTS)
        }, 800)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="container-emd py-16 sm:py-20">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <span className="badge-muted">KYC</span>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        La gestion KYC a été déplacée
                    </h1>
                    <p className="text-muted">
                        Vous allez être redirigé vers la nouvelle page de gestion des documents...
                    </p>
                </div>

                <div className="card-soft p-8 space-y-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-brand/10 flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-brand animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </div>

                    <Link href={ROUTES.SETTINGS_DOCUMENTS}>
                        <button className="btn-primary">
                            Gérer mes documents
                        </button>
                    </Link>
                </div>

                <p className="text-xs text-muted">
                    Mode démo : redirection automatique dans quelques instants
                </p>
            </div>
        </div>
    )
}
