import React from 'react'
import { Cpu, Cloud, Building2, Layers } from 'lucide-react'

const overviewPoints = [
  {
    icon: Building2,
    title: '금융·보험 IT 실행력',
    desc: '금융·보험 프로젝트 현장의 높은 보안성과 안정성 요구에 맞춘 시스템 개발 및 통합 역량',
  },
  {
    icon: Cloud,
    title: 'Cloud & System Integration',
    desc: '기업의 기존 시스템과 Cloud 인프라를 연결하여 단절 없는 디지털 업무환경 구축',
  },
  {
    icon: Cpu,
    title: 'AI · Data 기술 내재화',
    desc: '단순 유행 기술이 아닌 기업의 자동화, 예측, 판단을 지원하는 실무형 AI 솔루션 적용',
  },
  {
    icon: Layers,
    title: '플랫폼 서비스 확장',
    desc: '안정적인 IT 개발 역량을 바탕으로 지속 가능한 구독형 비즈니스 플랫폼으로 전진',
  },
]

export default function CompanyOverview() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">ABOUT CLARION</span>
          <h2 className="section-title">
            복잡함을 다듬고, <br />
            <span className="text-clarion-blue">명확함과 실행</span>을 만듭니다.
          </h2>
          <p className="section-desc">
            ㈜클라리온은 AI, Cloud, Data 기술을 기반으로 기업의 업무 프로세스를 개선하고
            산업별 지능형 플랫폼 구축을 지원하는 기술기업입니다.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewPoints.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-clarion-light p-7 rounded-2xl border border-clarion-line/60 hover:border-clarion-blue/40 transition-all duration-200 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-clarion-blue/10 text-clarion-blue flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-clarion-text">{item.title}</h3>
                  <p className="text-sm text-clarion-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
