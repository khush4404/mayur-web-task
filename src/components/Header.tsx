export function Header() {
  return (
    <header className="w-full bg-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto py-[11px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Company Logo" className="h-[89.75px] w-[293px] mr-3" />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-[90px]">
            <a href="#home" className="text-white hover:text-amber-500 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">
              About us
            </a>
            <a href="#services" className="text-gray-300 hover:text-amber-500 transition-colors">
              Our Services
            </a>
            <a href="#statistics" className="text-gray-300 hover:text-amber-500 transition-colors">
              Company Profile
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-amber-500 transition-colors">
              Career
            </a>
            <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}