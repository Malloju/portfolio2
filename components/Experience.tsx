'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience, education, certifications } from '@/lib/data';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { FiExternalLink, FiBriefcase, FiCalendar } from 'react-icons/fi';

function WeeklyTrendGraph({ data, color, labels }: { data: number[], color: string, labels: string[] }) {
  const maxVal = Math.max(...data, 10);
  const width = 100;
  const height = 40;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (val / maxVal) * height;
    return { x, y, val };
  });

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cx = (p0.x + p1.x) / 2;
    path += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`;
  const colorId = color.replace('#', '');

  return (
    <div className="w-full pt-2">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-base font-bold text-white tracking-wide">Weekly Solved Trend</h4>
        <span className="text-xs text-gray-500">Last 12 weeks</span>
      </div>
      <svg viewBox="-6 -5 110 58" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id={`grad-${colorId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#grad-${colorId})`} />
        
        {/* Horizontal Grid Lines */}
        {[0, height / 2, height].map((y, i) => (
          <line key={`grid-${i}`} x1="0" y1={y} x2={width} y2={y} stroke="#222" strokeWidth="0.5" strokeDasharray="2,2" />
        ))}

        {/* Y-axis Labels */}
        {[0, height / 2, height].map((y, i) => {
           let val = maxVal;
           if(i === 1) val = maxVal / 2;
           if(i === 2) val = 0;
           return (
             <text key={`l-${i}`} x="-2" y={y + 1} fontSize="4" fill="#666" textAnchor="end" alignmentBaseline="middle">
               {Math.round(val)}
             </text>
           )
        })}

        {/* The line itself */}
        <path d={path} fill="none" stroke={color} strokeWidth="1" />
        
        {/* Points */}
        {points.map((p, i) => (
          <circle key={`p-${i}`} cx={p.x} cy={p.y} r="1.2" fill={color} />
        ))}

        {/* X-axis Labels */}
        {labels.map((label, i) => (
          <text 
            key={`xl-${i}`} 
            x={(i / (labels.length - 1)) * width} 
            y={height + 9} 
            fontSize="3.5" 
            fill="#666" 
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const weeksLabels = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'];

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-3">My journey</p>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-20 relative"
        >
          <div className="text-center mb-10">
            <p className="section-subheading mb-3 uppercase tracking-widest text-sm text-[#8b5cf6] font-semibold">Credentials</p>
            <h2 className="text-3xl font-bold text-white">
              Certifications & <span className="text-[#8b5cf6]">Achievements</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12 items-stretch">
            {certifications.map((cert) => (
              <div key={cert.id} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] rounded-xl bg-[#1A1C29] overflow-hidden flex flex-col h-full border border-gray-800">
                <div className="relative bg-white w-full h-[220px] p-2 flex items-center justify-center">
                  {cert.certificateImage ? (
                    <img 
                      src={cert.certificateImage} 
                      alt={cert.title} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}
                  {/* Floating Icon */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#1A1C30] flex items-center justify-center text-2xl shadow-lg border-4 border-white m-6">
                    {cert.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-[17px] font-bold text-white mb-4 line-clamp-2 min-h-[50px] leading-tight">
                    {cert.title}
                  </h4>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <FiBriefcase className="w-4 h-4" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <FiCalendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <a
                      href={cert.certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      View Certificate <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* KPIT Sparkle Grid Card */}
            <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] rounded-xl bg-[#151624] overflow-hidden flex flex-col border border-gray-800 shadow-xl group hover:border-[#8b5cf6]/50 transition-all">
              {/* Image area */}
              <div className="w-full h-[220px] bg-white flex items-center justify-center relative overflow-hidden">
                <img
                  src="/certificates/kpit-sparkle.png"
                  alt="KPIT Sparkle 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-[17px] font-bold text-white mb-4 leading-tight">
                  Participated in KPIT Sparkle 2025
                </h4>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <FiBriefcase className="w-4 h-4" />
                    KPIT Technologies
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <FiCalendar className="w-4 h-4" />
                    2025
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-500 text-center">Innovation &amp; Mobility Contest</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative"
          style={{ marginTop: '3cm' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Coding Profiles & <span className="text-[#8b5cf6]">Consistency</span>
            </h2>

          </div>

          <div className="flex flex-wrap justify-center gap-6">

            {/* Leetcode */}
            <div className="w-full sm:max-w-[500px] p-5 rounded-[20px] bg-[#11121A] flex flex-col relative overflow-hidden" style={{ border: '2px solid #FFA116' }}>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-[#FFA116]"><SiLeetcode size={24} /></span>
                  <h3 className="text-xl font-bold text-white tracking-wide">LeetCode</h3>
                </div>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0066FF] flex items-center gap-1 hover:underline">
                  View Profile <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Total Solved</span>
                  <span className="text-xl font-bold text-white">103</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Easy</span>
                  <span className="text-xl font-bold text-white">62</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Medium</span>
                  <span className="text-xl font-bold text-white">32</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Hard</span>
                  <span className="text-xl font-bold text-white">9</span>
                </div>
              </div>

              <WeeklyTrendGraph
                data={[2, 3, 4, 3, 5, 6, 4, 7, 8, 6, 9, 10]}
                labels={weeksLabels}
                color="#0066FF"
              />
            </div>

            {/* GFG */}
            <div className="w-full sm:max-w-[500px] p-5 rounded-[20px] bg-[#11121A] flex flex-col relative overflow-hidden" style={{ border: '2px solid #2F8D46' }}>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-[#2F8D46]"><SiGeeksforgeeks size={24} /></span>
                  <h3 className="text-xl font-bold text-white tracking-wide">GeeksforGeeks</h3>
                </div>
                <a href="https://geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0066FF] flex items-center gap-1 hover:underline">
                  View Profile <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Total Solved</span>
                  <span className="text-xl font-bold text-white">48</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Basic</span>
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Easy</span>
                  <span className="text-xl font-bold text-white">28</span>
                </div>
                <div className="flex flex-col bg-[#1A1C29] border border-[#2a2c39] rounded-xl py-2 px-1">
                  <span className="text-[10px] text-gray-500 mb-1 tracking-wide">Medium</span>
                  <span className="text-xl font-bold text-white">16</span>
                </div>
              </div>

              <WeeklyTrendGraph
                data={[4, 5, 6, 5, 7, 6, 8, 7, 6, 7, 6, 7]}
                labels={weeksLabels}
                color="#0066FF"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
