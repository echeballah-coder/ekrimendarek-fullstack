"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { validateSignup, SignupPayload, SignupErrors } from "@/lib/validation"
import { setSession } from "@/lib/authSession"
import { initKycPending } from "@/lib/kyc"
import { buildPostAuthRedirectUrl } from "@/lib/postAuthRedirect"
import { toast } from "sonner"

export default function SignupPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const returnTo = searchParams.get("returnTo")

    const [formData, setFormData] = useState<SignupPayload>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState<SignupErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    // KYC Documents
    const [passport, setPassport] = useState<File | null>(null)
    const [license, setLicense] = useState<File | null>(null)
    const [selfie, setSelfie] = useState<File | null>(null)
    const [kycErrors, setKycErrors] = useState<Record<string, string>>({})

    // Helper to format file size
    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    const handleChange = (field: keyof SignupPayload) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate form fields
        const validationErrors = validateSignup(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        // Validate KYC documents
        const newKycErrors: Record<string, string> = {}
        if (!passport) newKycErrors.passport = "Le passeport est obligatoire."
        if (!license) newKycErrors.license = "Le permis de conduire est obligatoire."
        if (!selfie) newKycErrors.selfie = "La photo d'identité est obligatoire."

        if (Object.keys(newKycErrors).length > 0) {
            setKycErrors(newKycErrors)
            return
        }

        // Initialize KYC pending state (demo)
        try {
            initKycPending()
        } catch (error) {
            console.warn("[Signup] Failed to init KYC state:", error)
            // Don't block signup on KYC init failure
        }

        // Simulate loading
        setIsLoading(true)

        // Mode démo : créer session directement
        setTimeout(() => {
            setSession({
                email: formData.email,
                fullName: formData.fullName,
                role: "client",
                createdAt: new Date().toISOString()
            })

            toast.success("✅ Compte créé avec succès !")

            // Build post-auth redirect URL
            const nextUrl = buildPostAuthRedirectUrl({
                returnTo,
                fallbackHref: "/"
            })

            setIsLoading(false)
            router.replace(nextUrl)
        }, 500)
    }

    const isFormValid =
        formData.fullName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword

    return (
        <div className="min-h-screen bg-brand-background flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md border-brand-border">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Créer un compte</CardTitle>
                    <p className="text-center text-sm text-brand-textMuted mt-2">
                        Rejoignez EkriMenDarek pour louer vos véhicules
                    </p>
                    {returnTo && (
                        <p className="text-center text-xs text-muted mt-2">
                            Après création du compte, vous reprenez là où vous vous étiez arrêté.
                        </p>
                    )}
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Input
                                type="text"
                                label="Nom complet"
                                placeholder="Ahmed Benali"
                                value={formData.fullName}
                                onChange={handleChange("fullName")}
                                disabled={isLoading}
                            />
                            {errors.fullName && (
                                <p className="text-xs text-brand-error mt-1">{errors.fullName}</p>
                            )}
                        </div>

                        <div>
                            <Input
                                type="email"
                                label="Adresse email"
                                placeholder="exemple@email.dz"
                                value={formData.email}
                                onChange={handleChange("email")}
                                disabled={isLoading}
                            />
                            {errors.email && (
                                <p className="text-xs text-brand-error mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <Input
                                type="password"
                                label="Mot de passe"
                                placeholder="Minimum 8 caractères"
                                value={formData.password}
                                onChange={handleChange("password")}
                                disabled={isLoading}
                                autoComplete="new-password"
                            />
                            {errors.password && (
                                <p className="text-xs text-brand-error mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <Input
                                type="password"
                                label="Confirmer le mot de passe"
                                placeholder="Retapez votre mot de passe"
                                value={formData.confirmPassword}
                                onChange={handleChange("confirmPassword")}
                                disabled={isLoading}
                                autoComplete="new-password"
                            />
                            {errors.confirmPassword && (
                                <p className="text-xs text-brand-error mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* KYC Documents Section */}
                        <div className="pt-6 border-t border-border space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-base font-semibold text-text">Documents officiels</h2>
                                <p className="text-sm text-muted">
                                    Obligatoire pour activer votre compte. Vos documents ne sont jamais affichés en clair.
                                </p>
                            </div>

                            {/* Global KYC Error */}
                            {Object.keys(kycErrors).length > 0 && (
                                <div className="card-soft p-4 border-l-4 border-danger" role="alert">
                                    <p className="text-sm text-danger font-medium">
                                        Veuillez fournir tous les documents requis pour continuer.
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-4">
                                {/* Passport */}
                                <div className="card p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="passport" className="text-sm font-medium text-text">
                                            Passeport
                                        </label>
                                        <span className="badge-danger text-xs">Obligatoire</span>
                                    </div>
                                    <input
                                        id="passport"
                                        type="file"
                                        accept="image/*,application/pdf"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null
                                            setPassport(file)
                                            if (file && kycErrors.passport) {
                                                setKycErrors((prev) => {
                                                    const newErrors = { ...prev }
                                                    delete newErrors.passport
                                                    return newErrors
                                                })
                                            }
                                        }}
                                        className={`input w-full text-sm ${kycErrors.passport ? "input-error" : ""}`}
                                        disabled={isLoading}
                                    />
                                    <p className="help-text">Formats : Image ou PDF • Max 10 Mo (démo)</p>
                                    {passport && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-text">
                                                Fichier : {passport.name} — {formatFileSize(passport.size)}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setPassport(null)}
                                                className="btn-ghost text-xs"
                                                disabled={isLoading}
                                            >
                                                Retirer
                                            </button>
                                        </div>
                                    )}
                                    {kycErrors.passport && (
                                        <p className="error-text">{kycErrors.passport}</p>
                                    )}
                                </div>

                                {/* License */}
                                <div className="card p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="license" className="text-sm font-medium text-text">
                                            Permis de conduire
                                        </label>
                                        <span className="badge-danger text-xs">Obligatoire</span>
                                    </div>
                                    <input
                                        id="license"
                                        type="file"
                                        accept="image/*,application/pdf"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null
                                            setLicense(file)
                                            if (file && kycErrors.license) {
                                                setKycErrors((prev) => {
                                                    const newErrors = { ...prev }
                                                    delete newErrors.license
                                                    return newErrors
                                                })
                                            }
                                        }}
                                        className={`input w-full text-sm ${kycErrors.license ? "input-error" : ""}`}
                                        disabled={isLoading}
                                    />
                                    <p className="help-text">Formats : Image ou PDF • Max 10 Mo (démo)</p>
                                    {license && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-text">
                                                Fichier : {license.name} — {formatFileSize(license.size)}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setLicense(null)}
                                                className="btn-ghost text-xs"
                                                disabled={isLoading}
                                            >
                                                Retirer
                                            </button>
                                        </div>
                                    )}
                                    {kycErrors.license && (
                                        <p className="error-text">{kycErrors.license}</p>
                                    )}
                                </div>

                                {/* Selfie */}
                                <div className="card p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="selfie" className="text-sm font-medium text-text">
                                            Selfie / Photo d&apos;identité
                                        </label>
                                        <span className="badge-danger text-xs">Obligatoire</span>
                                    </div>
                                    <input
                                        id="selfie"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null
                                            setSelfie(file)
                                            if (file && kycErrors.selfie) {
                                                setKycErrors((prev) => {
                                                    const newErrors = { ...prev }
                                                    delete newErrors.selfie
                                                    return newErrors
                                                })
                                            }
                                        }}
                                        className={`input w-full text-sm ${kycErrors.selfie ? "input-error" : ""}`}
                                        disabled={isLoading}
                                    />
                                    <p className="help-text">Formats : Image uniquement • Max 10 Mo (démo)</p>
                                    {selfie && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-text">
                                                Fichier : {selfie.name} — {formatFileSize(selfie.size)}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setSelfie(null)}
                                                className="btn-ghost text-xs"
                                                disabled={isLoading}
                                            >
                                                Retirer
                                            </button>
                                        </div>
                                    )}
                                    {kycErrors.selfie && (
                                        <p className="error-text">{kycErrors.selfie}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={!isFormValid || isLoading}
                            isLoading={isLoading}
                        >
                            {isLoading ? "Création du compte..." : "Créer mon compte"}
                        </Button>
                    </form>

                    <div className="mt-6 p-4 bg-brand-background rounded-lg border border-brand-border">
                        <p className="text-xs text-brand-textMuted text-center">
                            <strong>Mode démo :</strong> Aucune vérification serveur. Les données restent locales.
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="justify-center border-t border-brand-border/50 pt-6">
                    <p className="text-sm text-brand-textMuted">
                        Déjà un compte ?{" "}
                        <Link href="/auth/login" className="text-brand-accent hover:text-brand-accentHighlight font-medium">
                            Se connecter
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
