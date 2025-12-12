// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Check } from "lucide-react"

// export default function ContactCTASection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to move beyond conventional ITSM?</h2>

//         <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
//           Discover how OrchestraFlow can immediately deliver measurable efficiency and intelligent operational control.
//         </p>
//         {/* Top line */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
//           {/* Left side - Content */}
//           <div
//             className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//           >
//             <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
//               text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and
//               typesetting industry.
//             </p>
//           </div>

//           {/* Right side - CTA Buttons and Contact */}
//           <div
//             className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             style={{
//               transitionDelay: isVisible ? "100ms" : "0ms",
//             }}
//           >
//             <div className="space-y-6">
//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-900/20 hover:border-gray-400 transition-all">
//                   <span className="font-semibold">Email Us</span>
//                   <Check className="w-5 h-5" />
//                 </button>
//                 <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-900/20 hover:border-gray-400 transition-all">
//                   <span className="font-semibold">Call Us</span>
//                   <Check className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Contact info */}
//               <div className="flex flex-col sm:flex-row gap-8 pt-4">
//                 <div>
//                   <p className="text-gray-400 text-sm mb-1">Email</p>
//                   <p className="text-white font-semibold">Lorem@Ipsum.com</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm mb-1">Phone</p>
//                   <p className="text-white font-semibold">+91 00000 00000</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-12" />
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

export default function ContactCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openForm, setOpenForm] = useState<null | "datasheet" | "brochure">(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Replace with your API or email service call
    console.log("Form submitted")

    // Fake download trigger
    const file =
      openForm === "datasheet"
        ? "/downloads/DataSheet.pdf"
        : "/downloads/Brochure.pdf"

    const link = document.createElement("a")
    link.href = file
    link.download = file.split("/").pop() || "download.pdf"
    link.click()

    setOpenForm(null)
  }

  return (
    <>
      <section ref={sectionRef} className="w-full bg-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to move beyond conventional ITSM?
          </h2>

          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
            Discover how OrchestraFlow can immediately deliver measurable efficiency and intelligent operational control.
          </p>

          {/* Top line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side */}
            <div className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            {/* Right side */}
            <div
              className={`flex flex-col justify-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            >
              <div className="space-y-6">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setOpenForm("datasheet")}
                    className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-900/20 hover:border-gray-400 transition-all"
                  >
                    Download Data Sheet
                  </button>

                  <button
                    onClick={() => setOpenForm("brochure")}
                    className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-900/20 hover:border-gray-400 transition-all"
                  >
                    Download Brochure
                  </button>
                </div>

                {/* Contact info */}
                {/* <div className="flex flex-col sm:flex-row gap-8 pt-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold">Lorem@Ipsum.com</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold">+91 00000 00000</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-12" />
        </div>
      </section>

      {/* Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center px-4 z-50">
          <div className="bg-[#111] p-6 md:p-8 rounded-xl max-w-md w-full border border-gray-700 relative">
            <button
              onClick={() => setOpenForm(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold mb-4">
              Download {openForm === "datasheet" ? "Data Sheet" : "Brochure"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-gray-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200"
              >
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
