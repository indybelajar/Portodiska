import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Briefcase } from "lucide-react";

export const WorkSection = () => {
  const experiences = [
    {
      company: "This Future",
      role: "Founder & Project Manager",
      location: "Majalengka",
      highlights: [
        "Mengelola kampanye musik & event.",
        "Adikara – Single 'Kembali': koordinasi 50 KOL, engagement meningkat.",
        "Ungu – Music Release Campaign: libatkan 30 KOL, peningkatan reach signifikan.",
        "Hiphoria Fest: social media campaign, 200K views rata-rata.",
      ],
    },
    {
      company: "Hiphoria.fest",
      role: "Social Media Specialist & Content Creator",
      highlights: [
        "Merancang strategi media sosial.",
        "Membuat konten kreatif (visual & copywriting).",
        "Capai KPI: engagement, reach, dan ticket conversion.",
      ],
      
    },
    {
      company: "Content Creator Manager",
      role: "Laylatanlar & Himaaau",
      highlights: [
        "Menyusun strategi konten.",
        "Negosiasi dengan brand.",
        "Menentukan rate card & brand fit.",
      ],
      
    },
    {
      company: "Indofood Bogasari Cibitung",
      role: "Internship, Marketing Division",
      highlights: [
        "Mendukung branding & promosi produk.",
        "Membantu riset pasar & eksekusi campaign.",
      ],
     
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Work <span className="text-white">Experience</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Berikut pengalaman kerja saya dalam mengelola kampanye musik, event,
            social media strategy, dan brand collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-shadow bg-card hover:bg-white-100 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-300">{exp.role}</p>
                    {exp.location && (
                      <p className="text-xs text-gray-400">{exp.location}</p>
                    )}
                  </div>
                </div>

                <ul className="list-disc pl-5 mb-4 space-y-2 text-sm">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                
               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
