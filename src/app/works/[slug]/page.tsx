import { notFound } from "next/navigation";
import { worksData } from "@/data/works";
import { BrutalBox } from "@/components/ui/brutal-box";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col border-x-[2px] border-black max-w-[1200px] mx-auto bg-[#F9F9F9] pt-16">
      
      {/* Header for detail pages */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b-[2px] border-black bg-white z-50 flex items-center px-4 md:px-12 shadow-[0_4px_0_0_#000000]">
        <Link href="/#works" className="flex items-center gap-2 font-mono font-black uppercase text-sm hover:text-accent transition-colors group">
          <ArrowUpLeft strokeWidth={3} className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
          Back to Works
        </Link>
      </header>

      <article className="p-4 md:p-12 lg:p-16 flex-1 flex flex-col gap-12 mt-8">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] border-b-[4px] border-black pb-8 break-words text-black">
            {work.title}
          </h1>
        </div>

        <BrutalBox className="w-full aspect-square md:aspect-video border-[4px] bg-[#ccff00] relative flex items-center justify-center p-4">
          <img 
            src={work.image} 
            alt={work.title} 
            className="w-[80%] h-[80%] object-contain drop-shadow-[12px_12px_0_#000]"
          />
          <div className="absolute top-4 left-4 bg-white border-[2px] border-black px-3 py-1 font-mono font-black uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-black inline-block" />
            Project Visual
          </div>
        </BrutalBox>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="bg-black text-white px-4 py-2 font-mono font-black uppercase inline-block w-max rotate-2 border-2 border-black">
               Overview
             </div>
             <p className="font-mono text-sm uppercase font-bold mt-2 border-l-4 border-accent pl-4">
               Category:<br/> <span className="text-gray-600">Web Design</span><br/><br/>
               Role:<br/> <span className="text-gray-600">Direction, Development</span>
             </p>
          </div>
          <div className="lg:col-span-8">
            <BrutalBox className="p-8 md:p-10 bg-white shadow-[8px_8px_0_#000]">
              <h2 className="text-2xl font-black mb-6 border-b-[3px] border-black pb-4 text-black uppercase">About this project</h2>
              <p className="text-lg leading-loose font-bold whitespace-pre-line text-gray-800">
                {work.description}
              </p>
            </BrutalBox>
          </div>
        </div>

        <div className="mt-24 flex justify-center pb-12">
          <Link href="/#works" className="group">
             <BrutalBox hoverEffect className="bg-white text-black px-8 py-6 border-[3px] border-black flex items-center gap-4 shadow-[8px_8px_0_#000] hover:bg-black hover:text-white">
               <ArrowUpLeft strokeWidth={4} className="w-8 h-8 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-accent" />
               <span className="font-mono text-xl font-black uppercase tracking-widest transition-transform group-hover:-translate-x-1">
                 Back to TOP
               </span>
             </BrutalBox>
          </Link>
        </div>
      </article>

    </main>
  );
}
