// export default function CTASection() {
//   return (
//     <section className="relative w-full bg-black py-20 md:py-32 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 ">
//           {/* Left side text */}
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight flex-1 text-balance">
//             Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing dummy text of the printing
//           </h2>

//           {/* Right side button */}
//           <div className="flex-shrink-0 w-full md:w-auto">
//             <button className="w-full md:w-auto px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
//               Contact Us →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function CTASection() {
  return (
    <section className="relative w-full bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left side text - 40% width */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance md:w-[60%]">
            Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing dummy text of the printing
          </h2>

          {/* Right side button */}
          <div className="flex-shrink-0 w-full md:w-auto ml-auto">
            <button className="w-full md:w-auto px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
              Contact Us →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
