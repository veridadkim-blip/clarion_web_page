import React, { useState, useEffect } from 'react'
import {
  UserCheck,
  Shield,
  Server,
  Cloud,
  Database,
  Lock,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Activity,
  Layers,
  Cpu,
  Building2,
  Workflow
} from 'lucide-react'

const archNodes = [
  {
    id: 'user',
    step: '01',
    title: 'USER',
    subTitle: 'User Endpoint Layer',
    keywords: 'Accessible · Responsive',
    desc: '사용자 경험과 엔터프라이즈 채널을 매끄럽게 연결하는 접점 레이어',
    icon: UserCheck,
  },
  {
    id: 'financial',
    step: '02',
    title: 'FINANCIAL IT',
    subTitle: 'Financial Compliance Layer',
    keywords: 'Secure · Stable · Connected',
    desc: '금융 업무의 안정성과 연결성을 고려한 시스템 구축',
    icon: Building2,
  },
  {
    id: 'enterprise',
    step: '03',
    title: 'ENTERPRISE SYSTEM',
    subTitle: 'Core Enterprise Layer',
    keywords: 'Integrated · Scalable',
    desc: '코어 뱅킹·엔터프라이즈 자산 간 통합 프로세스 연동',
    icon: Server,
  },
  {
    id: 'cloud',
    step: '04',
    title: 'CLOUD & APPLICATION',
    subTitle: 'Orchestration Layer',
    keywords: 'Agile · Orchestrated',
    desc: '유연하고 확장 가능한 클라우드 인프라 및 애플리케이션',
    icon: Cloud,
  },
  {
    id: 'data',
    step: '05',
    title: 'DATA',
    subTitle: 'Data Intelligence Layer',
    keywords: 'Real-time · Reliable',
    desc: '운영 데이터를 실시간으로 연결·활용하는 데이터 기반 구조',
    icon: Database,
  },
  {
    id: 'secure',
    step: '06',
    title: 'SECURE OPERATION',
    subTitle: 'Security & Ops Layer',
    keywords: 'Robust · Compliant',
    desc: '안정적 운영과 보안·컴플라이언스를 고려한 운영 체계',
    icon: Lock,
  },
]

const coreDomains = [
  {
    num: '01',
    title: 'Enterprise IT & SI',
    icon: Cpu,
    desc: '엔터프라이즈 대규모 시스템 구축 및 아키텍처 구현',
  },
  {
    num: '02',
    title: 'Financial IT',
    icon: Shield,
    desc: '금융·보험 환경의 차세대 IT 및 트랜잭션 수립',
  },
  {
    num: '03',
    title: 'Cloud Integration',
    icon: Layers,
    desc: '하이브리드·멀티 클라우드 전환 및 인프라 통합',
  },
  {
    num: '04',
    title: 'Software Development',
    icon: Workflow,
    desc: '비즈니스 특화 애플리케이션 및 유연한 솔루션 개발',
  },
]

export default function CoreBusiness() {
  const [activeNode, setActiveNode] = useState(archNodes[1])

  return (
    <section id="core-business" className="fullscreen-section bg-[#F8FAFC] border-b border-clarion-line/40 text-[#142033] relative overflow-hidden">
      <div className="container-main space-y-5 lg:space-y-6 relative z-10 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">




        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-clarion-line/40 pb-5">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-block px-3 py-0.5 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#1265E5]/20">
              CORE BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-[#142033]">
              현장에서 검증되는 <br />
              <span className="text-[#1265E5]">엔터프라이즈 IT 실행력</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-clarion-muted max-w-md font-medium leading-relaxed">
            금융·보험 및 엔터프라이즈 환경에서 <br className="hidden sm:inline" />
            안정적인 시스템 구축과 연결 운영을 수행합니다.
          </p>
        </div>

        {/* PRIMARY VISUAL: Integrated Enterprise Architecture Flow Diagram */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-clarion-line/60 shadow-lg space-y-6 relative overflow-hidden">
          
          {/* Architecture Canvas Bar */}
          <div className="flex items-center justify-between border-b border-clarion-line/40 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#1265E5] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">
                ENTERPRISE ARCHITECTURE FLOW
              </span>
            </div>
            <span className="text-[10px] font-mono text-clarion-muted hidden sm:inline-block">
              SYSTEM LAYER DIAGRAM
            </span>
          </div>

          {/* Desktop Flow Diagram (Horizontal Stream: USER -> FINANCIAL IT -> ENTERPRISE SYSTEM -> CLOUD & APPLICATION -> DATA -> SECURE OPERATION) */}
          <div className="hidden lg:block relative py-3">

            
            {/* Technical Flow Track Line */}
            <div className="absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-clarion-line/60 z-0">
              {/* Moving Pulse Animation */}
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-transparent via-[#1265E5] to-transparent animate-[pulseLine_3s_linear_infinite]" />
            </div>

            <div className="grid grid-cols-6 gap-3 relative z-10">
              {archNodes.map((node, index) => {
                const Icon = node.icon
                const isSelected = activeNode.id === node.id
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                    className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between space-y-4 border ${
                      isSelected
                        ? 'bg-[#07152B] text-white border-[#1265E5] shadow-xl scale-[1.03] ring-2 ring-[#1265E5]/30'
                        : 'bg-[#F8FAFC] text-[#142033] border-clarion-line/60 hover:bg-white hover:border-[#1265E5]/40 hover:shadow-md'
                    }`}
                  >
                    {/* Top Step & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-[#1265E5] text-white' : 'bg-clarion-line/40 text-clarion-muted'
                        }`}
                      >
                        {node.step}
                      </span>
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isSelected ? 'text-[#37B7FF]' : 'text-[#1265E5]'
                        }`}
                      />
                    </div>

                    {/* Node Title & Metadata */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-black tracking-tight leading-snug">
                        {node.title}
                      </h3>
                      <p className={`text-[10px] font-mono truncate ${isSelected ? 'text-white/70' : 'text-clarion-muted'}`}>
                        {node.keywords}
                      </p>
                    </div>

                    {/* Connection Indicator Arrow */}
                    <div className="flex justify-end pt-1">
                      {index < archNodes.length - 1 && (
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                            isSelected ? 'text-[#37B7FF]' : 'text-clarion-line'
                          }`}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Flow Diagram (Vertical Technical Architecture Flow) */}
          <div className="lg:hidden space-y-3 relative py-2">
            <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-clarion-line/60 z-0" />

            {archNodes.map((node) => {
              const Icon = node.icon
              const isSelected = activeNode.id === node.id
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`relative z-10 cursor-pointer rounded-xl p-4 transition-all duration-300 border flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#07152B] text-white border-[#1265E5] shadow-lg ring-1 ring-[#1265E5]/40'
                      : 'bg-[#F8FAFC] text-[#142033] border-clarion-line/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                        isSelected ? 'bg-[#1265E5] text-white' : 'bg-white border border-clarion-line text-[#1265E5]'
                      }`}
                    >
                      {node.step}
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#37B7FF]' : 'text-[#1265E5]'}`} />
                        <h3 className="text-xs font-bold truncate">{node.title}</h3>
                      </div>
                      <p className={`text-[10px] font-mono truncate ${isSelected ? 'text-white/70' : 'text-clarion-muted'}`}>
                        {node.keywords}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold shrink-0 px-2 py-1 rounded ${isSelected ? 'bg-white/10 text-[#37B7FF]' : 'text-clarion-muted'}`}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Active Node 1-Line Detail Reveal */}
          <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-clarion-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#1265E5] text-white text-xs font-mono font-black rounded shrink-0">
                {activeNode.step} {activeNode.title}
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#142033] leading-snug">
                {activeNode.desc}
              </p>
            </div>
            <span className="text-[11px] font-mono text-clarion-muted shrink-0 self-end sm:self-auto">
              {activeNode.keywords}
            </span>
          </div>

        </div>

        {/* CORE DOMAINS (Clean Horizontal Strip) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-clarion-line/60 space-y-4">
          <div className="flex items-center justify-between border-b border-clarion-line/40 pb-3">
            <span className="text-xs font-mono font-extrabold text-[#1265E5] tracking-widest uppercase">
              CORE DOMAINS
            </span>
            <span className="text-[11px] font-mono text-clarion-muted">
              4 FOCUS AREAS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreDomains.map((domain) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.title}
                  className="p-4 bg-[#F8FAFC] rounded-xl border border-clarion-line/60 space-y-2 hover:bg-white hover:border-[#1265E5]/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold text-[#1265E5]">
                      {domain.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#1265E5]/80" />
                  </div>
                  <h4 className="text-xs font-bold text-[#142033]">{domain.title}</h4>
                  <p className="text-[11px] text-clarion-muted font-normal leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}



