
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface NavItem {
  label: string;
  section: string;
}

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Education', section: 'education' },
    { label: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    if (!navRef.current || !nameRef.current) return;

    const nameElement = nameRef.current;
    const timeline = gsap.timeline({ delay: 0.5 });

    // Animate the name
    const nameText = '> _ Dedi Ardiansyah';
    const nameChars = nameText.split('');

    nameElement.textContent = '';

    nameChars.forEach((char, index) => {
      timeline.add(() => {
        nameElement.textContent += char;
      }, index * 0.05);
    });

    // Add cursor blink after name is typed
    timeline.add(() => {
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      nameElement.appendChild(cursor);
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-terminal z-50 border-b border-neon/30">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div
          ref={nameRef}
          className="text-lg md:text-xl font-bold text-neon mb-2 md:mb-0"
        ></div>

        <nav ref={navRef} className="flex gap-4 md:gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.section)}
              className="terminal-link text-sm md:text-base"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;