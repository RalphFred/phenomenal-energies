import { Linkedin, Mail } from "lucide-react";

export default function AboutTeam() {
  const leadership = [
    {
      name: "Eche Chuka Benjamin",
      position: "Company Chairman",
      bio: "Graduated with honours from FUTO in Applied Geoscience and MSc in Petroleum Geology from University of Port Harcourt. Retired from ExxonMobil as Senior Manager Development Geosciences after 25 years. Expert in Oilwell engineering, reservoir studies and management. Currently Managing Director of Marine Flagship Services Limited.",
      image: "/team/chairman.jpg",
      linkedin: "#",
      email: "benjamin@phenomenalenergies.com"
    },
    {
      name: "Engr. Onyema Abel Nwobodo",
      position: "Managing Director",
      bio: "Chemical Engineering graduate from University of Benin with MSc in Asset Integrity Management from Robert Gordon University Scotland and MBA from Lagos Business School. 10 years with ExxonMobil Nigeria managing facility integrity operations. Member of COREN, NSE, SPE, NACE, and ASME.",
      image: "/team/md.jpg",
      linkedin: "#",
      email: "abel@phenomenalenergies.com"
    },
    {
      name: "Marina Hampton",
      position: "Technical Consultant",
      bio: "MSc Mechanical Engineering with over 25 years experience in Oil & Gas industry across Europe, Middle East, Africa and Asia. Previously Materials and Welding Consultant with ExxonMobil in West Africa. Expert in materials, welding engineering and international project management.",
      image: "/team/technical.jpg",
      linkedin: "#",
      email: "marina@phenomenalenergies.com"
    },
    {
      name: "Thavasi Muthu",
      position: "Inspection Consultant/Advisor",
      bio: "Mechanical Engineering graduate with ASNT NDT Level-III certifications. Over 22 years experience in Plant/Projects Fabrication and inspection across multiple countries. Previously Project Manager/NDE Advisor with Mobil Producing Nigeria for 8 years. Co-authored 'Practical NDT' and has 18 international publications.",
      image: "/team/inspection.jpg",
      linkedin: "#",
      email: "muthu@phenomenalenergies.com"
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
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl font-semibold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={member.linkedin}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
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