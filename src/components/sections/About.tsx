"use client";

import { motion } from "framer-motion";
import { BrutalBox } from "@/components/ui/brutal-box";

const experiences = [
  { company: "株式会社LegalOn Technologies", period: "Present", role: "Frontend Engineer" },
  { company: "株式会社アーバンリサーチ", period: "Past", role: "Web Designer / Coder" },
  { company: "株式会社クレセント", period: "Past", role: "Creator" },
  { company: "株式会社クレオ", period: "Past", role: "Creator" },
  { company: "株式会社ロングストーン", period: "Past", role: "Creator" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 border-t-[2px] border-black bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 -ml-2 text-black">About</h2>
          <div className="bg-white border-[2px] border-black p-4 shadow-[4px_4px_0_#000] inline-block mb-12">
            <p className="font-mono text-sm uppercase font-bold">
              Biography & <br /> Career Path
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <BrutalBox className="p-8 md:p-10 bg-white shadow-[8px_8px_0_#000] transform -rotate-1">
              <h3 className="text-3xl font-black mb-6 font-sans tracking-tight border-b-4 border-black pb-4">10年以上のWeb制作体験</h3>
              <p className="font-bold leading-relaxed text-lg">
                デザインから実装まで一気通貫で対応可能なシニアフロントエンドエンジニア。<br /><br />
                メディア、EC、SaaSなど多様な現場における経験を持ち、デザインの意図を正確にコードに落とし込みます。<br />
                また、Notionを活用したプロジェクト管理やドキュメント構築も得意としています。
              </p>
            </BrutalBox>
          </motion.div>

          <div className="relative mt-8">
            <h3 className="font-mono text-2xl font-black mb-8 flex items-center gap-4 bg-black text-white inline-block px-4 py-2 rotate-2">
              EXPERIENCE
            </h3>
            <div className="relative border-l-[4px] border-black ml-4 md:ml-8 flex flex-col gap-6 py-4">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 md:pl-10"
                >
                  {/* Decorative dot */}
                  <div className="w-6 h-6 border-[3px] border-black bg-accent absolute top-1/2 -translate-y-1/2 -left-[14px] z-10 bg-white" />

                  <BrutalBox className="p-6 flex flex-col md:flex-row justify-between md:items-start gap-4 bg-white">
                    <div>
                      <h4 className="font-black text-xl mb-2">{exp.company}</h4>
                      <span className="font-mono text-sm font-bold opacity-70 bg-gray-200 px-2 py-0.5">{exp.role}</span>
                    </div>
                    <div className="bg-black text-white px-3 py-1 font-mono font-bold text-sm uppercase shrink-0">
                      {exp.period}
                    </div>
                  </BrutalBox>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
