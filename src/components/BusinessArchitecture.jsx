import React, { useState } from 'react'
import { Code, Building2, Cpu, Database, CreditCard, Layers, ArrowRight } from 'lucide-react'

const businessAreas = [
  {
    id: 'sw_dev',
    icon: Code,
    title: '소프트웨어 개발 및 공급',
    subtitle: '맞춤형 시스템 & 응용 SW',
    desc: '고객사의 업무 프로세스, 데이터 흐름, 보안 요건에 맞춘 소프트웨어 개발을 통해 운영 안정성과 효율성을 강화합니다.',
  },
  {
    id: 'si',
    icon: Building2,
    title: '컴퓨터 프로그래밍 및 시스템 통합 (SI)',
    subtitle: '통합 디지털 업무환경 구축',
    desc: '기업 내부 시스템, 외부 서비스, 데이터베이스를 하나로 연결하여 데이터 단절 없는 최적의 아키텍처를 구축합니다.',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: '인공지능(AI) 기반 솔루션 개발',
    subtitle: '업무 자동화 & 지능형 리포팅',
    desc: 'AI 기술을 활용하여 데이터 분석, 예측, 자동화, 리포트 생성을 지원하는 실무형 지능형 서비스를 개발합니다.',
  },
  {
    id: 'bigdata',
    icon: Database,
    title: '빅데이터 및 정보제공 서비스',
    subtitle: '데이터 분석 & 통합 DB',
    desc: '빅데이터 수집·처리·분석 프로세스를 구축하여 기업의 정확한 의사결정과 리스크 판단을 지원합니다.',
  },
  {
    id: 'fintech',
    icon: CreditCard,
    title: '핀테크 및 결제 연계 시스템',
    subtitle: '전자지급결제 & 정산 연동',
    desc: '자체 플랫폼 내 결제, 정산, 포인트, 구독료 관리를 위한 안전한 전자지급결제 연계 아키텍처를 구축합니다.',
  },
  {
    id: 'saas',
    icon: Layers,
    title: '플랫폼 및 구독형 서비스',
    subtitle: '서비스형 비즈니스 (SaaS)',
    desc: '용역 개발을 넘어 지속적인 가치를 제공하는 구독형 비즈니스 모델을 구축하여 장기 성장 기반을 다집니다.',
  },
]

export default function BusinessArchitecture() {
  const [activeId, setActiveId] = useState(businessAreas[0].id)
  const currentArea = businessAreas.find((b) => b.id === activeId) || businessAreas[0]

  return (
    <section id="business" className="py-20 lg:py-28 bg-clarion-light border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">BUSINESS AREAS</span>
          <h2 className="section-title">
            체계적인 <span className="text-clarion-blue">사업 영역</span>
          </h2>
          <p className="section-desc">
            안정적인 소프트웨어 개발과 시스템 통합 역량을 바탕으로
            AI, 빅데이터, 플랫폼 비즈니스로 확장해 나갑니다.
          </p>
        </div>

        {/* Tab & Content Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Area List */}
          <div className="lg:col-span-5 space-y-2.5">
            {businessAreas.map((item) => {
              const Icon = item.icon
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                    isActive
                      ? 'bg-clarion-blue text-white border-clarion-blue shadow-md'
                      : 'bg-white text-clarion-text border-clarion-line/70 hover:border-clarion-blue/40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-clarion-blue/10 text-clarion-blue'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold opacity-80">{item.subtitle}</div>
                    <div className="text-sm font-bold leading-tight">{item.title}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Selected Box */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl border border-clarion-line space-y-6 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-clarion-blue/10 text-clarion-blue flex items-center justify-center">
              <currentArea.icon className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-clarion-cyan bg-clarion-navy px-3 py-1 rounded-md">
                {currentArea.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-clarion-text pt-1">
                {currentArea.title}
              </h3>
            </div>

            <p className="text-clarion-muted text-base leading-relaxed font-normal">
              {currentArea.desc}
            </p>

            <div className="pt-4 border-t border-clarion-line">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-clarion-blue font-bold text-sm hover:underline"
              >
                <span>사업 관련 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
