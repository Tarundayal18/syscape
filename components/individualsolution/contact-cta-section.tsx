"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

export default function ContactCTASection() {
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

  return (
    <section ref={sectionRef} className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Lorem Ipsum is simply dummy</h2>

        <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and
          text.
        </p>
        {/* Top line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          {/* Right side - CTA Buttons and Contact */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{
              transitionDelay: isVisible ? "100ms" : "0ms",
            }}
          >
            <div className="space-y-6">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-900/20 hover:border-gray-400 transition-all">
                  <span className="font-semibold">Email Us</span>
                  <Check className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-900/20 hover:border-gray-400 transition-all">
                  <span className="font-semibold">Call Us</span>
                  <Check className="w-5 h-5" />
                </button>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-8 pt-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold">Lorem@Ipsum.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold">+91 00000 00000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-12" />
      </div>
    </section>
  )
}
