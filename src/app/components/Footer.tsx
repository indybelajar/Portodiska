import { Button } from '@/app/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-white">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-yellow-400">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-yellow-400">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};