import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  desc: string;
  stack?: string[];
  image?: string;
  url?: string;
}

export default function ProjectCard({ title, desc, stack, image, url }: ProjectCardProps) {
  return (
    <article className="card overflow-hidden">
      {/* Project Image */}
      {image && (
        <div className="w-full h-64 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="pill text-sm whitespace-nowrap">2025</span>
        </div>

        <p className="text-base leading-relaxed" style={{ color: '#c7c7c7' }}>
          {desc}
        </p>

        {/* Tech Stack */}
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stack.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  color: '#a78bfa'
                }}
              >
                {tech}
              </span>
            ))}
            {stack.length > 4 && (
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: 'rgba(107, 114, 128, 0.2)',
                  color: '#9ca3af'
                }}
              >
                +{stack.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Live Demo Button */}
        {url && (
          <div className="flex items-center justify-between mt-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: '#8b5cf6',
                color: '#ffffff'
              }}
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-green-500">Active</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
