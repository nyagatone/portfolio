"use client";

import { motion } from "framer-motion";
import { BrutalBox } from "@/components/ui/brutal-box";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { worksData } from "@/data/works";

export function Works() {
  return (
    <section id="works" className="py-32 px-4 md:px-12 border-t-[2px] border-black bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] border-black pb-8 mb-20 gap-6">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none -ml-2 text-black">Works</h2>
          <BrutalBox className="px-6 py-3 bg-white font-mono font-black uppercase text-xl">
            Selected Projects
          </BrutalBox>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-20">
          {worksData.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              // Brutalist detail: deliberate overlapping / shifting
              className={i % 2 === 1 ? "md:mt-16 lg:mt-24" : ""}
            >
              <Link href={`/works/${work.slug}`} className="block h-full group outline-none">
                <BrutalBox hoverEffect className="h-full min-h-[300px] p-6 flex flex-col bg-white relative shadow-[6px_6px_0_#000]">
                  {/* Index tag over the border */}
                  <div className="absolute -top-5 -left-5 bg-white border-[2px] border-black px-3 py-1 font-mono font-black text-lg z-10 w-12 text-center shadow-[2px_2px_0_#000]">
                    0{i + 1}
                  </div>
                  
                  <div className="w-full aspect-[4/3] bg-[#F9F9F9] border-[2px] border-black mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-dashed p-4 transition-colors group-hover:bg-[#ccff00]">
                    <img 
                      src={work.image} 
                      alt="" 
                      className="absolute w-[80%] h-[80%] object-contain drop-shadow-[8px_8px_0_#000] transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
                    {/* Subtle hover reveal element */}
                    <div className="absolute inset-x-0 bottom-0 top-auto h-2 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t-[2px] border-black" />
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <h3 className="font-black text-2xl leading-snug tracking-tight bg-white inline-block">{work.title}</h3>
                    <div className="mt-4 flex items-center gap-2 font-mono text-sm font-black bg-black text-white px-4 py-2 w-max transition-colors group-hover:bg-accent group-hover:text-black group-hover:border-black border-2 border-transparent">
                      Details <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </BrutalBox>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
