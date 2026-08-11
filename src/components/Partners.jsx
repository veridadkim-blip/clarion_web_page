import React from 'react'
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react'

const executionAreas = [
  {
    title: '금융·보험 IT 시스템 구축',
    sub: 'FINANCIAL & INSURANCE IT',
    desc: '금융 및 보험 고객사의 대규모 업무 아키텍처, 데이터 흐름, 보안 요건에 맞춘 시스템 개발 및 유지보수',
  },
  {
    title: '컴퓨터 프로그래밍 & 데이터 통합',
    sub: 'SYSTEM INTEGRATION',
    desc: '이종 업무 시스템, 외부 플랫폼, 데이터베이스 간의 안정적인 연결과 통합 처리',
  },
  {
    title: '업무 프로세스 자동화 & AI 도구 지원',
    sub: 'PROCESS AUTOMATION',
    desc: '반복적인 리포트 작성 및 정보 분석 업무를 지원하는 실무형 자동화 도구 구축',
  },
]

export default function Partners() {
  return (
    <section id="track-record" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            VERIFIED TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            실제 프로젝트와 <span className="text-[#1265E5]">실행력</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed">
            금융·보험 프로젝트 현장에서 검증된 개발, 인력 투입 및 운영 체계를 통해
            고객사의 업무 환경 개선을 충실히 이행합니다.
          </p>
        </div>

        {/* 3 Execution Visual Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {executionAreas.map((item) => (
            <div
              key={item.title}
              className="bg-[#F8FAFC] p-8 rounded-2xl border border-clarion-line/80 space-y-4 shadow-sm hover:border-[#1265E5]/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#1265E5]/10 text-[#1265E5] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#1265E5] bg-white px-2 py-1 rounded border border-clarion-line/60">
                  {item.sub}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#142033]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#68758A] leading-relaxed font-normal">
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
