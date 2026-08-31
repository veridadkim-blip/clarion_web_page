import React, { useState } from 'react'
import {
  Heart,
  Activity,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

const healthJourneySteps = [
  { step: '01', title: '생활건강 문진' },
  { step: '02', title: '상태 이해' },
  { step: '03', title: '생활건강PT' },
  { step: '04', title: '실천 기록' },
  { step: '05', title: '재평가' },
  { step: '06', title: '변화 확인' },
]

export default function HealthcareHighlight() {
  const [activeStep, setActiveStep] = useState(2) // Default step: 03 생활건강PT

  return (
    <section
      id="healthcare"
      className="fullscreen-section bg-[#F2FBF7] text-[#142033] relative overflow-hidden border-b border-clarion-line/60 scroll-mt-[80px]"
    >
      {/* Background Natural Ambient Wave */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,160 Q400,290 900,160 T1900,320"
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="container-main max-w-7xl lg:max-w-[1320px] relative z-10 space-y-3.5 lg:space-y-[16px] pt-24 lg:pt-[132px] pb-4 lg:pb-[16px] my-auto">

        {/* 1. Section Editorial Header (Clean 2-Line Headline, No Orphaned "다.") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-900/10 pb-3 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-emerald-800 font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-emerald-700 pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              HEALTHCARE INNOVATION · HUMAN-CENTERED WELLNESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#142033] leading-[1.2] sm:leading-snug tracking-tight pt-1">
              기술의 마지막은, <br />
              <span className="text-[#1265E5]">사람이어야 합니다.</span>
            </h2>
          </div>

          <div className="space-y-0.5 max-w-md text-left md:text-right">
            <p className="text-sm sm:text-base font-bold text-[#142033] leading-snug">
              AI와 딥테크를 사람의 건강한 삶에 연결합니다.
            </p>
            <p className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
              Technology for Better Living.
            </p>
          </div>
        </div>

        {/* 2. Primary Desktop Composition: LEFT 55% Human Photo Hero / RIGHT 45% HanSaengAI Mobile UI */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-7 items-stretch text-left">

          {/* LEFT 55%: Large Editorial Human Visual (healthcare-office-taichi.jpg) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-4.5 sm:p-5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-emerald-900/10 pb-1.5">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    LIFESTYLE HEALTH · DAILY CARE
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                  NON-MEDICAL WELLNESS
                </span>
              </div>

              {/* Large Human-Centered Real Class Photo */}
              <div className="relative rounded-lg overflow-hidden border border-emerald-600/20 aspect-[16/9.5] group">
                <img
                  src="/images/healthcare-actual-class.jpg"
                  alt="실제 제자리태극권 & 생활건강PT 그룹수업 현장"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded">
                    실제 그룹수업 현장 · 제자리태극권 & 생활건강PT
                  </span>
                  <span className="text-[10px] font-mono text-white/80 hidden sm:inline-block">
                    REAL CLASS EXPERIENCE
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-900/10 flex items-center justify-between text-xs text-emerald-900 font-semibold">
              <span>한생AI: 비의료 생활건강상태 분석 및 개인맞춤 생활건강관리 AI</span>
              <span className="font-mono text-[11px] text-emerald-800 hidden sm:inline-block">FOR ENTERPRISE & WELLNESS</span>
            </div>
          </div>

          {/* RIGHT 45%: HanSaengAI Mobile Mockup UI (Top Dead Space Reduced) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-4.5 sm:p-5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-3">
            
            {/* Phone Top Header (Reduced Top Padding) */}
            <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/brand/hansaeng-ai-symbol.png"
                  alt="HanSaengAI"
                  className="w-7 h-7 sm:w-[29px] sm:h-[29px] object-contain shrink-0"
                />
                <div className="space-y-0.5 text-left">
                  <h3 className="text-xs sm:text-[13px] font-black text-[#142033] tracking-tight leading-tight">HanSaengAI</h3>
                  <p className="text-[9px] font-mono text-emerald-800 font-bold leading-none tracking-wide">LIFESTYLE HEALTH MOBILE UI</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                MOBILE UI MOCKUP
              </span>
            </div>

            {/* 4 Specified Mobile UI Screen Components */}
            <div className="space-y-2 text-xs">
              
              {/* 1. TODAY 현재 상태 */}
              <div className="bg-[#F7FCFA] p-2.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">TODAY</span>
                  <p className="font-extrabold text-[#142033]">현재 건강상태 이해</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  상태 균형 양호
                </span>
              </div>

              {/* 2. TODAY'S ROUTINE 오늘의 생활건강PT */}
              <div className="bg-emerald-50/90 p-2.5 rounded-lg border border-emerald-400/50 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-extrabold text-emerald-900 uppercase">TODAY'S ROUTINE</span>
                  <p className="font-extrabold text-[#142033]">오늘의 생활건강PT</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-900">
                  <Activity className="w-3.5 h-3.5 text-emerald-700" />
                  <span>제자리태극권 10분</span>
                </div>
              </div>

              {/* 3. PROGRESS 실천 기록 */}
              <div className="bg-[#F7FCFA] p-2.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">PROGRESS</span>
                  <p className="font-extrabold text-[#142033]">실천 기록</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>주 4회 달성</span>
                </div>
              </div>

              {/* 4. REASSESSMENT 재평가 */}
              <div className="bg-[#F7FCFA] p-2.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">REASSESSMENT</span>
                  <p className="font-extrabold text-[#142033]">주기적 재평가</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800">
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>D-3 주기 상태 확인</span>
                </div>
              </div>

            </div>

            <div className="pt-2 border-t border-emerald-900/10 text-[10px] font-mono text-emerald-800 font-semibold flex items-center justify-between">
              <span>FOR ENTERPRISE · INSURANCE · PUBLIC SECTOR</span>
            </div>
          </div>

        </div>

        {/* 3. 6-Step Lifestyle Health Journey (Thin Connected Line) */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-emerald-600/20 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-700" />
              <span className="text-xs font-mono font-extrabold text-emerald-800 uppercase tracking-wider">
                HANSAENG AI USER JOURNEY
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-900 font-bold">
              6-STEP LIFESTYLE FLOW
            </span>
          </div>

          {/* Desktop Horizontal Delivery Lifecycle Rail */}
          <div className="hidden lg:block relative py-3">
            <div className="absolute top-[24px] left-[6%] right-[6%] h-[2px] bg-emerald-200 z-0" />

            <div className="grid grid-cols-6 gap-2 relative z-10">
              {healthJourneySteps.map((item, idx) => {
                const isActive = activeStep === idx
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    className={`py-2 px-1.5 rounded-lg text-center border transition-all duration-200 flex flex-col items-center justify-center gap-0.5 ${
                      isActive
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm font-extrabold'
                        : 'bg-[#F2FBF7] text-[#142033] border-emerald-200 hover:bg-emerald-100/50'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-100' : 'text-emerald-800'}`}>
                      {item.step}
                    </span>
                    <h4 className="text-xs font-extrabold truncate w-full">{item.title}</h4>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile Vertical Journey Flow */}
          <div className="lg:hidden space-y-2 relative py-1">
            <div className="absolute top-3 bottom-3 left-4 w-[2px] bg-emerald-200 z-0" />

            {healthJourneySteps.map((item, idx) => {
              const isActive = activeStep === idx
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 cursor-pointer rounded-lg p-2.5 border transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                      : 'bg-[#F2FBF7] text-[#142033] border-emerald-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white text-emerald-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.step}
                  </span>
                  <h4 className="text-xs font-extrabold">{item.title}</h4>
                </div>
              )
            })}
          </div>
        </div>

        {/* 4. Bottom Corporate B2B Connection Summary (Simplified Expansion Scope) */}
        <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-extrabold text-emerald-800 uppercase tracking-wider shrink-0">
              EXPANSION SCOPE:
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#142033]">
              For Enterprise · Insurance · Public Sector
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-[#1265E5] transition-colors duration-200 shrink-0 group"
          >
            <span>Healthcare AI 협력 문의하기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}






