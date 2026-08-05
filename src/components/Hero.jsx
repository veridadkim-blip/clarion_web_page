import React from 'react'
import { ArrowRight } from 'lucide-react'
import WaveCanvas from './WaveCanvas'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-clarion-navy text-white pt-24 pb-16"
    >
      {/* 1. Canvas Animation: Clarity Wave */}
      <WaveCanvas />

      {/* 2. Soft Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-clarion-navy via-clarion-navy/85 to-transparent z-10 pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="container-main relative z-20 py-8 lg:py-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
            <span className="w-2 h-2 rounded-full bg-clarion-cyan" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-clarion-light uppercase">
              CLARION · AI DATA CLOUD PLATFORM
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.18] text-white">
              복잡한 기술을,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clarion-cyan via-white to-blue-200">
                명확한 실행으로.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-clarion-light/90 font-normal leading-relaxed max-w-2xl">
            금융·보험 IT의 실행력 위에 AI, Cloud, Data를 연결하여
            기업의 더 나은 판단과 책임 있는 실행을 만듭니다.
          </p>

          {/* English Sub Message */}
          <p className="text-sm font-mono text-clarion-cyan/90 font-semibold tracking-wide">
            Technology for Clearer Decisions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#business"
              className="btn-primary-clarion"
            >
              <span>사업영역 살펴보기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="btn-secondary-clarion"
            >
              <span>프로젝트 문의하기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
