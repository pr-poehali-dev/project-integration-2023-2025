import type { ReactNode } from "react"
import { useEffect } from "react"
import MouseMoveEffect from "./MouseMoveEffect"
import BackgroundPaths from "./BackgroundPaths"
import AnimatedBackground from "./AnimatedBackground"
import BackgroundStripes from "./BackgroundStripes"
import Navbar from "./Navbar"
import AnimatedFooter from "./AnimatedFooter"

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <MouseMoveEffect />
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        {children}
        <AnimatedFooter />
      </div>
    </div>
  )
}
