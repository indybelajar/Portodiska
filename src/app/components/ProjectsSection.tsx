import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ExternalLink, FileText } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: '@himauuu | deeptalkanime',
      link: 'https://drive.google.com/drive/folders/1xDnwfVvWVCZtgOeVypt5SLp5ZxM6pLfa?usp=drive_link',
    },
    {
      title: '@laylatanlar_ | cucumilo',
      link: 'https://drive.google.com/drive/folders/1wjNrwbRHOmZj9lSf1bIZbeT5FzZSZiEw?usp=drive_link',
    },
    {
      title: 'Adikara',
      link: 'https://drive.google.com/drive/folders/1cUQcaiE0QpcNGZ25j3BsNzeOGbBxY6p4?usp=drive_link',
    },
    {
      title: 'Band Ungu',
      link: 'https://drive.google.com/drive/folders/10U3PCOAeE1mZp5u0EVdX1ZdMLEMkx-XX?usp=drive_link',
    },
    {
      title: 'Hiphoria Fest',
      link: 'https://drive.google.com/drive/folders/1j9VBTm5p-mRTaayfWR9PhtSZeTyafKGM?usp=drive_link',
    },
    {
      title: 'Skintific X Sabrenj',
      link: 'https://drive.google.com/drive/folders/1PmIDDFbAV3yYczPwxp2zhq9QUHanaImZ?usp=drive_link',
    },
    {
      title: 'Hiphoria – Social Media Specialist',
      link: 'https://drive.google.com/drive/folders/1n3D4MZ71pU5LHJvRZlcNBsSxZBGTx-Ld?usp=sharing',
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="card-shadow bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <FileText className="h-5 w-5 text-yellow-400" />
        </div>
      </CardHeader>
      <CardContent>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-yellow-400 hover:underline"
        >
          <ExternalLink className="mr-1 h-4 w-4" />
          Lihat Detail
        </a>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">
            Proyek <span className="text-white">Pilihan</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Beberapa karya dan kolaborasi yang sudah saya kerjakan, mencakup kampanye digital, 
            event, dan proyek kreatif lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
