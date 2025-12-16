"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { validateSignup, SignupPayload, SignupErrors } from "@/lib/validation"
import { setSession } from "@/lib/authSession"
import { toast } from "sonner"

export default function SignupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState<SignupPayload>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState<SignupErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (field: keyof SignupPayload) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate
        const validationErrors = validateSignup(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
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
            setIsLoading(false)
            router.push("/account")
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
                        Rejoignez EkriMenDarek en quelques clics
                    </p>
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
                            />
                            {errors.confirmPassword && (
                                <p className="text-xs text-brand-error mt-1">{errors.confirmPassword}</p>
                            )}
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
