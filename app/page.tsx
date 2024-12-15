import NeuroCube from './components/NeuroCube';
import TypewriterText from './components/TypewriterText';

import NavbarCube from '../app/components/NavbarCube2'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
     
      
      <div className="fixed top-24 left-12 z-10 flex flex-col gap-4 items-start w-full">
        <TypewriterText text="AI Tool Agents" />
        
          <NavbarCube />
      
        
      </div>
      <div className="relative flex place-items-start w-full">
        <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       
          <main className="flex flex-col gap-8 row-start-2 items-start">
          
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-start justify-start">
            <div>
              Footer Herewewe
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
