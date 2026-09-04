import React, { useState } from 'react'
import { ArrowRight, ShieldCheck, Cpu, HeartPulse } from 'lucide-react'

const portfolioStories = [
  {
    id: 'now',
    num: '01',
    phase: 'NOW',
    stageTitle: '엔터프라이즈 IT & SI',
    category: 'CORE BUSINESS',
    title: '현재 수행 기반 · 엔터프라이즈 IT & SI',
    slogan: '현장에서 검증되는 높은 신뢰성과 실체 있는 실행력',
    link: '#core-business',
    keywords: ['Enterprise IT & SI', 'Financial IT', 'Cloud Integration', 'Software Development'],
    desc: '금융·보험 및 대형 엔터프라이즈 환경에서 레거시 및 신규 시스템을 안정적으로 구축하고 고도의 트랜잭션을 운용하는 클라리온의 현재 핵심 사업 기반입니다.',
    icon: ShieldCheck,
  },
  {
    id: 'next',
    num: '02',
    phase: 'NEXT',
    stageTitle: 'AI & Data Platform',
    category: 'GROWTH TECHNOLOGY',
    title: '성장 기술 · AI & Data Platform',
    slogan: '현장의 노하우를 지능형 기술 자산으로 전환',
    link: '#growth-technology',
    keywords: ['AI Transformation', 'Data Intelligence', 'Platform & Automation', 'GovTech'],
    desc: '금융·보험 IT 현장에서 축적된 인프라 프로세스를 AI 예측 모델, 대용량 데이터 수집 파이프라인 및 지능형 자동화 플랫폼으로 기술 확장합니다.',
    icon: Cpu,
  },
  {
    id: 'future',
    num: '03',
    phase: 'FUTURE',
    stageTitle: 'Healthcare AI & 웰니스',
    category: 'HEALTHCARE INNOVATION',
    title: '전략 신사업 · 비의료 웰니스 & Healthcare AI',
    slogan: '딥테크 기술을 사람의 건강한 일상 경험과 삶에 연결',
    link: '#healthcare',
    keywords: ['Healthcare AI (한생AI)', '보험사 연계 웰니스', '생활건강솔루션', '생활건강PT · 태극권'],
    desc: '축적된 AI·데이터 기술과 파트너십을 결합하여 질병 치료가 아닌 일상 습관 관리 중심의 비의료 웰니스 플랫폼 및 건강 솔루션을 선보입니다.',
    icon: HeartPulse,
  },
]

export default function BusinessArchitecture() {
  const [activeTab, setActiveTab] = useState('now')
  const currentStory = portfolioStories.find((s) => s.id === activeTab) || portfolioStories[0]
  const IconComponent = currentStory.icon

  return (
    <section id="portfolio" className="fullscreen-section bg-[#F8FAFC] border-b border-clarion-line transition-colors duration-700">
      <div className="container-main max-w-7xl lg:max-w-[1280px] space-y-2.5 sm:space-y-5 lg:space-y-6 pt-1 sm:pt-20 lg:pt-24 pb-2 sm:pb-8 lg:pb-10 my-auto">

        {/* 1. Clean Section Editorial Header */}
        <div className="border-b border-clarion-line/60 pb-2 sm:pb-4 lg:pb-5 text-left">
          <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5 mb-1.5 lg:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
            BUSINESS PORTFOLIO · EVOLUTION ROADMAP
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#142033] leading-tight tracking-tight pt-0.5">
            검증된 실행력에서, <span className="text-[#1265E5]">미래 기술로.</span>
          </h2>
        </div>

        {/* 2. Horizontal Evolution Roadmap Rail (Flat, Line-based) */}
        <div className="relative pt-0.5 pb-0.5">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-b-2 border-clarion-line/60 pb-2 sm:pb-3.5">
            {portfolioStories.map((s) => {
              const isActive = activeTab === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center justify-between p-1.5 sm:p-3 border-l-3 transition-all duration-300 text-left ${
                    isActive
                      ? 'border-[#1265E5] text-[#142033]'
                      : 'border-slate-200 text-[#68758A] hover:text-[#142033] hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <span className={`text-[10px] sm:text-xs font-mono font-bold ${isActive ? 'text-[#1265E5]' : 'text-clarion-muted'}`}>
                      {s.num}
                    </span>
                    <div>
                      <span className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider block uppercase ${isActive ? 'text-[#1265E5]' : 'text-clarion-muted'}`}>
                        {s.phase}
                      </span>
                      <span className={`text-xs sm:text-base ${isActive ? 'font-extrabold text-[#142033]' : 'font-semibold text-[#68758A]'}`}>
                        {s.stageTitle}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3. Dark Business Canvas Frame (Unified, No Layout Jump) */}
        <div className="bg-[#07152B] rounded-xl border border-[#1265E5]/30 text-white p-3.5 sm:p-7 lg:p-9 shadow-lg relative overflow-hidden min-h-[180px] sm:min-h-[370px] lg:min-h-[400px] flex flex-col justify-between">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            
            {/* Left Content Area (5 Cols) */}
            <div className="lg:col-span-5 space-y-2 sm:space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-extrabold text-[#37B7FF] tracking-widest uppercase block">
                  PHASE {currentStory.num} · {currentStory.phase}
                </span>
                <h3 className="text-lg sm:text-3xl font-extrabold text-white leading-tight">{currentStory.title}</h3>
              </div>

              <p className="text-xs sm:text-lg font-bold text-[#37B7FF] leading-snug">
                "{currentStory.slogan}"
              </p>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal hidden sm:block">
                {currentStory.desc}
              </p>

              <div className="pt-1 border-t border-white/10 hidden sm:block">
                <p className="text-xs font-mono text-white/70">
                  <span className="font-bold text-[#37B7FF]">CORE DOMAINS:</span> {currentStory.keywords.join('  /  ')}
                </p>
              </div>
            </div>

            {/* Right Side — Business System Flow Visual (7 Cols) */}
            <div className="lg:col-span-7 hidden sm:block">
              {activeTab === 'now' && (
                <div className="bg-slate-900/60 rounded-xl border border-white/10 p-6 space-y-6 text-left">
                  <div className="flex items-center justify-between text-xs font-mono text-[#37B7FF] border-b border-white/10 pb-3">
                    <span className="font-bold tracking-wider flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      ENTERPRISE SYSTEM FLOW
                    </span>
                    <span className="text-white/60">VERIFIED EXECUTION</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="space-y-1 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-[10px] font-mono text-[#37B7FF] block">STEP 01</span>
                      <span className="text-xs font-bold text-white block">ENTERPRISE IT</span>
                    </div>
                    <div className="space-y-1 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-[10px] font-mono text-[#37B7FF] block">STEP 02</span>
                      <span className="text-xs font-bold text-white block">FINANCIAL IT</span>
                    </div>
                    <div className="space-y-1 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-[10px] font-mono text-[#37B7FF] block">STEP 03</span>
                      <span className="text-xs font-bold text-white block">CLOUD INTEGRATION</span>
                    </div>
                    <div className="space-y-1 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-[10px] font-mono text-[#37B7FF] block">STEP 04</span>
                      <span className="text-xs font-bold text-white block">SOFTWARE DEV</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="text-[11px] font-mono text-white/60">HIGH-TRANSACTION STABILITY</span>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#1265E5] via-[#37B7FF] to-cyan-400" />
                  </div>
                </div>
              )}

              {activeTab === 'next' && (
                <div className="bg-slate-900/60 rounded-xl border border-cyan-500/25 p-6 space-y-6 text-left">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300 border-b border-cyan-500/20 pb-3">
                    <span className="font-bold tracking-wider flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      AI DATA INTELLIGENCE PIPELINE
                    </span>
                    <span className="text-cyan-300/60">DATA TO ACTION</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="space-y-1 p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/30">
                      <span className="text-[10px] font-mono text-cyan-300 block">STEP 01</span>
                      <span className="text-xs font-bold text-white block">DATA INGESTION</span>
                    </div>
                    <div className="space-y-1 p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/30">
                      <span className="text-[10px] font-mono text-cyan-300 block">STEP 02</span>
                      <span className="text-xs font-bold text-white block">AI CORE ENGINE</span>
                    </div>
                    <div className="space-y-1 p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/30">
                      <span className="text-[10px] font-mono text-cyan-300 block">STEP 03</span>
                      <span className="text-xs font-bold text-white block">AUTOMATION</span>
                    </div>
                    <div className="space-y-1 p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/30">
                      <span className="text-[10px] font-mono text-cyan-300 block">STEP 04</span>
                      <span className="text-xs font-bold text-white block">GOVTECH / PLATFORM</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="text-[11px] font-mono text-cyan-300/70">INTELLIGENT ASSET CONVERSION</span>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500 via-[#37B7FF] to-blue-500" />
                  </div>
                </div>
              )}

              {activeTab === 'future' && (
                <div className="bg-slate-900/60 rounded-xl border border-emerald-500/25 p-6 space-y-6 text-left">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 border-b border-emerald-500/20 pb-3">
                    <span className="font-bold tracking-wider flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      HUMAN-CENTERED WELLNESS ECOSYSTEM
                    </span>
                    <span className="text-emerald-300/60">LIFE HABIT CARE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="space-y-1 p-3 bg-emerald-950/40 rounded-lg border border-emerald-500/30">
                      <span className="text-[10px] font-mono text-emerald-300 block">NODE 01</span>
                      <span className="text-xs font-bold text-white block">한생AI · 생활건강PT</span>
                    </div>
                    <div className="space-y-1 p-3 bg-emerald-950/40 rounded-lg border border-emerald-500/30">
                      <span className="text-[10px] font-mono text-emerald-300 block">NODE 02</span>
                      <span className="text-xs font-bold text-white block">태극권 · 웰니스</span>
                    </div>
                    <div className="space-y-1 p-3 bg-emerald-950/40 rounded-lg border border-emerald-500/30">
                      <span className="text-[10px] font-mono text-emerald-300 block">NODE 03</span>
                      <span className="text-xs font-bold text-white block">보험 연계 솔루션</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="text-[11px] font-mono text-emerald-300/70">NON-MEDICAL CONTINUOUS CARE</span>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Corporate Slimmer CTA Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-white/50">
              * Phase {currentStory.num} 상세 솔루션 정보는 아래 개별 섹션에서 다뤄집니다.
            </span>
            <a
              href={currentStory.link}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#37B7FF] hover:text-white transition-colors duration-200 group"
            >
              <span>{currentStory.stageTitle} 자세히 보기</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}





