
// import Image from "next/image";
// import { Zap, Shield, Layers, Globe } from 'lucide-react';

// export default function Products() {
//   return (
//     <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">
//             The Products/Platforms
//           </p>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
//             What is Lorem Ipsum?
//           </h2>
//           <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         {/* Main Container */}
//         <div className="relative max-w-4xl mx-auto">

//           {/* Center Circle with Patch + Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              
//               {/* Border Circle */}
//               <div className="absolute inset-0 border-2 border-gray-600 rounded-full overflow-hidden">
                
//                 {/* Patch Image (full cover inside circle) */}
//                 <Image
//                   src="/products/patch.png"
//                   alt="Patch"
//                   fill
//                   className="object-cover rounded-full"
//                 />
//               </div>

//               {/* Logo Image in center */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Image
//                   src="/products/logo.png"
//                   alt="Main Logo"
//                   width={60}
//                   height={60}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Connection Lines */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
//             <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600"></div>
//             <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-600"></div>
//           </div>

//           {/* Product Boxes */}
//           <div className="grid grid-cols-2 gap-x-32 gap-y-32 sm:gap-x-40 sm:gap-y-40 md:gap-x-48 md:gap-y-48 py-24 sm:py-32">
            
//             {/* Top Left */}
//             <div className="flex flex-col items-center text-center justify-end">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Top Right */}
//             <div className="flex flex-col items-center text-center justify-end">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Layers className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Bottom Left */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>

//             {/* Bottom Right */}
//             <div className="flex flex-col items-center text-center">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
//                 <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
//               <p className="text-sm sm:text-base text-gray-400 max-w-xs">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { Zap, Shield, Layers, Globe } from 'lucide-react';

export default function Products() {
  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4">
            The Products/Platforms
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What is Lorem Ipsum?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Main Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Center Circle with Patch + Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              
              {/* Border Circle */}
              <div className="absolute inset-0 border-2 border-gray-600 rounded-full overflow-hidden">
                
                {/* Patch Image (full cover inside circle) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <Image
                      src="/products/patch.png"
                      alt="Patch"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Logo Image in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/products/logo.png"
                  alt="Main Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            {/* Horizontal line - split into left and right segments */}
            <div className="absolute top-1/2 left-0 right-1/2 h-px bg-gray-600" style={{ width: 'calc(50% - 8rem)' }}></div>
            <div className="absolute top-1/2 left-1/2 right-0 h-px bg-gray-600 ml-32" style={{ width: 'calc(50% - 8rem)' }}></div>
            
            {/* Vertical line - split into top and bottom segments */}
            <div className="absolute top-0 bottom-1/2 left-1/2 w-px bg-gray-600" style={{ height: 'calc(50% - 8rem)' }}></div>
            <div className="absolute top-1/2 bottom-0 left-1/2 w-px bg-gray-600 mt-32" style={{ height: 'calc(50% - 8rem)' }}></div>
          </div>

          {/* Product Boxes */}
          <div className="grid grid-cols-2 gap-x-32 gap-y-32 sm:gap-x-40 sm:gap-y-40 md:gap-x-48 md:gap-y-48 py-24 sm:py-32">
            
            {/* Top Left */}
            <div className="flex flex-col items-center text-center justify-end">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center text-center justify-end">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Layers className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lorem Ipsum?</h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}