// export default function Contact() {
//   return (
//     <section className="w-full bg-black py-20 px-4 md:py-32">
//       <div className="max-w-2xl mx-auto">
//         <div className="border border-gray-700 rounded-3xl p-8 md:p-12 bg-black/50">
//           <div className="mb-8">
//             <button className="px-6 py-2 border border-gray-600 text-white rounded-full text-sm md:text-base hover:border-gray-500 transition-colors">
//               CONTACT US
//             </button>
//           </div>

//           <form className="space-y-8">
//             <div>
//               <label className="block text-white font-medium mb-4">Name:</label>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-600 pb-4 focus:outline-none focus:border-gray-400 transition-colors text-sm md:text-base"
//               />
//             </div>

//             <div>
//               <label className="block text-white font-medium mb-4">Message:</label>
//               <textarea
//                 placeholder=""
//                 rows={6}
//                 className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-600 pb-4 focus:outline-none focus:border-gray-400 transition-colors text-sm md:text-base resize-none"
//               />
//             </div>

//             <div className="flex justify-center pt-4">
//               <button
//                 type="submit"
//                 className="px-8 py-2 md:px-10 md:py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-colors text-sm md:text-base font-medium"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }






// export default function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <section className="w-full bg-black py-20 px-4 md:py-32">
//       <div className="max-w-2xl mx-auto">
//         <div className="border border-gray-700 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#495f8f] to-black">
//           <div className="mb-8">
//             <button className="px-6 py-2 border border-gray-600 text-white rounded-full text-sm md:text-base hover:border-gray-500 transition-colors">
//               CONTACT US
//             </button>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <label className="block text-white font-medium mb-4">Name:</label>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-600 pb-4 focus:outline-none focus:border-gray-400 transition-colors text-sm md:text-base"
//               />
//             </div>

//             <div>
//               <label className="block text-white font-medium mb-4">Message:</label>
//               <textarea
//                 placeholder=""
//                 rows={6}
//                 className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-600 pb-4 focus:outline-none focus:border-gray-400 transition-colors text-sm md:text-base resize-none"
//               />
//             </div>

//             <div className="flex justify-center pt-4">
//               <button
//                 onClick={handleSubmit}
//                 className="px-8 py-2 md:px-10 md:py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-colors text-sm md:text-base font-medium"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black px-4">
      <div
        className="
        w-full max-w-3xl
        rounded-2xl border border-gray-600 
        px-12 py-8
        bg-gradient-to-b from-black to-[#192236] shadow-xl
      "
      >
        
        {/* CONTACT US BUTTON */}
        <div className="mb-8">
          <button className="px-6 py-2 border border-white rounded-lg text-white">
            CONTACT US
          </button>
        </div>

        {/* NAME FIELD */}
        <label className="text-white text-lg">Name:</label>
        <input
          type="text"
          className="
            w-full mt-1 mb-6 bg-transparent border-b border-gray-500 
            text-white outline-none py-2
          "
        />

        {/* MESSAGE FIELD */}
        <label className="text-white text-lg">Message:</label>
        <textarea
          className="
            w-full mt-1 mb-8 bg-transparent border-b border-gray-500 
            text-white outline-none py-2
          "
          rows={3}
        ></textarea>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center">
          <button className="px-10 py-2 border border-white rounded-lg text-white">
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}
