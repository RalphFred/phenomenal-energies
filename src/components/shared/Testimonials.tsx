import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paul Osarinmwian",
      position: "Principal Quality Lead",
      company: "Renaissance Energy Africa",
      content: "It's inspiring to see a local contractor standing tall among multinational companies on international projects, showcasing excellence and quality standard.",
      rating: 5
    },
    {
      name: "Ephraim Anthony",
      position: "Project Manager",
      company: "NE Williams Nigeria Limited",
      content: "Good quality service with appreciable relationship. Job executed timely and with great professionalism",
      rating: 5
    },
    {
      name: "Tonbara Yalah",
      position: "Principal QAQC Lead",
      company: "Shell",
      content: "Third Party Inspection personnel has been very excellent, identifying and reporting findings as observed and providing recommendations for close out.",
      rating: 5
    },
    {
      name: "Olalekan Adeaga",
      position: "Maintenance Superintendent",
      company: "ExxonMobil",
      content: "Clear demonstration of technical capacity and professional communication are key attributes that enhanced the success of this project",
      rating: 5
    },
    {
      name: "Ememandu Abraham Chinedu",
      position: "Business Manager",
      company: "Elper Oilfield Engineering Nigeria Limited",
      content: "The response time from Phenomenal Energy is perfect. The level of professional advice based on experience is highly appreciated",
      rating: 5
    }
  ];

  return (
    <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Proudly Nigerian,  globally competitive
        </p>
      </div>

      <div className="relative">
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mx-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-w-[400px] max-w-[400px] border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="text-primary w-8 h-8 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                 {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}