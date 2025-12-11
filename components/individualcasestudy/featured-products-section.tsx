"use client"

import { useEffect, useRef, useState } from "react"

interface ProductCard {
  id: number
  label?: string
  heading: string
  bullets: string[]
}

const products: ProductCard[] = [
  {
    id: 1,
    label: "Lorem ipsum",
    heading: "Lorem Ipsum is simply Lorem",
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry. Lorem Ipsum has been the industry's standard dummy text",
    ],
  },
  {
    id: 2,
    label: "Lorem ipsum",
    heading: "Lorem Ipsum is simply Lorem",
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry. Lorem Ipsum has been the industry's standard dummy text",
    ],
  },
  {
    id: 3,
    heading: "Lorem Ipsum is simply Lorem",
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry. Lorem Ipsum has been the industry's standard dummy text",
    ],
  },
  {
    id: 4,
    heading: "Lorem Ipsum is simply Lorem",
    bullets: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry. Lorem Ipsum has been the industry's standard dummy text",
    ],
  },
]

export default function FeaturedProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, cardIndex])])
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-card]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-gray-900 py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Top divider */}
        <div className="mb-12 md:mb-20 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" />

        {/* Main rounded container */}
        <div className="rounded-3xl border border-gray-700/50 bg-gradient-to-b from-gray-900/40 to-black/40 p-8 md:p-12 lg:p-16">
          <div className="mb-12 md:mb-16 flex items-center justify-between gap-8">
            <span className="text-sm md:text-base text-white/70 font-medium">Lorem ipsum</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-600/30 via-gray-600/20 to-transparent" />
            <span className="text-sm md:text-base text-white/70 font-medium">Lorem ipsum</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                data-card={index}
                data-index={index}
                className={`flex flex-col items-start text-left transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div className="mb-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-blue-600/30 to-slate-700/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-6 text-white leading-tight">
                  {product.heading}
                </h3>

                <ul className="text-sm md:text-base text-gray-300/90 space-y-3 leading-relaxed">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-gray-500 mt-0.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 md:mt-20 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" />
      </div>
    </section>
  )
}
