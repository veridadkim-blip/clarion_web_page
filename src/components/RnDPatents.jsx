import React from 'react'
import { ShieldCheck, Cpu, Code2, Lock } from 'lucide-react'

const rndFocusList = [
  {
    icon: Code2,
    title: '개발 생산성 & 자동화',
    desc: 'AI 기반 개발 환경 및 업무 자동화 도구를 적극 도입하여 구축 품질과 속도 향상',
  },
  {
    icon: Cpu,
    title: 'AI · Data 기술 내재화',
    desc: '실무 프로젝트 현장의 요구사항을 기술개발 과제로 전환하여 AI 분석 엔진 고도화',
  },
  {
    icon: Lock,
    title: '금융·보안 아키텍처 연구',
    desc: '금융·보험권의 엄격한 보안 요건과 데이터 처리 표준을 준수하는 클라우드 구조 연구',
  },
]

export default function RnDPatents() {
  return (
    <section id="rnd" className="py-20 lg:py-28 bg-clarion-navy text-white relative">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-white/10 text-clarion-cyan font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-white/15">
            TECHNOLOGY & R&D
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            실용적인 기술개발과 <br />
            <span className="text-clarion-cyan font-mono font-semibold">R&D 인프라 구축</span>
          </h2>
          <p className="text-clarion-light/80 text-base font-normal leading-relaxed">
            ㈜클라리온은 기업부설연구소 설립 및 기술 인증, 특허 출원을 통해
            단순 과장이 아닌 실체 있는 기술 자산을 차근차근 다져나가고 있습니다.
          </p>
        </div>

        {/* 3 Focus Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {rndFocusList.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-clarion-deep/80 p-7 rounded-2xl border border-white/10 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-clarion-blue/20 text-clarion-cyan flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-clarion-light/70 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Core Principles Quote Box */}
        <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-clarion-cyan shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">기술 관리 원칙</h4>
              <p className="text-xs sm:text-sm text-clarion-light/80 font-normal leading-relaxed">
                모든 사업 추진과 기술개발 과제는 실행 가능한 개발 계획과 신뢰할 수 있는 수치 위에서 진행하며,
                외부 기관이 보더라도 명확한 실체가 있는 기술기업을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
