"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

interface FeatureCard {
  id: number
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    id: 6,
    title: "Lorem Ipsum is simply",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
]

export default function FeaturesGridSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<{ [key: number]: HTMLDivElement }>({})

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
    <section ref={containerRef} className="w-full bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center">
          <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide mb-6 md:mb-8">LOREM IPSUM</h2>
          <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Features Grid - 2 columns on all screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                if (el) cardRefs.current[feature.id] = el
              }}
              data-card-id={feature.id}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(feature.id)
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-[-20px] translate-y-[20px]"
              }`}
              style={{
                transitionDelay: visibleCards.has(feature.id) ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex gap-4 md:gap-6">
                {/* Arrow Icon */}
                <div className="flex-shrink-0 pt-1">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400/60 flex-shrink-0" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-end mt-12 md:mt-16">
          <button className="px-8 md:px-10 py-3 md:py-3 border border-white/40 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 group">
            learn more
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
