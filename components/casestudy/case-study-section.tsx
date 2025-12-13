// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// interface CaseStudy {
//   id: number
//   title: string
// }

// const caseStudies: CaseStudy[] = [
//   { id: 1, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//   { id: 2, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//   { id: 3, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
// ]

// export default function CaseStudySection() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [visibleCards, setVisibleCards] = useState<number[]>([])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
//             setVisibleCards((prev) => [...new Set([...prev, cardIndex])])
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const cards = sectionRef.current?.querySelectorAll("[data-index]")
//     cards?.forEach((card) => observer.observe(card))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="w-full bg-black py-20 px-4 md:px-8 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         {/* Grid of 3 cards */}
//         <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//           {caseStudies.map((study, index) => (
//             <div
//               key={study.id}
//               data-index={index}
//               className={`flex flex-col gap-4 transition-all duration-500 ${
//                 visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{
//                 transitionDelay: `${index * 100}ms`,
//               }}
//             >
//               {/* Image container */}
//               <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5">
//                 <Image src="/tech-office-professional-working.jpg" alt="Case study" fill className="object-cover" />
//               </div>

//               {/* Description */}
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed">{study.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface CaseStudy {
  title: string
  slug: string
}

const caseStudies: CaseStudy[] = [
  { 
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    slug: "printing-typesetting-case-study"
  },
  { 
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    slug: "digital-transformation-project"
  },
  { 
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    slug: "enterprise-solution-deployment"
  },
]

export default function CaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const router = useRouter()

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
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleCardClick = () => {
    router.push(`/individualcasestudy`)
  }

  return (
    <section className="w-full bg-[#212c3b] py-20 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Grid of 3 cards */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              data-index={index}
              onClick={() => handleCardClick()}
              className={`flex flex-col gap-4 transition-all duration-500 cursor-pointer group ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 group-hover:scale-105 transition-transform duration-300">
                <Image src="/tech-office-professional-working.jpg" alt="Case study" fill className="object-cover" />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                {study.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}