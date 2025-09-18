import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl py-20 px-4 lg:px-8 overflow-hidden"> 
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
        End-to-End Engineering & Integrity Services
        </p>
      </div>
      <div className="mt-12">
        <Image 
          src="/images/img5.png" 
          alt="Phenomenal Energy Services" 
          width={1000} 
          height={1000} 
          className="rounded-2xl w-full h-120 lg:h-150 object-cover" 
        />
      </div>
    </section>
  );
}
