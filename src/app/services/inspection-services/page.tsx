import CTA from "@/components/shared/CTA";
import { Search, Eye, CheckCircle, Settings, ArrowRight, Shield, Database } from "lucide-react";

export default function InspectionServices() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Search className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Inspection Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
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
            of a project. Whether it is monitoring a vendor&apos;s manufacturing process, verifying compliance at 
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
                <CheckCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-gray-700">Only conforming products are shipped</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-purple-600 w-5 h-5" />
                  <span className="text-gray-700">Reduced costly rejections and delays</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-purple-600 w-5 h-5" />
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
                  <div className="bg-primary text-white px-3 py-1 rounded-lg mb-4 font-semibold">ISO/IEC</div>
                  <span className="text-gray-700">International calibration standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white px-3 py-1 rounded-lg mb-4 font-semibold">API</div>
                  <span className="text-gray-700">American Petroleum Institute standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white px-3 py-1 rounded-lg mb-4 font-semibold">Industry</div>
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
            <p className="text-gray-700 mb-4 leading-relaxed">
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
            <p className="text-gray-700 mb-4 leading-relaxed">
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
            <p className="text-gray-700 mb-4 leading-relaxed">
              We ensure all inspections meet regulatory requirements, industry standards, and client 
              specifications, providing the confidence needed for safe operations.
            </p>
          </div>
        </div>

      <CTA />
      </div>
    </div>
  );
}