import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Bold Together
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your energy operations? We&apos;re just a message away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="janedoe@xmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="08123456789"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Services interested in
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Please Select one ---</option>
                  <option value="asset-integrity">Asset Integrity Management</option>
                  <option value="inspection">Inspection Services</option>
                  <option value="engineering">Engineering & Technical Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send message
              </button>
            </form>
          </div>

          {/* Right Column - Company Image/Info */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="bg-primary rounded-2xl p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team of energy experts is ready to help you achieve reliable performance, 
                reduce risks, and optimize costs across your operational lifecycle.
              </p>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Expert consultation
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Custom solutions
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Map Integration</p>
                  <p className="text-sm">Google Maps will be embedded here</p>
                  <p className="text-sm mt-2">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prefer to Talk Directly?</h3>
            <p className="text-gray-600 mb-6">You can reach out to us on any of the channels below.</p>
            
            <div className="space-y-4">
              {/* Office */}
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office</h4>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">info@phenomenalenergies.com</p>
                  <p className="text-sm text-gray-600">contact@phenomenalenergies.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-sm text-gray-600">+234 XXX XXX XXXX</p>
                  <p className="text-sm text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Connect with us</h4>
              <div className="flex gap-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <span className="text-blue-600 font-semibold">f</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-2">
                  <span className="text-blue-600 font-semibold">in</span>
                </div>
                <div className="bg-pink-100 rounded-lg p-2">
                  <span className="text-pink-600 font-semibold">ig</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl py-12 px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Energy Operations?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our engineering and technical experts help you achieve reliable performance, 
            reduce risks, and optimize costs across your operational lifecycle.
          </p>
          <button className="group bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </section>
      </div>
    </div>
  );
}