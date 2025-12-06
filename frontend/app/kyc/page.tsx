"use client"

import { useState } from "react"
import { Button, buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function KYCPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        licenseNumber: "",
        issuedDate: "",
        wilaya: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
        }, 2000)
    }

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-brand-background py-16 px-4 flex justify-center items-center">
                <Card className="max-w-lg w-full bg-brand-surface border-brand-success/50 animate-in fade-in zoom-in duration-300">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-brand-success/20 text-brand-success w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <CardTitle className="text-2xl text-brand-text mb-2">Documents reçus !</CardTitle>
                        <CardDescription>
                            Vos informations ont été transmises à l&apos;agence.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-brand-text/80 space-y-4">
                        <p>La vérification de votre identité est en cours de traitement.</p>
                        <div className="bg-brand-background p-4 rounded-lg border border-brand-border text-sm text-brand-textMuted">
                            <strong>Note pour la démo :</strong> Aucun document n&apos;a été réellement envoyé. C&apos;est une simulation.
                        </div>
                    </CardContent>
                    <CardFooter className="justify-center pt-6">
                        <Link
                            href="/recherche"
                            className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.lg)}
                        >
                            Retour à l&apos;accueil
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand-background py-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-brand-text mb-4">Vérification d&apos;identité (KYC)</h1>
                    <p className="text-brand-textMuted max-w-lg mx-auto">
                        Pour assurer la sécurité des locations, nous avons besoin de vérifier votre identité et votre permis de conduire.
                    </p>
                </div>

                <Card className="border-brand-accent/20">
                    <CardHeader>
                        <CardTitle>Informations du conducteur</CardTitle>
                        <CardDescription>Veuillez remplir les informations et télécharger les documents requis.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-6">
                            {/* Text Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-text">Numéro de permis</label>
                                    <Input
                                        name="licenseNumber"
                                        placeholder="ex: 123456789"
                                        value={formData.licenseNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-text">Date de délivrance</label>
                                    <Input
                                        type="date"
                                        name="issuedDate"
                                        value={formData.issuedDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-brand-text">Wilaya de délivrance</label>
                                    <Input
                                        name="wilaya"
                                        placeholder="ex: Alger"
                                        value={formData.wilaya}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* File Upload Mocks */}
                            <div className="space-y-4 pt-4 border-t border-brand-border">
                                <h3 className="font-semibold text-brand-text">Documents numérisés</h3>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-text">Photo du permis (Recto/Verso)</label>
                                    <div className="flex items-center gap-4">
                                        <Input type="file" className="text-sm cursor-pointer file:cursor-pointer file:text-brand-accent file:border-0 file:bg-transparent" accept="image/*" />
                                    </div>
                                    <p className="text-xs text-brand-textMuted">Formats acceptés : JPG, PNG. Max 5MB.</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-text">Selfie avec pièce d&apos;identité</label>
                                    <div className="flex items-center gap-4">
                                        <Input type="file" className="text-sm cursor-pointer file:cursor-pointer file:text-brand-accent file:border-0 file:bg-transparent" accept="image/*" />
                                    </div>
                                    <p className="text-xs text-brand-textMuted">Prenez une photo de vous tenant votre permis près de votre visage.</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end pt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full md:w-auto"
                                isLoading={isSubmitting}
                            >
                                {isSubmitting ? "Envoi en cours..." : "Soumettre mes documents"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}
