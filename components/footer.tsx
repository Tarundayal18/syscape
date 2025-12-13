
export default function Footer() {
  const footerLinks = {
    platform: ["Features", "Testimonials", "Pricing", "Demo"],
    company: ["About Us", "Blog", "Blog Details", "Contact"],
    resources: ["Privacy Policy", "Terms and Conditions", "Changelog", "Error 404"],
  }

  return (
    <footer className="w-full relative overflow-hidden bg-[#212c3b]">

      {/* ⭐ GRADIENT FROM BOTTOM UPWARD */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#6ea7ee]/90 to-transparent backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10">
        <div className="w-full px-4 pt-12 md:pt-20 pb-10 md:pb-16">
          <div className="max-w-7xl mx-auto">

            {/* GRID SECTION */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32">

              {/* Platform */}
              <div className="col-span-1">
                <h3 className="text-white font-medium mb-6 md:mb-8 text-sm md:text-base lg:text-lg">Platform</h3>
                <ul className="space-y-3 md:space-y-4">
                  {footerLinks.platform.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-1">
                <h3 className="text-white font-medium mb-6 md:mb-8 text-sm md:text-base lg:text-lg">Company</h3>
                <ul className="space-y-3 md:space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="col-span-1">
                <h3 className="text-white font-medium mb-6 md:mb-8 text-sm md:text-base lg:text-lg">Resources</h3>
                <ul className="space-y-3 md:space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social + Desc */}
              <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-6">

                <div className="flex gap-4 md:gap-5">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                  Start uncovering insights, predicting trends, and collaborating smarter — all in one powerful platform.
                </p>
              </div>
            </div>
          </div>

          {/* ⭐ FULL WIDTH LOGO */}
         <div className="w-full overflow-hidden flex justify-center relative">
  <img
    src="/logo011.png"
    alt="Datacore"
    className="
      w-full 
      max-w-6xl 
      h-auto
      object-contain
      opacity-90 
      hover:opacity-30 
      transition-opacity
      px-4 sm:px-0
    "
    style={{
      maskImage: 'linear-gradient(to top, transparent 20%, black 100%)',
      WebkitMaskImage: 'linear-gradient(to top, transparent 20%, black 100%)'
    }}
  />
</div>



          {/* Divider */}
          <div className="w-full flex justify-center mb-6 md:mb-12 -translate-y-3 md:-translate-y-10 px-4">
            <div className="w-full max-w-6xl border-t border-[#9aa6bb]/60"></div>
          </div>

          {/* Footer bottom */}
          <div className="max-w-6xl mx-auto px-4">
            {/* <p className="font-medium">SINCE. 2025</p> */}
            <p className="
  text-center 
  md:text-end 
  text-xs 
  sm:text-sm 
  md:text-base 
  leading-relaxed
">
              All Rights Reserved – SYSCAPE IT SOLUTIONS PRIVATE LIMITED
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}