import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { PartnersMarquee } from "@/components/landing/PartnersMarquee";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "EkriMenDarek — Location de véhicules en Algérie",
    description: "Réservez une voiture en quelques étapes. Choisissez une agence, des dates, puis confirmez avec acompte."
};

export default function Home() {
    return (
        <div className="bg-lovable-background">
            <HeroSection />
            <TrustSection />
            <PartnersMarquee />
            <HowItWorksSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
}
