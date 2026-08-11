import React, { useState } from 'react'
import { Cpu, Database, Network, Building, ArrowRight, Sparkles, Zap } from 'lucide-react'

const growthNodes = [
  {
    id: 'ait',
    title: 'AI Transformation',
    sub: '실무형 AI 모델 연동',
    desc: '금융·보험 및 엔터프라이즈 업무 현장에 AI 예측 알고리즘 및 지능형 리포팅 엔진 결합',
    icon: Cpu,
  },
  {
    id: 'data',
    title: 'Data Intelligence',
    sub: '실시간 파이프라인 수집',
    desc: '이종 데이터 소스를 실시간으로 통합 수집·가공하여 명확한 비즈니스 데이터 흐름 구축',
    icon: Database,
  },
  {
    id: 'platform',
    title: 'Platform & Automation',
    sub: '자동화 및 SaaS 구조',
    desc: '반복적인 업무 절차를 자동화하고 지속 가능한 구독형 비즈니스 플랫폼으로 고도화',
    icon: Network,
  },
  {
    id: 'govtech',
    title: 'GovTech',
    sub: '공공 특화 플랫폼 연구',
    desc: '공공기관 및 특수 산업군의 높은 보안 요건과 데이터 가용성에 맞춘 디지털 아키텍처',
    icon: Building,
  },
]

export default function GrowthTechnology() {
  const [selectedTech, setSelectedTech] = useState(growthNodes[0])

  return (
    <section id="growth-technology" className="py-20 lg:py-28 bg-gradient-to-b from-[#07152B] via-[#0B1F3A] to-[#050D1A] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle Data Line Wave Animation Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#37B7FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1265E5" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M-100,200 Q400,100 900,400 T1900,200" fill="none" stroke="url(#gradFlow)" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-100,500 Q600,300 1200,600 T2100,400" fill="none" stroke="url(#gradFlow)" strokeWidth="1" />
          <circle cx="450" cy="180" r="4" fill="#37B7FF" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="950" cy="420" r="3" fill="#37B7FF" className="animate-ping" style={{ animationDuration: '4s' }} />
        </svg>
      </div>

      <div className="container-main relative z-10 space-y-16">
        {/* Section Header - Single Strong Message */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#37B7FF]/15 text-[#37B7FF] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#37B7FF]/30">
            GROWTH TECHNOLOGY · INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            From Data to Action.
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
            고객 현장의 여러 데이터와 시스템 소스가 AI CORE를 통해 명확한 통찰(Insight)과 실용적 실행(Action)으로 이어집니다.
          </p>
        </div>

        {/* Interactive Visual Node System (DATA / SYSTEM / CLOUD -> AI CORE -> INSIGHT -> ACTION) */}
        <div className="bg-[#0B1F3A]/90 p-8 lg:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-10">
          {/* Data Flow Diagram Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase tracking-wider">INTELLIGENCE FLOW</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">데이터에서 실행으로 (From Data to Action)</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#37B7FF] bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
              <Zap className="w-4 h-4 text-[#37B7FF]" />
              <span>AI ENGINE CONNECTED</span>
            </div>
          </div>

          {/* Interactive Visual Flow Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Step 1: SOURCES */}
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2 text-center">
              <span className="text-[10px] font-mono text-[#37B7FF] font-extrabold uppercase">01 INPUT</span>
              <h4 className="text-sm font-bold text-white">DATA / SYSTEM / CLOUD</h4>
              <p className="text-[11px] text-white/70">이종 데이터 소스 수집</p>
            </div>

            {/* Step 2: AI CORE (CENTER) */}
            <div className="bg-[#1265E5] p-6 rounded-2xl border border-blue-400/40 space-y-2 text-center shadow-lg shadow-blue-600/40 relative">
              <Sparkles className="w-5 h-5 text-[#37B7FF] mx-auto animate-pulse" />
              <span className="text-[10px] font-mono text-white font-extrabold uppercase">02 INTELLIGENCE</span>
              <h4 className="text-base font-extrabold text-white">CLARION AI CORE</h4>
              <p className="text-[11px] text-white/90">지능형 예측 & 파이프라인</p>
            </div>

            {/* Step 3: INSIGHT */}
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-2 text-center">
              <span className="text-[10px] font-mono text-[#37B7FF] font-extrabold uppercase">03 INSIGHT</span>
              <h4 className="text-sm font-bold text-white">INSIGHT</h4>
              <p className="text-[11px] text-white/70">정확한 정보 가공 & 판단</p>
            </div>

            {/* Step 4: ACTION */}
            <div className="bg-[#37B7FF]/20 p-5 rounded-2xl border border-[#37B7FF]/40 space-y-2 text-center">
              <span className="text-[10px] font-mono text-[#37B7FF] font-extrabold uppercase">04 EXECUTION</span>
              <h4 className="text-sm font-bold text-white">ACTION</h4>
              <p className="text-[11px] text-[#37B7FF]">기업의 실질적 업무 실행</p>
            </div>
          </div>

          {/* 4 Interactive Keywords Selector Nodes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {growthNodes.map((node) => {
              const Icon = node.icon
              const isSelected = selectedTech.id === node.id
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedTech(node)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 space-y-2.5 ${
                    isSelected
                      ? 'bg-[#1265E5] border-[#37B7FF] shadow-lg ring-2 ring-[#37B7FF]/40 scale-102'
                      : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-[#37B7FF]" />
                    <span className="text-[10px] font-mono font-bold text-white/60">CLICK</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{node.title}</h4>
                    <p className="text-[11px] text-white/70 font-medium pt-0.5">{node.sub}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Selected Keyword Reveal Box */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-2">
            <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase">{selectedTech.title} · DETAIL REVEAL</span>
            <h4 className="text-base sm:text-lg font-bold text-white">{selectedTech.sub}</h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              {selectedTech.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
