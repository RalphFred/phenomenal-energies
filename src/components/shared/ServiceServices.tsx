import Link from "next/link";
import Image from "next/image";

export default function ServiceServices() {
    return (
        <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Card 1 - Asset Integrity Management */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          {/* Image Section */}
          <div className="relative h-64 w-full">
            <Image 
              src="/images/img1.jpg" 
              alt="Asset Integrity Management"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Asset Integrity Management
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
              Our Asset Integrity Management (AIM) services ensure that important
              oil and gas assets are safe, dependable, and compliant throughout
              their life cycle. We use a wide range of inspection methods,
              including conventional and advanced NDT techniques.
            </p>
            <Link href="/services/asset-integrity-management">
              <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Service Card 2 - Inspection Services */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          {/* Image Section */}
          <div className="relative h-64 w-full">
            <Image 
              src="/images/img2.png" 
              alt="Inspection Services"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Inspection Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
              We conduct data driven inspections that meet or exceed industry
              standards at all stages of a project or operational life to ensure
              equipment integrity and availability. From third-party and source
              inspections to calibration services.
            </p>
            <Link href="/services/inspection-services">
              <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Service Card 3 - Engineering & Technical Services */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          {/* Image Section */}
          <div className="relative h-64 w-full">
            <Image 
              src="/images/img3.png" 
              alt="Engineering & Technical Services"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Engineering & Technical Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
              We provide expert engineering and technical solutions that
              complement inspection activities and support safe, efficient project
              execution. Our services range from engineering and instrumentation
              solutions, rope access support.
            </p>
            <Link href="/services/engineering-and-technical-services">
              <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
        </section>
    )
}