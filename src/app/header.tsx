export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D2CFC8]/30 h-[70px]">
      <nav className="max-w-7xl mx-auto    lg:px-8 h-full flex items-center justify-between overflow-hidden">
        <div className="flex-shrink-0">
          <img
            src="https://res.cloudinary.com/diml90c1y/image/upload/v1761520947/1_Transparent_Image_dq1uba.png"
            alt="Brand Logo"
            className="h-32  lg:h-36  w-auto object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
          <li>
            <a href="#home" className="text-[#1A1A1A] hover:text-[#EB2027] transition-colors duration-300 font-light">
              Home
            </a>
          </li>
          <li>
            <a href="#collection" className="text-[#1A1A1A] hover:text-[#EB2027] transition-colors duration-300 font-light">
              Collection
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#1A1A1A] hover:text-[#EB2027] transition-colors duration-300 font-light">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#1A1A1A] hover:text-[#EB2027] transition-colors duration-300 font-light">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden text-[#1A1A1A]">
          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
