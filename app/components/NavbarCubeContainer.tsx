'use client'

import { useEffect, useRef } from 'react'
import NavbarCube2 from './NavbarCube2'
import PixelTitle from './PixelTitle';

export default function NavbarCubeContainer() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      className="fixed left-0 w-[100px] h-[100px] z-40 hidden md:block" 
      ref={containerRef}
      style={{ top: '100px' }}  // Position it just below the navbar
    >
      <PixelTitle />
      <div 
      className="fixed left-0 w-[100px] h-[100px] z-40" 
      ref={containerRef}
      style={{ top: '100px', left : '30px'  }}  // Position it just below the navbar
    >
<NavbarCube2 />
    </div>
      

    </div>
  )
}
