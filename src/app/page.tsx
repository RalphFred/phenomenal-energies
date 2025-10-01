import Hero from "@/components/shared/Hero";
import Clients from "@/components/shared/Clients";
import AboutHome from "@/components/shared/AboutHome";
import ServicesHome from "@/components/shared/ServicesHome";
import Why from "@/components/shared/Why";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";
export default function Home() {
  return (
   <div className="space-y-4">
    <Hero />
    <Clients />
    {/* <AboutHome />
    <ServicesHome /> */}
    <Why />
    <Testimonials />
    <CTA />
   </div>
  );
}
