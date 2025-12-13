"use client"

import { useEffect, useRef, useState } from "react"

export default function TimelineSection() {
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

  const timelineItems = [
    {
      number: "1",
      title: "Alert Overload",
      description: "AI Noise Reduction. Deduplication and suppression use intelligent correlation to isolate the true root causes.",
    },
    {
      number: "2",
      title: "Blind Spots",
      description: "Unified Monitoring. Use agents, agentless probes, and APIs for coverage across all hardware, network, and cloud platforms.",
    },
    {
      number: "3",
      title: "Slow Diagnosis",
      description: "Multi-Signal Correlation. Automatically correlate logs, metrics, and traces to provide instant context and enriched incident data.",
    },
  ]

  const introText =
    "NetScope Vision is the enterprise-grade monitoring and observability platform engineered for the modern hybrid world. It delivers unified visibility across IT, cloud, and OT, while integrating advanced AI/ML capabilities to reduce noise, accelerate incident diagnosis, and automate remediation. Achieve higher reliability and operational excellence."

  return (
    <section ref={sectionRef} className="w-full bg-[#212121] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Intro text */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">{introText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          {/* Left side */}
          <div
            className={`flex flex-col justify-start transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Eliminate Operational Chaos </h3>
            <p className="text-sm text-gray-400">
Solving the three biggest monitoring and observability pain points.
            </p>
          </div>

          {/* Right side - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 via-gray-600 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                  }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center font-bold text-lg border border-gray-500">
                      {item.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-3">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
