"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface FeatureCard {
  id: number
  title: string
  description: string
}


interface FeatureCard2 {
  id: number
  title: string
  description: string
}


const features: FeatureCard[] = [
  {
    id: 1,
    title: "Intelligent, Next-Gen Service Management",
    description:
      "Deliver seamless service management backed by AI, native orchestration, and the reliability of enterprise-grade ITSM systems.",
  },
  {
    id: 2,
    title: "AI-Powered Resolution Engine",
    description:
      "Use Syscape AI for auto-classification, resolution suggestions, and conversational virtual agents across multiple channels.",
  },
  {
    id: 3,
    title: "Dynamic CMDB Foundation",
    description:
      "Leverage an object-oriented CMDB with automatic discovery, dependency mapping, and intelligent anomaly detection.",
  },
  {
    id: 4,
    title: "Automated Risk & Change",
    description:
      "Intelligently forecast impact, predict risk, and automate change/release workflows based on historical failure patterns.",
  },
  {
    id: 5,
    title: "Comprehensive Workflow Automation",
    description:
      "Utilize a powerful engine for condition-based, event-driven, and API orchestrations to eliminate manual bottlenecks.",
  },
  {
    id: 6,
    title: "End-to-End Asset Control",
    description:
      "Gain full visibility over hardware, software, and licenses, enhanced with predictive lifecycle forecasting and compliance alerts.",
  },
  
]

const features2: FeatureCard2[] = [
  {
    id: 1,
    title: "Unified Hybrid Infrastructure Visibility",
    description:
      "Comprehensive coverage across servers, network, cloud, containers, and OT/IoT devices using agent-based and agentless methods.",
  },
  {
    id: 2,
    title: "AIOps Noise Reduction",
    description:
      "Intelligent correlation, alert deduplication, and suppression eliminate operational noise and pinpoint the common root cause.",
  },
  {
    id: 3,
    title: "Dynamic Auto-Discovery Maps",
    description:
      "Automatically discover networks, applications, and cloud resources, continuously updating the topology for root-impact analysis.",
  },
  {
    id: 4,
    title: "Observability Data Correlation",
    description:
      "Centralize logs, metrics, events, and traces to provide deeper operational insights into system behavior.",
  },
  {
    id: 5,
    title: "Predictive Alert Intelligence",
    description:
      "Generate automatic performance baselines and use ML models for early warning indicators and capacity forecasting.",
  },
  {
    id: 6,
    title: "Low-Code Automated Remediation",
    description:
      "Implements policy-driven, self-healing actions and automated diagnosis scripts to accelerate Mean Time to Resolution (MTTR).",
  },
  
]

export default function FeaturesGridSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<{ [key: number]: HTMLDivElement }>({})

   const router = useRouter()
   
  const handleCardClick = () => {
    router.push(`/individualsolutionnetscope`)
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
    <section ref={containerRef} className="w-full bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center">
          <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide mb-6 md:mb-8">Content For OrchestraFlow</h2>
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
          <button onClick={() => handleCardClick()} className="px-8 md:px-10 py-3 md:py-3 border border-white/40 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 group">
            learn more
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>



       <div className="max-w-7xl mx-auto py-4">
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center">
          <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide mb-6 md:mb-8">Content For OrchestraFlow</h2>
          <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Features Grid - 2 columns on all screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features2.map((feature, index) => (
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
          <button onClick={() => handleCardClick()} className="px-8 md:px-10 py-3 md:py-3 border border-white/40 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 group">
            learn more
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
