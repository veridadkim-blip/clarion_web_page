import React, { useState, useEffect } from 'react'
import WaveCanvas from './WaveCanvas'

export default function Hero() {
  const [isDesktopLoaded, setIsDesktopLoaded] = useState(false)
  const [hasDesktopError, setHasDesktopError] = useState(false)

  const [isMobileLoaded, setIsMobileLoaded] = useState(false)
  const [hasMobileError, setHasMobileError] = useState(false)

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const isVideoActive = !prefersReducedMotion && (isDesktopLoaded || isMobileLoaded)

  return (
    <section
      id="hero"
      className="fullscreen-section relative overflow-hidden bg-[#07152B] text-white pt-24 lg:pt-[136px] pb-6 lg:pb-8 flex flex-col justify-between"
    >
      {/* 1. Background Video / WaveCanvas / Poster Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {!prefersReducedMotion && (
          <>
            {/* Desktop Video Source (1920x1080) */}
            {!hasDesktopError && (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/clarion-wave-desktop.jpg"
                onLoadedData={() => setIsDesktopLoaded(true)}
                onError={() => setHasDesktopError(true)}
                className={`hidden md:block w-full h-full object-cover object-center lg:object-right transition-opacity duration-1000 ${
                  isDesktopLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src="/videos/clarion-wave-desktop.mp4" type="video/mp4" />
              </video>
            )}

            {/* Mobile Video Source (1080x1920) */}
            {!hasMobileError && (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/clarion-wave-mobile.jpg"
                onLoadedData={() => setIsMobileLoaded(true)}
                onError={() => setHasMobileError(true)}
                className={`md:hidden w-full h-full object-cover object-[72%_40%] scale-[1.10] origin-center transition-opacity duration-1000 ${
                  isMobileLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src="/videos/clarion-wave-mobile.mp4" type="video/mp4" />
              </video>
            )}
          </>
        )}

        {/* Fallback Motion WaveCanvas */}
        {(!isVideoActive || prefersReducedMotion) && (
          <WaveCanvas />
        )}

        {/* Static Fallback Poster Layer */}
        <div
          className={`hidden md:block absolute inset-0 bg-cover bg-center lg:bg-right transition-opacity duration-1000 pointer-events-none ${
            isDesktopLoaded && !hasDesktopError && !prefersReducedMotion ? 'opacity-0' : 'opacity-60'
          }`}
          style={{ backgroundImage: 'url("/images/clarion-wave-desktop.jpg")' }}
        />

        <div
          className={`md:hidden absolute inset-0 bg-cover transition-opacity duration-1000 pointer-events-none ${
            isMobileLoaded && !hasMobileError && !prefersReducedMotion ? 'opacity-0' : 'opacity-70'
          }`}
          style={{
            backgroundImage: 'url("/images/clarion-wave-mobile.jpg")',
            backgroundPosition: '72% 40%',
            transform: 'scale(1.10)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* 2. Precision Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07152B] via-[#07152B]/85 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,21,43,0.96)_0%,rgba(7,21,43,0.90)_38%,rgba(7,21,43,0.35)_55%,rgba(7,21,43,0.0)_75%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/80 to-transparent md:hidden z-10 pointer-events-none" />

      {/* 3. Hero Main Content Container */}
      <div className="container-main relative z-20 flex-1 flex flex-col justify-center py-6 lg:py-8">
        <div className="max-w-xl lg:max-w-[560px] xl:max-w-[620px] space-y-5 sm:space-y-6 lg:space-y-8 text-left lg:-translate-x-[140px]">
          {/* Top Label with Official Clarion Symbol */}
          <div className="inline-flex items-center gap-2.5 bg-[#37B7FF]/10 px-3.5 py-1.5 rounded-full border border-[#37B7FF]/25">
            <img
              src="/brand/clarion-symbol.png"
              alt=""
              className="h-[16px] sm:h-[18px] w-auto object-contain shrink-0"
            />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#37B7FF] uppercase">
              CLARION · AI DATA CLOUD PLATFORM
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
              <span className="block text-white">복잡한 기술을,</span>
              <span className="block text-[#37B7FF] pt-1">명확한 실행으로.</span>
            </h1>
          </div>

          {/* English Sub Message */}
          <div className="pt-1 sm:pt-2">
            <div className="w-10 sm:w-12 h-1 bg-[#37B7FF] mb-2 sm:mb-3 rounded-full" />
            <p className="text-xs sm:text-lg md:text-xl font-mono text-[#37B7FF] font-semibold tracking-normal sm:tracking-wide whitespace-nowrap sm:whitespace-normal">
              Technology for Clearer Decisions.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#1265E5] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>사업영역 살펴보기</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/30 rounded-xl transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>프로젝트 문의하기</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Scroll Storytelling Indicator */}
      <div className="container-main relative z-20 pb-2 hidden sm:flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-[#37B7FF] transition-colors text-[10px] font-mono tracking-widest uppercase"
          aria-label="아래 섹션으로 스크롤"
        >
          <span>SCROLL DOWN</span>
          <div className="w-4 h-7 rounded-full border-2 border-white/30 flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-[#37B7FF] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
