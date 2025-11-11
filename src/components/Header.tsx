// src/components/Header.tsx
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (): void => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "Giới thiệu" },
    { href: "#experience", label: "Kinh nghiệm" },
    { href: "#skills", label: "Kỹ năng" },
    { href: "#contact", label: "Liên hệ" }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-sm py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700 transition-transform duration-300 hover:scale-105">
          Nguyễn Quang Tuấn
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 relative group"
              onClick={handleNavClick}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-48 py-2 shadow-md' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-2 py-1"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;