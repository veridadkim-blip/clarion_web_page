import React, { useState } from 'react'
import { Heart, Activity, Smartphone, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

const wellnessModules = [
  {
    id: 'hansaeng',
    title: 'Healthcare AI : 한생AI',
    sub: '생활건강 문진 & AI 웰니스',
    desc: '체질 문진과 생활습관 데이터를 결합하여 스스로 몸 상태를 이해하고 일상 건강을 관리하도록 돕는 비의료 웰니스 AI 서비스',
    icon: Sparkles,
  },
  {
    id: 'b2b',
    title: '보험사 연계 웰니스',
    sub: '임직원 & 고객 맞춤 혜택',
    desc: '보험사 파트너십 및 기업 임직원을 대상으로 지속 가능한 일상 웰니스 프로그램 및 건강 가이드 연계',
    icon: ShieldCheck,
  },
  {
    id: 'solution',
    title: '생활건강 리포트',
    sub: '개인별 맞춤 지표',
    desc: '운동 수행, 식습관, 수면 및 정기 문진 데이터를 직관적으로 가공하는 개인화 웰니스 인포그래픽 리포트',
    icon: Activity,
  },
  {
    id: 'pt',
    title: '생활건강PT · 태극권 · Education',
    sub: '호흡 & 균형 운동 실천',
    desc: '태극권, 호흡, 균형 운동 가이드 등 일상에서 부담 없이 실천할 수 있는 모바일 동작 교육 서비스',
    icon: Heart,
  },
]

const userJourneySteps = [
  { step: '01', title: '생활건강 문진', sub: 'HEALTH DATA' },
  { step: '02', title: '상태 이해', sub: 'HEALTH CONTEXT' },
  { step: '03', title: '개인별 생활건강PT', sub: 'HEALTH INSIGHT' },
  { step: '04', title: '실천 기록', sub: 'LIFESTYLE ACTION' },
  { step: '05', title: '재평가', sub: 'TRACK' },
  { step: '06', title: '변화 확인', sub: 'CHANGE' },
]

export default function HealthcareHighlight() {
  const [selectedModule, setSelectedModule] = useState(wellnessModules[0])

  return (
    <section id="healthcare" className="py-20 lg:py-28 bg-[#F4FDF9] border-b border-clarion-line">
      <div className="container-main space-y-16">
        {/* Section Header - Human & Emotional Climax */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-emerald-600/10 text-emerald-700 font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-emerald-600/20">
            HEALTHCARE INNOVATION · CLIMAX
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142033] leading-tight">
            기술의 마지막은, <br />
            <span className="text-emerald-600">사람이어야 합니다.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed">
            AI와 딥테크를 사람의 건강한 삶에 연결합니다. (Technology for Better Living.)
          </p>
        </div>

        {/* User Journey Visual Diagram (HEALTH DATA -> CONTEXT -> INSIGHT -> ACTION -> TRACK -> CHANGE) */}
        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-emerald-500/20 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/60 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">HANSAENG AI USER JOURNEY</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#142033]">생활건강 관리 라이프사이클 흐름</h3>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-md border border-emerald-200">
              NON-MEDICAL WELLNESS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {userJourneySteps.map((item, idx) => (
              <div key={item.step} className="bg-[#F8FCFA] p-4 rounded-2xl border border-emerald-200/80 space-y-1.5 relative">
                <span className="text-[10px] font-mono font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {item.step}
                </span>
                <h4 className="text-xs font-extrabold text-[#142033] pt-1">{item.title}</h4>
                <p className="text-[9px] font-mono text-emerald-600 font-semibold">{item.sub}</p>
                {idx < userJourneySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-emerald-400 z-10">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Interactive Wellness World: Modules + Mobile UI Mockup */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 lg:p-12 rounded-3xl border border-clarion-line/80 shadow-md">
          {/* Left Interactive Wellness Module Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#142033]">사람과 일상 중심의 웰니스 솔루션</h3>
                <p className="text-xs font-mono text-emerald-600 font-semibold">DAILY LIFE & HEALTHY LIVING</p>
              </div>
            </div>

            {/* 4 Interactive Wellness Modules */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {wellnessModules.map((item) => {
                const Icon = item.icon
                const isSelected = selectedModule.id === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedModule(item)}
                    className={`p-4.5 rounded-2xl text-left border transition-all duration-200 space-y-2 ${
                      isSelected
                        ? 'bg-emerald-50/90 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                        : 'bg-[#F9FBFC] border-clarion-line/60 hover:bg-emerald-50/40 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="w-5 h-5 text-emerald-600" />
                      <span className="text-[10px] font-mono text-emerald-700 font-bold">CLICK</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#142033]">{item.title}</h4>
                      <p className="text-[11px] text-[#68758A] font-medium pt-0.5">{item.sub}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Module Detail Reveal */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80 space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">{selectedModule.title} · DETAIL REVEAL</span>
              <h4 className="text-sm font-bold text-[#142033]">{selectedModule.sub}</h4>
              <p className="text-xs sm:text-sm text-[#68758A] leading-relaxed font-normal">
                {selectedModule.desc}
              </p>
            </div>

            {/* Hansaeng AI CTA Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:bg-emerald-700"
              >
                <span>한생AI 파트너십 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Mobile UI Mockup Graphic */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#07152B] to-[#0B1F3A] p-7 rounded-3xl text-white shadow-2xl space-y-6 border border-white/10 relative overflow-hidden">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#37B7FF]" />
                <span className="text-xs font-mono font-bold text-white">HANSAENG AI WELLNESS MOBILE UI</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Mobile UI Screen Cards */}
            <div className="space-y-3">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 space-y-1.5">
                <span className="text-[10px] font-mono text-[#37B7FF] font-bold">TODAY WELLNESS INDEX</span>
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-white">생활건강 실천 지표</h5>
                  <span className="text-xs font-mono text-emerald-400 font-bold">92% COMPLETED</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[92%]" />
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 space-y-1">
                <span className="text-[10px] font-mono text-[#37B7FF] font-bold">LIFESTYLE PT GUIDE</span>
                <h5 className="text-sm font-bold text-white">태극권 & 호흡 균형 운동 가이드</h5>
                <p className="text-[11px] text-white/70">15분 일상 맞춤 동작 가이드 바로가기</p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[10px] font-mono text-white/60 uppercase">NON-MEDICAL WELLNESS COMPLIANT SERVICE</span>
            </div>
          </div>
        </div>

        {/* Patent / IP Visual Section (Master Prompt Section 21) */}
        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-clarion-line/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/60 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-extrabold text-[#1265E5] bg-[#1265E5]/10 px-2.5 py-0.5 rounded">
                  PATENT PENDING
                </span>
                <span className="text-xs font-mono font-bold text-[#68758A]">From Patent to Platform.</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#142033]">자체 기술 개발 증거 및 IP 자산</h3>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-clarion-line/80 grid sm:grid-cols-5 gap-4 text-center items-center">
            <div className="p-3 bg-white rounded-xl border border-clarion-line/60">
              <span className="text-[10px] font-mono font-bold text-[#1265E5]">PATENT / IP</span>
              <p className="text-xs font-bold text-[#142033] pt-0.5">특허 출원 기술</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#1265E5] mx-auto hidden sm:block" />
            <div className="p-3 bg-white rounded-xl border border-clarion-line/60">
              <span className="text-[10px] font-mono font-bold text-[#1265E5]">DATA + AI</span>
              <p className="text-xs font-bold text-[#142033] pt-0.5">AI 데이터 가공</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#1265E5] mx-auto hidden sm:block" />
            <div className="p-3 bg-white rounded-xl border border-clarion-line/60">
              <span className="text-[10px] font-mono font-bold text-emerald-600">ACTION</span>
              <p className="text-xs font-bold text-[#142033] pt-0.5">BETTER LIFE</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

