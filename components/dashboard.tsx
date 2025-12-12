
"use client"

import Image from "next/image"

interface DashboardProps {
  scale: number
}

export default function Dashboard({ scale }: DashboardProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Dashboard Image Container */}
        <div className="relative flex justify-center">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

          {/* Inner border glow with zoom effect */}
          <div
            className="relative 
             overflow-hidden p-1 sm:p-2 transition-none"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center top",
              willChange: "transform",
              width: "100vw",
              height: "80vh",
            }}
          >
            <Image
              src="/adimin1.webp"
              alt="Syscape Dashboard Control Panel"
              width={1200}
              height={900}
              className="w-full h-full rounded-lg object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}
