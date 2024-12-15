import NeuroCube from './components/NeuroCube';
import TypewriterText from './components/TypewriterText';
import NavbarCube2 from './components/NavbarCube2';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <div className="w-[220px] bg-slate-900 min-h-screen fixed left-0 top-16 p-8">
        <div className="flex flex-col gap-4 items-center">
          <NavbarCube2 />
        </div>
        <TypewriterText text="AI Tool Agents" />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-[300px]">
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
