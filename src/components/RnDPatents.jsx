import React from 'react'
import { ShieldCheck, Cpu, Code2, Database, Network } from 'lucide-react'

const techFlowCards = [
  {
    icon: Network,
    title: '데이터 파이프라인 & 스트리밍',
    tag: 'DATA PIPELINE',
    desc: '분산된 데이터 소스를 실시간으로 통합·가공하여 업무 판단에 필요한 통찰을 제공하는 데이터 연계 파이프라인',
  },
  {
    icon: Cpu,
    title: '실무형 AI 엔진 & 자동화',
    tag: 'AI ENGINE',
    desc: '기업의 기존 업무 흐름 위에 자연스럽게 결합하는 지능형 AI 예측 모델 및 분석 알고리즘',
  },
  {
    icon: Code2,
    title: '클라우드 보안 아키텍처',
    tag: 'CLOUD SECURITY',
    desc: '금융·보험 프로젝트 수행을 통해 체득한 높은 수준의 보안 요건과 클라우드 표준 아키텍처 연구',
  },
]

export default function RnDPatents() {
  return (
    <section id="rnd" className="py-20 lg:py-28 bg-clarion-navy text-white relative">
      {/* Background Soft Glow Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-clarion-blue/15 via-transparent to-transparent pointer-events-none" />

      <div className="container-main relative z-10 space-y-12">
        {/* Section Flow Label & Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-white/10 text-clarion-cyan font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-white/15">
            GROWTH TECHNOLOGY · AI GRAPHIC & DATA FLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            데이터 흐름과 <span className="text-clarion-cyan">AI 그래픽 연계</span>
          </h2>
          <p className="text-clarion-light/85 text-base sm:text-lg font-normal leading-relaxed">
            복잡하게 밀려오는 데이터를 하나의 명확한 흐름으로 다듬고, 
            AI 분석을 통해 기업의 더 나은 의사결정과 판단을 돕습니다.
          </p>
        </div>

        {/* 3 Tech Flow Graphic Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {techFlowCards.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-clarion-deep/90 p-8 rounded-2xl border border-white/15 hover:border-clarion-cyan/40 transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-clarion-blue/25 text-clarion-cyan flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-clarion-cyan bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-clarion-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-clarion-light/70 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-clarion-cyan/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-clarion-cyan" />
                  <span>CONNECTED ARCHITECTURE</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Principle Quote */}
        <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-clarion-cyan shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">기술 개발 철학</h4>
              <p className="text-xs sm:text-sm text-clarion-light/80 font-normal leading-relaxed">
                “기술은 사람을 대체하는 수단이 아니라, 사람과 조직이 더 분명하게 판단하고 더 책임 있게 실행하도록 돕는 도구입니다.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
