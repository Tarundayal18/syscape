// export default function Statistics() {
//   const stats = [
//     { number: "12", suffix: "M+", description: "Lorem Ipsum?" },
//     { number: "15", suffix: "M+", description: "Lorem Ipsum?" },
//     { number: "10", suffix: "M+", description: "Lorem Ipsum?" },
//   ]

//   return (
//     <section className="w-full bg-black py-20 px-4 md:py-32">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">THE PRODUCTS/PLATFORMS</p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What is Lorem Ipsum?</h2>
//           <p className="text-gray-300 text-center max-w-2xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="border border-gray-700 rounded-3xl p-8 md:p-12 bg-black hover:border-gray-600 transition-colors"
//             >
//               <div className="mb-8">
//                 <p className="text-5xl md:text-6xl font-bold">
//                   <span className="text-white">{stat.number}</span>
//                   <span className="text-gray-500">{stat.suffix}</span>
//                 </p>
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{stat.description}</h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


export default function Statistics() {
  const stats = [
    { number: "12", suffix: "M+", description: "Lorem Ipsum?" },
    { number: "15", suffix: "M+", description: "Lorem Ipsum?" },
    { number: "10", suffix: "M+", description: "Lorem Ipsum?" },
  ]

  return (
    <section className="w-full bg-[#212c3b] py-20 px-4 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wide">THE PRODUCTS/PLATFORMS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What is Lorem Ipsum?</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#192236] via-[#0f1823] to-black border border-gray-800 hover:border-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <p className="text-5xl md:text-6xl font-bold">
                    <span className="text-white">{stat.number}</span>
                    <span className=" bg-gradient-to-r 
    from-[oklch(0.43_0.06_255.01)] 
    to-[oklch(0.44_0.05_268.87)] 
    bg-clip-text 
    text-transparent">{stat.suffix}</span>
                  </p>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{stat.description}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}