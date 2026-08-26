import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: '회사소개', href: '#about' },
  { label: '사업 포트폴리오', href: '#portfolio' },
  { label: 'Core Business', href: '#core-business' },
  { label: 'Growth Tech', href: '#growth-technology' },
  { label: '프로젝트', href: '#track-record' },
  { label: 'R&D / IP', href: '#rnd-ip' },
  { label: 'Healthcare AI', href: '#healthcare' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-clarion-line/80 py-3.5'
          : 'bg-gradient-to-b from-[#07152B]/90 via-[#07152B]/60 to-transparent py-5'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between" aria-label="메인 네비게이션">
          {/* Logo: CLARION English Wordmark with dynamic high contrast */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-clarion-blue/50 rounded-lg p-1"
            aria-label="CLARION 홈으로 이동"
          >
            <span
              className={`text-2xl font-extrabold font-mono tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-[#07152B]' : 'text-white'
              }`}
            >
              CLARION
            </span>
          </a>

          {/* Desktop Nav Links (8 Story Flow Links) */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-colors duration-200 py-1 focus:outline-none focus:ring-2 focus:ring-clarion-blue/50 rounded ${
                    isScrolled
                      ? 'text-[#142033] hover:text-[#1265E5]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1265E5] text-white text-xs font-bold rounded-xl shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
            >
              <span>프로젝트 문의하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-clarion-blue/50 ${
              isScrolled ? 'text-[#07152B] hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div
          className={`lg:hidden border-t border-clarion-line/20 mt-3 px-5 py-6 space-y-2.5 shadow-2xl ${
            isScrolled ? 'bg-white text-[#142033]' : 'bg-[#07152B] text-white'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                isScrolled
                  ? 'text-[#142033] hover:bg-slate-100 hover:text-[#1265E5]'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="block text-center mt-4 px-4 py-3.5 bg-[#1265E5] text-white font-bold rounded-xl shadow-md"
          >
            프로젝트 문의하기
          </a>
        </div>
      )}
    </header>
  )
}

