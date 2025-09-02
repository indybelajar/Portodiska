"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { useState, useEffect } from 'react';
import { WorkSection } from "./components/WorkSection";
import { EducationAchievements } from "./components/EducationAchievements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [animatedBg, setAnimatedBg] = useState(false);

  const toggleAnimatedBg = () => {
    setAnimatedBg(!animatedBg);
  };

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={`min-h-screen ${animatedBg ? 'animated-bg' : 'gradient-hero'}`}>
          <Navigation animatedBg={animatedBg} toggleAnimatedBg={toggleAnimatedBg} />

          <main>
            <HeroSection />
            <SkillsSection />
            <WorkSection />
            <ProjectsSection />
            <EducationAchievements />
            <ContactSection />
      
          </main>

        </div>
      </body>
    </html>
  );
}
