'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '@/lib/data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }} />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 pb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured Projects
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch w-full">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden group flex flex-col h-full rounded-3xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: hovered === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hovered === project.id ? `0 20px 60px ${project.color}25` : '0 10px 30px -10px rgba(0,0,0,0.5)',
              }}
            >
              {/* Project Image */}
              <div className="w-full h-48 relative overflow-hidden bg-[#11121a]">
                <img
                  src={(project as any).image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay Texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e1a] via-transparent to-transparent opacity-80" />
                
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 h-1 w-full z-10"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                    >
                      {project.icon}
                    </div>
                    <span
                      className="text-[11px] font-mono font-semibold tracking-wider uppercase"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundImage: hovered === project.id ? `linear-gradient(90deg, #fff, ${project.color})` : 'none',
                  }}
                >
                  {project.title}
                </h3>

                {/* Description with Line Clamp */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Links Aligned */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-200 text-gray-400 hover:text-white"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200"
                      style={{ color: project.color }}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Ring inside card */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                style={{
                  boxShadow: `inset 0 0 0 1px ${project.color}50`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Malloju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)]"
          >
            <FiGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
