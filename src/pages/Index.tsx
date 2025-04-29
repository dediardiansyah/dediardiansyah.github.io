
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import TypingEffect from '@/components/TypingEffect';
import ProjectCard from '@/components/ProjectCard';
import { Github, Mail, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    const sections = document.querySelectorAll('.terminal-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true
          }
        }
      );
    });
    
    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-terminal text-neon overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <TypingEffect
            lines={[
              'John Doe',
              'Creative Developer',
              'Welcome to my digital terminal portfolio.'
            ]}
            startDelay={1.5}
            lineDelay={0.8}
            className="text-2xl md:text-4xl font-bold"
          />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/about<span className="cursor"></span></h2>
          
          <TypingEffect
            lines={[
              'I am a passionate developer with over 5 years of experience.',
              'I specialize in web development with technologies such as Vue.js and Node.js.'
            ]}
            className="text-lg md:text-xl mb-8"
          />
          
          <div className="terminal-section text-neon my-8">================================</div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/skills<span className="cursor"></span></h2>
          
          <TypingEffect
            lines={[
              '{ "Frontend": ["Vue.js", "React", "Tailwind CSS"] }',
              '{ "Backend": ["Node.js", "Express"] }',
              '{ "Tools": ["Git", "Docker", "Webpack", "GSAP"] }'
            ]}
            className="text-lg md:text-xl mb-8"
          />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/experience<span className="cursor"></span></h2>
          
          <TypingEffect
            lines={[
              '2022 - Present: Senior Frontend Developer @ CyberCorp',
              '2020 - 2022: Web Developer @ ByteWorks',
              '2018 - 2020: Junior Developer @ Freelance'
            ]}
            className="text-lg md:text-xl mb-8"
          />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/projects<span className="cursor"></span></h2>
          
          <div className="terminal-section mb-8">
            <div className="text-lg md:text-xl mb-4">{'> projects/'}</div>
            
            <div className="ml-4">
              <ProjectCard
                name="ai-image-generator"
                description="A web application that generates images using AI models."
                githubLink="https://github.com/johndoe/ai-image-generator"
                index={0}
              />
              
              <ProjectCard
                name="portfolio-v2"
                description="The second version of my personal portfolio website."
                githubLink="https://github.com/johndoe/portfolio-v2"
                index={1}
              />
              
              <ProjectCard
                name="task-cli"
                description="A command-line interface for managing tasks and projects."
                githubLink="https://github.com/johndoe/task-cli"
                index={2}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/contact<span className="cursor"></span></h2>
          
          <div className="terminal-section">
            <div className="text-lg md:text-xl mb-6">{'> echo $CONTACT_INFO'}</div>
            
            <div className="ml-4 flex flex-col space-y-4">
              <a 
                href="mailto:johndoe@protonmail.com" 
                className="terminal-link inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>johndoe@protonmail.com</span>
              </a>
              
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="terminal-link inline-flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>github.com/johndoe</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="terminal-link inline-flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-neon/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neon/70">{'> // Coded in Vim with ☕ | © 2025 John Doe'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
