'use client'

import { useEffect, useRef } from 'react'
import NavbarCube2 from './NavbarCube2'

export default function NavbarCubeContainer() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      className="fixed left-0 w-[100px] h-[300px] z-40" 
      ref={containerRef}
      style={{ top: '80px' }}  // Position it just below the navbar
    >
      <NavbarCube2 />
    </div>
  )
}
