'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    // { name: 'Contacto', href: '#contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 font-medium relative group cursor-pointer"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
        {mounted && (
          <div
            className="relative group"
            onMouseEnter={() => setThemeMenuOpen(true)}
            onMouseLeave={() => setThemeMenuOpen(false)}
          >
            <div className="flex items-center gap-2 p-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 group-hover:w-auto">
              {/* Icono activo - siempre visible */}
              <button
                onClick={() => setTheme(theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : 'system')}
                className="p-2 rounded-md bg-cyan-500 text-white transition-all duration-300"
                aria-label={`${theme} theme`}
              >
                {theme === 'light' && <Sun size={18} />}
                {theme === 'dark' && <Moon size={18} />}
                {theme === 'system' && <Monitor size={18} />}
              </button>

              {/* Iconos inactivos - aparecen en hover */}
              <div className="flex items-center gap-2 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                {theme !== 'light' && (
                  <button
                    onClick={() => setTheme('light')}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Light theme"
                    title="Light"
                  >
                    <Sun size={18} />
                  </button>
                )}
                {theme !== 'dark' && (
                  <button
                    onClick={() => setTheme('dark')}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Dark theme"
                    title="Dark"
                  >
                    <Moon size={18} />
                  </button>
                )}
                {theme !== 'system' && (
                  <button
                    onClick={() => setTheme('system')}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="System theme"
                    title="System"
                  >
                    <Monitor size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 min-w-50 z-50 border border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          {mounted && (
            <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 mt-2">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setTheme('light')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === 'light'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="Light theme"
                >
                  <Sun size={18} />
                  <span className="text-sm">Light</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="Dark theme"
                >
                  <Moon size={18} />
                  <span className="text-sm">Dark</span>
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === 'system'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="System theme"
                >
                  <Monitor size={18} />
                  <span className="text-sm">System</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
