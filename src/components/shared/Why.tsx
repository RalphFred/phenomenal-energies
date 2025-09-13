import { Award, Shield, Users, Clock, Zap, Globe } from "lucide-react";

export default function Why() {
  return (
    <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experience,  Ease of mobilization , cost competitiveness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {/* Innovation */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Zap className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
          <p className="text-gray-700 leading-relaxed">
            Cutting-edge technologies and forward-thinking solutions that keep
            you ahead of industry standards.
          </p>
        </div>
        
        {/* Excellence */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Award className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
          <p className="text-gray-700 leading-relaxed">
            Unwavering commitment to quality and precision in each project,
            delivering results that exceed expectations
          </p>
        </div>

         {/* Global Reach */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Globe className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Global Reach
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Worldwide presence and local expertise to serve your needs wherever
            your operations take you.
          </p>
        </div>
        
        {/* Reliability */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
          <p className="text-gray-700 leading-relaxed">
            Proven track record of consistent performance and dependable service
            delivery across all operations.
          </p>
        </div>

        {/* Expertise */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h3>
          <p className="text-gray-700 leading-relaxed">
            Deep industry knowledge and technical proficiency backed by years of
            specialized experience.
          </p>
        </div>

        

       

        {/* Timely Delivery */}
        <div className="text-center group">
          <div className="bg-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Clock className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Timely Delivery
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Efficient project execution and on-time delivery that keeps your
            operations running smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}
