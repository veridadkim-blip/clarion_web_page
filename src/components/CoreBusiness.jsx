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
  { num: '01', title: 'Enterprise IT & SI', keyword: 'Robust. Integrated.' },
  { num: '02', title: 'Financial IT', keyword: 'Secure. Stable.' },
  { num: '03', title: 'Cloud Integration', keyword: 'Hybrid. Scalable.' },
  { num: '04', title: 'Software Development', keyword: 'Custom. Precise.' },
]

export default function CoreBusiness() {
  const [activeNode, setActiveNode] = useState(archNodes[1])

  return (
    <section id="core-business" className="py-24 lg:py-32 bg-white border-b border-clarion-line">
      <div className="container-main space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            CORE BUSINESS · ARCHITECTURE 80% VISUAL
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#142033] leading-tight tracking-tight">
            현장에서 검증되는 <br />
            <span className="text-[#1265E5]">엔터프라이즈 IT 아키텍처</span>
          </h2>
        </div>

        {/* PRIMARY HERO VISUAL: Enterprise Architecture Flow Diagram (80% Visual Weight Centerpiece) */}
        <div className="bg-[#F8FAFC] p-8 lg:p-14 rounded-3xl border border-clarion-line shadow-xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/80 pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">ENTERPRISE SYSTEM ARCHITECTURE</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142033]">DATA & TRANSACTION FLOW DIAGRAM</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1265E5] bg-white px-4 py-2 rounded-lg border border-clarion-line/80 shadow-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1265E5] animate-pulse" />
              <span>LIVE SYSTEM CONNECTED</span>
            </div>
          </div>

          {/* Flow Visual Nodes (USER -> FINANCIAL IT -> ENTERPRISE SYSTEM -> CLOUD & APPLICATION -> DATA -> SECURE OPERATION) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 relative">
            {archNodes.map((node) => {
              const Icon = node.icon
              const isSelected = activeNode.id === node.id
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onClick={() => setActiveNode(node)}
                  className={`p-5 rounded-2xl ${node.color} shadow-sm cursor-pointer transition-all duration-300 space-y-4 relative flex flex-col justify-between ${
                    isSelected ? 'ring-4 ring-[#1265E5]/30 scale-105 shadow-xl z-10' : 'hover:scale-102 opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold opacity-80">{node.step}</span>
                    <Icon className="w-5 h-5 opacity-90" />
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

          {/* Architecture Node Interactive Spec Detail */}
          <div className="bg-white p-7 rounded-2xl border border-clarion-line/80 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#1265E5]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase">{activeNode.step} · {activeNode.title} SPECIFICATION</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#142033]">{activeNode.sub}</h4>
            <p className="text-sm text-[#68758A] leading-relaxed font-normal max-w-3xl">
              {activeNode.desc}
            </p>
          </div>
        </div>

        {/* Minimal 4 Core Domains Bar (20% Weight Downsized Minimal List Bar) */}
        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-clarion-line/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {coreDomains.map((domain) => (
              <div key={domain.title} className="p-3 bg-white rounded-xl border border-clarion-line/60 space-y-1">
                <span className="text-[10px] font-mono font-extrabold text-[#1265E5]">{domain.num} · {domain.keyword}</span>
                <h4 className="text-xs font-bold text-[#142033]">{domain.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


