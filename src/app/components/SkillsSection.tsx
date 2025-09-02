import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Megaphone, Briefcase, Wrench } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Megaphone,
      title: 'Marketing & Social Media',
      skills: [
        'Campaign Management',
        'Social Media Strategy',
        'KOL / Influencer Marketing',
        'Paid Ads (TikTok Ads & Meta Ads)',
      ],
    },
    {
      icon: Briefcase,
      title: 'Manajerial & Strategis',
      skills: [
        'Project Management',
        'Negotiation',
        'Strategic Planning',
        'Brand Partnership',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: [
        'Canva',
        'CapCut',
        'PicsArt',
        'Meta Business Suite',
        'TikTok Creator Tools',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Skills & <span className="text-white">Expertise</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            I specialize in marketing strategies, social media management, and
            creative tools to build impactful campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="card-shadow bg-card hover:bg-white-100 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
