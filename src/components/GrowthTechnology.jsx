import React, { useState } from 'react'
import {
  Database,
  Workflow,
  Cpu,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Network,
  Building,
  Layers,
  ChevronRight
} from 'lucide-react'

const flowNodes = [
  {
    id: 'data',
    num: '01',
    title: 'DATA',
    subLabel: 'Data Ingestion',
    koreanMeaning: '현장과 시스템에서 발생하는 데이터',
    metadata: 'Enterprise Data · Operational Data · User Data',
    icon: Database,
  },
  {
    id: 'context',
    num: '02',
    title: 'CONTEXT',
    subLabel: 'Context Structuring',
    koreanMeaning: '데이터를 실제 업무 맥락과 연결',
    metadata: 'Business Context · Process Context · Operational Context',
    icon: Workflow,
  },
  {
    id: 'ai-core',
    num: '03',
    title: 'CLARION AI CORE',
    subLabel: 'Intelligence Engine',
    koreanMeaning: '현장의 노하우를 지능형 모델 및 로직으로 변환',
    metadata: 'AI Model · Data Intelligence · Automation Logic · Decision Support',
    icon: Cpu,
    isCenterpiece: true,
  },
  {
    id: 'action',
    num: '04',
    title: 'ACTION',
    subLabel: 'Value Execution',
    koreanMeaning: 'AI 분석이 실제 업무와 실행으로 연결되는 단계',
    metadata: 'Insight · Automation · Decision Support · Service Integration',
    icon: ArrowRight,
  },
]

const growthDomains = [
  {
    id: 'ait',
    title: 'AI Transformation',
    sub: '기업 업무와 시스템에 AI 적용',
    desc: '엔터프라이즈 업무 및 프로세스에 맞춤형 AI 모델과 지능형 분석 로직 적용',
    icon: Cpu,
  },
  {
    id: 'data-intel',
    title: 'Data Intelligence',
    sub: '운영 데이터를 분석 가능한 정보로 전환',
    desc: '분산된 기업 레거시 데이터와 스트리밍 이종 데이터 파이프라인 수립 및 표준화',
    icon: Database,
  },
  {
    id: 'platform-auto',
    title: 'Platform & Automation',
    sub: '반복 업무와 서비스 흐름을 플랫폼화·자동화',
    desc: '반복적인 IT/SI 절차와 수작업 업무를 지능형 워크플로우 플랫폼으로 전환',
    icon: Network,
  },
  {
    id: 'govtech',
    title: 'GovTech',
    sub: '공공·행정 환경의 디지털 전환 지원',
    desc: '공공·행정기관의 엄격한 보안 요건에 부합하는 디지털 기술 아키텍처 지원',
    icon: Building,
  },
]

export default function GrowthTechnology() {
  const [selectedDomain, setSelectedDomain] = useState(growthDomains[0])
  const [activeFlowNode, setActiveFlowNode] = useState(flowNodes[2]) // Default: Clarion AI Core

  return (
    <section
      id="growth-technology"
      className="fullscreen-section bg-[#07152B] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Fine Technical Architecture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Dynamic Background Atmosphere Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl bg-[#1265E5]" />
      </div>

      <div className="container-main relative z-10 space-y-5 lg:space-y-6 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">



        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-block px-3 py-0.5 bg-[#37B7FF]/15 text-[#37B7FF] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#37B7FF]/30">
              GROWTH TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              From Data to Action.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/70 max-w-md font-medium leading-relaxed">
            현장의 경험과 데이터를 <br className="hidden sm:inline" />
            지능형 기술자산으로 전환합니다.
          </p>
        </div>

        {/* PRIMARY HERO VISUAL: Connected Intelligence Pipeline (75% Visual Weight) */}
        <div className="bg-[#0B1F3A]/90 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-white/15 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Pipeline Canvas Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#37B7FF] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase tracking-wider">
                CONNECTED INTELLIGENCE PIPELINE
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/50 hidden sm:inline-block">
              DATA ➔ CONTEXT ➔ AI CORE ➔ ACTION
            </span>
          </div>

          {/* Desktop Flow Diagram (Horizontal Intelligence Stream) */}
          <div className="hidden lg:block relative py-3">

            
            {/* Connected Track Line */}
            <div className="absolute top-[58px] left-[8%] right-[8%] h-[2px] bg-white/15 z-0">
              {/* Subtle Animated Cyan Pulse Line */}
              <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-transparent via-[#37B7FF] to-transparent animate-[pulseLine_3s_linear_infinite]" />
            </div>

            <div className="grid grid-cols-4 gap-5 relative z-10 items-stretch">
              {flowNodes.map((node) => {
                const Icon = node.icon
                const isSelected = activeFlowNode.id === node.id
                const isCenter = node.isCenterpiece

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveFlowNode(node)}
                    onClick={() => setActiveFlowNode(node)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between space-y-4 border ${
                      isCenter
                        ? isSelected
                          ? 'bg-gradient-to-b from-[#1265E5] via-[#0D4EA8] to-[#0B1F3A] text-white border-[#37B7FF] shadow-2xl scale-[1.04] ring-2 ring-[#37B7FF]/50'
                          : 'bg-[#1265E5]/40 text-white border-[#37B7FF]/60 hover:bg-[#1265E5]/60 hover:scale-[1.02]'
                        : isSelected
                        ? 'bg-[#1265E5]/30 text-white border-[#37B7FF]/80 shadow-xl scale-[1.02]'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Step & Icon Header */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${
                          isCenter
                            ? 'bg-[#37B7FF] text-[#07152B] font-black'
                            : isSelected
                            ? 'bg-[#37B7FF]/20 text-[#37B7FF]'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {node.num} {node.title}
                      </span>
                      <Icon
                        className={`w-5 h-5 ${
                          isCenter ? 'text-[#37B7FF]' : isSelected ? 'text-[#37B7FF]' : 'text-white/60'
                        }`}
                      />
                    </div>

                    {/* Node Title & Korean Meaning */}
                    <div className="space-y-1">
                      <h3
                        className={`font-black tracking-tight leading-snug ${
                          isCenter ? 'text-base sm:text-lg text-white' : 'text-sm text-white/90'
                        }`}
                      >
                        {node.title}
                      </h3>
                      <p className="text-xs text-white/80 font-bold leading-snug">
                        {node.koreanMeaning}
                      </p>
                    </div>

                    {/* Compact Metadata Tag */}
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-[10px] font-mono text-white/50 truncate">
                        {node.metadata}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Flow Diagram (Vertical Intelligence Flow) */}
          <div className="lg:hidden space-y-3 relative py-2">
            <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-white/15 z-0" />

            {flowNodes.map((node) => {
              const Icon = node.icon
              const isSelected = activeFlowNode.id === node.id
              const isCenter = node.isCenterpiece

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveFlowNode(node)}
                  className={`relative z-10 cursor-pointer rounded-xl p-4 transition-all duration-300 border flex items-center justify-between gap-3 ${
                    isCenter
                      ? 'bg-gradient-to-r from-[#1265E5] to-[#0B1F3A] text-white border-[#37B7FF] shadow-lg ring-1 ring-[#37B7FF]/40'
                      : isSelected
                      ? 'bg-[#1265E5]/30 text-white border-[#37B7FF]/60'
                      : 'bg-white/5 text-white/80 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                        isCenter ? 'bg-[#37B7FF] text-[#07152B]' : 'bg-white/10 text-[#37B7FF]'
                      }`}
                    >
                      {node.num}
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 shrink-0 text-[#37B7FF]" />
                        <h3 className="text-xs font-bold truncate">{node.title}</h3>
                      </div>
                      <p className="text-[11px] text-white/80 truncate font-semibold">
                        {node.koreanMeaning}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold shrink-0 px-2 py-1 rounded ${isCenter ? 'bg-[#37B7FF] text-[#07152B]' : 'text-white/50'}`}>
                    {isCenter ? 'AI CORE' : 'STAGE'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Active Flow Node Specification Detail */}
          <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#37B7FF] text-[#07152B] text-xs font-mono font-black rounded shrink-0">
                {activeFlowNode.num} {activeFlowNode.title}
              </span>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                {activeFlowNode.koreanMeaning}
              </p>
            </div>
            <span className="text-[11px] font-mono text-white/50 shrink-0 self-end sm:self-auto truncate max-w-xs">
              {activeFlowNode.metadata}
            </span>
          </div>

        </div>

        {/* GROWTH DOMAINS (Clean Keyword Layer / 25% Visual Weight) */}
        <div className="bg-[#0B1F3A]/70 rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-extrabold text-[#37B7FF] tracking-widest uppercase">
              GROWTH DOMAINS
            </span>
            <span className="text-[11px] font-mono text-white/50">
              4 EXPANSION AREAS
            </span>
          </div>

          {/* Domain Keyword Chips / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {growthDomains.map((domain) => {
              const Icon = domain.icon
              const isSelected = selectedDomain.id === domain.id

              return (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 space-y-2 ${
                    isSelected
                      ? 'bg-[#1265E5]/40 border-[#37B7FF] text-white shadow-md ring-1 ring-[#37B7FF]/40'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#37B7FF]' : 'text-white/60'}`} />
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#37B7FF]' : 'text-white/30'}`} />
                  </div>
                  <h4 className="text-xs font-bold text-white">{domain.title}</h4>
                  <p className="text-[11px] text-white/80 font-medium leading-snug">
                    {domain.sub}
                  </p>
                </div>
              )
            })}
          </div>

          {/* 1-Line Domain Detail Reveal Box */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-extrabold text-[#37B7FF] uppercase shrink-0">
                {selectedDomain.title}
              </span>
              <p className="text-white/90 font-normal leading-snug">
                {selectedDomain.desc}
              </p>
            </div>
            <span className="text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline-block">
              EXPANSION DOMAIN
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}


