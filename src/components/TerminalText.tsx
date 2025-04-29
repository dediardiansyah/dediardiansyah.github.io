
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TerminalTextProps {
  text: string;
  delay?: number;
  cursor?: boolean;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  text,
  delay = 0,
  cursor = true,
  speed = 30,
  className = '',
  onComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    
    const container = containerRef.current;
    const textElement = textRef.current;
    
    textElement.textContent = '';
    
    const timeline = gsap.timeline({ delay });
    
    const chars = text.split('');
    
    chars.forEach((char, index) => {
      timeline.add(() => {
        textElement.textContent += char;
      }, index * (speed / 1000));
    });
    
    timeline.add(() => {
      if (onComplete) onComplete();
    });
    
    return () => {
      timeline.kill();
    };
  }, [text, delay, speed, onComplete]);
  
  return (
    <div ref={containerRef} className={`terminal-pre ${className}`}>
      <span ref={textRef}></span>{cursor && <span className="cursor"></span>}
    </div>
  );
};

export default TerminalText;
