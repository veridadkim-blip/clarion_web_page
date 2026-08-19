import React, { useState, useEffect } from 'react'
import WaveCanvas from './WaveCanvas'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07152B] text-white pt-28 lg:pt-32 pb-10"
    >
      {/* 1. Background Video / WaveCanvas / Poster Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {!prefersReducedMotion && !hasVideoError && (
          <>
            {/* Desktop Video Source (1920x1080) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/clarion-wave-desktop.jpg"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setHasVideoError(true)}
              className="hidden md:block w-full h-full object-cover object-center lg:object-right transition-opacity duration-1000"
            >
              <source src="/videos/clarion-wave-desktop.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video Source (1080x1920) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/clarion-wave-mobile.jpg"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setHasVideoError(true)}
              className="md:hidden w-full h-full object-cover object-center transition-opacity duration-1000"
            >
              <source src="/videos/clarion-wave-mobile.mp4" type="video/mp4" />
            </video>
          </>
        )}

        {/* Fallback Motion WaveCanvas (Used if video is loading/missing/errored or reduced motion) */}
        {(!isVideoLoaded || hasVideoError || prefersReducedMotion) && (
          <WaveCanvas />
        )}

        {/* Static Fallback Poster Background Layer */}
        <div
          className={`absolute inset-0 bg-cover bg-center lg:bg-right transition-opacity duration-1000 pointer-events-none ${
            isVideoLoaded && !hasVideoError && !prefersReducedMotion ? 'opacity-0' : 'opacity-40'
          }`}
          style={{ backgroundImage: 'url("/images/clarion-wave-desktop.jpg")' }}
        />
      </div>

      {/* 2. Precision Gradient Overlay (Left Deep Navy Dark Margin -> Right Wave Details) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07152B] via-[#07152B]/85 to-transparent z-10 pointer-events-none" />

      {/* Main Horizontal Gradient Overlay: Left 0-40% Deep Navy (0.88) -> Center 40-70% Translucent -> Right Wave details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,21,43,0.92)_0%,rgba(7,21,43,0.85)_40%,rgba(7,21,43,0.40)_75%,rgba(7,21,43,0.05)_100%)] z-10 pointer-events-none" />

      {/* Mobile Vertical Gradient Protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/75 to-transparent md:hidden z-10 pointer-events-none" />

      {/* 3. Hero Main Content Container (LEFT aligned, Visual 70-80% / Text 20-30%) */}
      <div className="container-main relative z-20 flex-1 flex flex-col justify-center py-8">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8 text-left">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 bg-[#37B7FF]/10 px-3.5 py-1.5 rounded-full border border-[#37B7FF]/25">
            <span className="text-xs font-mono font-bold tracking-widest text-[#37B7FF] uppercase">
              CLARION · AI DATA CLOUD PLATFORM
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
              <span className="block text-white">복잡한 기술을,</span>
              <span className="block text-[#37B7FF] pt-1">명확한 실행으로.</span>
            </h1>
          </div>

          {/* English Sub Message */}
          <div className="pt-2">
            <div className="w-12 h-1 bg-[#37B7FF] mb-3 rounded-full" />
            <p className="text-base sm:text-xl font-mono text-[#37B7FF] font-semibold tracking-wide">
              Technology for Clearer Decisions.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1265E5] text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>사업영역 살펴보기</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-base backdrop-blur-md border border-white/30 rounded-xl transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
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
          <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5 shadow-sm">
            <div className="w-1 h-2 rounded-full bg-[#37B7FF] animate-bounce" />
          </div>
          <span>SCROLL STORYTELLING</span>
        </a>
      </div>
    </section>
  )
}

