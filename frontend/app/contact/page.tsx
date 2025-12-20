"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/lib/routes"
import { Mail, Phone, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        subject: "",
        fullName: "",
        email: "",
        reservationNumber: "",
        message: "",
        consent: false,
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.fullName || formData.fullName.trim().length < 2) {
            newErrors.fullName = "Le nom complet est requis (minimum 2 caractères)."
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Une adresse email valide est requise."
        }

        if (!formData.message || formData.message.trim().length < 20) {
            newErrors.message = "Le message est requis (minimum 20 caractères)."
        }

        if (!formData.consent) {
            newErrors.consent = "Vous devez accepter d'être recontacté."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setSubmitStatus("idle")

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        // Simulate API call (700-900ms)
        const delay = 700 + Math.random() * 200
        await new Promise((resolve) => setTimeout(resolve, delay))

        // Simulate error if email contains "fail"
        if (formData.email.toLowerCase().includes("fail")) {
            setSubmitStatus("error")
        } else {
            setSubmitStatus("success")
            // Reset form on success
            setFormData({
                subject: "",
                fullName: "",
                email: "",
                reservationNumber: "",
                message: "",
                consent: false,
            })
        }

        setIsSubmitting(false)
    }

    const handleReset = () => {
        setFormData({
            subject: "",
            fullName: "",
            email: "",
            reservationNumber: "",
            message: "",
            consent: false,
        })
        setErrors({})
        setSubmitStatus("idle")
    }

    const handleChange = (field: string) => (e: any) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[field]
                return newErrors
            })
        }
    }

    return (
        <div className="container-emd py-10 sm:py-12 space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <span className="badge-muted">Contact</span>
                <h1 className="text-2xl sm:text-3xl font-semibold text-text">
                    Contactez-nous
                </h1>
                <p className="text-muted max-w-2xl">
                    Une question sur une réservation, un document ou une agence ? Écrivez-nous — nous vous répondons dès que possible.
                </p>
            </div>

            {/* CTA Bar */}
            <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.RESERVATION_START}>
                    <Button variant="primary">Commencer une réservation</Button>
                </Link>
                <Link href={ROUTES.RESERVATION_MANAGE}>
                    <Button variant="secondary">Gérer une réservation</Button>
                </Link>
                <Link href="/aide">
                    <Button variant="ghost">Aide & FAQ</Button>
                </Link>
                <Link href={ROUTES.ACCOUNT}>
                    <Button variant="ghost">Mon compte</Button>
                </Link>
            </div>

            {/* Contact Channels */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Canaux de contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">Email support</p>
                            <a href="mailto:support@ekrimendarek.dz" className="link text-sm">
                                support@ekrimendarek.dz
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">Téléphone</p>
                            <p className="text-sm text-muted">+213 … (à définir)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <MessageCircle className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">WhatsApp</p>
                            <p className="text-sm text-muted">+213 … (à définir)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">Adresse</p>
                            <p className="text-sm text-muted">Algérie — (adresse à définir)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Facebook className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">Facebook</p>
                            <a href="#" className="link text-sm">
                                @ekrimendarek
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Instagram className="w-5 h-5 text-brand2 mt-0.5" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-text">Instagram</p>
                            <a href="#" className="link text-sm">
                                @ekrimendarek
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Envoyer un message</h2>

                {submitStatus === "success" && (
                    <div className="card-soft p-4 space-y-2" role="alert" aria-live="polite">
                        <span className="badge-brand">Message envoyé (démo)</span>
                        <p className="text-sm text-text">
                            Votre message a été envoyé. (Mode démo : aucune donnée n&apos;est transmise.)
                        </p>
                        <p className="text-sm text-muted">
                            Nous reviendrons vers vous dans les plus brefs délais.
                        </p>
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="card-soft p-4 border-l-4 border-danger" role="alert" aria-live="polite">
                        <p className="text-sm text-danger font-medium">
                            Impossible d&apos;envoyer le message. Réessayez dans quelques instants.
                        </p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Subject */}
                    <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-text">
                            Sujet
                        </label>
                        <select
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange("subject")}
                            className="input w-full"
                            disabled={isSubmitting}
                        >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="reservation">Question réservation</option>
                            <option value="paiement">Paiement</option>
                            <option value="kyc">Documents (KYC)</option>
                            <option value="agence">Agence partenaire</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-text">
                            Nom complet <span className="text-danger">*</span>
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange("fullName")}
                            className={`input w-full ${errors.fullName ? "input-error" : ""}`}
                            disabled={isSubmitting}
                            placeholder="Votre nom complet"
                        />
                        {errors.fullName && (
                            <p className="error-text">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text">
                            Email <span className="text-danger">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange("email")}
                            className={`input w-full ${errors.email ? "input-error" : ""}`}
                            disabled={isSubmitting}
                            placeholder="votre.email@exemple.dz"
                        />
                        {errors.email && (
                            <p className="error-text">{errors.email}</p>
                        )}
                        <p className="help-text">
                            Astuce : utilisez &quot;fail&quot; dans l&apos;email pour simuler une erreur.
                        </p>
                    </div>

                    {/* Reservation Number (optional) */}
                    <div className="space-y-2">
                        <label htmlFor="reservationNumber" className="block text-sm font-medium text-text">
                            Numéro de réservation (optionnel)
                        </label>
                        <input
                            id="reservationNumber"
                            type="text"
                            value={formData.reservationNumber}
                            onChange={handleChange("reservationNumber")}
                            className="input w-full"
                            disabled={isSubmitting}
                            placeholder="Ex: RES-2024-XXXXX"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-text">
                            Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange("message")}
                            className={`input w-full min-h-[120px] ${errors.message ? "input-error" : ""}`}
                            disabled={isSubmitting}
                            placeholder="Décrivez votre demande en détail (minimum 20 caractères)..."
                        />
                        {errors.message && (
                            <p className="error-text">{errors.message}</p>
                        )}
                        <p className="help-text">
                            {formData.message.length} / 20 caractères minimum
                        </p>
                    </div>

                    {/* Consent */}
                    <div className="space-y-2">
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.consent}
                                onChange={handleChange("consent")}
                                className="mt-0.5"
                                disabled={isSubmitting}
                            />
                            <span className="text-sm text-text">
                                J&apos;accepte d&apos;être recontacté par email. <span className="text-danger">*</span>
                            </span>
                        </label>
                        {errors.consent && (
                            <p className="error-text">{errors.consent}</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Envoi…
                                </span>
                            ) : (
                                "Envoyer"
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleReset}
                            disabled={isSubmitting}
                        >
                            Réinitialiser
                        </Button>
                    </div>
                </form>
            </div>

            {/* Mini FAQ Contact */}
            <div className="card-soft p-6 space-y-4">
                <h2 className="text-lg font-semibold text-text">Questions fréquentes</h2>
                <div className="space-y-3">
                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Sous combien de temps répondez-vous ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            En mode démo, les réponses sont simulées. En production, nous nous engageons à répondre dans les 24-48h ouvrées. Pour les urgences (réservation imminente), contactez directement l&apos;agence concernée.
                        </p>
                    </details>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Je n&apos;ai pas mon numéro de réservation.
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Consultez l&apos;email de confirmation ou votre <Link href={ROUTES.ACCOUNT} className="text-brand hover:underline">compte</Link>. Si vous ne le trouvez toujours pas, indiquez vos nom, email et dates de réservation dans le message.
                        </p>
                    </details>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Mes documents sont-ils sécurisés ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Oui, vos documents KYC sont chiffrés et jamais affichés en clair. Seuls les administrateurs autorisés peuvent les consulter dans un environnement sécurisé pour validation. Plus d&apos;infos dans la <Link href="/aide#documents" className="text-brand hover:underline">section Documents de l&apos;aide</Link>.
                        </p>
                    </details>

                    <details className="card p-4 group">
                        <summary className="font-medium cursor-pointer text-text list-none flex items-center justify-between">
                            Je suis une agence : comment devenir partenaire ?
                            <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-sm text-muted mt-3 leading-relaxed">
                            Sélectionnez &quot;Agence partenaire&quot; dans le sujet du formulaire ci-dessus. Nous vous guiderons sur les documents requis (registre commerce, RIB, assurance flotte). Plus d&apos;infos dans la <Link href="/aide#pro" className="text-brand hover:underline">section Espace agence</Link>.
                        </p>
                    </details>
                </div>

                <p className="text-sm text-muted">
                    Pour plus de réponses, consultez notre <Link href="/aide" className="link">centre d&apos;aide complet</Link>.
                </p>
            </div>

            {/* Mode démo note */}
            <p className="text-xs text-muted text-center">
                Mode démo : ces canaux et formulaires sont indicatifs. Les intégrations (email/WhatsApp) seront activées avec le backend.
            </p>
        </div>
    )
}
