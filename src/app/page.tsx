import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 border-b-[2px] border-black bg-white z-50 flex items-center justify-between px-4 md:px-12">
        <div className="font-black text-xl tracking-tighter uppercase">Taku Nagato</div>
        <nav className="hidden sm:flex items-center gap-6 font-mono font-bold text-sm">
          <a href="#about" className="hover:text-accent hover:bg-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black uppercase">About</a>
          <a href="#works" className="hover:text-accent hover:bg-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black uppercase">Works</a>
          <a href="#skills" className="hover:text-accent hover:bg-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black uppercase">Skills</a>
          <a href="#contact" className="hover:text-accent hover:bg-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black uppercase">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col border-x-[2px] border-black md:mx-4 lg:mx-12 xl:mx-auto max-w-[1600px] mt-16 shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
        
        <footer className="border-t-[2px] border-black p-8 md:p-12 flex flex-col md:flex-row justify-between items-center bg-accent text-black font-mono text-sm uppercase font-black grid-bg">
          <span className="border-b-[2px] border-black pb-1 mb-4 md:mb-0">© {new Date().getFullYear()} Taku Nagato. Developed with Next.js.</span>
          <div className="flex gap-4">
            <span className="bg-black text-white px-3 py-1">All Rights Reserved.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
