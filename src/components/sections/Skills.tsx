"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "CSS", level: 5 },
  { name: "HTML", level: 5 },
  { name: "Figma", level: 5 },
  { name: "Photoshop", level: 4 },
  { name: "Illustrator", level: 4 },
  { name: "JavaScript", level: 3 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-12 border-t-[2px] border-black bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-12 flex items-center gap-8 mb-8 overflow-hidden">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter shrink-0">Skills</h2>
           <div className="h-[4px] bg-black w-full" />
           <p className="font-mono text-sm font-black bg-accent border-[2px] border-black px-4 py-2 shrink-0 shadow-[4px_4px_0_#000] rotate-2">
            TOOLS / EXPERTISE
          </p>
        </div>
        
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6 bg-[#F9F9F9] border-[3px] border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_#000000]">
                <span className="font-black text-xl md:text-2xl w-full lg:w-48 uppercase shrink-0 text-black">
                  {skill.name}
                </span>
                <div className="flex-1 flex gap-1.5 md:gap-2 w-full">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div 
                      key={j} 
                      className={`h-6 md:h-8 w-full border-[2px] border-black ${j < skill.level ? 'bg-black' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
