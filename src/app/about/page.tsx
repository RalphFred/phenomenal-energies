import AboutHero from "@/components/shared/AboutHero";
import AboutBio from "@/components/shared/AboutBio";
import AboutTeam from "@/components/shared/AboutTeam";
import Why from "@/components/shared/Why";
import Testimonials from "@/components/shared/Testimonials";

export default function AboutPage() {
    return (
        <div className="space-y-4">
            <AboutHero />
            <AboutBio />
            <AboutTeam />
            <Why />
            <Testimonials />
        </div>
    )
}