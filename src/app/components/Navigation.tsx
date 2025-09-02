import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  animatedBg: boolean;
  toggleAnimatedBg: () => void;
}

export const Navigation = ({ animatedBg, toggleAnimatedBg }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                >
                Work
                </button>

              
              {/* Projects Dropdown */}
               <button
                onClick={() => scrollToSection('projects')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                >
                Project
                </button>

                   <button
                onClick={() => scrollToSection('education')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                >
                Pendidikan
                </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Background Mode Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleAnimatedBg}
              className="text-white hover:text-yellow-400"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {animatedBg ? 'Static' : 'Animated'}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Skills
              </button>

               <button
                onClick={() => scrollToSection('work')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Work
              </button>

               <button
                onClick={() => scrollToSection('project')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Project
              </button>

               <button
                onClick={() => scrollToSection('education')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Pendidikan
              </button>
          
             
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-400 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};