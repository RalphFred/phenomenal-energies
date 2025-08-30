import ServicesHero from "@/components/shared/ServicesHero";
import Why from "@/components/shared/Why";
import CTA from "@/components/shared/CTA";
import ServiceServices from "@/components/shared/ServiceServices";

export default function ServicesPage() {
    return (
        <div className="space-y-4">
            <ServicesHero />    
            <ServiceServices />
            <Why />
            <CTA />
            
        </div>
    )
}