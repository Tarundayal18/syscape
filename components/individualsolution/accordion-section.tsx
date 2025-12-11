"use client"

import { useEffect, useRef, useState } from "react"

export default function AccordionCardsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const items = [
    {
      title: "What is Lorem Ipsum?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and",
    },
    // {
    //   title: "What is Lorem Ipsum?",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and",
    // },
  ]

  const cardItems = [
    { title: "What is Lorem Ipsum?" },
    { title: "What is Lorem Ipsum?" },
    { title: "What is Lorem Ipsum?" },
  ]

  return (
    <section ref={sectionRef} className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div  className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">What is Lorem Ipsum?</h3>
                <p className="text-sm text-gray-400 w-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
        {/* Top line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div
            className={`flex flex-col justify-start transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {items.map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right side - Bordered cards */}
          <div className="space-y-4">
                            <p className="text-sm text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and</p>

            {cardItems.map((item, index) => (
              <div
                key={index}
                className={`border border-gray-600 rounded-lg p-6 transition-all duration-700 hover:border-gray-400 hover:bg-gray-900/20 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-12" />
      </div>
    </section>
  )
}
