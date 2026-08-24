import React, { useState } from 'react'
import { Cpu, Database, Network, Building, Sparkles, Zap, ArrowRight } from 'lucide-react'


const growthDomains = [
  { id: 'ait', title: 'AI Transformation', sub: '실무형 AI 모델 연동', icon: Cpu },
  { id: 'data', title: 'Data Intelligence', sub: '실시간 파이프라인 수집', icon: Database },
  { id: 'platform', title: 'Platform & Automation', sub: '자동화 및 플랫폼화', icon: Network },
  { id: 'govtech', title: 'GovTech', sub: '공공·특수 플랫폼 연구', icon: Building },
]

const rndProcessSteps = [
  { step: '01', title: '현장 요구 발굴' },
  { step: '02', title: '기술과제 정의' },
  { step: '03', title: '내부 R&D' },
  { step: '04', title: '특허·기술자산' },
  { step: '05', title: '고객 적용' },
  { step: '06', title: '플랫폼화' },
]

export default function GrowthTechnology() {
  const [selectedTech, setSelectedTech] = useState(growthDomains[0])

  return (
    <section id="growth-technology" className="py-24 lg:py-32 bg-gradient-to-b from-[#07152B] via-[#0B1F3A] to-[#050D1A] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle Data Line Wave Animation Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradFlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#37B7FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1265E5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#37B7FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M-100,200 Q400,100 900,380 T1900,220" fill="none" stroke="url(#gradFlowLine)" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M-100,500 Q600,320 1200,580 T2100,380" fill="none" stroke="url(#gradFlowLine)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-main relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#37B7FF]/15 text-[#37B7FF] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#37B7FF]/30">
            GROWTH TECHNOLOGY · FROM DATA TO ACTION
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            From Data to Action.
          </h2>
          <p className="text-base sm:text-xl text-white/80 font-normal leading-relaxed max-w-2xl">
            분산된 이종 데이터 소스가 AI CORE를 통과하여 명확한 Insight와 실질적인 실행(Action)으로 가치 변환됩니다.
          </p>
        </div>

        {/* PRIMARY HERO VISUAL: DATA -> CONTEXT -> AI CORE -> ACTION (Clean High-Impact Flow) */}
        <div className="bg-[#0B1F3A]/90 p-8 lg:p-14 rounded-3xl border border-white/20 shadow-2xl space-y-12">
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase tracking-wider">INTELLIGENCE FLOW ARCHITECTURE</span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#37B7FF] bg-white/10 px-4 py-1.5 rounded-lg border border-white/15">
              <Zap className="w-4 h-4 text-[#37B7FF]" />
              <span>AI CORE ENGINE ACTIVE</span>
            </div>
          </div>

          {/* 4-Step Grand Visual Flow Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Step 1: DATA */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/15 space-y-2 text-center">
              <span className="text-xs font-mono text-[#37B7FF] font-extrabold uppercase">01 DATA</span>
              <h4 className="text-base font-bold text-white">DATA SOURCE</h4>
              <p className="text-xs text-white/70">이종 업무 파이프라인 수집</p>
            </div>

            {/* Step 2: CONTEXT */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-2 text-center">
              <span className="text-xs font-mono text-[#37B7FF] font-extrabold uppercase">02 CONTEXT</span>
              <h4 className="text-base font-bold text-white">CONTEXT</h4>
              <p className="text-xs text-white/70">비즈니스 맥락 구조화</p>
            </div>

            {/* Step 3: AI CORE (CENTER VISUAL FOCUS) */}
            <div className="bg-[#1265E5] p-7 rounded-2xl border border-blue-400/40 space-y-2 text-center shadow-xl shadow-blue-600/50 relative">
              <Sparkles className="w-6 h-6 text-[#37B7FF] mx-auto animate-pulse" />
              <span className="text-xs font-mono text-white font-extrabold uppercase">03 INTELLIGENCE</span>
              <h4 className="text-lg font-extrabold text-white">CLARION AI CORE</h4>
              <p className="text-xs text-white/90">지능형 추론 파이프라인</p>
            </div>

            {/* Step 4: ACTION */}
            <div className="bg-[#37B7FF]/20 p-6 rounded-2xl border border-[#37B7FF]/40 space-y-2 text-center">
              <span className="text-xs font-mono text-[#37B7FF] font-extrabold uppercase">04 EXECUTION</span>
              <h4 className="text-base font-bold text-white">ACTION</h4>
              <p className="text-xs text-[#37B7FF]">기업의 명확한 실행</p>
            </div>
          </div>

          {/* 4 Tech Domains Interactive Node Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {growthDomains.map((domain) => {
              const Icon = domain.icon
              const isSelected = selectedTech.id === domain.id
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedTech(domain)}
                  className={`p-4 rounded-xl text-left border transition-all duration-300 space-y-2 ${
                    isSelected
                      ? 'bg-[#1265E5] border-[#37B7FF] shadow-lg ring-2 ring-[#37B7FF]/40'
                      : 'bg-white/5 border-white/15 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-[#37B7FF]" />
                    <span className="text-[9px] font-mono font-bold text-white/60">SELECT</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{domain.title}</h4>
                </button>
              )
            })}
          </div>

          {/* Tech Domain Detail Reveal Box */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-2">
            <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase">{selectedTech.title} · DETAIL REVEAL</span>
            <h4 className="text-base sm:text-lg font-bold text-white">{selectedTech.sub}</h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              {selectedTech.desc}
            </p>
          </div>
        </div>

        {/* Bottom R&D Process Flow Visual Diagram (Master Prompt Section 15) */}
        <div className="bg-[#07152B] p-8 lg:p-10 rounded-3xl border border-white/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase tracking-wider">R&D PROCESS FLOW</span>
              <h3 className="text-lg sm:text-xl font-bold text-white">클라리온 기술 연구 및 자산화 프로세스</h3>
            </div>
            <span className="text-xs font-mono text-white/70 bg-white/10 px-3.5 py-1 rounded-md border border-white/15">
              R&D TO PLATFORM
            </span>
          </div>

          {/* 6 Step Process Diagram */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {rndProcessSteps.map((item, idx) => (
              <div key={item.step} className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 relative">
                <span className="text-[10px] font-mono font-extrabold text-[#37B7FF] bg-[#37B7FF]/10 px-2 py-0.5 rounded">
                  {item.step}
                </span>
                <h4 className="text-xs font-bold text-white pt-1">{item.title}</h4>
                <p className="text-[10px] text-white/70 leading-relaxed">{item.desc}</p>
                {idx < rndProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/30 z-10">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

