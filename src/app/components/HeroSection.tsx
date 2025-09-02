import { Button } from '@/app/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-start justify-center pt-40">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-yellow-400"
          >
            Halo, Aku{' '}
            <span className="text-white">
              Diska Priandini
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-white mb-8 max-w-3xl mx-auto text-white"
          >
            Marketing & Brand Communication Specialist | Social Media Strategist
          </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl text-white mb-8 max-w-5xl px-6 text-center"
            >
            Saya lulusan Ilmu Komunikasi dengan 4+ tahun pengalaman di Marketing, Branding, dan Social Media. 
            Berpengalaman mengelola kampanye KOL, event musik, serta strategi digital dengan hasil engagement 
            dan penjualan terukur. Terampil dalam project management, content creation, dan influencer marketing, 
            baik secara mandiri maupun kolaboratif untuk menciptakan solusi kreatif yang berdampak.
            </motion.p>



          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <a href="/cv_diska.pdf" download>
            <Button size="lg" className="glow-effect">
                <Download className="mr-2 h-5 w-5" />
                Download CV
            </Button>
            </a>

  
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
          <a
            href="https://www.linkedin.com/in/diska-priandini-09b7b8215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <Linkedin className="h-6 w-6" />
            </Button>
            </a>

           <a
            href="mailto:diskapriandini39@gmail.com"
            >
            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <Mail className="h-6 w-6" />
            </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
