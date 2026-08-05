import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: '회사소개', href: '#about' },
  { label: '사업영역', href: '#business' },
  { label: '기술·연구개발', href: '#rnd' },
  { label: 'Healthcare AI', href: '#healthcare' },
  { label: '프로젝트', href: '#projects' },
  { label: '문의하기', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-clarion-navy/95 backdrop-blur-md shadow-lg border-b border-clarion-line/10 py-3.5'
          : 'bg-gradient-to-b from-clarion-navy/90 to-transparent py-5'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between" aria-label="메인 네비게이션">
          {/* Logo: CLARION English Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-clarion-cyan/50 rounded-lg p-1"
            aria-label="CLARION 홈으로 이동"
          >
            <span className="text-2xl font-extrabold text-white font-mono tracking-wider">
              CLARION
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-clarion-light/80 hover:text-white transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-clarion-cyan/50 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-clarion-blue text-white text-xs font-bold rounded-xl shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
            >
              <span>문의하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-clarion-cyan/50"
            aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-clarion-navy border-t border-clarion-line/10 mt-3 px-4 py-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-clarion-light font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="block text-center mt-3 px-4 py-3 bg-clarion-blue text-white font-bold rounded-xl"
          >
            문의하기
          </a>
        </div>
      )}
    </header>
  )
}
