import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl py-20 px-4 lg:px-8 overflow-hidden"> 
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Comprehensive energy infrastructure solutions that ensure safety, reliability, and operational excellence. 
          From asset integrity management to advanced inspection services, we deliver results that exceed expectations.
        </p>
      </div>
      <div className="mt-12">
        <Image 
          src="/images/hero.jpg" 
          alt="Phenomenal Energies Services" 
          width={1000} 
          height={1000} 
          className="rounded-2xl w-full h-120 object-cover" 
        />
      </div>
    </section>
  );
}
