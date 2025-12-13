

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
//           <div className="flex items-center gap-2 flex-shrink-0 translate-y-2">
//             <Image
//               src="/logo011.png"
//               width={150}
//               height={150}
//               alt="Syscape Logo"
//               className="w-20 h-7 sm:w-30 sm:h-10"
//             />
//           </div>

//           {/* Desktop Navigation (Right aligned) */}
//           <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/about" className="nav-link">About</Link>
//             <Link href="/industries" className="nav-link">Industries</Link>
//             <Link href="/solution" className="nav-link">Platforms</Link>
//             <Link href="/casestudy" className="nav-link">Case Studies</Link>
//             <Link href="/contact" className="nav-link">Contact</Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
//           <nav className="flex flex-col gap-5 pb-4">
//             <Link href="/" className="nav-link-mobile">Home</Link>
//             <Link href="/about" className="nav-link-mobile">About</Link>
//             <Link href="/industries" className="nav-link-mobile">Industries</Link>
//             <Link href="/solution" className="nav-link-mobile">Platforms</Link>
//             <Link href="/casestudy" className="nav-link-mobile">Case Studies</Link>
//             <Link href="/contact" className="nav-link-mobile">Contact</Link>
//           </nav>
//         </div>

//       </div>

//       {/* Tailwind shortcut */}
//       <style jsx>{`
//         .nav-link {
//           font-size: 1rem;
//           color: #d1d5db;
//           transition: color 0.2s ease;
//         }
//         .nav-link:hover {
//           color: white;
//         }

//         .nav-link-mobile {
//           font-size: 1.1rem;
//           color: #d1d5db;
//           transition: color 0.2s ease;
//         }
//         .nav-link-mobile:hover {
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
          <div className="flex-shrink-0 translate-y-2">
            <Image
              src="/hero/logo011.png"
              width={190}
              height={30}
              alt="Syscape Logo"
              className="h-8 w-auto sm:h-12"
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/industries" className="nav-link">
              Industries
            </Link>
            <Link href="/solution" className="nav-link">
              Platforms
            </Link>
            <Link href="/casestudy" className="nav-link">
              Case Studies
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              <Link href="/" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/industries" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                Industries
              </Link>
              <Link href="/solution" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                Platforms
              </Link>
              <Link href="/casestudy" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link href="/contact" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          font-size: 1rem;
          color: #d1d5db;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: white;
        }

        .nav-link-mobile {
          font-size: 1.125rem;
          color: #d1d5db;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          display: block;
        }
        .nav-link-mobile:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </header>
  )
}
