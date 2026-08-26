import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const flowNodes = [
  {
    id: 'data',
    num: '01',
    title: 'DATA',
    subLabel: 'Data Ingestion',
    koreanMeaning: '엔터프라이즈 운영 및 트랜잭션 수집 레이어',
    metadata: 'Structured · Operational',
  },
  {
    id: 'context',
    num: '02',
    title: 'CONTEXT',
    subLabel: 'Context Structuring',
    koreanMeaning: '수집된 데이터를 실제 비즈니스 맥락 및 도메인 규칙과 연동',
    metadata: 'Business Rules · Workflow',
  },
  {
    id: 'ai-core',
    num: '03',
    title: 'CLARION AI CORE',
    subLabel: 'Intelligence Engine',
    koreanMeaning: '현장 노하우를 AI 예측 모델 및 지능형 자동화 로직으로 변환',
    metadata: 'Custom Models · Prediction',
    isCenterpiece: true,
  },
  {
    id: 'action',
    num: '04',
    title: 'ACTION',
    subLabel: 'Value Execution',
    koreanMeaning: 'AI 도출 지능을 자동화된 의사결정과 실제 시스템 실행으로 연결',
    metadata: 'Automation · Decision',
  },
]

export default function GrowthTechnology() {
  const [activeFlowNode, setActiveFlowNode] = useState(flowNodes[2]) // Default: CLARION AI CORE

  return (
    <section
      id="growth-technology"
      className="fullscreen-section bg-[#07152B] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle Fine Grid Texture (10% opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container-main max-w-7xl lg:max-w-[1320px] space-y-6 lg:space-y-7 relative z-10 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">
        
        {/* 1. Deep Navy Section Header (Scaled Headline & High Contrast) */}
        <div className="border-b border-white/10 pb-4 text-left">
          <span className="inline-flex items-center gap-2 text-[#37B7FF] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#37B7FF] pb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#37B7FF]" />
            GROWTH TECHNOLOGY · INTELLIGENCE EXPANSION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-tight tracking-tight pt-1.5">
            From Data to Action.
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-semibold pt-1">
            현장의 경험과 데이터를 지능형 모델 및 로직으로 확장합니다.
          </p>
        </div>

        {/* 2. PRIMARY ARCHITECTURE CANVAS: Expanded Pipeline Width & AI Core Emphasis */}
        <div className="py-2 space-y-6 relative text-left">
          
          {/* Pipeline Header Indicator */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#37B7FF]" />
              <span className="text-xs font-mono font-bold text-[#37B7FF] uppercase tracking-wider">
                CONNECTED INTELLIGENCE PIPELINE
              </span>
            </div>
            <span className="text-xs font-mono text-white/60 hidden sm:inline-block">
              DATA ➔ CONTEXT ➔ CLARION AI CORE ➔ ACTION
            </span>
          </div>

          {/* Desktop Horizontal Intelligence Pipeline Rail (Expanded Width & Non-Clipping Metadata) */}
          <div className="hidden lg:block relative py-8">

            {/* Continuous Flow Connection Line */}
            <div className="absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-white/20 z-0">
              <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-transparent via-[#37B7FF] to-transparent animate-[pulseLine_3s_linear_infinite]" />
            </div>

            <div className="grid grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {flowNodes.map((node) => {
                const isSelected = activeFlowNode.id === node.id
                const isCenter = node.isCenterpiece

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveFlowNode(node)}
                    onClick={() => setActiveFlowNode(node)}
                    className="group cursor-pointer flex flex-col items-center text-center space-y-3.5 px-2 py-1"
                  >
                    {/* Flow Node Indicator Dot (AI Core Scaled Dot) */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                        isCenter
                          ? isSelected
                            ? 'bg-[#37B7FF] text-[#07152B] scale-135 shadow-lg ring-4 ring-[#37B7FF]/40'
                            : 'bg-[#1265E5] text-white ring-2 ring-[#37B7FF]/60'
                          : isSelected
                          ? 'bg-[#1265E5] text-white scale-115 shadow-md ring-4 ring-[#37B7FF]/30'
                          : 'bg-[#0B1F3A] border-2 border-white/30 text-white/60 group-hover:border-[#37B7FF] group-hover:text-white'
                      }`}
                    >
                      {node.num}
                    </div>

                    {/* Node Title & Simplified Metadata (No Clipping!) */}
                    <div className="space-y-1">
                      <span className={`text-[11px] font-mono font-bold tracking-wider block ${
                        isCenter ? 'text-[#37B7FF]' : isSelected ? 'text-[#37B7FF]' : 'text-white/60'
                      }`}>
                        STAGE {node.num}
                      </span>
                      <h3
                        className={`text-xs sm:text-sm font-extrabold tracking-tight leading-snug transition-colors ${
                          isCenter
                            ? 'text-white text-sm sm:text-base font-black'
                            : isSelected
                            ? 'text-[#37B7FF]'
                            : 'text-white/90'
                        }`}
                      >
                        {node.title}
                      </h3>
                      <p className="text-[11px] font-mono text-white/60 whitespace-nowrap">
                        {node.metadata}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Vertical Intelligence Pipeline Flow */}
          <div className="lg:hidden space-y-3 relative py-2">
            <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-white/20 z-0" />

            {flowNodes.map((node) => {
              const isSelected = activeFlowNode.id === node.id
              const isCenter = node.isCenterpiece

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveFlowNode(node)}
                  className="relative z-10 cursor-pointer flex items-start gap-3.5 pl-1.5 text-left"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0 mt-0.5 ${
                      isCenter
                        ? 'bg-[#37B7FF] text-[#07152B] ring-2 ring-[#37B7FF]/40'
                        : isSelected
                        ? 'bg-[#1265E5] text-white ring-2 ring-[#37B7FF]/30'
                        : 'bg-[#0B1F3A] border-2 border-white/30 text-white/60'
                    }`}
                  >
                    {node.num}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className={`text-xs font-extrabold ${isCenter ? 'text-[#37B7FF]' : isSelected ? 'text-white' : 'text-white/80'}`}>
                      {node.title}
                    </h3>
                    <p className="text-[11px] text-white/70 font-normal">{node.koreanMeaning}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Flow Node 1-Line Clean Dynamic Description */}
          <div className="py-3.5 border-t border-b border-white/10 flex items-center justify-between text-left">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-mono font-extrabold text-[#37B7FF] uppercase tracking-wider shrink-0">
                {activeFlowNode.num} {activeFlowNode.title} —
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                {activeFlowNode.koreanMeaning}
              </span>
            </div>
            <span className="text-xs font-mono text-white/60 hidden sm:inline-block shrink-0">
              {activeFlowNode.metadata}
            </span>
          </div>

        </div>

        {/* 3. Growth Capabilities Inline Summary (High Contrast & Readable) */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-extrabold text-[#37B7FF] uppercase tracking-wider shrink-0">
              GROWTH CAPABILITIES:
            </span>
            <span className="text-xs sm:text-sm font-bold text-white">
              AI Transformation <span className="text-white/40 px-1.5">/</span> Data Intelligence <span className="text-white/40 px-1.5">/</span> Platform & Automation <span className="text-white/40 px-1.5">/</span> GovTech
            </span>
          </div>
          <a
            href="#track-record"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#37B7FF] hover:text-white transition-colors duration-200 shrink-0 group"
          >
            <span>지능형 기술 파이프라인 자세히 보기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}




