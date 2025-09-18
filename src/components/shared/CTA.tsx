import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl py-16 px-4 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-purple-500/20 rounded-full blur-xl"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-600/30 transform rotate-45 rounded-lg"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-tr from-green-500/30 to-purple-600/30 rounded-full"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left content */}
        <div className="flex-1 max-w-3xl">
          <p className="text-gray-300 leading-relaxed text-xl">
          Partner with us to optimize your assets/infrastructure, enhance safety, minimize risk, and scale operations for maximum performance
          </p>
        </div>

        {/* Right CTA button */}
        <div className="lg:flex-shrink-0">
          <Link href="/contact">
          <button className="group bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          </Link>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}