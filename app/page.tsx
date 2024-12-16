import TypewriterText from './components/TypewriterText';
import AINodeGraph from './components/AINodeGraph';
import HumanFigure3D from './components/HumanFigure3D';
import PixelTitle from './components/PixelTitle';

export default function Home() {
  return (
    <div className="pt-10">
      <div className="py-8">
        <PixelTitle />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen p-8 sm:p-0">
          <main className="flex items-center justify-center h-full">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-8">
              <div className="w-[80px] h-[600px] relative">
                <HumanFigure3D />
              </div>
              <div className="flex-1">
                <TypewriterText />
              </div>
            </div>
          </main>
          <footer className="absolute bottom-8 left-8">
            <p className="text-xs text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
