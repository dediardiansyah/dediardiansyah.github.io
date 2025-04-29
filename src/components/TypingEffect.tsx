
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TypingEffectProps {
  lines: string[];
  startDelay?: number;
  lineDelay?: number;
  speed?: number;
  className?: string;
  prefix?: string;
  showCursor?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  lines,
  startDelay = 0,
  lineDelay = 0.5,
  speed = 30,
  className = '',
  prefix = '> ',
  showCursor = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const lineElements = lineRefs.current.filter(el => el !== null) as HTMLDivElement[];
    
    // Reset all lines
    lineElements.forEach(line => {
      const textSpan = line.querySelector('.text');
      if (textSpan) textSpan.textContent = '';
    });
    
    // Create timeline
    const timeline = gsap.timeline({
      delay: startDelay,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      }
    });
    
    gsap.set(container, { opacity: 1 });
    
    // Animate each line
    lineElements.forEach((line, lineIndex) => {
      const textSpan = line.querySelector('.text') as HTMLSpanElement;
      const fullText = lines[lineIndex];
      
      // Set initial visibility
      gsap.set(line, { opacity: 0 });
      
      // Show the line
      timeline.to(line, { opacity: 1, duration: 0.1 }, lineIndex * lineDelay);
      
      // Type the text
      const chars = fullText.split('');
      chars.forEach((_, charIndex) => {
        timeline.add(() => {
          textSpan.textContent = fullText.substring(0, charIndex + 1);
        }, `+=${speed / 1000}`);
      });
      
      // Additional delay between lines
      if (lineIndex < lines.length - 1) {
        timeline.add(() => {}, `+=${lineDelay / 2}`);
      }
    });
    
    return () => {
      if (timeline) timeline.kill();
    };
  }, [lines, startDelay, lineDelay, speed, prefix]);
  
  return (
    <div 
      ref={containerRef}
      className={`terminal-section ${className}`}
    >
      {lines.map((line, index) => (
        <div 
          key={index}
          ref={el => lineRefs.current[index] = el}
          className="flex items-start mb-1"
        >
          <span className="text-neon whitespace-pre">{prefix}</span>
          <span className="text"></span>
          {showCursor && index === lines.length - 1 && <span className="cursor"></span>}
        </div>
      ))}
    </div>
  );
};

export default TypingEffect;
