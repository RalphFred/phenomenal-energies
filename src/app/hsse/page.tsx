import { Shield, Award, Users, Clock, CheckCircle, TrendingUp, Target, AlertTriangle, ArrowRight } from "lucide-react";

export default function HssePage() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-green-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-600 rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Shield className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Health, Safety, Security & Environment
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Safety is not just a policy — it&apos;s a core value that guides every decision we make. 
            Our commitment to protecting people and the environment drives everything we do.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Safety as Core Value */}
        <section className="bg-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 rounded-xl p-3">
              <Target className="text-green-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Safety as a Core Value</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            At Phenomenal Energy, safety is not just a policy — it is a core value that guides every decision we make. 
            We are committed to protecting our employees, clients, contractors, and the environment by ensuring that 
            every operation is carried out safely, responsibly, and in line with global best practices.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Safety Slogan</h3>
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white w-8 h-8" />
                </div>
                <p className="text-2xl font-bold text-green-600">"Nobody Gets Hurt"</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Culture</h3>
              <p className="text-gray-700 mb-4">
                At Phenomenal Energy, safety is everyone&apos;s responsibility. From senior management to field technicians, 
                we work together to build a safe, reliable, and sustainable work environment.
              </p>
              <p className="text-sm text-gray-600">
                Our record speaks for itself, but our goal is continuous improvement and zero harm.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-2xl p-6">
              <div className="bg-red-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Tolerance</h3>
              <p className="text-gray-700 text-sm">Zero tolerance for unsafe practices</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="bg-blue-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Assessment</h3>
              <p className="text-gray-700 text-sm">Continuous risk assessment and mitigation</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <div className="bg-green-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Employee Empowerment</h3>
              <p className="text-gray-700 text-sm">Empowerment of employees to stop unsafe work</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="bg-purple-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Integration</h3>
              <p className="text-gray-700 text-sm">Integration of safety into every stage of operations</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="bg-orange-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-orange-600 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-700 text-sm">Commitment to continuous improvement in HSSE performance</p>
            </div>
          </div>
        </section>

        {/* In-House Safety Programs */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">In-House Safety Programs & Practices</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We actively foster a culture of safety through robust programs and daily practices, including:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Inductions</h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive safety inductions for all staff, contractors, and visitors before entering work sites.
                </p>
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Mandatory for all personnel</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular HSE Meetings</h3>
                <p className="text-gray-700 mb-3">
                  Regular HSE meetings to review risks, share lessons learned, and reinforce safe practices.
                </p>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Continuous learning focus</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Drills</h3>
                <p className="text-gray-700 mb-3">
                  Emergency drills covering fire, evacuation, and spill response to ensure preparedness.
                </p>
                <div className="flex items-center gap-2 text-purple-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Regular practice sessions</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Routine Equipment Maintenance</h3>
                <p className="text-gray-700 mb-3">
                  Routine equipment maintenance to prevent failures and enhance reliability.
                </p>
                <div className="flex items-center gap-2 text-orange-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Preventive maintenance schedule</span>
                </div>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">PPE Compliance & Training</h3>
                <p className="text-gray-700 mb-3">
                  PPE compliance and training to ensure proper use of safety equipment at all times.
                </p>
                <div className="flex items-center gap-2 text-red-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">100% compliance required</span>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive risk assessment and mitigation strategies for all operations.
                </p>
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Proactive risk identification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Compliance</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ISO Certification */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 rounded-xl p-3">
                  <Award className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">ISO 45001:2018 Certified</h3>
                  <p className="text-blue-600 font-medium">International Safety Management</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Phenomenal Energy is proud to be ISO 45001:2018 certified, demonstrating our compliance 
                with international safety management standards.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Certification Scope:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Engineering design</li>
                  <li>• Inspection services</li>
                  <li>• Facility maintenance</li>
                  <li>• Subsea inspections</li>
                  <li>• Manpower supply</li>
                </ul>
              </div>
            </div>

            {/* Additional Certifications */}
            <div className="space-y-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NNRA Radiography License</h3>
                <p className="text-gray-700">
                  License to use radiographic equipment for industrial radiography as required by the 
                  Nigerian Nuclear Regulatory Authority (NNRA).
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Standards Compliance</h3>
                <p className="text-gray-700 mb-3">
                  Compliance with international standards across all inspection and engineering services:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-white px-3 py-1 rounded-full text-center">API</span>
                  <span className="bg-white px-3 py-1 rounded-full text-center">ASME</span>
                  <span className="bg-white px-3 py-1 rounded-full text-center">ASTM</span>
                  <span className="bg-white px-3 py-1 rounded-full text-center">NACE</span>
                  <span className="bg-white px-3 py-1 rounded-full text-center">ISO</span>
                  <span className="bg-white px-3 py-1 rounded-full text-center">ASNT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Performance */}
        <section className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Performance</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We measure our commitment to safety with verifiable results. Over the past six years, 
            Phenomenal Energy has achieved:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* Zero Fatal Injuries */}
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <div className="bg-red-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">0</h3>
              <p className="text-gray-700 font-medium">Fatal Injuries</p>
            </div>

            {/* Zero Lost Time Injuries */}
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="bg-orange-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">0</h3>
              <p className="text-gray-700 font-medium">Lost Time Injuries</p>
            </div>

            {/* Zero Medical Treatment Cases */}
            <div className="bg-yellow-50 rounded-2xl p-6 text-center">
              <div className="bg-yellow-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">0</h3>
              <p className="text-gray-700 font-medium">Medical Treatment Cases</p>
            </div>

            {/* Zero Fire Incidents */}
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <div className="bg-red-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-red-600 mb-2">0</h3>
              <p className="text-gray-700 font-medium">Fire Incidents</p>
            </div>

            {/* Total Man Hours */}
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="bg-green-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">66,188</h3>
              <p className="text-gray-700 font-medium">Man Hours (2024)</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Highlights</h3>
            <p className="text-gray-700 mb-4">
              This performance reflects our unwavering dedication to a zero-incident workplace.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-green-600 font-bold text-lg">
                ✓ 6 Years of Zero Incidents
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with a Safety-First Company
          </h2>
          <p className="text-green-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Choose Phenomenal Energy for your energy operations and experience our unwavering 
            commitment to safety, quality, and excellence.
          </p>
          <button className="group bg-white hover:bg-gray-100 text-green-700 font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </section>
      </div>
    </div>
  );
}