import React, { useState } from 'react'
import { Building2, Cpu, HeartPulse, ArrowRight, Check } from 'lucide-react'

const portfolioStories = [
  {
    id: 'now',
    num: '01',
    phase: 'NOW',
    category: 'CORE BUSINESS',
    title: '현재 수행 기반 · 엔터프라이즈 IT & SI',
    slogan: '현장에서 검증되는 높은 신뢰성과 실체 있는 실행력',
    bgColor: 'bg-white border-2 border-[#1265E5]',
    accentColor: 'text-[#1265E5]',
    btnColor: 'bg-[#1265E5] text-white hover:bg-blue-600',
    link: '#core-business',
    keywords: ['Financial IT', 'System Integration', 'Cloud Architecture', 'Software Dev'],
    desc: '금융·보험 및 대형 엔터프라이즈 환경에서 실제 시스템을 안정적으로 구축하고 유지보수하는 클라리온의 현재 핵심 사업 기반입니다.',
  },
  {
    id: 'next',
    num: '02',
    phase: 'NEXT',
    category: 'GROWTH TECHNOLOGY',
    title: '성장 기술 · AI & Data Platform',
    slogan: '현장의經驗을 지능형 기술 자산으로 전진',
    bgColor: 'bg-gradient-to-br from-[#07152B] to-[#0B1F3A] text-white border border-white/20',
    accentColor: 'text-[#37B7FF]',
    btnColor: 'bg-[#37B7FF] text-[#07152B] font-extrabold hover:bg-cyan-300',
    link: '#growth-technology',
    keywords: ['AI Transformation', 'Data Intelligence', 'Automation SaaS', 'GovTech'],
    desc: '금융·보험 IT 구축 현장에서 축적된 프로세스 노하우를 AI 모델 연동, 대용량 데이터 파이프라인 및 자동화 플랫폼으로 기술 고도화합니다.',
  },
  {
    id: 'future',
    num: '03',
    phase: 'FUTURE',
    category: 'HEALTHCARE INNOVATION',
    title: '전략 신사업 · 비의료 웰니스',
    slogan: '기술을 사람의 일상과 건강한 생활 경험에 연결',
    bgColor: 'bg-gradient-to-br from-[#F4FDF9] to-[#E6F8F0] border border-emerald-500/40',
    accentColor: 'text-emerald-700',
    btnColor: 'bg-emerald-600 text-white hover:bg-emerald-700',
    link: '#healthcare',
    keywords: ['한생AI', '보험사 연계 웰니스', '생활건강 리포트', '생활건강PT · 태극권'],
    desc: '금융·보험 파트너 네트워크와 AI 데이터 기술을 결합하여 질병 치료가 아닌 일상속 습관 관리 중심의 비의료 웰니스 플랫폼을 구현합니다.',
  },
]

export default function BusinessArchitecture() {
  const [activeTab, setActiveTab] = useState('now')
  const currentStory = portfolioStories.find((s) => s.id === activeTab) || portfolioStories[0]

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            BUSINESS PORTFOLIO · SCROLL STORYTELLING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            검증된 실행력에서, <br />
            <span className="text-[#1265E5]">미래 기술로.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed max-w-2xl">
            NOW (현재 수행) → NEXT (성장 기술) → FUTURE (전략 신사업)으로 이어지는 클라리온의 시각적 스토리텔링입니다.
          </p>
        </div>

        {/* Phase Timeline Tabs (NOW -> NEXT -> FUTURE) */}
        <div className="grid grid-cols-3 gap-3 bg-white p-2 rounded-2xl border border-clarion-line/80 shadow-xs max-w-3xl">
          {portfolioStories.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === s.id
                  ? 'bg-[#07152B] text-white shadow-md'
                  : 'text-[#68758A] hover:bg-slate-100 hover:text-[#142033]'
              }`}
            >
              <span className="font-mono text-xs opacity-75">{s.num}</span>
              <span>{s.phase}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Storytelling Stage Container */}
        <div className={`p-8 sm:p-12 rounded-3xl transition-all duration-500 shadow-xl space-y-8 ${currentStory.bgColor}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-current/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-mono font-extrabold opacity-80">{currentStory.num}</span>
              <div>
                <span className={`text-xs font-mono font-extrabold tracking-widest uppercase ${currentStory.accentColor}`}>
                  {currentStory.phase} · {currentStory.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold pt-0.5">{currentStory.title}</h3>
              </div>
            </div>
            <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border border-current/20 self-start sm:self-auto">
              PHASE {currentStory.num}
            </span>
          </div>

          {/* Slogan & Description */}
          <div className="space-y-3 max-w-3xl">
            <h4 className={`text-xl sm:text-2xl font-bold ${currentStory.accentColor}`}>
              "{currentStory.slogan}"
            </h4>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed font-normal">
              {currentStory.desc}
            </p>
          </div>

          {/* 4 Core Keywords (No heavy paragraphs, concise keywords!) */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono font-bold opacity-75 uppercase tracking-wider">KEY FOCUS AREAS</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentStory.keywords.map((kw) => (
                <div key={kw} className="bg-current/10 p-3.5 rounded-xl border border-current/20 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{kw}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 flex justify-end">
            <a
              href={currentStory.link}
              className={`inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 ${currentStory.btnColor}`}
            >
              <span>상세 섹션으로 이동</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
