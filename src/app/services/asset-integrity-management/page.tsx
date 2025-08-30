import { Shield, Eye, Zap, Wrench, Monitor, Database, ArrowRight } from "lucide-react";

export default function AssetIntegrityManagement() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Shield className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Asset Integrity Management
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At the heart of everything we do. Ensuring vital equipment and infrastructure remain safe, 
            reliable, and compliant throughout their lifecycle with cutting-edge inspection techniques 
            and advanced digital technologies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive AIM Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Asset Integrity Management (AIM) services ensure that important oil and gas assets are safe, 
            dependable, and compliant throughout their life cycle. We use a wide range of inspection methods, 
            including conventional and advanced NDT techniques, as well as subsea and topside facility inspection 
            equipment, which are backed by corrosion monitoring, 3D digital modelling, and cutting-edge technologies 
            like drones, robotics, and artificial intelligence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With solutions ranging from composite repairs to advanced inspection data management, we give clients 
            the data and confidence they need to manage asset risks and extend operational life, whether onshore, 
            offshore, or subsea.
          </p>
        </section>

        {/* NDT Testing Section */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-xl p-3">
              <Eye className="text-blue-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">NDT Testing Techniques & Equipment</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            We apply a wide range of Non-Destructive Testing (NDT) methods to identify defects, monitor material 
            conditions, and verify asset integrity without disrupting operations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Conventional Techniques */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conventional Techniques</h3>
              <p className="text-gray-700 mb-4">
                Traditional inspection methods form the foundation of our integrity programs:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Visual Testing (VT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Ultrasonic Testing (UT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Radiographic Testing (RT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Dye Penetrant Testing (PT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Magnetic Particle Testing (MT)
                </li>
              </ul>
            </div>

            {/* Advanced Techniques */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Techniques</h3>
              <p className="text-gray-700 mb-4">
                For complex inspections and critical applications:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Phased Array Ultrasonic Testing (PAUT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Digital Radiography Testing (DRT)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Thermography
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Pulsed Eddy Current (PEC)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-primary w-4 h-4" />
                  Automated Ultrasonic Testing
                </li>
              </ul>
            </div>
          </div>

          {/* Pipeline Inline Inspections */}
          <div className="mt-8 bg-purple-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pipeline Inline Inspections</h3>
            <p className="text-gray-700 mb-4">
              Our pipeline inline inspection services cover the full spectrum of integrity management:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary w-4 h-4" />
                Internal cleaning to prepare the line for assessment
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary w-4 h-4" />
                Comprehensive integrity evaluations
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary w-4 h-4" />
                Advanced inline inspection
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary w-4 h-4" />
                Internal geometry inspection and XYZ mapping
              </li>
            </ul>
          </div>
        </section>

        {/* Facility Inspections Section */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 rounded-xl p-3">
              <Monitor className="text-green-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Facility Inspections – Topside & Subsea</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Our facility inspection services cover both topside and subsea assets, ensuring complete coverage 
            across the operating environment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Topside Inspections */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Topside Inspections</h3>
              <p className="text-gray-700 mb-4">
                We inspect pressure vessels, piping systems, tanks, flare stacks, and structural components 
                to identify wear, corrosion, or mechanical damage.
              </p>
              <p className="text-sm text-gray-600">
                These inspections follow international standards such as API 570, API 653, and ASME codes.
              </p>
            </div>

            {/* Subsea Inspections */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subsea Inspections</h3>
              <p className="text-gray-700 mb-4">
                Using remotely operated vehicles (ROVs), divers, and specialized NDT tools, we assess 
                subsea pipelines, risers, manifolds, and wellhead systems.
              </p>
              <p className="text-sm text-gray-600">
                These inspections provide critical information about subsea integrity where access is most challenging.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Corrosion Monitoring */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-orange-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Database className="text-orange-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corrosion Condition Monitoring</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We use corrosion coupons to give clients a clear picture of how their assets are performing 
              in real operating conditions. This simple yet effective approach helps minimize downtime, 
              avoid costly failures, and extend asset life.
            </p>
          </div>

          {/* 3D Photogrammetry */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-purple-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Eye className="text-purple-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3D Photogrammetry & Metrology</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Using advanced 3D photogrammetry and laser scanning, we deliver precise digital models 
              of assets and structures. This supports dimensional control, damage assessment, and 
              fit-for-purpose analysis.
            </p>
          </div>

          {/* Composite Repair */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-blue-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Wrench className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Composite Repair Solutions</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              If anomalies are found during inspections, we offer stronger than steel composite solutions 
              to restore your pipelines, saving you both time and money without shutting down operations.
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
              Ready to Enhance Your Asset Integrity?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Let our expert team help you maintain the highest standards of safety, reliability, and compliance 
              across your energy infrastructure.
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