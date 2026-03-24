'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { about } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      {/* Orb */}
      <div className="orb w-72 h-72 top-1/2 right-0 -translate-y-1/2" style={{ background: 'rgba(34,211,238,0.15)' }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Avatar + Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-10"
          >
            {/* Avatar card */}
            <div className="relative group w-full max-w-[340px] aspect-square">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #22d3ee)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.05)',
                }}
              />
              {/* Profile photo */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  border: '1px solid rgba(108,99,255,0.4)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/myprofile.png"
                  alt="Malloju Vishwam"
                  className="w-full h-full object-cover object-top"
                />
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full" style={{ background: '#22d3ee', opacity: 0.8 }} />
                <div className="absolute bottom-16 left-4 w-2 h-2 rounded-full" style={{ background: '#6c63ff', opacity: 0.9 }} />
                <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full" style={{ background: '#6c63ff', opacity: 0.6 }} />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-[#11121a] border border-[#2a2c39] rounded-2xl px-4 py-2 shadow-xl"
              >
                <div className="text-[10px] text-right" style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>CGPA</div>
                <div className="text-lg font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>7.9 <span className="text-gray-500 text-sm">/ 10</span></div>
              </motion.div>
            </div>

            {/* Code Block Mockup */}
            <div className="w-full max-w-[340px] rounded-xl overflow-hidden border border-gray-800 bg-[#0f111a] shadow-xl text-[11px] sm:text-xs">
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-[#151624]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-500 font-mono text-xs">developer.js</span>
              </div>
              <div className="p-4 font-mono leading-loose" style={{ color: '#e2e8f0' }}>
                <p style={{ color: '#6b7280' }}>// Building useful products</p>
                <p>
                  <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'}
                </p>
                <p className="pl-4">
                  role: <span style={{ color: '#98c379' }}>"AI/ML Engineer"</span>,
                </p>
                <p className="pl-4">
                  builds: [<span style={{ color: '#98c379' }}>"AI Apps"</span>, <span style={{ color: '#98c379' }}>"Web Apps"</span>],
                </p>
                <p className="pl-4">
                  focus: [<span style={{ color: '#98c379' }}>"Scalable Systems"</span>, <span style={{ color: '#98c379' }}>"Real-world Impact"</span>],
                </p>
                <p className="pl-4">
                  mindset: <span style={{ color: '#98c379' }}>"Always learning 🚀"</span>
                </p>
                <p>{'};'}<span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle" /></p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Info & Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-3xl sm:text-4xl font-bold mb-2 tracking-wide text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Malloju Vishwam
            </h3>
            <p className="text-sm sm:text-base mb-8 tracking-wide font-mono text-blue-400" style={{ opacity: 0.9 }}>
              B.Tech • Computer Science & Engineering (AI & ML) • LPU
            </p>
            
            <div className="text-sm sm:text-base text-gray-400 leading-relaxed space-y-6">
              {about.summary.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
