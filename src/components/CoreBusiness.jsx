import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const archNodes = [
  {
    id: 'user',
    step: '01',
    title: 'USER',
    subTitle: 'User Endpoint Layer',
    keywords: 'Accessible · Responsive',
    desc: '사용자 경험과 엔터프라이즈 채널을 매끄럽게 연결하는 접점 레이어',
  },
  {
    id: 'financial',
    step: '02',
    title: 'FINANCIAL IT',
    subTitle: 'Financial Compliance Layer',
    keywords: 'Secure · Stable · Connected',
    desc: '금융 업무의 높은 안정성과 보안 지침을 수용하는 트랜잭션 수립',
  },
  {
    id: 'enterprise',
    step: '03',
    title: 'ENTERPRISE SYSTEM',
    subTitle: 'Core Enterprise Layer',
    keywords: 'Integrated · Scalable',
    desc: '코어 뱅킹·엔터프라이즈 자산 간 통합 프로세스 연동',
  },
  {
    id: 'cloud',
    step: '04',
    title: 'CLOUD & APPLICATION',
    subTitle: 'Orchestration Layer',
    keywords: 'Agile · Orchestrated',
    desc: '유연하고 확장 가능한 클라우드 인프라 및 마이크로서비스 애플리케이션',
  },
  {
    id: 'data',
    step: '05',
    title: 'DATA',
    subTitle: 'Data Intelligence Layer',
    keywords: 'Real-time · Reliable',
    desc: '운영 데이터를 실시간으로 연결·파이프라인화하는 데이터 파운데이션',
  },
  {
    id: 'secure',
    step: '06',
    title: 'SECURE OPERATION',
    subTitle: 'Security & Ops Layer',
    keywords: 'Robust · Compliant',
    desc: '24/7 안정적 운영과 컴플라이언스 준수를 보장하는 보안 통합 관리',
  },
]

export default function CoreBusiness() {
  const [activeNode, setActiveNode] = useState(archNodes[2]) // Default: 03 ENTERPRISE SYSTEM

  return (
    <section id="core-business" className="fullscreen-section bg-[#F8FAFC] border-b border-clarion-line/40 text-[#142033] relative overflow-hidden">
      <div className="container-main max-w-7xl lg:max-w-[1320px] space-y-6 lg:space-y-7 relative z-10 pt-14 lg:pt-[64px] pb-6 lg:pb-8 my-auto">
        
        {/* 1. Section Header (Scaled Headline & Higher Contrast Supporting Copy) */}
        <div className="border-b border-clarion-line/60 pb-4 lg:pb-5 text-left">
          <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5 mb-2 lg:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
            CORE BUSINESS · EXECUTION ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-[#142033] leading-tight tracking-tight pt-1">
            현장에서 검증되는 <span className="text-[#1265E5]">엔터프라이즈 IT 실행력.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#334155] font-semibold leading-[1.52] pt-3 lg:pt-3.5">
            금융·보험 IT와 대형 엔터프라이즈 환경을 아우르는 클라리온의 6단계 수행 아키텍처입니다.
          </p>
        </div>

        {/* 2. PRIMARY ARCHITECTURE CANVAS (Expanded Width & Scaled Architecture Rail) */}
        <div className="py-2 space-y-6 relative text-left">
          
          {/* Architecture Header Indicator */}
          <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1265E5]" />
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">
                ENTERPRISE SYSTEM FLOW
              </span>
            </div>
            <span className="text-xs font-mono text-clarion-muted hidden sm:inline-block">
              END-TO-END EXECUTION PIPELINE
            </span>
          </div>

          {/* Desktop Horizontal Architecture Rail (Scaled Up ~10-12%) */}
          <div className="hidden lg:block relative py-8">

            {/* Continuous Flow Connection Line */}
            <div className="absolute top-[42px] left-[5%] right-[5%] h-[2px] bg-clarion-line/80 z-0">
              <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-transparent via-[#1265E5] to-transparent animate-[pulseLine_3s_linear_infinite]" />
            </div>

            <div className="grid grid-cols-6 gap-3.5 relative z-10">
              {archNodes.map((node) => {
                const isSelected = activeNode.id === node.id
                const isCoreSystem = node.id === 'financial' || node.id === 'enterprise' || node.id === 'cloud'
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                    className="group cursor-pointer flex flex-col items-center text-center space-y-3.5 px-2 py-1"
                  >
                    {/* Flow Node Indicator Dot (Scaled Dot) */}
                    <div
                      className={`w-8.5 h-8.5 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#1265E5] text-white scale-125 shadow-md ring-4 ring-[#1265E5]/20'
                          : 'bg-white border-2 border-clarion-line text-[#68758A] group-hover:border-[#1265E5] group-hover:text-[#1265E5]'
                      }`}
                    >
                      {node.step}
                    </div>

                    {/* Node Title & Metadata (Scaled Typography) */}
                    <div className="space-y-1">
                      <span className={`text-[11px] font-mono font-bold tracking-wider block ${
                        isSelected ? 'text-[#1265E5]' : 'text-clarion-muted'
                      }`}>
                        STEP {node.step}
                      </span>
                      <h3
                        className={`text-xs sm:text-[15px] font-extrabold tracking-tight leading-snug transition-colors ${
                          isSelected
                            ? 'text-[#1265E5] scale-105'
                            : isCoreSystem
                            ? 'text-[#142033] font-black'
                            : 'text-[#334155]'
                        }`}
                      >
                        {node.title}
                      </h3>
                      <p className="text-xs font-mono text-clarion-muted truncate max-w-[155px] mx-auto">
                        {node.keywords}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Vertical Architecture Flow */}
          <div className="lg:hidden space-y-3 relative py-2">
            <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-clarion-line/80 z-0" />

            {archNodes.map((node) => {
              const isSelected = activeNode.id === node.id
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className="relative z-10 cursor-pointer flex items-start gap-3.5 pl-1.5 text-left"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0 mt-0.5 ${
                      isSelected ? 'bg-[#1265E5] text-white ring-2 ring-[#1265E5]/30' : 'bg-white border-2 border-clarion-line text-clarion-muted'
                    }`}
                  >
                    {node.step}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className={`text-xs font-extrabold ${isSelected ? 'text-[#1265E5]' : 'text-[#142033]'}`}>
                      {node.title}
                    </h3>
                    <p className="text-[11px] text-clarion-muted font-normal">{node.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Node 1-Line Clean Dynamic Description (Scaled Typography & Card) */}
          <div className="py-4 px-4 sm:px-5 bg-white rounded-xl border border-clarion-line/60 shadow-xs flex items-center justify-between text-left">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-mono font-extrabold text-[#1265E5] uppercase tracking-wider shrink-0">
                {activeNode.step} {activeNode.title} —
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#142033]">
                {activeNode.desc}
              </span>
            </div>
            <span className="text-xs font-mono text-clarion-muted hidden sm:inline-block shrink-0">
              {activeNode.keywords}
            </span>
          </div>

        </div>

        {/* 3. Core Domains Inline Summary (Scaled Inline Typography) */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-extrabold text-[#1265E5] uppercase tracking-wider shrink-0">
              CORE DOMAINS:
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#142033]">
              Enterprise IT & SI <span className="text-clarion-line px-1.5">/</span> Financial IT <span className="text-clarion-line px-1.5">/</span> Cloud Integration <span className="text-clarion-line px-1.5">/</span> Software Development
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1265E5] hover:text-[#07152B] transition-colors duration-200 shrink-0 group"
          >
            <span>엔터프라이즈 IT 자세히 보기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}






