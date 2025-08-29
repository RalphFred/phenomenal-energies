import ServicesHero from "@/components/shared/ServicesHero";
import ServicesHome from "@/components/shared/ServicesHome";
import Why from "@/components/shared/Why";
import CTA from "@/components/shared/CTA";

export default function ServicesPage() {
    return (
        <div className="space-y-4">
            <ServicesHero />
            <ServicesHome />
            <Why />
            <CTA />
            
        </div>
    )
}