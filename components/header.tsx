// "use client"

// import { useState } from "react"
// import Link from "next/link"

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#3d4a62]/90 to-transparent backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 flex-shrink-0">
//             <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
//             </svg>
//             <span className="text-lg sm:text-xl font-bold text-white hidden sm:inline">syscape</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
//             <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Home
//             </Link>
//             <Link href="about" className="text-sm text-gray-300 hover:text-white transition-colors">
//               About
//             </Link>
//             <Link href="/industries" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Industries
//             </Link>
//             <Link href="/solution" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Solutions
//             </Link>
//             <Link href="casestudy" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Case Studies
//             </Link>
//             <Link href="contact" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Contact
//             </Link>
//           </nav>

//           {/* CTA Button - Desktop */}
//           {/* <div className="hidden md:block">
//             <button className="px-6 py-2 bg-[#4a5f8f] hover:bg-[#556a9d] text-white rounded-lg transition-colors text-sm font-medium">
//               Get Started
//             </button>
//           </div> */}

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <nav className="md:hidden mt-4 flex flex-col gap-4">
//             <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Home
//             </Link>
//             <Link href="about" className="text-sm text-gray-300 hover:text-white transition-colors">
//               About
//             </Link>
//             <Link href="/industries" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Industries
//             </Link>
//             <Link href="/solution" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Solutions
//             </Link>
//             <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Case Studies
//             </Link>
//             <Link href="contact" className="text-sm text-gray-300 hover:text-white transition-colors">
//               Contact
//             </Link>
//             {/* <button className="w-full px-4 py-2 bg-[#4a5f8f] hover:bg-[#556a9d] text-white rounded-lg transition-colors text-sm font-medium">
//               Get Started
//             </button> */}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }






// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#3d4a62]/90 to-transparent backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//         <div className="flex items-center justify-between">
          
//           {/* LOGO */}
//           <div className="flex items-center gap-2 flex-shrink-0">
//             <Image
//               src="/Syscape/logo-01.webp"   // 👉 apna logo add kare (public/logo.png)
//               width={100}
//               height={100}
//               alt="Syscape Logo"
//               className="w-8 h-8 sm:w-30 sm:h-30"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/about" className="nav-link">About</Link>
//             <Link href="/industries" className="nav-link">Industries</Link>
//             <Link href="/solution" className="nav-link">Solutions</Link>
//             <Link href="/casestudy" className="nav-link">Case Studies</Link>
//             <Link href="/contact" className="nav-link">Contact</Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
//           }`}
//         >
//           <nav className="flex flex-col gap-4 pb-4">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/about" className="nav-link">About</Link>
//             <Link href="/industries" className="nav-link">Industries</Link>
//             <Link href="/solution" className="nav-link">Solutions</Link>
//             <Link href="/casestudy" className="nav-link">Case Studies</Link>
//             <Link href="/contact" className="nav-link">Contact</Link>
//           </nav>
//         </div>

//       </div>

//       {/* Tailwind shortcut for cleaner code */}
//       <style jsx>{`
//         .nav-link {
//           font-size: 0.9rem;
//           color: #d1d5db;
//           transition: color 0.2s ease;
//         }
//         .nav-link:hover {
//           color: white;
//         }
//       `}</style>
//     </header>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#3d4a62]/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 flex-shrink-0 translate-y-2">
            <Image
              src="/logo011.png"
              width={150}
              height={150}
              alt="Syscape Logo"
              className="w-20 h-7 sm:w-30 sm:h-10"
            />
          </div>

          {/* Desktop Navigation (Right aligned) */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/industries" className="nav-link">Industries</Link>
            <Link href="/solution" className="nav-link">Platforms</Link>
            <Link href="/casestudy" className="nav-link">Case Studies</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-5 pb-4">
            <Link href="/" className="nav-link-mobile">Home</Link>
            <Link href="/about" className="nav-link-mobile">About</Link>
            <Link href="/industries" className="nav-link-mobile">Industries</Link>
            <Link href="/solution" className="nav-link-mobile">Platforms</Link>
            <Link href="/casestudy" className="nav-link-mobile">Case Studies</Link>
            <Link href="/contact" className="nav-link-mobile">Contact</Link>
          </nav>
        </div>

      </div>

      {/* Tailwind shortcut */}
      <style jsx>{`
        .nav-link {
          font-size: 1rem;
          color: #d1d5db;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: white;
        }

        .nav-link-mobile {
          font-size: 1.1rem;
          color: #d1d5db;
          transition: color 0.2s ease;
        }
        .nav-link-mobile:hover {
          color: white;
        }
      `}</style>
    </header>
  )
}
