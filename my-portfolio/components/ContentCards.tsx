import { memo } from 'react';
import { Layers, GraduationCap } from 'lucide-react';

interface ContentCardProps {
  cardIndex: number;
  hoveredCard: number | null;
  transform: string;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>, cardIndex: number) => void;
  onMouseLeave: () => void;
}

export const FullStackCard = memo(({ cardIndex, hoveredCard, transform, onMouseMove, onMouseLeave }: ContentCardProps) => {
  return (
    <div 
      className="content-card flex-1 flex flex-col gap-6"
      onMouseMove={(e) => onMouseMove(e, cardIndex)}
      onMouseLeave={onMouseLeave}
      style={{
        transform,
        transition: hoveredCard === cardIndex ? 'none' : 'transform 0.3s ease',
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <Layers size={80} md-size={120} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0 icon-glow" />
        <h3 className="text-3xl md:text-6xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
          Full-Stack Developer
        </h3>
      </div>

      <p className="text-base md:text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
        I am a passionate software engineer with expertise in building scalable web applications. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless user experiences and efficient solutions.
      </p>

      <div className="flex flex-col gap-4">
        <div className="tech-item flex items-start md:items-center gap-4 py-4">
          <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>React, Node.js, Express.js, Next.js, FastAPI, Django</span>
        </div>
        <div className="tech-item flex items-start md:items-center gap-4 pb-4">
          <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>REST APIs, Supabase, PostgreSQL, Docker</span>
        </div>
        <div className="tech-item flex items-start md:items-center gap-4 pb-4">
          <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Git, GitHub, Postman</span>
        </div>
      </div>
    </div>
  );
});

FullStackCard.displayName = 'FullStackCard';

export const StudentCard = memo(({ cardIndex, hoveredCard, transform, onMouseMove, onMouseLeave }: ContentCardProps) => {
  return (
    <div 
      className="content-card flex-1 flex flex-col gap-6"
      onMouseMove={(e) => onMouseMove(e, cardIndex)}
      onMouseLeave={onMouseLeave}
      style={{
        transform,
        transition: hoveredCard === cardIndex ? 'none' : 'transform 0.3s ease',
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <GraduationCap size={80} md-size={110} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0 icon-glow" />
        <h3 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
          Computer Science Student
        </h3>
      </div>

      <p className="text-base md:text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
        Junior at the City College of New York (CUNY), pursuing a B.S. in Computer Science. Building strong foundations in algorithms, data structures, and software development principles while applying them to real projects.
      </p>

      <div className="flex flex-col gap-4">
        <div className="tech-item flex items-start md:items-center gap-4 py-4">
          <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>CUNY — City College of New York</span>
        </div>
        <div className="tech-item flex items-center gap-4 pb-4">
          <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>B.S. in Computer Science (Junior)</span>
        </div>
        <div className="tech-item flex items-center gap-4 pb-4">
          <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Focus: Algorithms, Data Structures, Software Engineering</span>
        </div>
      </div>
    </div>
  );
});

StudentCard.displayName = 'StudentCard';
