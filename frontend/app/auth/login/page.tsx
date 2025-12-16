"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { validateLogin, LoginPayload, LoginErrors } from "@/lib/validation"
import { setSession } from "@/lib/authSession"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState<LoginPayload>({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState<LoginErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (field: keyof LoginPayload) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate
        const validationErrors = validateLogin(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        // Simulate loading
        setIsLoading(true)

        // Mode démo : accepte n'importe quel email/password valide
        setTimeout(() => {
            setSession({
                email: formData.email,
                fullName: "Utilisateur Démo",
                role: "client",
                createdAt: new Date().toISOString()
            })

            toast.success("✅ Connexion réussie !")
            setIsLoading(false)
            router.push("/account")
        }, 400)
    }

    const isFormValid = formData.email && formData.password

    return (
        <div className="min-h-screen bg-brand-background flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md border-brand-border">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Connexion</CardTitle>
                    <p className="text-center text-sm text-brand-textMuted mt-2">
                        Accédez à votre espace client
                    </p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange("password")}
                                disabled={isLoading}
                            />
                            {errors.password && (
                                <p className="text-xs text-brand-error mt-1">{errors.password}</p>
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
                            {isLoading ? "Connexion..." : "Se connecter"}
                        </Button>
                    </form>

                    <div className="mt-6 p-4 bg-brand-background rounded-lg border border-brand-border">
                        <p className="text-xs text-brand-textMuted text-center">
                            <strong>Mode démo :</strong> Entrez n&apos;importe quel email valide et un mot de passe de 8+ caractères
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="justify-center border-t border-brand-border/50 pt-6">
                    <p className="text-sm text-brand-textMuted">
                        Pas encore de compte ?{" "}
                        <Link href="/auth/signup" className="text-brand-accent hover:text-brand-accentHighlight font-medium">
                            Créer un compte
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
