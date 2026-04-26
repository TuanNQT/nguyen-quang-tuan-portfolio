// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { navItems, profile } from '../data/portfolio';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

interface ThemeSwitchProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  compact?: boolean;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, onToggleTheme, compact = false }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`relative inline-flex items-center rounded-full border transition-colors duration-300 ${
        compact ? 'w-14 h-8 p-1' : 'w-16 h-9 p-1'
      } ${
        isDark
          ? 'bg-slate-800 border-slate-600'
          : 'bg-white border-slate-300'
      }`}
    >
      <span className="absolute left-2 text-amber-400">
        <svg className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2.5zm0 10.75a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm6-2.5a.75.75 0 01.75.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h-.75zm-12 0a.75.75 0 010 1.5H2.5a.75.75 0 010-1.5H4zm10.607-6.107a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.061l-1.06-1.06a.75.75 0 010-1.06zM4.333 14.667a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.061l-1.06-1.06a.75.75 0 010-1.061zm11.394 1.06a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06zM5.393 4.333a.75.75 0 10-1.06 1.06l1.06 1.06a.75.75 0 001.06-1.06l-1.06-1.06z" />
        </svg>
      </span>
      <span className="absolute right-2 text-blue-200">
        <svg className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a.75.75 0 00-.95-.95A9.5 9.5 0 1018.243 14.243a.75.75 0 00-.95-.95z" />
        </svg>
      </span>
      <span
        className={`absolute rounded-full shadow-md transition-transform duration-300 ${
          compact ? 'w-6 h-6' : 'w-7 h-7'
        } ${
          isDark
            ? 'translate-x-[24px] bg-slate-100'
            : 'translate-x-0 bg-white'
        }`}
      />
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-white dark:bg-slate-900 shadow-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700 dark:text-blue-400 transition-transform duration-300 hover:scale-105">
          {profile.name}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 relative group"
                onClick={handleNavClick}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} compact />
          <button
            className="p-2 rounded-md text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 transform hover:scale-110"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden bg-white dark:bg-slate-900 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 py-2 shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:translate-x-2 py-1"
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
