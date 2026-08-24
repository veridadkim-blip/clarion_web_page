import React, { useState } from 'react'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const portfolioStories = [
  {
    id: 'now',
    num: '01',
    phase: 'NOW',
    category: 'CORE BUSINESS',
    title: '현재 수행 기반 · 엔터프라이즈 IT & SI',
    slogan: '현장에서 검증되는 높은 신뢰성과 실체 있는 실행력',
    bgColor: 'bg-white border-2 border-[#1265E5] text-[#142033]',
    accentColor: 'text-[#1265E5]',
    badgeBg: 'bg-[#1265E5] text-white',
    btnColor: 'bg-[#1265E5] text-white hover:bg-blue-600',
    link: '#core-business',
    keywords: ['Enterprise IT & SI', 'Financial IT', 'Cloud Integration', 'Software Development'],
    desc: '금융·보험 및 대형 엔터프라이즈 환경에서 레거시 및 신규 시스템을 안정적으로 구축하고 고도의 트랜잭션을 운용하는 클라리온의 현재 핵심 사업 기반입니다.',
  },
  {
    id: 'next',
    num: '02',
    phase: 'NEXT',
    category: 'GROWTH TECHNOLOGY',
    title: '성장 기술 · AI & Data Platform',
    slogan: '현장의 노하우를 지능형 기술 자산으로 전환',
    bgColor: 'bg-gradient-to-br from-[#07152B] via-[#0B1F3A] to-[#050D1A] text-white border border-white/20',
    accentColor: 'text-[#37B7FF]',
    badgeBg: 'bg-[#37B7FF] text-[#07152B]',
    btnColor: 'bg-[#37B7FF] text-[#07152B] font-extrabold hover:bg-cyan-300',
    link: '#growth-technology',
    keywords: ['AI Transformation', 'Data Intelligence', 'Platform & Automation', 'GovTech'],
    desc: '금융·보험 IT 현장에서 축적된 인프라 프로세스를 AI 예측 모델, 대용량 데이터 수집 파이프라인 및 지능형 자동화 플랫폼으로 기술 확장합니다.',
  },
  {
    id: 'future',
    num: '03',
    phase: 'FUTURE',
    category: 'HEALTHCARE INNOVATION',
    title: '전략 신사업 · 비의료 웰니스 & Healthcare AI',
    slogan: '딥테크 기술을 사람의 건강한 일상 경험과 삶에 연결',
    bgColor: 'bg-gradient-to-br from-[#F4FDF9] via-[#E6F8F0] to-[#D5F2E5] text-[#142033] border border-emerald-500/40',
    accentColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-600 text-white',
    btnColor: 'bg-emerald-600 text-white hover:bg-emerald-700',
    link: '#healthcare',
    keywords: ['Healthcare AI (한생AI)', '보험사 연계 웰니스', '생활건강솔루션', '생활건강PT · 태극권'],
    desc: '축적된 AI·데이터 기술과 파트너십을 결합하여 질병 치료가 아닌 일상 습관 관리 중심의 비의료 웰니스 플랫폼 및 건강 솔루션을 선보입니다.',
  },
]

export default function BusinessArchitecture() {
  const [activeTab, setActiveTab] = useState('now')
  const currentStory = portfolioStories.find((s) => s.id === activeTab) || portfolioStories[0]

  return (
    <section id="portfolio" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-24 bg-[#F8FAFC] border-b border-clarion-line transition-colors duration-700">
      <div className="container-main space-y-8 lg:space-y-10 my-auto">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            CLARION BUSINESS PORTFOLIO · SCROLL STORYTELLING
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#142033] leading-tight tracking-tight">
            검증된 실행력에서, <br />
            <span className="text-[#1265E5]">미래 기술로.</span>
          </h2>
        </div>

        {/* Phase Storytelling Navigation Tabs (NOW -> NEXT -> FUTURE) */}
        <div className="grid grid-cols-3 gap-2 bg-white p-1.5 rounded-2xl border border-clarion-line/80 shadow-sm max-w-xl">
          {portfolioStories.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                activeTab === s.id
                  ? 'bg-[#07152B] text-white shadow-md scale-101'
                  : 'text-[#68758A] hover:bg-slate-100 hover:text-[#142033]'
              }`}
            >
              <span className="font-mono text-xs opacity-75">{s.num}</span>
              <span>{s.phase}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Storytelling Stage Canvas Container */}
        <div className={`p-6 sm:p-8 lg:p-10 rounded-3xl transition-all duration-700 shadow-xl space-y-6 relative overflow-hidden ${currentStory.bgColor}`}>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-current/15 pb-5">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-mono font-extrabold opacity-80">{currentStory.num}</span>
              <div>
                <span className={`text-[11px] font-mono font-extrabold tracking-widest uppercase ${currentStory.accentColor}`}>
                  {currentStory.phase} · {currentStory.category}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold pt-0.5">{currentStory.title}</h3>
              </div>
            </div>
            <span className={`text-xs font-mono font-bold px-3.5 py-1 rounded-full uppercase ${currentStory.badgeBg}`}>
              PHASE {currentStory.num}
            </span>
          </div>

          {/* Large Editorial Statement */}
          <div className="space-y-2 max-w-4xl">
            <h4 className={`text-xl sm:text-2xl font-extrabold leading-snug ${currentStory.accentColor}`}>
              "{currentStory.slogan}"
            </h4>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed font-normal">
              {currentStory.desc}
            </p>
          </div>

          {/* Key Focus Domains Grid */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-mono font-bold opacity-75 uppercase tracking-wider">CORE DOMAINS</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {currentStory.keywords.map((kw) => (
                <div key={kw} className="bg-current/10 p-3 rounded-xl border border-current/20 text-xs font-bold flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{kw}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2 flex justify-end">
            <a
              href={currentStory.link}
              className={`inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 ${currentStory.btnColor}`}
            >
              <span>상세 영역 보기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}



