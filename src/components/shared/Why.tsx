"use client";

import { Award, Shield, Users, Clock, Zap, Globe } from "lucide-react";
import { useState } from "react";

const whyChooseUsData = [
  {
    id: "innovation",
    title: "Innovation",
    icon: Zap,
    description: "Cutting-edge technologies and forward-thinking solutions that keep you ahead of industry standards."
  },
  {
    id: "excellence",
    title: "Excellence",
    icon: Award,
    description: "Unwavering commitment to quality and precision in each project, delivering results that exceed expectations."
  },
  {
    id: "global-reach",
    title: "Global Reach",
    icon: Globe,
    description: "Worldwide presence and local expertise to serve your needs wherever your operations take you."
  },
  {
    id: "reliability",
    title: "Reliability",
    icon: Shield,
    description: "Proven track record of consistent performance and dependable service delivery across all operations."
  },
  {
    id: "expertise",
    title: "Expertise",
    icon: Users,
    description: "Deep industry knowledge and technical proficiency backed by years of specialized experience."
  },
  {
    id: "timely-delivery",
    title: "Timely Delivery",
    icon: Clock,
    description: "Efficient project execution and on-time delivery that keeps your operations running smoothly."
  }
];

export default function Why() {
  const [activeTab, setActiveTab] = useState("innovation");
  
  const activeItem = whyChooseUsData.find(item => item.id === activeTab);
  const IconComponent = activeItem?.icon;

  return (
    <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience, Ease of mobilization, cost competitiveness
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {whyChooseUsData.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === item.id
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeItem && (
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-6 w-24 h-24 flex items-center justify-center mx-auto mb-8 transform transition-transform duration-300 hover:scale-110">
            {IconComponent && <IconComponent className="text-white w-12 h-12" />}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {activeItem.title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {activeItem.description}
          </p>
        </div>
      )}
    </section>
  );
}
