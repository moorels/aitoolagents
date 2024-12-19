'use client'
import TypewriterText from './components/TypewriterText';
import HumanFigure3D from './components/HumanFigure3D';
import Chat from './components/Chat'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <div className="w-full">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8">
            <div className="w-[300px] h-[300px] md:w-[80px] md:h-[600px] relative mb-8 md:mb-0">
              <HumanFigure3D />
            </div>
            <div className="flex-1 w-full">
              <TypewriterText />
            </div>
          </div>
          <div className="mt-8">
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
