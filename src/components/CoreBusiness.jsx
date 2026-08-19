import React, { useState } from 'react'
import { Shield, Cloud, Code, Database, UserCheck, Server, Sparkles } from 'lucide-react'

const archNodes = [
  {
    id: 'user',
    step: '01',
    title: 'USER',
    sub: 'User Endpoint',
    keywords: 'Accessible. Responsive.',
    desc: '금융·보험 고객사 및 업무 사용자의 엔드포인트 접점 인터페이스 설계',
    icon: UserCheck,
    color: 'bg-white text-[#1265E5] border-2 border-[#1265E5]',
  },
  {
    id: 'financial',
    step: '02',
    title: 'FINANCIAL IT',
    sub: 'Financial Compliance',
    keywords: 'Secure. Stable. Connected.',
    desc: '금융·보험권의 엄격한 보안 컴플라이언스 및 대규모 트랜잭션 수립',
    icon: Shield,
    color: 'bg-[#07152B] text-white border-white/20',
  },
  {
    id: 'enterprise',
    step: '03',
    title: 'ENTERPRISE SYSTEM',
    sub: 'Enterprise SI',
    keywords: 'Integrated. Scalable.',
    desc: '대규모 기업 레거시 시스템 및 코어 업무 프로세스 통합 아키텍처',
    icon: Server,
    color: 'bg-[#1265E5] text-white border-blue-400/40',
  },
  {
    id: 'cloud',
    step: '04',
    title: 'CLOUD & APPLICATION',
    sub: 'Hybrid Cloud',
    keywords: 'Agile. Orchestrated.',
    desc: '멀티·하이브리드 클라우드 환경과 애플리케이션의 유기적 결합',
    icon: Cloud,
    color: 'bg-[#0B1F3A] text-[#37B7FF] border-[#37B7FF]/40',
  },
  {
    id: 'data',
    step: '05',
    title: 'DATA',
    sub: 'Pipeline & Storage',
    keywords: 'Real-time. Reliable.',
    desc: '실시간 이종 데이터 가공, 스트리밍 파이프라인 및 통합 데이터베이스',
    icon: Database,
    color: 'bg-[#1265E5]/10 text-[#1265E5] border-[#1265E5]/30',
  },
  {
    id: 'secure',
    step: '06',
    title: 'SECURE OPERATION',
    sub: '24/7 Monitoring',
    keywords: 'Robust. Compliant.',
    desc: '시스템 무결성 검증, 암호화 및 24/7 금융 수준의 안정적 운영 체계',
    icon: Code,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
  },
]

const coreDomains = [
  { num: '01', title: 'Enterprise IT & SI', keyword: 'Robust. Integrated. Enterprise.', desc: '대규모 기업 환경의 업무 프로세스 설계, 차세대 시스템 구축 및 안정적 유지보수 운영' },
  { num: '02', title: 'Financial IT', keyword: 'Secure. Stable. Connected.', desc: '금융·보험권의 엄격한 보안 요건과 고성능 트랜잭션을 처리하는 핵심 솔루션 개발' },
  { num: '03', title: 'Cloud Integration', keyword: 'Hybrid. Scalable. Modern.', desc: '하이브리드·멀티 클라우드 아키텍처 및 클라우드 네이티브 애플리케이션 통합' },
  { num: '04', title: 'Software Development', keyword: 'Custom. Precise. Reliable.', desc: '기업 고유의 요구사항에 최적화된 맞춤형 소프트웨어 엔지니어링 및 데이터 통합' },
]

export default function CoreBusiness() {
  const [activeNode, setActiveNode] = useState(archNodes[1])
  const [activeDomain, setActiveDomain] = useState(coreDomains[1])

  return (
    <section id="core-business" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            CORE BUSINESS · 회사의 현재
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            현장에서 검증되는 <br />
            <span className="text-[#1265E5]">엔터프라이즈 IT 실행력</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed max-w-2xl">
            금융·보험 및 엔터프라이즈 IT 현장의 아키텍처를 이해하고,
            정교한 시스템 구축과 안정적인 연계 운영으로 신뢰를 증명합니다.
          </p>
        </div>

        {/* Primary Visual: Precise Enterprise Architecture Flow Diagram */}
        <div className="bg-[#F8FAFC] p-8 lg:p-12 rounded-3xl border border-clarion-line shadow-sm space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/80 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">SYSTEM ARCHITECTURE VISUAL</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#142033]">ENTERPRISE ARCHITECTURE FLOW</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1265E5] bg-white px-3.5 py-1.5 rounded-lg border border-clarion-line/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1265E5] animate-pulse" />
              <span>DATA FLOW ACTIVE</span>
            </div>
          </div>

          {/* Flow Visual Nodes (USER -> FINANCIAL IT -> ENTERPRISE SYSTEM -> CLOUD & APPLICATION -> DATA -> SECURE OPERATION) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {archNodes.map((node, index) => {
              const Icon = node.icon
              const isSelected = activeNode.id === node.id
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onClick={() => setActiveNode(node)}
                  className={`p-4.5 rounded-2xl ${node.color} shadow-xs cursor-pointer transition-all duration-300 space-y-3 relative flex flex-col justify-between ${
                    isSelected ? 'ring-4 ring-[#1265E5]/30 scale-105 shadow-md' : 'hover:scale-102 opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold opacity-80">{node.step}</span>
                    <Icon className="w-4 h-4 opacity-90" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-extrabold tracking-tight leading-snug">{node.title}</h4>
                    <p className="text-[10px] font-mono opacity-80">{node.keywords}</p>
                  </div>
                  <div className="text-[9px] font-mono opacity-60 pt-1 border-t border-current/20">
                    HOVER TO REVEAL
                  </div>
                </div>
              )
            })}
          </div>

          {/* Node Detail Reveal */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-clarion-line/80 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#1265E5]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase">{activeNode.step} · {activeNode.title} ARCHITECTURE DETAIL</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#142033]">{activeNode.sub}</h4>
            <p className="text-xs sm:text-sm text-[#68758A] leading-relaxed font-normal max-w-3xl">
              {activeNode.desc}
            </p>
          </div>
        </div>

        {/* 4 Core Business Domains (Minimal Title + Keywords default, Reveal on Interaction) */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#142033]">4대 핵심 사업 영역 (Core Domains)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreDomains.map((domain) => {
              const isSelected = activeDomain.title === domain.title
              return (
                <div
                  key={domain.title}
                  onMouseEnter={() => setActiveDomain(domain)}
                  onClick={() => setActiveDomain(domain)}
                  className={`p-6 rounded-2xl border transition-all duration-300 space-y-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#07152B] text-white border-[#1265E5] shadow-lg ring-2 ring-[#1265E5]/30'
                      : 'bg-[#F8FAFC] text-[#142033] border-clarion-line/80 hover:bg-white hover:border-[#1265E5]/40'
                  }`}
                >
                  <span className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded ${isSelected ? 'bg-[#1265E5] text-white' : 'bg-[#1265E5]/10 text-[#1265E5]'}`}>
                    {domain.num}
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold">{domain.title}</h4>
                    <p className={`text-xs font-mono font-semibold pt-1 ${isSelected ? 'text-[#37B7FF]' : 'text-[#68758A]'}`}>
                      {domain.keyword}
                    </p>
                  </div>
                  <p className={`text-xs leading-relaxed transition-opacity duration-200 ${isSelected ? 'text-white/90' : 'text-[#68758A]'}`}>
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

