"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function FAQSection() {
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
      title: "Distributed HA Architecture",
      description:
        "Multi-node deployment and regional collectors ensure high availability and load balancing for massive scale",
    },
    {
      title: "API-First Integration",
      description:
        "A RESTful API provides full platform control and webhooks enable robust, event-driven integrations.",
    },
    {
      title: "Flexible Data Persistence",
      description:
        "Supports local, SQL/NoSQL, and cloud storage options for optimized short-term and long-term retention.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full bg-[#212121] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div
            className={`flex flex-col justify-start transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-gray-400 mb-2">Technology Behind SysCape</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Scalable, Extensible Architecture</h2>
            <p className="text-base text-gray-300">
Future-proof design solving core enterprise deployment challenges.
            </p>
          </div>

          {/* Right side - Q&A items */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="flex-shrink-0 pt-1">
                  <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                  {index < items.length - 1 && (
                    <div className="mt-6 h-px bg-gradient-to-r from-gray-700 to-transparent" />
                  )}
                </div>
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
