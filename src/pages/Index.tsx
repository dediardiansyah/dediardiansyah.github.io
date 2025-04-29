
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
              '$ whoami',
              'Dedi Ardiansyah',
              '$ echo "Creative Developer"',
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
              'Hi there! 👋 I\'m Dedi, a web artisan with a passion for elegant code and delightful UX.',
              'From crafting pixel-perfect interfaces to building robust frontend architectures—',
              'I turn ideas into interactive realities.'
            ]
            }
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
              '{ "Frontend": ["React.js", "Vue.js", "Next.js", "Nuxt.js"] }',
              '{ "Languages": ["JavaScript", "TypeScript", "HTML", "CSS"] }',
              '{ "Styling": ["Tailwind CSS", "SASS", "Bootstrap"] }',
              '{ "Tools": ["Git", "Figma", "Postman", "Vite"] }'
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
              '🧠 Full Stack Developer @ PT Dengan Senang Hati (Full-time) | 2022-Present',
              '🚀 Web Developer @ Tokogampang (Full-time) | 2021-2022',
              '🔧 Web Developer @ IDE Asia - PT Solusi Inovasi Bangsa (Full-time) | 2020-2021',
              '👁️ Web Developer @ Mata Merah Studio (Internship) | 2019-2020',
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
                name="responsive-web-design"
                description="Built sleek and fully responsive UIs with Tailwind CSS, flex/grid, and mobile-first design."
                githubLink="https://github.com/dediardiansyah/responsive-web-design"
                index={0}
              />

              <ProjectCard
                name="javascript-development"
                description="Crafted reusable JavaScript modules and solved complex logic for dynamic web interfaces."
                githubLink="https://github.com/dediardiansyah/javascript-development"
                index={1}
              />

              <ProjectCard
                name="react-projects"
                description="A series of React projects demonstrating hooks, context API, and API integrations."
                githubLink="https://github.com/dediardiansyah/react-projects"
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">~/education<span className="cursor"></span></h2>

          <TypingEffect
            lines={[
              '🎓 SMK Negeri 2 Bandung',
              '📚 Major: Computer Software Engineering',
              '📅 Graduated: 2020'
            ]}
            className="text-lg md:text-xl mb-8"
          />
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
                href="mailto:dediardiansyah87@gmail.com"
                className="terminal-link inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>dediardiansyah.jpg@gmail.com</span>
              </a>

              <a
                href="https://github.com/dediardiansyah"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link inline-flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>github.com/dediardiansyah</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dediardiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link inline-flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>linkedin.com/in/dediardiansyah/</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neon/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neon/70">{'> // Coded with ☕ | © 2025 Dedi Ardiansyah'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;