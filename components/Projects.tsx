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
        <div className="max-w-[1200px] mx-auto px-0 md:px-8 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 items-stretch w-full">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 group w-full sm:w-[380px] lg:w-[340px]"
              style={{
                backgroundColor: '#16142c', // Solid dark background from reference
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === project.id ? `0 20px 40px ${project.color}15` : '0 10px 30px -15px rgba(0,0,0,0.5)',
              }}
            >
              {/* Project Image */}
              <div className="w-full h-[220px] sm:h-[240px] relative overflow-hidden bg-[#0a0914]">
                <img
                  src={(project as any).image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Category Pill */}
                <div className="mb-4">
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      color: '#a5b4fc'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-[22px] font-bold mb-5 text-white flex items-center gap-2.5 leading-tight group-hover:text-indigo-200 transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="text-[22px] drop-shadow-md">{project.icon}</span>
                  {project.title}
                </h3>

                {/* Description Bullets */}
                <div className="space-y-3.5 mb-8 flex-grow">
                  {project.description.split('. ').map((sentence, idx) => {
                    if (!sentence.trim()) return null;
                    return (
                      <div key={idx} className="flex items-start text-[14px] leading-[1.6] text-gray-300">
                        <span className="text-cyan-400 text-[18px] mr-3 font-bold mt-[1px] leading-none">▸</span>
                        <span className="opacity-90">{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack Pills (Subtle, preserved from original) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Links Aligned */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-200 text-gray-400 hover:text-white"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                      style={{ color: project.color }}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
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
