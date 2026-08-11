import React, { useState } from 'react'
import { Building2, Shield, Cloud, Code, Database, UserCheck, ArrowRight, Sparkles } from 'lucide-react'

const archNodes = [
  {
    id: 'user',
    step: '01',
    title: 'USER / CUSTOMER',
    sub: '접점 시스템',
    desc: '금융·보험 고객사 및 사용자 엔드포인트 접점 시스템 설계',
    icon: UserCheck,
    color: 'bg-white border-[#1265E5] text-[#1265E5]',
  },
  {
    id: 'financial',
    step: '02',
    title: 'FINANCIAL IT',
    sub: '금융 보안 표준',
    desc: '엄격한 금융·보험권 보안 표준 및 고신뢰 트랜잭션 수립',
    icon: Shield,
    color: 'bg-[#07152B] text-white border-white/20',
  },
  {
    id: 'enterprise',
    step: '03',
    title: 'ENTERPRISE SYSTEM',
    sub: '대규모 SI 연동',
    desc: '이종 레거시 시스템 및 업무 프로세스 통합 인터페이스',
    icon: Building2,
    color: 'bg-[#1265E5] text-white border-blue-400/40',
  },
  {
    id: 'cloud',
    step: '04',
    title: 'CLOUD INTEGRATION',
    sub: '하이브리드 인프라',
    desc: '멀티/하이브리드 클라우드와 애플리케이션 유기적 결합',
    icon: Cloud,
    color: 'bg-[#0B1F3A] text-[#37B7FF] border-[#37B7FF]/40',
  },
  {
    id: 'data',
    step: '05',
    title: 'DATA INTELLIGENCE',
    sub: '데이터 파이프라인',
    desc: '실시간 데이터 가공 및 의사결정 파이프라인 형성',
    icon: Database,
    color: 'bg-[#1265E5]/10 text-[#1265E5] border-[#1265E5]/30',
  },
  {
    id: 'secure',
    step: '06',
    title: 'SECURE OPERATION',
    sub: '안정적 운용',
    desc: '무결성 검증 및 24/7 금융 수준의 안정적 운영 체계',
    icon: Code,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
  },
]

export default function CoreBusiness() {
  const [hoveredNode, setHoveredNode] = useState(archNodes[2])

  return (
    <section id="core-business" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            CORE BUSINESS · ENTERPRISE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            현장에서 검증되는 <br />
            <span className="text-[#1265E5]">엔터프라이즈 IT 아키텍처</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed max-w-2xl">
            금융·보험 및 엔터프라이즈 환경의 업무와 시스템을 이해하고,
            정교한 아키텍처 구축과 안정적인 운영으로 연결합니다.
          </p>
        </div>

        {/* Visual Hero Architecture Diagram (Samsung SDS / LG CNS Style Precise Visual Flow) */}
        <div className="bg-[#F8FAFC] p-8 lg:p-12 rounded-3xl border border-clarion-line shadow-sm space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/80 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">PRECISE ARCHITECTURE FLOW</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#142033]">엔터프라이즈 시스템 데이터 연계 아키텍처</h3>
            </div>
            <span className="text-xs font-mono text-[#68758A] bg-white px-3.5 py-1.5 rounded-lg border border-clarion-line/80 shadow-xs">
              TRUST & HIGH RELIABILITY
            </span>
          </div>

          {/* Interactive Architecture Node Flow Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {archNodes.map((node) => {
              const Icon = node.icon
              const isSelected = hoveredNode.id === node.id
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node)}
                  onClick={() => setHoveredNode(node)}
                  className={`p-5 rounded-2xl ${node.color} shadow-sm cursor-pointer transition-all duration-300 space-y-3 relative flex flex-col justify-between ${
                    isSelected ? 'ring-4 ring-[#1265E5]/30 scale-105 shadow-lg' : 'hover:scale-102'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold opacity-80">{node.step}</span>
                    <Icon className="w-4 h-4 opacity-90" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold leading-snug tracking-tight">{node.title}</h4>
                    <p className="text-[10px] opacity-80 font-medium">{node.sub}</p>
                  </div>
                  <div className="text-[9px] font-mono opacity-60 pt-1 border-t border-current/20">
                    HOVER TO REVEAL
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detailed Node Reveal Container */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-clarion-line/80 shadow-xs space-y-3 transition-all duration-300">
            <div className="flex items-center gap-2 text-[#1265E5]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase">{hoveredNode.step} · {hoveredNode.title} REVEAL</span>
            </div>
            <h4 className="text-lg font-bold text-[#142033]">{hoveredNode.sub} 아키텍처 명세</h4>
            <p className="text-sm text-[#68758A] leading-relaxed font-normal max-w-3xl">
              {hoveredNode.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
