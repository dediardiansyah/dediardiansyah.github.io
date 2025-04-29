
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, githubLink, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    
    gsap.fromTo(
      card,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true
        }
      }
    );
  }, [index]);
  
  const getPrefix = () => {
    return index === 0 ? '├── ' : index === 2 ? '└── ' : '├── ';
  };
  
  return (
    <div ref={cardRef} className="opacity-0 mb-4">
      <div className="flex flex-col">
        <div className="flex items-start">
          <span className="text-neon">{getPrefix()}</span>
          <span className="text-white font-bold">{name}/</span>
        </div>
        <div className="ml-8 mt-2">
          <p className="text-neon mb-2">{description}</p>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="terminal-link ml-2 inline-flex items-center"
          >
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
