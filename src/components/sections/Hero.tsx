"use client";

import { motion } from "framer-motion";
import { BrutalBox } from "@/components/ui/brutal-box";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 md:px-12 relative overflow-hidden bg-white">
      {/* Background brutalist grid decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm sm:text-base uppercase tracking-widest mb-4 flex items-center gap-3 font-bold bg-white inline-flex w-max px-3 py-1 border-2 border-black"
          >
            <span className="w-3 h-3 bg-accent inline-block border-2 border-black" />
            Taku Nagato / Portfolio
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-10 text-black drop-shadow-[4px_4px_0_rgba(204,255,0,1)]"
          >
            Senior <br />
            Front-End <br />
            Engineer.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative lg:-ml-4 max-w-2xl z-20"
          >
            <BrutalBox className="p-6 md:p-8 bg-[#ccff00]">
              <p className="text-xl md:text-3xl font-bold leading-snug tracking-tight font-sans">
                「デザインの意図をコードに、そして制作プロセスを資産に。」
              </p>
              <p className="mt-4 font-bold text-sm md:text-base border-t-[3px] border-black pt-4 uppercase">
                細部まで体温の宿る、ストレスのない体験を仕立てる。
              </p>
            </BrutalBox>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end items-end relative mt-16 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <BrutalBox className="p-4 flex items-center gap-4 bg-black text-white self-end relative z-20">
              <span className="font-mono text-sm uppercase font-bold tracking-widest">Scroll to explore</span>
              <ArrowDownRight strokeWidth={3} className="w-6 h-6 text-accent" />
            </BrutalBox>
            
            {/* Playful overlapping element */}
            <div className="w-48 h-48 border-[3px] border-black border-dashed absolute -bottom-12 -right-12 z-0 opacity-100 rotate-12 bg-[#F9F9F9]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
