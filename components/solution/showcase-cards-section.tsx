"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

interface ShowcaseCard {
  id: number
  label: string
}

const cards: ShowcaseCard[] = [
  { id: 1, label: "OrchestraFlow" },
  { id: 2, label: "NetScope Vision" },
  { id: 3, label: "InfraCore Pulse" },
  { id: 4, label: "ThreatGuard OT" },
]

export default function ShowcaseCardsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<{ [key: number]: HTMLDivElement }>({})
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/individualsolution`)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
            setVisibleCards((prev) => new Set([...prev, cardId]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide">Our Platforms</h2>
          <div className="w-24 h-px bg-white/30 mx-auto mt-6 md:mt-8"></div>
        </div>

        {/* Cards Grid - 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleCardClick()}
              ref={(el) => {
                if (el) cardRefs.current[card.id] = el
              }}
              data-card-id={card.id}
              className={`flex flex-col items-center transform transition-all duration-700 ease-out ${
                visibleCards.has(card.id)
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-[30px]"
              }`}
              style={{
                transitionDelay: visibleCards.has(card.id) ? `${index * 120}ms` : "0ms",
              }}
            >
              {/* Card Container */}
              <div className="w-full aspect-square mb-4 md:mb-6 rounded-2xl overflow-hidden relative group cursor-pointer">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-800/40 to-blue-950/50"></div>

                {/* 3D Logo Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    {/* 3D Swirl/Logo SVG */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full drop-shadow-xl group-hover:drop-shadow-2xl transition-all duration-300"
                    >
                      {/* Front face of 3D shape */}
                      <defs>
                        <linearGradient id={`grad-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#e5e7eb", stopOpacity: 0.9 }} />
                          <stop offset="100%" style={{ stopColor: "#9ca3af", stopOpacity: 0.7 }} />
                        </linearGradient>
                      </defs>

                      {/* Left side of 3D shape */}
                      <path
                        d="M 80 40 Q 70 80 80 120 L 100 140 Q 110 100 100 60 Z"
                        fill={`url(#grad-${card.id})`}
                        opacity="0.8"
                      />

                      {/* Right side of 3D shape */}
                      <path d="M 100 60 Q 110 100 100 140 L 120 120 Q 130 80 120 40 Z" fill="#d1d5db" opacity="0.6" />

                      {/* Front curve */}
                      <path
                        d="M 80 40 Q 100 35 120 40 Q 130 80 120 120 Q 100 135 80 120 Q 70 80 80 40 Z"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base font-medium text-white/90 text-center tracking-wide">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
