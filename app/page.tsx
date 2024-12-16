import TypewriterText from './components/TypewriterText';
import AINodeGraph from './components/AINodeGraph';


export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <div className="w-[250px] bg-slate-900 min-h-screen fixed left-0 top-2 p-8">
        <div className="flex flex-col gap-4 items-center">
          
          <AINodeGraph />
          
          
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-[220px]">
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
            
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
