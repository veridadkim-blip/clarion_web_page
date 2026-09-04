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

/*
 * HEALTHCARE AI LAYOUT FREEZE
 * Owner approved final vertical composition.
 * Do not alter spacing, sizing, alignment, or section properties.
 */
export default function HealthcareHighlight() {
  const [activeStep, setActiveStep] = useState(2) // Default step: 03 생활건강PT

  return (
    <>
      {/* DESKTOP VIEWPORT LAYOUT (lg:flex hidden) — 100% FROZEN */}
      <section
        id="healthcare"
        className="hidden lg:flex fullscreen-section bg-[#F2FBF7] text-[#142033] relative overflow-hidden border-b border-clarion-line/60 scroll-mt-[80px]"
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

        <div className="container-main max-w-7xl lg:max-w-[1320px] relative z-10 space-y-[12px] pt-[128px] pb-[14px] my-auto">
          {/* 1. Section Editorial Header */}
          <div className="flex flex-row items-end justify-between gap-3.5 border-b border-emerald-900/10 pb-2 text-left">
            <div className="space-y-0.5 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-emerald-800 font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-emerald-700 pb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                HEALTHCARE INNOVATION · HUMAN-CENTERED WELLNESS
              </span>
              <h2 className="text-[44px] font-extrabold text-[#142033] leading-snug tracking-tight pt-0">
                기술의 마지막은, <br />
                <span className="text-[#1265E5]">사람이어야 합니다.</span>
              </h2>
            </div>

            <div className="space-y-0.5 max-w-md text-right">
              <p className="text-base font-bold text-[#142033] leading-snug">
                AI와 딥테크를 사람의 건강한 삶에 연결합니다.
              </p>
              <p className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
                Technology for Better Living.
              </p>
            </div>
          </div>

          {/* 2. Primary Desktop Composition */}
          <div className="grid grid-cols-12 gap-7 items-stretch text-left">
            <div className="col-span-7 bg-white rounded-xl p-4.5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="space-y-2">
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
                    <span className="text-[10px] font-mono text-white/80">
                      REAL CLASS EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-900/10 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <span>한생AI: 비의료 생활건강상태 분석 및 개인맞춤 생활건강관리 AI</span>
                <span className="font-mono text-[11px] text-emerald-800">FOR ENTERPRISE & WELLNESS</span>
              </div>
            </div>

            <div className="col-span-5 bg-white rounded-xl p-4.5 border border-emerald-600/20 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between border-b border-emerald-900/10 pb-1.5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/brand/hansaeng-ai-symbol.png"
                    alt="HanSaengAI"
                    className="w-[29px] h-[29px] object-contain shrink-0"
                  />
                  <div className="space-y-0.5 text-left">
                    <h3 className="text-[13px] font-black text-[#142033] tracking-tight leading-tight">HanSaengAI</h3>
                    <p className="text-[9px] font-mono text-emerald-800 font-bold leading-none tracking-wide">LIFESTYLE HEALTH MOBILE UI</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  MOBILE UI MOCKUP
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">TODAY</span>
                    <p className="font-extrabold text-[#142033]">현재 건강상태 이해</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    상태 균형 양호
                  </span>
                </div>

                <div className="bg-emerald-50/90 p-2 rounded-lg border border-emerald-400/50 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-900 uppercase">TODAY'S ROUTINE</span>
                    <p className="font-extrabold text-[#142033]">오늘의 생활건강PT</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-900">
                    <Activity className="w-3.5 h-3.5 text-emerald-700" />
                    <span>제자리태극권 10분</span>
                  </div>
                </div>

                <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">PROGRESS</span>
                    <p className="font-extrabold text-[#142033]">실천 기록</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>주 4회 달성</span>
                  </div>
                </div>

                <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
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

              <div className="pt-1.5 border-t border-emerald-900/10 text-[10px] font-mono text-emerald-800 font-semibold flex items-center justify-between">
                <span>FOR ENTERPRISE · INSURANCE · PUBLIC SECTOR</span>
              </div>
            </div>
          </div>

          {/* 3. 6-Step Lifestyle Health Journey */}
          <div className="bg-white rounded-xl p-4 border border-emerald-600/20 shadow-xs space-y-2.5">
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

            <div className="relative py-3">
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
          </div>

          {/* 4. Bottom Corporate B2B Connection Summary */}
          <div className="pt-1 flex flex-row items-center justify-between gap-3 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-extrabold text-emerald-800 uppercase tracking-wider shrink-0">
                EXPANSION SCOPE:
              </span>
              <span className="text-sm font-bold text-[#142033]">
                For Enterprise · Insurance · Public Sector
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-[#1265E5] transition-colors duration-200 shrink-0 group"
            >
              <span>Healthcare AI 협력 문의하기</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE SLIDE 1 (#healthcare) — HEADLINE & REAL CLASS PHOTO (lg:hidden) */}
      <section id="healthcare" className="lg:hidden fullscreen-section bg-[#F2FBF7] text-[#142033] relative overflow-hidden border-b border-clarion-line/60">
        <div className="container-main max-w-7xl h-full flex flex-col justify-between py-4 text-left">
          {/* Top Label */}
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-800 font-mono font-bold text-[10px] tracking-widest uppercase border-b-2 border-emerald-700 pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              HEALTHCARE INNOVATION · HUMAN WELLNESS
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-[#142033] leading-tight tracking-tight">
              기술의 마지막은,<br />
              <span className="text-[#1265E5]">사람이어야 합니다.</span>
            </h2>
            <p className="text-xs font-bold text-[#334155]">
              AI와 딥테크를 사람의 건강한 삶에 연결합니다.
            </p>
          </div>

          {/* Middle Real Class Photo */}
          <div className="my-auto py-1">
            <div className="relative rounded-lg overflow-hidden border border-emerald-600/30 aspect-[16/10] shadow-sm">
              <img
                src="/images/healthcare-actual-class.jpg"
                alt="실제 제자리태극권 & 생활건강PT 그룹수업 현장"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white flex items-center justify-between z-10">
                <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  실제 그룹수업 현장 · 제자리태극권 & 생활건강PT
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-2 border-t border-emerald-900/10 flex items-center justify-between text-[10px] font-mono text-emerald-900 font-semibold">
            <span>HANSAENG AI WELLNESS PLATFORM</span>
            <span className="text-emerald-700 font-bold">SLIDE 1/2 ➔</span>
          </div>
        </div>
      </section>

      {/* MOBILE SLIDE 2 (#healthcare-ui) — HANSAENG AI UI & 6-STEP JOURNEY (lg:hidden) */}
      <section id="healthcare-ui" className="lg:hidden fullscreen-section bg-white text-[#142033] relative overflow-hidden border-b border-clarion-line/60">
        <div className="container-main max-w-7xl h-full flex flex-col justify-between py-4 text-left">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-emerald-900/10 pb-1.5">
            <div className="flex items-center gap-2">
              <img
                src="/images/brand/hansaeng-ai-symbol.png"
                alt="HanSaengAI"
                className="w-6 h-6 object-contain shrink-0"
              />
              <span className="text-xs font-black text-[#142033]">HanSaengAI Mobile UI</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              SLIDE 2/2
            </span>
          </div>

          {/* 4 Cards Grid */}
          <div className="space-y-1.5 text-xs my-auto py-1">
            <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">TODAY</span>
                <p className="font-extrabold text-[#142033] text-xs">현재 건강상태 이해</p>
              </div>
              <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                상태 균형 양호
              </span>
            </div>

            <div className="bg-emerald-50/90 p-2 rounded-lg border border-emerald-400/50 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-extrabold text-emerald-900 uppercase">TODAY'S ROUTINE</span>
                <p className="font-extrabold text-[#142033] text-xs">오늘의 생활건강PT</p>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-extrabold text-emerald-900">
                <Activity className="w-3 h-3 text-emerald-700" />
                <span>태극권 10분</span>
              </div>
            </div>

            <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">PROGRESS</span>
                <p className="font-extrabold text-[#142033] text-xs">실천 기록</p>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>주 4회 달성</span>
              </div>
            </div>

            <div className="bg-[#F7FCFA] p-2 rounded-lg border border-emerald-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">REASSESSMENT</span>
                <p className="font-extrabold text-[#142033] text-xs">주기적 재평가</p>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-800">
                <RotateCcw className="w-3 h-3 text-emerald-600" />
                <span>D-3 주기 상태 확인</span>
              </div>
            </div>
          </div>

          {/* 6-step Journey Rail */}
          <div className="space-y-1.5 pt-1.5 border-t border-emerald-900/10">
            <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase block">
              6-STEP LIFESTYLE FLOW
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              {healthJourneySteps.map((item, idx) => (
                <div
                  key={item.step}
                  className={`py-1.5 px-1 rounded text-[10px] font-extrabold border ${
                    activeStep === idx
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  }`}
                >
                  {item.step} {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-2">
            <a
              href="#contact"
              className="w-full py-2.5 bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Healthcare AI 협력 문의하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}







