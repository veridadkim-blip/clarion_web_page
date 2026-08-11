import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
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
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07152B] text-white pt-28 lg:pt-32 pb-8"
    >
      {/* 1. Background Video / Fallback Poster Container (Desktop & Mobile Local Sources) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {!prefersReducedMotion && (
          <>
            {/* Desktop Video (Hidden on Mobile) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/clarion-wave-desktop.jpg"
              onLoadedData={() => setIsVideoLoaded(true)}
              className="hidden md:block w-full h-full object-cover object-center lg:object-right scale-105 transition-opacity duration-1000"
            >
              <source src="/videos/clarion-wave-desktop.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video (Hidden on Desktop) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/clarion-wave-mobile.jpg"
              onLoadedData={() => setIsVideoLoaded(true)}
              className="md:hidden w-full h-full object-cover object-center transition-opacity duration-1000"
            >
              <source src="/videos/clarion-wave-mobile.mp4" type="video/mp4" />
            </video>
          </>
        )}

        {/* Fallback Poster Background if Video Not Present */}
        <div
          className={`absolute inset-0 bg-cover bg-center lg:bg-right transition-opacity duration-1000 ${
            isVideoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: 'url("/images/clarion-wave-desktop.jpg")' }}
        />
      </div>

      {/* 2. Precision Gradient Overlay (Left Deep Navy Dark Margin -> Right Wave Details) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#07152B] via-[#07152B]/85 to-transparent z-10 pointer-events-none" />

      {/* Main Horizontal Gradient Overlay: Left 0-35% Deep Navy (0.94) -> Center 35-70% Translucent -> Right 70-100% Wave detail */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,21,43,0.95)_0%,rgba(7,21,43,0.90)_35%,rgba(7,21,43,0.45)_70%,rgba(7,21,43,0.08)_100%)] z-10 pointer-events-none" />

      {/* Mobile Vertical Gradient Protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/70 to-transparent md:hidden z-10 pointer-events-none" />

      {/* 3. Hero Main Content Container */}
      <div className="container-main relative z-20 flex-1 flex flex-col justify-center py-6">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8 text-left">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#37B7FF] uppercase">
              CLARION · AI DATA CLOUD PLATFORM
            </span>
          </div>

          {/* Main Headline (Both lines explicitly visible: line 1 white, line 2 bright blue) */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-white">
              <span className="block text-white">복잡한 기술을,</span>
              <span className="block text-[#37B7FF] pt-1">명확한 실행으로.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-lg lg:text-xl text-[#F4F8FC]/90 font-normal leading-relaxed max-w-xl">
            금융·보험 IT의 실행력 위에 AI, Cloud, Data를 연결하여
            기업의 더 나은 판단과 책임 있는 실행을 만듭니다.
          </p>

          {/* English Sub Message */}
          <div className="pt-1">
            <div className="w-8 h-0.5 bg-[#37B7FF]/60 mb-2" />
            <p className="text-sm font-mono text-[#37B7FF] font-semibold tracking-wide">
              Technology for Clearer Decisions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#business"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1265E5] text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>사업영역 살펴보기</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold text-base backdrop-blur-md border border-white/30 rounded-xl transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>프로젝트 문의하기</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="container-main relative z-20 pb-4 hidden sm:flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-white/70 hover:text-[#37B7FF] transition-colors text-[10px] font-mono tracking-widest uppercase"
          aria-label="아래 섹션으로 스크롤"
        >
          <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5 shadow-sm">
            <div className="w-1 h-2 rounded-full bg-[#37B7FF] animate-bounce" />
          </div>
          <span>SCROLL</span>
        </a>
      </div>
    </section>
  )
}
