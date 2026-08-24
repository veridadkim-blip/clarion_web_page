import React, { useState } from 'react'
import {
  Sparkles,
  ArrowRight,
  Heart,
  Activity,
  CheckCircle2,
  RotateCcw,
  Smartphone,
  ShieldCheck,
  Award
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
      className="py-20 lg:py-28 bg-[#F2FBF7] text-[#142033] relative overflow-hidden border-b border-clarion-line/60"
    >
      {/* Background Natural Ambient Wave */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
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

      <div className="container-main relative z-10 space-y-12 lg:space-y-16">
        
        {/* Section Header & Human Climax Messaging */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-emerald-900/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-0.5 bg-emerald-600/10 text-emerald-800 font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-emerald-600/20">
                HEALTHCARE INNOVATION · HUMAN & LIFE
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-700/10 text-emerald-900 font-mono font-extrabold text-[10px] uppercase rounded-full border border-emerald-600/30">
                <ShieldCheck className="w-3 h-3 text-emerald-700" />
                R&D · PATENT PENDING
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#142033]">
              기술의 마지막은, <br />
              <span className="text-emerald-700">사람이어야 합니다.</span>
            </h2>
          </div>

          <div className="space-y-1 max-w-md">
            <p className="text-base sm:text-lg font-bold text-[#142033]/90 leading-snug">
              AI와 딥테크를 사람의 건강한 삶에 연결합니다.
            </p>
            <p className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
              Technology for Better Living.
            </p>
          </div>
        </div>

        {/* 6-Step Slim Horizontal Lifestyle Journey Bar */}
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-600/20 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2">
            <span className="text-[10px] font-mono font-extrabold text-emerald-800 uppercase tracking-widest">
              LIFESTYLE HEALTH JOURNEY FLOW
            </span>
            <span className="text-[10px] font-mono text-emerald-700">6-STEP CONTINUOUS CARE</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {healthJourneySteps.map((j, idx) => (
              <div
                key={j.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-2.5 rounded-xl border text-center transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-md font-bold'
                    : 'bg-emerald-50/50 text-[#142033] border-emerald-600/20 hover:bg-emerald-100/50'
                }`}
              >
                <span className={`text-[9px] font-mono block ${activeStep === idx ? 'text-emerald-200' : 'text-emerald-700'}`}>
                  STEP {j.step}
                </span>
                <span className="text-xs font-extrabold truncate block pt-0.5">{j.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Desktop Layout (55% Left Human Visual + 45% Right Phone UI & Details) */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          
          {/* LEFT 55%: Large Editorial Human Visual (healthcare-office-taichi.jpg) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-600/20 bg-slate-900 group aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="/images/healthcare-office-taichi.jpg"
                alt="사무실 임직원 제자리태극권 및 생활건강PT 일상 실천"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/75 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Caption Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white font-extrabold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/20">
                    <Heart className="w-3 h-3 text-emerald-400" />
                    LIFESTYLE HEALTH · HEALTHY AGING
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  기업 임직원 제자리태극권 · 생활건강PT 일상 실천
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT 45%: HanSaengAI Mobile Mockup UI */}
          <div className="lg:col-span-5 space-y-4">


            {/* HanSaengAI Mobile Mockup Frame */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-600/20 shadow-xl space-y-4">
              
              {/* Phone Top Header */}
              <div className="flex items-center justify-between border-b border-clarion-line/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-black text-xs">
                    AI
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#142033]">HanSaengAI</h4>
                    <p className="text-[9px] font-mono text-emerald-800 font-bold">NON-MEDICAL WELLNESS</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  MOBILE UI
                </span>
              </div>

              {/* 4 Specified UI Screens in Single Frame: TODAY, TODAY'S ROUTINE, PROGRESS, REASSESSMENT */}
              <div className="space-y-2.5 text-xs">
                
                {/* 1. TODAY 현재 상태 */}
                <div className="bg-[#F7FCFA] p-3 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">TODAY</span>
                    <p className="font-extrabold text-[#142033]">현재 상태</p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    상태 균형 양호
                  </span>
                </div>

                {/* 2. TODAY'S ROUTINE 오늘의 생활건강PT */}
                <div className="bg-emerald-50/90 p-3 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-900 uppercase">TODAY'S ROUTINE</span>
                    <p className="font-extrabold text-[#142033]">오늘의 생활건강PT</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-900">
                    <Activity className="w-3.5 h-3.5 text-emerald-700" />
                    <span>제자리태극권 10분</span>
                  </div>
                </div>

                {/* 3. PROGRESS 실천 기록 */}
                <div className="bg-[#F7FCFA] p-3 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">PROGRESS</span>
                    <p className="font-extrabold text-[#142033]">실천 기록</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>주 4회 달성</span>
                  </div>
                </div>

                {/* 4. REASSESSMENT 재평가 */}
                <div className="bg-[#F7FCFA] p-3 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 uppercase">REASSESSMENT</span>
                    <p className="font-extrabold text-[#142033]">재평가</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                    <span>D-3 주기 문진</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 6-Step Health Journey (Thin Connected Line) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-600/20 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-clarion-line/40 pb-3">
            <span className="text-xs font-mono font-extrabold text-emerald-800 tracking-widest uppercase">
              HANSAENG AI USER JOURNEY
            </span>
            <span className="text-[11px] font-mono text-emerald-900 font-bold">
              6-STEP LIFESTYLE FLOW
            </span>
          </div>

          {/* Desktop Thin Connected Horizontal Journey Line */}
          <div className="hidden lg:block relative py-4">
            <div className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-emerald-200 z-0" />

            <div className="grid grid-cols-6 gap-2 relative z-10">
              {healthJourneySteps.map((item, idx) => {
                const isActive = activeStep === idx
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    className={`py-2.5 px-2 rounded-xl text-center border transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md font-extrabold scale-[1.03]'
                        : 'bg-[#F2FBF7] text-[#142033] border-emerald-200 hover:bg-emerald-50'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-100' : 'text-emerald-700'}`}>
                      {item.step}
                    </span>
                    <h4 className="text-xs font-extrabold truncate w-full">{item.title}</h4>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile Vertical Thin Line Journey */}
          <div className="lg:hidden space-y-2 relative py-2">
            <div className="absolute top-3 bottom-3 left-5 w-[2px] bg-emerald-200 z-0" />

            {healthJourneySteps.map((item, idx) => {
              const isActive = activeStep === idx
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 cursor-pointer rounded-xl p-3 border transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md font-bold'
                      : 'bg-[#F2FBF7] text-[#142033] border-emerald-200'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white text-emerald-700' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.step}
                  </span>
                  <h4 className="text-xs font-extrabold">{item.title}</h4>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}




