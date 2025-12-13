

// "use client"

// import { useEffect, useRef, useState } from "react"
// import { ArrowRight } from "lucide-react"
// import { useRouter } from "next/navigation";

// interface ShowcaseCard {
//   id: number
//   label: string
// }

// interface FeatureCard {
//   id: number
//   title: string
//   description: string
// }

// const cards: ShowcaseCard[] = [
//   { id: 1, label: "OrchestraFlow" },
//   { id: 2, label: "NetScope Vision" },
//   { id: 3, label: "InfraCore Pulse" },
//   { id: 4, label: "ThreatGuard OT" },
// ]

// const orchestraFlowFeatures: FeatureCard[] = [
//   {
//     id: 1,
//     title: "Intelligent, Next-Gen Service Management",
//     description:
//       "Deliver seamless service management backed by AI, native orchestration, and the reliability of enterprise-grade ITSM systems.",
//   },
//   {
//     id: 2,
//     title: "AI-Powered Resolution Engine",
//     description:
//       "Use Syscape AI for auto-classification, resolution suggestions, and conversational virtual agents across multiple channels.",
//   },
//   {
//     id: 3,
//     title: "Dynamic CMDB Foundation",
//     description:
//       "Leverage an object-oriented CMDB with automatic discovery, dependency mapping, and intelligent anomaly detection.",
//   },
//   {
//     id: 4,
//     title: "Automated Risk & Change",
//     description:
//       "Intelligently forecast impact, predict risk, and automate change/release workflows based on historical failure patterns.",
//   },
//   {
//     id: 5,
//     title: "Comprehensive Workflow Automation",
//     description:
//       "Utilize a powerful engine for condition-based, event-driven, and API orchestrations to eliminate manual bottlenecks.",
//   },
//   {
//     id: 6,
//     title: "End-to-End Asset Control",
//     description:
//       "Gain full visibility over hardware, software, and licenses, enhanced with predictive lifecycle forecasting and compliance alerts.",
//   },
// ]

// const netScopeFeatures: FeatureCard[] = [
//   {
//     id: 1,
//     title: "Unified Hybrid Infrastructure Visibility",
//     description:
//       "Comprehensive coverage across servers, network, cloud, containers, and OT/IoT devices using agent-based and agentless methods.",
//   },
//   {
//     id: 2,
//     title: "AIOps Noise Reduction",
//     description:
//       "Intelligent correlation, alert deduplication, and suppression eliminate operational noise and pinpoint the common root cause.",
//   },
//   {
//     id: 3,
//     title: "Dynamic Auto-Discovery Maps",
//     description:
//       "Automatically discover networks, applications, and cloud resources, continuously updating the topology for root-impact analysis.",
//   },
//   {
//     id: 4,
//     title: "Observability Data Correlation",
//     description:
//       "Centralize logs, metrics, events, and traces to provide deeper operational insights into system behavior.",
//   },
//   {
//     id: 5,
//     title: "Predictive Alert Intelligence",
//     description:
//       "Generate automatic performance baselines and use ML models for early warning indicators and capacity forecasting.",
//   },
//   {
//     id: 6,
//     title: "Low-Code Automated Remediation",
//     description:
//       "Implements policy-driven, self-healing actions and automated diagnosis scripts to accelerate Mean Time to Resolution (MTTR).",
//   },
// ]

// export default function UnifiedShowcaseSection() {
//   const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
//   const [selectedCard, setSelectedCard] = useState<number | null>(null)
//   const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set())
//   const containerRef = useRef<HTMLDivElement>(null)
//   const cardRefs = useRef<{ [key: number]: HTMLDivElement }>({})
//   const featuresRef = useRef<HTMLDivElement>(null)
//   const featureCardRefs = useRef<{ [key: number]: HTMLDivElement }>({})

//     const router = useRouter();

  

//   const handleClick = () => {
//     router.push("/individualsolution");
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
//             setVisibleCards((prev) => new Set([...prev, cardId]))
//           }
//         })
//       },
//       { threshold: 0.1, rootMargin: "50px" },
//     )

//     Object.values(cardRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref)
//     })

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (selectedCard !== null) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const featureId = Number.parseInt(entry.target.getAttribute("data-feature-id") || "0")
//               setVisibleFeatures((prev) => new Set([...prev, featureId]))
//             }
//           })
//         },
//         { threshold: 0.1, rootMargin: "50px" },
//       )

//       Object.values(featureCardRefs.current).forEach((ref) => {
//         if (ref) observer.observe(ref)
//       })

//       return () => observer.disconnect()
//     }
//   }, [selectedCard])

//   const handleCardClick = (cardId: number) => {
//     setSelectedCard(cardId)
//     setVisibleFeatures(new Set())
    
//     setTimeout(() => {
//       featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
//     }, 100)
//   }

//   const currentFeatures = selectedCard === 1 ? orchestraFlowFeatures : netScopeFeatures
//   const currentTitle = selectedCard === 1 ? "OrchestraFlow" : "NetScope Vision"

//   return (
//     <section ref={containerRef} className="w-full bg-[#212c3b]">
//       {/* Showcase Cards Section */}
//       <div className="py-16 md:py-24 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-16 md:mb-20 text-center">
//             <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide">Our Platforms</h2>
//             <div className="w-24 h-px bg-white/30 mx-auto mt-6 md:mt-8"></div>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {cards.map((card, index) => (
//               <div
//                 key={card.id}
//                 ref={(el) => {
//                   if (el) cardRefs.current[card.id] = el
//                 }}
//                 data-card-id={card.id}
//                 onClick={() => handleCardClick(card.id)}
//                 className={`flex flex-col items-center transform transition-all duration-700 ease-out ${
//                   visibleCards.has(card.id)
//                     ? "opacity-100 scale-100 translate-y-0"
//                     : "opacity-0 scale-90 translate-y-[30px]"
//                 }`}
//                 style={{
//                   transitionDelay: visibleCards.has(card.id) ? `${index * 120}ms` : "0ms",
//                 }}
//               >
//                 {/* Card Container */}
//                 <div className="w-full aspect-square mb-4 md:mb-6 rounded-2xl overflow-hidden relative group cursor-pointer">
//                   {/* Background Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-800/40 to-blue-950/50"></div>

//                   {/* 3D Logo Shape */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-32 h-32 md:w-40 md:h-40">
//                       <svg
//                         viewBox="0 0 200 200"
//                         className="w-full h-full drop-shadow-xl group-hover:drop-shadow-2xl transition-all duration-300"
//                       >
//                         <defs>
//                           <linearGradient id={`grad-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                             <stop offset="0%" style={{ stopColor: "#e5e7eb", stopOpacity: 0.9 }} />
//                             <stop offset="100%" style={{ stopColor: "#9ca3af", stopOpacity: 0.7 }} />
//                           </linearGradient>
//                         </defs>

//                         <path
//                           d="M 80 40 Q 70 80 80 120 L 100 140 Q 110 100 100 60 Z"
//                           fill={`url(#grad-${card.id})`}
//                           opacity="0.8"
//                         />

//                         <path d="M 100 60 Q 110 100 100 140 L 120 120 Q 130 80 120 40 Z" fill="#d1d5db" opacity="0.6" />

//                         <path
//                           d="M 80 40 Q 100 35 120 40 Q 130 80 120 120 Q 100 135 80 120 Q 70 80 80 40 Z"
//                           fill="none"
//                           stroke="#f3f4f6"
//                           strokeWidth="2"
//                           opacity="0.5"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>

//                 {/* Label */}
//                 <p className="text-sm md:text-base font-medium text-white/90 text-center tracking-wide">{card.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Features Section - Only show when a card is selected */}
//       {selectedCard !== null && (
//         <div ref={featuresRef} className="py-12 md:py-20 px-4 md:px-8">
//           <div className="max-w-7xl mx-auto">
//             {/* Header */}
//             <div className="mb-12 md:mb-20 flex flex-col items-center">
//               <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide mb-6 md:mb-8">
//                 {currentTitle}
//               </h2>
//               <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//               {currentFeatures.map((feature, index) => (
//                 <div
//                   key={feature.id}
//                   ref={(el) => {
//                     if (el) featureCardRefs.current[feature.id] = el
//                   }}
//                   data-feature-id={feature.id}
//                   className={`transform transition-all duration-700 ease-out ${
//                     visibleFeatures.has(feature.id)
//                       ? "opacity-100 translate-x-0 translate-y-0"
//                       : "opacity-0 translate-x-[-20px] translate-y-[20px]"
//                   }`}
//                   style={{
//                     transitionDelay: visibleFeatures.has(feature.id) ? `${index * 100}ms` : "0ms",
//                   }}
//                 >
//                   <div className="flex gap-4 md:gap-6">
//                     {/* Arrow Icon */}
//                     <div className="flex-shrink-0 pt-1">
//                       <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400/60 flex-shrink-0" />
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm md:text-base text-white/60 leading-relaxed">{feature.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Learn More Button */}
//             <div className="flex justify-end mt-12 md:mt-16">
//               <button onClick={handleClick} className="px-8 md:px-10 py-3 md:py-3 border border-white/40 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 group">
//                 learn more
//                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation";

interface ShowcaseCard {
  id: number
  label: string,
  icon: string
}

interface FeatureCard {
  id: number
  title: string
  description: string
}

const cards: ShowcaseCard[] = [
  { id: 1, label: "OrchestraFlow" ,  icon: "/solution/Icon 1.svg",},
  { id: 2, label: "NetScope Vision" ,  icon: "/solution/Icon 2.svg",},
  { id: 3, label: "InfraCore Pulse",  icon: "/solution/Icon 3.svg", },
  { id: 4, label: "ThreatGuard OT" ,  icon: "/solution/Icon 4.svg",},
]

const orchestraFlowFeatures: FeatureCard[] = [
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

const netScopeFeatures: FeatureCard[] = [
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

export default function UnifiedShowcaseSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<{ [key: number]: HTMLDivElement }>({})
  const featuresRef = useRef<HTMLDivElement>(null)
  const featureCardRefs = useRef<{ [key: number]: HTMLDivElement }>({})

  const router = useRouter();

  const handleClick = () => {
    if (selectedCard === 1) {
      router.push("/individualsolution");
    } else if (selectedCard === 2) {
      router.push("/individualsolution2");
    }
  };

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

  useEffect(() => {
    if (selectedCard !== null) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const featureId = Number.parseInt(entry.target.getAttribute("data-feature-id") || "0")
              setVisibleFeatures((prev) => new Set([...prev, featureId]))
            }
          })
        },
        { threshold: 0.1, rootMargin: "50px" },
      )

      Object.values(featureCardRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref)
      })

      return () => observer.disconnect()
    }
  }, [selectedCard])

  const handleCardClick = (cardId: number) => {
    // Only allow clicks on card 1 and 2
    if (cardId === 1 || cardId === 2) {
      setSelectedCard(cardId)
      setVisibleFeatures(new Set())
      
      setTimeout(() => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  const currentFeatures = selectedCard === 1 ? orchestraFlowFeatures : netScopeFeatures
  const currentTitle = selectedCard === 1 ? "OrchestraFlow" : "NetScope Vision"

  return (
    <section ref={containerRef} className="w-full bg-[#212c3b]">
      {/* Showcase Cards Section */}
      <div className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide">Our Platforms</h2>
            <div className="w-24 h-px bg-white/30 mx-auto mt-6 md:mt-8"></div>
          </div>

          {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  {cards.map((card, index) => (
    <div
      key={card.id}
      ref={(el) => {
        if (el) cardRefs.current[card.id] = el
      }}
      data-card-id={card.id}
      onClick={() => handleCardClick(card.id)}
      className={`flex flex-col items-center transform transition-all duration-700 ease-out ${
        visibleCards.has(card.id)
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-[30px]"
      }`}
      style={{
        transitionDelay: visibleCards.has(card.id)
          ? `${index * 120}ms`
          : "0ms",
      }}
    >
      {/* Card Container */}
      <div
        className={`w-full aspect-square mb-4 md:mb-6 rounded-2xl overflow-hidden relative group ${
          card.id === 1 || card.id === 2
            ? "cursor-pointer"
            : "cursor-default opacity-60"
        }`}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-800/40 to-blue-950/50"></div>

        {/* Local Icon Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
           src={card.icon}
            alt={card.label}
            className="w-24 h-24 md:w-32 md:h-32 object-contain
                       drop-shadow-xl group-hover:drop-shadow-2xl
                       transition-all duration-300
                       group-hover:scale-110"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Label */}
      <p className="text-sm md:text-base font-medium text-white/90 text-center tracking-wide">
        {card.label}
      </p>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Features Section - Only show when a card is selected */}
      {selectedCard !== null && (
        <div ref={featuresRef} className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 md:mb-20 flex flex-col items-center">
              <h2 className="text-base md:text-lg font-medium text-white/80 tracking-wide mb-6 md:mb-8">
                {currentTitle}
              </h2>
              <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {currentFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  ref={(el) => {
                    if (el) featureCardRefs.current[feature.id] = el
                  }}
                  data-feature-id={feature.id}
                  className={`transform transition-all duration-700 ease-out ${
                    visibleFeatures.has(feature.id)
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : "opacity-0 translate-x-[-20px] translate-y-[20px]"
                  }`}
                  style={{
                    transitionDelay: visibleFeatures.has(feature.id) ? `${index * 100}ms` : "0ms",
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
              <button onClick={handleClick} className="px-8 md:px-10 py-3 md:py-3 border border-white/40 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 group">
                learn more
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}