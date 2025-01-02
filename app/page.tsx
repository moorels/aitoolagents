'use client'
import TypewriterText from './components/TypewriterText';
import HumanFigure3D from './components/HumanFigure3D';
import Chat from './components/Chat'
import Link from 'next/link'
import BlueWaveBackground from './components/RedWaveBackground'
import CurvedBackground from './components/CurvedBackground'  

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <CurvedBackground />
      <div className="w-full">
      
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mt-12 text-xl md:text-2xl font-thin px-4">
          Transform Your Business with Smart Automation.
          <div className="mt-4 align-center text-lg md:text-xl px-2">Discover how AI agents can streamline your operations and enhance customer experiences.</div>
          <div className="relative mt-4 h-[100px] w-full max-w-[800px] mx-auto group">
            <BlueWaveBackground />
            <Link 
              href="/ai-agents-explained" 
              className="relative inline-flex items-center justify-center w-full h-full text-white hover:text-white/90 transition-colors duration-300"
            >
              <span className="flex items-center text-lg font-light">
                <span className="mr-2 text-2xl md:text-1xl text-white-900 bg-blue-500/30 bg-opacity-70 rounded px-2 md:px-4 py-1 md:py-2">Click here to learn about AI Agents</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
        </div>
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
