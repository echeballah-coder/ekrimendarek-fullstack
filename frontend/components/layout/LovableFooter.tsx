"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, Facebook, Phone, Mail, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
    produit: [
        { label: "Faire une réservation", href: "/reservation/start" },
        { label: "Nos véhicules", href: "/vehicules" },
        { label: "Tarifs", href: "/recherche" }, // mapped to search as rates are dynamic
        { label: "Nos agences", href: "/locations" }
    ],
    support: [
        { label: "Aide & FAQ", href: "/aide" }, // verified requirement
        { label: "Nous contacter", href: "/contact" },
        { label: "Conditions générales", href: "/legal?tab=terms" },
        { label: "Confidentialité", href: "/legal?tab=privacy" }
    ],
    entreprise: [
        { label: "À propos", href: "/about" },
        { label: "Devenir partenaire", href: "/partenaire" }, // keep distinct from careers
        { label: "Carrières", href: "/contact" }, // fallback if no careers page
        { label: "Presse", href: "/contact" } // fallback
    ]
};

const socials = [
    { icon: Facebook, href: "https://facebook.com/kerya", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/kerya", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/kerya", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com/company/kerya", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@kerya", label: "YouTube" }
];

export function LovableFooter() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast.success("Merci ! Vous êtes inscrit à notre newsletter.");
            setEmail("");
        }
    };

    return (
        <footer className="relative overflow-hidden bg-lovable-background text-lovable-foreground border-t border-border/40">


            {/* Main content */}
            <div className="relative container-emd py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand & Contact column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
                            <svg width="36" height="27" viewBox="0 0 48 36" fill="none" className="text-lovable-primary">
                                <path d="M0 0h16v16H0V0z" fill="currentColor" />
                                <path d="M16 0l20 16H16V0z" fill="currentColor" />
                                <path d="M0 16h16v20L0 16z" fill="currentColor" />
                            </svg>
                            <span className="text-2xl font-semibold text-lovable-foreground tracking-tight font-serif">Kerya</span>
                        </Link>

                        <p className="text-sm text-muted/80 leading-relaxed mb-6 max-w-xs font-sans">
                            La location de voiture simple, transparente et accessible partout en Algérie.
                        </p>

                        {/* Phone number - prominent */}
                        <a
                            href="tel:+21321000000"
                            className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-lovable-primary/10 hover:bg-lovable-primary/15 transition-colors mb-6 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-lovable-primary flex items-center justify-center">
                                <Phone className="w-5 h-5 text-lovable-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-xs text-muted/80 font-sans">Appelez-nous</p>
                                <p className="text-lg font-semibold text-lovable-foreground group-hover:text-lovable-primary transition-colors font-sans">
                                    +213 21 00 00 00
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:contact@kerya.app"
                            className="inline-flex items-center gap-2 text-sm text-muted/80 hover:text-lovable-primary transition-colors font-sans"
                        >
                            <Mail className="w-4 h-4" />
                            <span>contact@kerya.app</span>
                        </a>
                    </div>

                    {/* Links columns */}
                    <div className="lg:col-span-5 grid grid-cols-3 gap-6">
                        {/* Produit */}
                        <div>
                            <h4 className="font-semibold text-lovable-foreground text-sm mb-4 font-serif">Produit</h4>
                            <ul className="space-y-3">
                                {footerLinks.produit.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1 text-sm text-muted/80 hover:text-lovable-primary transition-colors font-sans"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold text-lovable-foreground text-sm mb-4 font-serif">Support</h4>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1 text-sm text-muted/80 hover:text-lovable-primary transition-colors font-sans"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Entreprise */}
                        <div>
                            <h4 className="font-semibold text-lovable-foreground text-sm mb-4 font-serif">Entreprise</h4>
                            <ul className="space-y-3">
                                {footerLinks.entreprise.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1 text-sm text-muted/80 hover:text-lovable-primary transition-colors font-sans"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter & App badges */}
                    <div className="lg:col-span-3">
                        {/* Newsletter */}
                        <div className="mb-8">
                            <h4 className="font-semibold text-lovable-foreground text-sm mb-2 font-serif">Newsletter</h4>
                            <p className="text-sm text-muted/80 mb-4 font-sans">
                                Recevez nos offres et actualités
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Votre email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-lovable-background/80 border-border/50 h-10 font-sans"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    aria-label="S'inscrire à la newsletter"
                                    className="h-10 w-10 shrink-0 bg-lovable-primary hover:bg-lovable-primary/90"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>

                        {/* App badges */}
                        <div>
                            <h4 className="font-semibold text-lovable-foreground text-sm mb-3 font-serif">Téléchargez l&apos;app</h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-lovable-foreground text-lovable-background rounded-lg hover:bg-lovable-foreground/90 transition-colors"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <div className="text-left font-sans">
                                        <p className="text-[10px] leading-none opacity-80">Télécharger sur</p>
                                        <p className="text-sm font-medium leading-tight">App Store</p>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-lovable-foreground text-lovable-background rounded-lg hover:bg-lovable-foreground/90 transition-colors"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left font-sans">
                                        <p className="text-[10px] leading-none opacity-80">Disponible sur</p>
                                        <p className="text-sm font-medium leading-tight">Google Play</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-border/50 bg-muted/30">
                <div className="container-emd py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Social icons - simple style */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted/60 hover:text-lovable-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright & Legal */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted/60 font-sans">
                        <span>© {new Date().getFullYear()} Kerya. Tous droits réservés.</span>
                        <span className="hidden sm:inline text-border">|</span>
                        <Link href="/legal?tab=terms" className="hover:text-lovable-primary transition-colors">
                            CGU
                        </Link>
                        <Link href="/legal?tab=privacy" className="hover:text-lovable-primary transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="/legal?tab=cookies" className="hover:text-lovable-primary transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
