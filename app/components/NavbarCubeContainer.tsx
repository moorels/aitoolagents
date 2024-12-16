'use client'

import { useEffect, useRef } from 'react'
import NavbarCube2 from './NavbarCube2'

export default function NavbarCubeContainer() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed top-0 left-0 w-[200px] h-[200px] z-50" ref={containerRef}>
      <NavbarCube2 />
    </div>
  )
}
