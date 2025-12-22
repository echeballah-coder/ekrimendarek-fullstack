"use client"

import { Suspense } from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { validateLogin, LoginPayload, LoginErrors } from "@/lib/validation"
import { setSession } from "@/lib/authSession"
import { buildPostAuthRedirectUrl } from "@/lib/postAuthRedirect"
import { toast } from "sonner"

function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const returnTo = searchParams.get("returnTo")

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
        setIsLoading(true)
        setErrors({})

        // Validate
        const validationErrors = validateLogin(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setIsLoading(false)
            return
        }

        // Simulate login
        setTimeout(() => {
            setSession({
                email: formData.email,
                fullName: "Utilisateur Démo",
                role: "client",
                createdAt: new Date().toISOString()
            })

            toast.success("✅ Connexion réussie !")

            // Build post-auth redirect URL
            const nextUrl = buildPostAuthRedirectUrl({
                returnTo,
                fallbackHref: "/"
            })

            setIsLoading(false)
            router.replace(nextUrl)
        }, 400)
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-surface">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Connexion</CardTitle>
                    <p className="text-center text-sm text-brand-textMuted mt-2">
                        Accédez à votre espace client
                    </p>
                    {returnTo && (
                        <p className="text-center text-xs text-muted mt-2">
                            Après connexion, vous serez renvoyé vers l&apos;étape où vous étiez.
                        </p>
                    )}
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange("email")}
                                placeholder="exemple@mail.dz"
                                disabled={isLoading}
                                autoComplete="email"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                                Mot de passe
                            </label>
                            <Input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange("password")}
                                placeholder="••••••••"
                                disabled={isLoading}
                                autoComplete="current-password"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                            )}
                        </div>

                        {/* Forgot password */}
                        <div className="text-right">
                            <Link href="/auth/forgot-password" className="text-sm text-brand hover:underline">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Connexion..." : "Se connecter"}
                        </Button>

                        <p className="text-sm text-center text-muted">
                            Pas encore de compte ?{" "}
                            <Link href="/auth/signup" className="text-brand hover:underline font-medium">
                                Créer un compte
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-surface">
                <Card className="w-full max-w-md">
                    <CardContent className="py-12 text-center">
                        <p className="text-muted">Chargement...</p>
                    </CardContent>
                </Card>
            </div>
        }>
            <LoginForm />
        </Suspense>
    )
}
