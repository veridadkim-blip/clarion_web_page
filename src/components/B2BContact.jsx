import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { companyFacts } from '../data/companyContent'

export default function B2BContact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interestArea: 'Enterprise IT / SI',
    message: '',
    privacyConsent: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // PROTOTYPE ONLY: Backend connection pending production phase
  }

  return (
    <section id="contact" className="fullscreen-section bg-[#F8FAFC] text-[#142033] relative overflow-hidden border-b border-clarion-line/60">
      <div className="container-main max-w-7xl lg:max-w-[1320px] relative z-10 space-y-6 lg:space-y-7 pt-16 lg:pt-[84px] pb-6 lg:pb-8 my-auto">

        {/* 1. Section Header (Headline Internal Spacing Refined) */}
        <div className="border-b border-clarion-line/60 pb-4 lg:pb-5 text-left">
          <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5 mb-2 lg:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
            CONTACT CLARION · B2B INQUIRY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#142033] leading-[1.18] sm:leading-[1.2] tracking-tight pt-1">
            복잡한 요구를, <span className="text-[#1265E5]">명확한 실행으로 연결합니다.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#334155] font-semibold leading-[1.52] pt-3 lg:pt-3.5">
            프로젝트의 목적과 현재 상황을 알려주시면, 필요한 기술과 실행 방향을 함께 정리하겠습니다.
          </p>
        </div>

        {/* 2. Desktop Composition: LEFT 45% Trust Context / RIGHT 55% Clean B2B Form */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left">
          
          {/* LEFT 45%: Trust Context & Category List */}
          <div className="lg:col-span-5 bg-white rounded-xl p-5 sm:p-6 border border-clarion-line/70 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2.5">
                <span className="text-xs font-mono font-extrabold text-[#1265E5] uppercase tracking-wider">
                  DISCUSS WITH CLARION
                </span>
                <span className="text-[10px] font-mono text-clarion-muted">B2B CONSULTATION</span>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-[#334155] font-medium leading-relaxed">
                  엔터프라이즈 IT 구축, AI·Data 지능화, R&D 기술협력 및 웰니스 파트너십 관련 문의를 남겨주시면 담당팀에서 준비 후 안내드립니다.
                </p>
              </div>

              {/* Editorial Text Category List */}
              <div className="space-y-2 pt-2 border-t border-clarion-line/40">
                <span className="text-[10px] font-mono font-bold text-clarion-muted uppercase tracking-wider block">
                  INQUIRY DOMAINS
                </span>
                <div className="space-y-1.5 font-mono text-xs font-bold text-[#142033]">
                  <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-clarion-line/50">
                    <span>01 Enterprise IT / SI</span>
                    <span className="text-[10px] text-clarion-muted font-normal">코어/인프라/클라우드</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-clarion-line/50">
                    <span>02 AI / Data</span>
                    <span className="text-[10px] text-clarion-muted font-normal">파이프라인/지능화</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-clarion-line/50">
                    <span>03 Healthcare AI</span>
                    <span className="text-[10px] text-clarion-muted font-normal">한생AI/웰니스</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#F8FAFC] border border-clarion-line/50">
                    <span>04 Technology Collaboration</span>
                    <span className="text-[10px] text-clarion-muted font-normal">R&D/특허협력</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-clarion-line/40 text-[11px] font-mono text-clarion-muted flex items-center justify-between">
              <span>B2B PROJECT INQUIRY</span>
            </div>
          </div>

          {/* RIGHT 55%: Clean Flat B2B Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-5 sm:p-6 border border-clarion-line/70 shadow-xs flex flex-col justify-between space-y-4">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2">
                <h3 className="text-sm font-extrabold text-[#142033]">B2B 프로젝트 문의 작성</h3>
                <span className="text-[10px] font-mono text-clarion-muted">* 필수 입력 항목</span>
              </div>

              {/* Row 1: Company & Contact Name */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-[#142033] mb-1">
                    회사 / 기관명 <span className="text-[#1265E5]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="회사 또는 기관명을 입력해주세요"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg px-3 py-2 text-xs text-[#142033] placeholder:text-clarion-muted focus:outline-none focus:border-[#1265E5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-[#142033] mb-1">
                    담당자명 <span className="text-[#1265E5]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="담당자명을 입력해주세요"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg px-3 py-2 text-xs text-[#142033] placeholder:text-clarion-muted focus:outline-none focus:border-[#1265E5]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-[#142033] mb-1">
                    이메일 주소 <span className="text-[#1265E5]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg px-3 py-2 text-xs text-[#142033] placeholder:text-clarion-muted focus:outline-none focus:border-[#1265E5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-[#142033] mb-1">
                    연락처 <span className="text-clarion-muted font-normal text-[10px]">(선택)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="연락처를 입력해주세요"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg px-3 py-2 text-xs text-[#142033] placeholder:text-clarion-muted focus:outline-none focus:border-[#1265E5]"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-xs font-extrabold text-[#142033] mb-1">
                  문의 분야 <span className="text-[#1265E5]">*</span>
                </label>
                <select
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg px-3 py-2 text-xs text-[#142033] focus:outline-none focus:border-[#1265E5]"
                >
                  <option value="Enterprise IT / SI">Enterprise IT / SI</option>
                  <option value="AI / Data">AI / Data</option>
                  <option value="Healthcare AI">Healthcare AI</option>
                  <option value="R&D / Technology Collaboration">R&D / Technology Collaboration</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-extrabold text-[#142033] mb-1">
                  문의 내용 <span className="text-[#1265E5]">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="프로젝트 목적과 필요한 내용을 간단히 적어주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-clarion-line/80 rounded-lg p-3 text-xs text-[#142033] placeholder:text-clarion-muted focus:outline-none focus:border-[#1265E5] resize-none"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="rounded border-clarion-line text-[#1265E5] focus:ring-0 w-3.5 h-3.5"
                />
                <label htmlFor="privacyConsent" className="text-[11px] text-clarion-muted cursor-pointer">
                  개인정보 수집 및 이용 동의 (문의 접수 및 회신 목적)
                </label>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#1265E5] text-white font-extrabold text-xs sm:text-sm rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>프로젝트 문의하기</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>

        {/* Integrated Compact Corporate Footer */}
        <div className="pt-2 border-t border-clarion-line/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-clarion-muted">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#142033]">주식회사 클라리온</span>
            <span>·</span>
            <span>대표이사 {companyFacts.ceoName}</span>
          </div>
          <p>© 2026 {companyFacts.companyLegalName}. All rights reserved.</p>
        </div>

      </div>
    </section>
  )
}


