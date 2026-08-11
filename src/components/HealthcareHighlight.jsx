import React, { useState } from 'react'
import { Heart, Activity, Smartphone, Check, Sparkles, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react'

const wellnessModules = [
  {
    id: 'hansaeng',
    title: 'Healthcare AI : 한생AI',
    sub: '한의학적 문진 & AI 웰니스',
    desc: '생활건강 문진과 생활습관 데이터를 결합하여 사용자가 자신의 몸 상태를 이해하고 스스로 관리하도록 돕는 비의료 웰니스 AI',
    icon: Sparkles,
  },
  {
    id: 'b2b',
    title: '보험사 연계 웰니스',
    sub: '임직원 & 고객 맞춤 서비스',
    desc: '보험사 파트너십 및 기업 임직원을 대상으로 혜택 중심의 생활건강 콘텐츠와 일상 웰니스 프로그램 제공',
    icon: ShieldCheck,
  },
  {
    id: 'solution',
    title: '생활건강 리포트',
    sub: '개인별 맞춤 가이드',
    desc: '운동 수행, 수면, 식습관 및 정기 문진 데이터를 종합 분석하여 직관적인 웰니스 인포그래픽 리포트 생성',
    icon: Activity,
  },
  {
    id: 'pt',
    title: '생활건강PT · 태극권 · Education',
    sub: '호흡 & 균형 운동 실천',
    desc: '태극권, 호흡, 균형 운동, 건강 교육 등 일상에서 바로 실천 가능한 모바일 동작 가이드 플랫폼',
    icon: Heart,
  },
]

export default function HealthcareHighlight() {
  const [selectedModule, setSelectedModule] = useState(wellnessModules[0])

  return (
    <section id="healthcare" className="py-20 lg:py-28 bg-[#FAFCFD] border-b border-clarion-line">
      <div className="container-main space-y-16">
        {/* Section Header - Single Human Message */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-emerald-500/10 text-emerald-600 font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-emerald-500/20">
            BRAND STORY · HUMAN & LIFE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            기술을 넘어, <br />
            <span className="text-emerald-600">더 나은 생활로.</span>
          </h2>
          <p className="text-sm font-mono text-emerald-600 font-bold tracking-widest uppercase pt-1">
            HEALTHCARE AI · WELLNESS · HEALTHY LIVING
          </p>
        </div>

        {/* Human-Centered World Container: Interactive Mobile UI Mockup + Wellness Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-8 lg:p-12 rounded-3xl border border-clarion-line/80 shadow-md">
          
          {/* Left Interactive Wellness Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#142033]">사람과 생활 중심의 비의료 웰니스</h3>
                <p className="text-xs font-mono text-emerald-600 font-semibold">DAILY LIFE & HEALTHY AGING</p>
              </div>
            </div>

            {/* 4 Interactive Wellness Module Tabs */}
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
          </div>

          {/* Right Mobile UI Mockup Visual Graphic Component */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#07152B] to-[#0B1F3A] p-7 rounded-3xl text-white shadow-2xl space-y-6 border border-white/10 relative overflow-hidden">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#37B7FF]" />
                <span className="text-xs font-mono font-bold text-white">한생AI MOBILE WELLNESS UI</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Mockup Screen Visual Cards */}
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
                <span className="text-[10px] font-mono text-[#37B7FF] font-bold">RECOMMENDED EXERCISE</span>
                <h5 className="text-sm font-bold text-white">태극권 & 호흡 균형 운동 가이드</h5>
                <p className="text-[11px] text-white/70">15분 맞춤 가이드 동작 바로가기</p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[10px] font-mono text-white/60">NON-MEDICAL WELLNESS SERVICE COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
