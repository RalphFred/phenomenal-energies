import CTA from "@/components/shared/CTA";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Let&apos;s Build Something Bold Together
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your energy operations? We&apos;re just a message away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-800 rounded-2xl lg:p-12 p-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block  font-medium mb-2">
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
                  <label htmlFor="lastName" className="block  font-medium mb-2">
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
                <label htmlFor="email" className="block  font-medium mb-2">
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
                <label htmlFor="phone" className="block  font-medium mb-2">
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
                <label htmlFor="service" className="block  font-medium mb-2">
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
                <label htmlFor="message" className="block  font-medium mb-2">
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
          <div className="">
           <Image src="/images/img2.jpg" alt="Contact" width={1000} height={1000} className="rounded-2xl w-full h-full object-cover" />
          </div>
        </div>

        {/* Map and Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Map Section */}
          <div className="">
            <div className="">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4036.97895860145!2d3.519070375074261!3d6.431841493559286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf65debb1438f%3A0xe565117c0b4ae7ae!2s9%20Sulaimon%20Adekanmbi%20Cl%2C%20Igbo%20Efon%2C%20Lekki%20101223%2C%20Lagos!5e1!3m2!1sen!2sng!4v1756959676122!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-150"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl px-4 lg:px-12 flex items-center">
           <div>
           <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-4">Prefer to Talk Directly?</h3>
            <p className="text-gray-600 mb-4">You can reach out to us on any of the channels below.</p>
            
            <div className="space-y-4">
              {/* Office */}
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office</h4>
                  <p className=" text-gray-600">9 Sulaimon Adekanmbi Close, Igbo Efon, Lekki, Lagos, Nigeria</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:info@phenomenalenergyng.com" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    info@phenomenalenergyng.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className=" text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+2349162210784" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    +234 916 221 0784
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-2xl">Connect with us</h4>
              <div className="flex gap-3">
                <div className="bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </div>
                <div className="bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <div className="bg-pink-100 rounded-lg p-2 hover:bg-pink-200 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>

        <CTA />
      </div>
    </div>
  );
}