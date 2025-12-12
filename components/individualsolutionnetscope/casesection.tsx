"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CaseSection() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <main className="relative">
        <section
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="py-16 md:py-24 px-4 relative scroll-section opacity-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d4a62]/20 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6">
              Eliminate Operational Chaos
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
              Solving the three biggest monitoring and observability pain points.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#3d4a62]/30 to-[#3c679d]/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#3c679d]/30 hover:border-[#3c679d]/60 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                  Alert Overload AI Noise Reduction
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Deduplication and suppression use intelligent correlation to isolate the true root causes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-[#3d4a62]/30 to-[#3c679d]/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#3c679d]/30 hover:border-[#3c679d]/60 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                  Blind Spots Unified Monitoring
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Use agents, agentless probes, and APIs for coverage across all hardware, network, and cloud platforms.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-[#3d4a62]/30 to-[#3c679d]/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#3c679d]/30 hover:border-[#3c679d]/60 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                  Slow Diagnosis: Multi-Signal Correlation
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Automatically correlate logs, metrics, and traces to provide instant context and enriched incident
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Insight Section */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="py-16 md:py-24 px-4 scroll-section opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6">
              Complete Operational Insight
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
              Intelligent monitoring for hybrid, multi-vendor environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Full Infrastructure Coverage",
                  icon: "🏗️",
                },
                {
                  title: "Advanced Anomaly Detection",
                  icon: "🔍",
                },
                {
                  title: "Topology & Dependency Maps",
                  icon: "🗺️",
                },
                {
                  title: "Event and ITSM Automation",
                  icon: "⚡",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#3d4a62]/20 p-6 md:p-8 rounded-xl border border-[#3c679d]/20 hover:bg-[#3d4a62]/30 hover:border-[#3c679d]/50 transition-all duration-300 text-center"
                >
                  <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="py-16 md:py-24 px-4 relative scroll-section opacity-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#3d4a62]/20 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 md:mb-6">
              Scalable, Extensible Architecture
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16 text-base md:text-lg">
              Future-proof design solving core enterprise deployment challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Architecture Card 1 */}
              <div className="bg-gradient-to-b from-[#3c679d]/20 to-transparent p-6 md:p-8 rounded-2xl border border-[#3c679d]/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Distributed HA Architecture</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Multi-node deployment and regional collectors ensure high availability and load balancing for massive
                  scale.
                </p>
              </div>

              {/* Architecture Card 2 */}
              <div className="bg-gradient-to-b from-[#3c679d]/20 to-transparent p-6 md:p-8 rounded-2xl border border-[#3c679d]/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">API-First Integration</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  A RESTful API provides full platform control and webhooks enable robust, event-driven integrations.
                </p>
              </div>

              {/* Architecture Card 3 */}
              <div className="bg-gradient-to-b from-[#3c679d]/20 to-transparent p-6 md:p-8 rounded-2xl border border-[#3c679d]/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Flexible Data Persistence</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Supports local, SQL/NoSQL, and cloud storage options for optimized short-term and long-term retention.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .scroll-section {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(30px);
        }

        .scroll-section.animate-in {
          opacity: 1 !important;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
