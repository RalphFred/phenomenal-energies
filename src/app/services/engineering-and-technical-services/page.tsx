import { Settings, Anchor, Database, Zap, ArrowRight, CheckCircle, Shield, Eye } from "lucide-react";

export default function EngineeringAndTechnicalServices() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Settings className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Engineering & Technical Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Expert engineering and technical solutions that complement inspection activities and support 
            safe, efficient project execution. We bridge the gap between engineering design and real-world field performance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Technical Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our engineering and technical services provide clients with the expertise and support needed 
            to complement project execution and ensure projects are executed safely, efficiently, and to specification. 
            By combining engineering know-how with practical field solutions, we deliver value throughout the project 
            lifecycle — from design, procurement, installation and maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We provide expert engineering and technical solutions that complement inspection activities and support 
            safe, efficient project execution. Our services range from engineering and instrumentation solutions, 
            rope access support to technical procurement and materials consultancy.
          </p>
        </section>

        {/* Engineering & Instrumentation Solutions */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-xl p-3">
              <Settings className="text-blue-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Engineering & Instrumentation Solutions</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            We provide specialized engineering and instrumentation services that support asset performance and integrity, 
            delivering design and integration solutions for piping, process equipment, and control systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Piping system design and integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Process equipment optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Control systems integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  System performance optimization
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Focus</h3>
              <p className="text-gray-700 mb-4">
                We focus on optimizing system performance, ensuring that all equipment runs safely, efficiently, 
                and in line with operational requirements.
              </p>
              <p className="text-sm text-gray-600">
                Through these services, we bridge the gap between engineering design and real-world field performance.
              </p>
            </div>
          </div>
        </section>

        {/* Rope Access Support */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 rounded-xl p-3">
              <Anchor className="text-green-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Rope Access Support</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            When inspections or maintenance must be carried out in hard-to-reach locations, we provide safe 
            and efficient rope access solutions.
          </p>

          <div className="bg-green-50 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Technicians</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Nigerian Level 1-3 Rope Access technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    ASNT certified professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    Safety-focused approach
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="text-green-600 w-4 h-4" />
                    Hard-to-reach inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="text-green-600 w-4 h-4" />
                    Maintenance operations
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="text-green-600 w-4 h-4" />
                    Emergency repairs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Materials/Metallurgy Consultancy */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 rounded-xl p-3">
              <Database className="text-purple-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Materials/Metallurgy Consultancy & Support</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Phenomenal Energy is the first Nigerian engineering company to provide comprehensive material, 
            metallurgy, and welding handbooks tailored to any project size.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Analysis</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600 w-5 h-5" />
                    Rigorous material requirement analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600 w-5 h-5" />
                    Easy-to-use procurement guides
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600 w-5 h-5" />
                    Fabrication error minimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600 w-5 h-5" />
                    Excess material reduction
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Capabilities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective Designs</h4>
                  <p className="text-gray-700 text-sm">
                    Optimize material grades while maintaining quality and performance standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Traceability Program</h4>
                  <p className="text-gray-700 text-sm">
                    Even "untraceable materials" are managed efficiently, helping clients save money, 
                    avoid waste, and meet stringent industry standards with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rotating Equipment Monitoring */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 rounded-xl p-3">
              <Zap className="text-orange-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Rotating Equipment Condition Monitoring</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Using AI, IoT, and sophisticated analytics, we offer round-the-clock rotating equipment monitoring. 
            Our system identifies problems, predicts remaining life, and allows for timely corrective action 
            without the need for a human-machine interface.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technology Features */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Technology</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  AI-powered anomaly detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  IoT sensor integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Sophisticated analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 w-5 h-5" />
                  Complex algorithm processing
                </li>
              </ul>
            </div>

            {/* System Benefits */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  24/7 monitoring capabilities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Predictive maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Intuitive online interface
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Mobile accessibility
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-green-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Monitoring</h3>
            <p className="text-gray-700">
              Complex algorithms are used to identify anomalies, describe issues, and keep clients informed 
              via an intuitive online and mobile interface, ensuring reliability and minimizing downtime.
            </p>
          </div>
        </section>

        {/* Service Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Lifecycle */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-blue-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Eye className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Project Lifecycle</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We deliver value throughout the project lifecycle — from design, procurement, installation 
              and maintenance, ensuring comprehensive support at every stage.
            </p>
          </div>

          {/* Risk Management */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-green-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our solutions help clients achieve reliable performance, reduce risks, and optimize costs 
              across operational lifecycle while maintaining safety standards.
            </p>
          </div>

          {/* Innovation Focus */}
          <div className="bg-white rounded-2xl p-6">
            <div className="bg-purple-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
              <Zap className="text-purple-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Focus</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We continuously invest in new technologies including AI, IoT, and advanced analytics to 
              improve system performance and operational efficiency.
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
              Ready for Expert Engineering Solutions?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Let our engineering and technical experts help you achieve reliable performance, reduce risks, 
              and optimize costs across your operational lifecycle.
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