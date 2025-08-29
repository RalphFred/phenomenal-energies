import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl py-20 px-4 lg:px-8 overflow-hidden"> 
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
            More Than an Energy Company
          </h1>
          <p className="lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Discover how we've helped energy companies enhance safety, optimize operations, 
            and achieve excellence across Nigeria and beyond. Our commitment to innovation 
            and reliability sets us apart in the energy sector.
          </p>
        </div>
        <div className="mt-12">
            <Image src="/images/hero.jpg" alt="About Hero" width={1000} height={1000} className="rounded-2xl w-full h-120 object-cover" />
        </div>
    </section>
  );
}