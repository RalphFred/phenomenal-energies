import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutTeam() {
  const leadership = [
    {
      name: "Eche Chuka Benjamin",
      position: "Company Chairman",
      bio: "Graduated with honours from FUTO in Applied Geoscience and MSc in Petroleum Geology from University of Port Harcourt. Retired from ExxonMobil as Senior Manager Development Geosciences after 25 years. Expert in Oilwell engineering, reservoir studies and management. Currently Managing Director of Marine Flagship Services Limited.",
      image: "/images/leader1.jpg",
      linkedin: "#",
      email: "benjamin@phenomenalenergy.com"
    },
    {
      name: "Engr. Onyema Abel Nwobodo",
      position: "Managing Director",
      bio: "Chemical Engineering graduate from University of Benin with MSc in Asset Integrity Management from Robert Gordon University Scotland and MBA from Lagos Business School. 10 years with ExxonMobil Nigeria managing facility integrity operations. Member of COREN, NSE, SPE, NACE, and ASME.",
      image: "/images/leader2.jpg",
      linkedin: "#",
      email: "abel@phenomenalenergy.com"
    },
    {
      name: "Marina Hampton",
      position: "Technical Consultant",
      bio: "MSc Mechanical Engineering with over 25 years experience in Oil & Gas industry across Europe, Middle East, Africa and Asia. Previously Materials and Welding Consultant with ExxonMobil in West Africa. Expert in materials, welding engineering and international project management.",
      image: "/images/leader3.png",
      linkedin: "#",
      email: "marina@phenomenalenergy.com"
    },
    {
      name: "Thavasi Muthu",
      position: "Inspection Consultant/Advisor",
      bio: "Mechanical Engineering graduate with ASNT NDT Level-III certifications. Over 22 years experience in Plant/Projects Fabrication and inspection across multiple countries. Previously Project Manager/NDE Advisor with Mobil Producing Nigeria for 8 years. Co-authored 'Practical NDT' and has 18 international publications.",
      image: "/images/leader4.png",
      linkedin: "#",
      email: "muthu@phenomenalenergy.com"
    }
  ];

  return (
    <section className="bg-white rounded-2xl py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-4">
          Our Leadership Team
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the experts driving innovation and excellence in energy infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {leadership.map((member, index) => (
          <div key={index} className="text-center group">
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-blue-100 border-4 border-blue-200 group-hover:border-primary transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Member Info */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {member.name}
            </h3>
            <p className="text-primary font-semibold mb-4">
              {member.position}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}