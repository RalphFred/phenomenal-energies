import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "Global Energy Corp",
      content: "Phenomenal Energy delivered exceptional results on our offshore inspection project. Their expertise and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      company: "Pacific Oil & Gas",
      content: "The team's innovative approach to asset integrity management has significantly improved our operational efficiency and safety standards.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      position: "Project Manager",
      company: "Atlantic Petroleum",
      content: "Outstanding service quality and professional execution. They consistently deliver on time and within budget while maintaining the highest safety standards.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "HSE Manager",
      company: "Northern Energy",
      content: "Their comprehensive inspection services and technical expertise have been invaluable to our compliance and risk management efforts.",
      rating: 5
    },
    {
      name: "Robert Wilson",
      position: "Engineering Lead",
      company: "Southern Gas",
      content: "Phenomenal Energy's engineering solutions are cutting-edge and practical. They understand our industry challenges and deliver innovative solutions.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      position: "Asset Manager",
      company: "Western Resources",
      content: "Reliable, professional, and technically excellent. Their asset integrity management services have extended our equipment lifespan significantly.",
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
          Trusted by industry leaders worldwide
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
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}