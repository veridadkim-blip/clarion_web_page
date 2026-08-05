import React from 'react'
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react'

const executionAreas = [
  {
    title: '금융·보험 IT 시스템 구축',
    desc: '금융 및 보험 고객사의 대규모 업무 아키텍처, 데이터 흐름, 보안 요건에 맞춘 시스템 개발 및 유지보수',
  },
  {
    title: '컴퓨터 프로그래밍 & 데이터 통합',
    desc: '이종 업무 시스템, 외부 플랫폼, 데이터베이스 간의 안정적인 연결과 통합 처리',
  },
  {
    title: '업무 프로세스 자동화 & AI 도구 지원',
    desc: '반복적인 리포트 작성 및 정보 분석 업무를 지원하는 실무형 자동화 도구 구축',
  },
]

export default function Partners() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">PROJECTS & EXECUTION</span>
          <h2 className="section-title">
            프로젝트 <span className="text-clarion-blue">실행력</span>
          </h2>
          <p className="section-desc">
            금융·보험 프로젝트 현장에서 검증된 수주, 개발, 인력 투입 및 운영 체계를 통해
            고객사의 업무 환경 개선을 충실히 이행합니다.
          </p>
        </div>

        {/* 3 Execution Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {executionAreas.map((item) => (
            <div
              key={item.title}
              className="bg-clarion-light p-7 rounded-2xl border border-clarion-line/60 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-clarion-blue/10 text-clarion-blue flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-clarion-text">{item.title}</h3>
                <p className="text-sm text-clarion-muted leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
