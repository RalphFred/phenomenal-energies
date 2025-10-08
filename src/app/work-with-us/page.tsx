"use client";

import CTA from "@/components/shared/CTA";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  Heart,
  Shield,
  Mail,
  FileText,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function WorkWithUsPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Competitive Benefits",
      description: "Comprehensive health insurance, retirement plans, and competitive salaries."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive team environment."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Be part of an award-winning team recognized for excellence in energy services."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Meaningful Work",
      description: "Contribute to projects that make a real impact in the energy sector."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and support for your personal well-being."
    }
  ];

  return (
    <div className="min-h-screen space-y-4">
      {/* Hero Section */}
      <section className="bg-blue-100 rounded-2xl py-16 px-4 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Work With Us
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Join our team of passionate professionals and help shape the future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Why Join Us Section */}
        <section className="bg-white rounded-2xl px-4 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                Why Choose Phenomenal Energy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just building careers; we're building the future. 
                Join us and be part of something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Application Section */}
        <section className="bg-white rounded-2xl px-4 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for excellence in the energy sector. 
              If you're interested in working with us, we'd love to hear from you.
            </p>
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Apply
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send us an email with your CV/Resume and tell us about the role you're interested in. 
                We'll review your application and get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:info@phenomenalenergyng.com?subject=Job Application - [Your Role]&body=Dear Phenomenal Energy Team,%0A%0AI am writing to express my interest in joining your team. Please find my CV attached.%0A%0ARole I'm interested in: [Please specify]%0A%0AThank you for your consideration.%0A%0ABest regards,"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  Send Application Email
                </a>
                <div className="text-gray-600">
                  or email us directly at: 
                  <a 
                    href="mailto:info@phenomenalenergyng.com" 
                    className="text-primary hover:text-primary/80 font-semibold ml-1"
                  >
                    info@phenomenalenergyng.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Include Your CV</h4>
                <p className="text-sm text-gray-600">Attach your latest resume or CV</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Specify Your Role</h4>
                <p className="text-sm text-gray-600">Tell us which position interests you</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">We'll Review</h4>
                <p className="text-sm text-gray-600">Our team will get back to you soon</p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </div>
    </div>
  );
}