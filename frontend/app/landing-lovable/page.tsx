import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { PartnersMarquee } from "@/components/landing/PartnersMarquee";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function LandingLovablePage() {
    return (
        <div className="min-h-screen bg-lovable-background">
            <LandingHeader />
            <main>
                <HeroSection />
                <TrustSection />
                <PartnersMarquee />
                <HowItWorksSection />
                <FeaturesSection />
                <TestimonialsSection />
                <CTASection />
            </main>
            <LandingFooter />
        </div>
    );
}
