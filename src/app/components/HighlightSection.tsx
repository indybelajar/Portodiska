import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

export const HighlightSection = () => {
  const projects = [
    {
      type: 'Competition',
      title: '2nd Place Mobile Application at FIT Competition',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
      liveUrl: '#',
    },
    {
      type: 'Competition',
      title: '3rd Place Software Development at Pekan IT Unsika',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      liveUrl: '#',
    },
    {
      type: 'web',
      title: 'Raildrop',
      description: 'Feature-rich social media application with real-time messaging and content sharing.',
      image: '/placeholder.svg',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions'],
      liveUrl: '#',
      githubUrl: '#',
    },
    
  ];

  const webProjects = projects.filter(project => project.type === 'Competition');
  const mobileProjects = projects.filter(project => project.type === 'mobile');

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="card-shadow bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          {project.type === 'Competition' ? (
            <Globe className="h-5 w-5 text-yellow-400" />
          ) : (
            <Smartphone className="h-5 w-5 text-yellow-400" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
          <span className="text-white">Highlight</span>
        </div>
        <p className="text-white mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs text-yellow-300">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
          <Button variant="outline" size="sm">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">
          Indy's <span className="text-white">Highlight</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web and mobile development.
          </p>
        </div>

        {/* Web Development Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Globe className="mr-3 h-6 w-6 text-yellow-400" />
            Competition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={`web-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile Development Projects 
       / <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Smartphone className="mr-3 h-6 w-6 text-yellow-400" />
            Mobile Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={`mobile-${index}`} project={project} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};