import { ShieldCheck, Search, Settings } from "lucide-react";

export default function ServicesHome() {
  return (
    <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions for oil, gas, and energy infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Card 1 - Asset Integrity Management */}
        <div className="group bg-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Asset Integrity Management
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
            Our Asset Integrity Management (AIM) services ensure that important
            oil and gas assets are safe, dependable, and compliant throughout
            their life cycle. We use a wide range of inspection methods,
            including conventional and advanced NDT techniques, as well as
            subsea and topside facility inspection equipment, which are backed
            by corrosion monitoring, 3D digital modelling, and cutting-edge
            technologies like drones, robotics, and artificial intelligence.
            With solutions ranging from composite repairs to advanced inspection
            data management, we give clients the data and confidence they need
            to manage asset risks and extend operational life, whether onshore,
            offshore, or subsea.
          </p>
          <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Read More
          </button>
        </div>

        {/* Service Card 2 - Inspection Services */}
        <div className="group bg-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Search className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Inspection Services
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
            We conduct data driven inspections that meet or exceed industry
            standards at all stages of a project or operational life to ensure
            equipment integrity and availability. From third-party and source
            inspections to calibration services, we verify that equipment,
            materials, and processes satisfy specifications before they enter
            the field. By confirming vendor compliance, observing factory
            acceptance tests, and ensuring measurement accuracy, we provide the
            confidence required for safe, efficient, and effective field
            operations.
          </p>
          <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Read More
          </button>
        </div>

        {/* Service Card 3 - Engineering & Technical Services */}
        <div className="group bg-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Settings className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Engineering & Technical Services
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
            We provide expert engineering and technical solutions that
            complement inspection activities and support safe, efficient project
            execution. Our services range from engineering and instrumentation
            solutions, rope access support to technical procurement and
            materials consultancy. With advanced capabilities in rotating
            equipment monitoring and technical manpower supply, we combine
            engineering expertise with practical field solutions to help clients
            achieve reliable performance, reduce risks, and optimize costs
            across operational lifecycle.
          </p>
          <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
