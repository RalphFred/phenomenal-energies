import { Search, Eye, CheckCircle, Settings, ArrowRight, Shield, Database, Zap } from "lucide-react";

export default function InspectionServices() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Search className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Inspection Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Data-driven inspections that meet or exceed industry standards at every stage of your project. 
            From third-party inspections to calibration services, we provide the confidence required for 
            safe, efficient, and effective field operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Inspection Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our inspection services provide clients with reliable, standards-driven verification at every stage 
            of a project. Whether it is monitoring a vendor's manufacturing process, verifying compliance at 
            a construction site, or ensuring the accuracy of instruments and equipment, we deliver the assurance 
            needed for safe and successful operations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We conduct data driven inspections that meet or exceed industry standards at all stages of a project 
            or operational life to ensure equipment integrity and availability. From third-party and source 
            inspections to calibration services, we verify that equipment, materials, and processes satisfy 
            specifications before they enter the field.
          </p>
        </section>

        {/* Third Party Inspection Services */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-xl p-3">
              <Shield className="text-blue-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Third Party Inspection Services</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            We act as an independent inspection body, ensuring that equipment, materials, and processes meet 
            industry standards, client specifications, and regulatory requirements. Our global third-party 
            inspection services cover:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vendor & Manufacturing Inspections</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Material verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Welding inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Dimensional checks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Hydrotesting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Coating verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    Packaging inspection
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Manufacturing expediting services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Factory acceptance tests (FATs)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Quality documentation review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Compliance verification
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Coverage</h3>
              <p className="text-gray-700 mb-6">
                We utilize highly qualified third-party inspectors worldwide, delivering best-in-class 
                inspection services that ensure compliance, quality, and reliable data.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Only conforming products are shipped</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Reduced costly rejections and delays</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Comprehensive compliance verification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calibration Services */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 rounded-xl p-3">
              <Settings className="text-orange-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Calibration Services</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Accuracy in measurement is critical for safe operations and reliable inspection results. 
            Our calibration services ensure that instruments and inspection equipment remain precise 
            and compliant with international standards such as ISO/IEC and API.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Maintains calibration integrity cost-effectively
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Meets quality system requirements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Avoids operational risks from inaccurate measurements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Prevents costly rework and equipment failures
                </li>
              </ul>
            </div>

            {/* Standards */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">ISO/IEC</div>
                  <span className="text-gray-700">International calibration standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">API</div>
                  <span className="text-gray-700">American Petroleum Institute standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">Industry</div>
                  <span className="text-gray-700">Specific industry requirements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Data-Driven Approach */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-green-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Database className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Approach</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our inspections are backed by comprehensive data analysis, ensuring accurate assessments 
              and reliable results that meet or exceed industry standards.
            </p>
          </div>

          {/* Global Network */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-blue-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Eye className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Network</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              With qualified inspectors worldwide, we provide comprehensive coverage for your projects 
              regardless of location, ensuring consistent quality standards.
            </p>
          </div>

          {/* Compliance Focus */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-purple-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="text-purple-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Focus</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We ensure all inspections meet regulatory requirements, industry standards, and client 
              specifications, providing the confidence needed for safe operations.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl py-16 px-8 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-purple-500/20 rounded-full blur-xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-600/30 transform rotate-45 rounded-lg"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-tr from-green-500/30 to-purple-600/30 rounded-full"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Ready for Reliable Inspection Services?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Let our expert inspection team provide the verification and compliance assurance you need 
              for safe, successful operations.
            </p>
            <button className="group bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
        </section>
      </div>
    </div>
  );
}