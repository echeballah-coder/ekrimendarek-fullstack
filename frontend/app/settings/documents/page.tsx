"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { loadKycState, updateKycDoc, type KycState, type KycDocKey, type KycStatus } from "@/lib/kyc"
import { ROUTES } from "@/lib/routes"

const DOC_CONFIG = {
    passport: {
        label: "Passeport",
        accept: "image/*,application/pdf",
    },
    license: {
        label: "Permis de conduire",
        accept: "image/*,application/pdf",
    },
    selfie: {
        label: "Selfie / Photo d'identité",
        accept: "image/*",
    },
} as const

export default function SettingsDocumentsPage() {
    const [kycState, setKycState] = useState<KycState | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [uploadFiles, setUploadFiles] = useState<Record<string, File | null>>({
        passport: null,
        license: null,
        selfie: null,
    })
    const [successMessage, setSuccessMessage] = useState<string>("")

    useEffect(() => {
        // Load KYC state after hydration
        const state = loadKycState()
        setKycState(state)
        setIsLoading(false)
    }, [])

    const formatDate = (dateString: string): string => {
        try {
            return new Date(dateString).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })
        } catch {
            return dateString
        }
    }

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    const getStatusBadge = (status: KycStatus) => {
        switch (status) {
            case "missing":
                return <span className="badge-danger text-xs">Non fourni</span>
            case "pending":
                return <span className="badge-warning text-xs">En vérification</span>
            case "approved":
                return <span className="badge-brand text-xs">Validé</span>
            case "rejected":
                return <span className="badge-danger text-xs">Refusé</span>
        }
    }

    const handleFileChange = (docKey: KycDocKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setUploadFiles((prev) => ({ ...prev, [docKey]: file }))
    }

    const handleSubmit = (docKey: KycDocKey) => {
        const file = uploadFiles[docKey]
        if (!file) return

        // Update localStorage (demo: set to pending)
        updateKycDoc(docKey, {
            provided: true,
            status: "pending",
            reason: undefined, // Clear any rejection reason
        })

        // Reload state
        setKycState(loadKycState())

        // Clear file input
        setUploadFiles((prev) => ({ ...prev, [docKey]: null }))

        // Show success message
        setSuccessMessage(`Document ${DOC_CONFIG[docKey].label} envoyé pour vérification (démo)`)
        setTimeout(() => setSuccessMessage(""), 3000)
    }

    if (isLoading) {
        return (
            <div className="container-emd py-10 sm:py-12">
                <div className="space-y-4">
                    <span className="badge-muted">Documents</span>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Mes documents
                    </h1>
                    <p className="text-muted">Chargement...</p>
                </div>
            </div>
        )
    }

    if (!kycState) {
        return (
            <div className="container-emd py-10 sm:py-12 space-y-8">
                <div className="space-y-4">
                    <span className="badge-muted">Documents</span>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                        Mes documents
                    </h1>
                    <p className="text-muted">
                        Vos documents sont requis pour activer votre compte.
                    </p>
                </div>

                <div className="card-soft p-6 space-y-4">
                    <p className="text-sm text-text font-medium">
                        Aucun document enregistré
                    </p>
                    <p className="text-sm text-muted">
                        Vous devez créer un compte pour soumettre vos documents.
                    </p>
                    <Link href="/auth/signup">
                        <button className="btn-primary">
                            Créer un compte
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const docKeys: KycDocKey[] = ["passport", "license", "selfie"]

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Documents</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Mes documents
                </h1>
                <p className="text-muted max-w-2xl">
                    Vos documents sont requis pour activer votre compte. Mode démo : aucun fichier n&apos;est transmis.
                </p>
            </div>

            {/* Success Message */}
            {successMessage && (
                <div className="card-soft p-4 border-l-4 border-brand" role="status" aria-live="polite">
                    <p className="text-sm text-brand font-medium">✓ {successMessage}</p>
                </div>
            )}

            {/* Documents Grid */}
            <div className="grid grid-cols-1 gap-6">
                {docKeys.map((docKey) => {
                    const doc = kycState[docKey]
                    const config = DOC_CONFIG[docKey]
                    const canUpload = doc.status === "missing" || doc.status === "rejected"
                    const file = uploadFiles[docKey]

                    return (
                        <div key={docKey} className="card p-6 space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-semibold text-text">{config.label}</h2>
                                {getStatusBadge(doc.status)}
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <p className="text-sm text-muted">
                                    Dernière mise à jour : {formatDate(doc.updatedAt)}
                                </p>
                                {doc.provided && doc.status !== "missing" && (
                                    <p className="text-sm text-text">
                                        Document soumis ✓
                                    </p>
                                )}
                            </div>

                            {/* Rejection Reason */}
                            {doc.status === "rejected" && doc.reason && (
                                <div className="card-soft p-4 border-l-4 border-danger">
                                    <p className="text-sm text-danger font-medium">Motif du refus :</p>
                                    <p className="text-sm text-muted mt-1">{doc.reason}</p>
                                </div>
                            )}

                            {/* Upload Section */}
                            {canUpload && (
                                <div className="space-y-3 pt-2 border-t border-border">
                                    <label htmlFor={`upload-${docKey}`} className="block text-sm font-medium text-text">
                                        {doc.status === "rejected" ? "Re-soumettre le document" : "Soumettre le document"}
                                    </label>
                                    <input
                                        id={`upload-${docKey}`}
                                        type="file"
                                        accept={config.accept}
                                        onChange={handleFileChange(docKey)}
                                        className="input w-full text-sm"
                                    />
                                    <p className="help-text">
                                        Formats : {config.accept.includes("pdf") ? "Image ou PDF" : "Image uniquement"} • Max 10 Mo (démo)
                                    </p>

                                    {file && (
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-text">
                                                    Fichier : {file.name} — {formatFileSize(file.size)}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => setUploadFiles((prev) => ({ ...prev, [docKey]: null }))}
                                                    className="btn-ghost text-xs"
                                                >
                                                    Retirer
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleSubmit(docKey)}
                                                className="btn-primary text-sm"
                                            >
                                                Soumettre (démo)
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Disabled Upload Info */}
                            {!canUpload && (
                                <p className="help-text">
                                    {doc.status === "pending" && "Document en cours de vérification"}
                                    {doc.status === "approved" && "Document validé ✓"}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* History Section */}
            {kycState.submittedAt && (
                <div className="card-soft p-6 space-y-4">
                    <h2 className="text-base font-semibold text-text">Historique</h2>
                    <div className="space-y-2">
                        <p className="text-sm text-muted">
                            Première soumission : {formatDate(kycState.submittedAt)}
                        </p>
                        {docKeys.map((docKey) => (
                            <p key={docKey} className="text-sm text-muted">
                                {DOC_CONFIG[docKey].label} : {formatDate(kycState[docKey].updatedAt)}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {/* Footer Note */}
            <p className="text-xs text-muted text-center">
                Mode démo : les validations réelles seront gérées côté backend.
            </p>
        </div>
    )
}
