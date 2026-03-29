"use client";

import { motion } from "framer-motion";
import { BrutalBox } from "@/components/ui/brutal-box";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 border-t-[4px] border-black bg-black text-white relative overflow-hidden">
      {/* Background brutalist element */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ backgroundImage: 'radial-gradient(#ccff00 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <BrutalBox className="px-8 py-16 md:p-24 bg-white text-black inline-flex flex-col items-center shadow-[16px_16px_0_#ccff00] transform -rotate-1 w-full max-w-4xl border-[4px]">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-12 leading-none">
              Let's build <br /> 
              something <br />
              <span className="bg-black text-accent px-4 py-2 mx-1 inline-block mt-4 rotate-2 border-4 border-accent">Brutal.</span>
            </h2>
            
            <a href="mailto:nagatotaku23@gmail.com" className="group mt-8 inline-block">
              <BrutalBox 
                hoverEffect 
                className="bg-accent text-black px-6 py-6 border-[3px] border-black flex flex-col sm:flex-row items-center gap-6 shadow-[8px_8px_0_#000]"
              >
                <div className="w-4 h-4 rounded-full bg-black animate-pulse hidden sm:block" />
                <span className="font-mono text-xl md:text-3xl font-black uppercase transition-transform group-hover:-translate-y-1">
                  nagatotaku23@gmail.com
                </span>
                <ArrowUpRight strokeWidth={4} className="w-10 h-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </BrutalBox>
            </a>
          </BrutalBox>
        </motion.div>
      </div>
    </section>
  );
}
