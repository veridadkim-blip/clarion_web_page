import React from 'react'
import { HeartPulse, Check, ShieldAlert } from 'lucide-react'

const healthcarePoints = [
  '의료기관의 질병 진단·치료 영역과 명확히 구분되는 비의료 생활건강 웰니스 서비스',
  '금융·보험 IT 수행 실적과 자연스럽게 연결되는 신사업 확장 분야',
  '사용자의 생활습관, 건강문진, 운동수행 데이터 기반의 비의료 건강관리 리포트',
  '한의학적 관점의 문진 체계 및 맞춤 웰니스 콘텐츠 연구',
]

export default function HealthcareHighlight() {
  return (
    <section id="healthcare" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">HEALTHCARE AI & WELLNESS</span>
          <h2 className="section-title">
            보험사 연계 <br />
            <span className="text-clarion-blue">비의료 디지털 헬스케어</span> 신사업
          </h2>
          <p className="section-desc">
            ㈜클라리온은 금융·보험 IT 프로젝트 수행 역량을 바탕으로,
            보험사 연계 비의료 건강관리 정보 제공과 생활건강 웰니스 플랫폼으로의 확장을 준비하고 있습니다.
          </p>
        </div>

        {/* Focus Box */}
        <div className="bg-clarion-light p-8 lg:p-10 rounded-2xl border border-clarion-line space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-clarion-blue/10 text-clarion-blue flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-clarion-text">비의료 웰니스 포지셔닝</h3>
              <p className="text-xs text-clarion-muted font-mono">NON-MEDICAL WELLNESS PLATFORM</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {healthcarePoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white p-4.5 rounded-xl border border-clarion-line/60">
                <Check className="w-5 h-5 text-clarion-blue shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-clarion-text leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
