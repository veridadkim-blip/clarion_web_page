import React, { useState } from 'react'
import { Send, CheckCircle, Mail, MessageSquare } from 'lucide-react'

export default function B2BContact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interestArea: '소프트웨어 개발 / SI',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-clarion-light border-b border-clarion-line">
      <div className="container-main space-y-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="section-label">CONTACT US</span>
              <h2 className="section-title">
                프로젝트 및 <br />
                <span className="text-clarion-blue">B2B 문의하기</span>
              </h2>
              <p className="section-desc">
                소프트웨어 개발, 시스템 통합(SI), AI·Cloud 도입 및 플랫폼 사업 문의를 남겨주시면
                담당자가 검토 후 연락드립니다.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-clarion-line space-y-4 shadow-sm">
              <div className="flex items-center gap-3 text-clarion-blue">
                <MessageSquare className="w-6 h-6" />
                <h3 className="text-base font-bold text-clarion-text">문의 안내</h3>
              </div>
              <p className="text-sm text-clarion-muted leading-relaxed font-normal">
                프로젝트 개요나 구축하고자 하는 시스템 요구사항을 남겨주시면
                검토 후 빠르게 답변드리겠습니다.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl border border-clarion-line shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-14 h-14 bg-clarion-blue/10 text-clarion-blue rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-clarion-text">
                  문의가 접수되었습니다.
                </h3>
                <p className="text-clarion-muted text-sm max-w-sm mx-auto">
                  남겨주신 문의 내용을 확인 후 담당자가 조속히 답변드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary-clarion text-sm"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-clarion-text">프로젝트 문의 작성</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                      기업 / 기관명 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="기업명을 입력해 주세요"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-clarion-light border border-clarion-line rounded-xl px-4 py-3 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                      담당자 성함 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="성함을 입력해 주세요"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-clarion-light border border-clarion-line rounded-xl px-4 py-3 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                      이메일 주소 *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-clarion-light border border-clarion-line rounded-xl px-4 py-3 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-clarion-light border border-clarion-line rounded-xl px-4 py-3 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                    문의 분야
                  </label>
                  <select
                    value={formData.interestArea}
                    onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                    className="w-full bg-clarion-light border border-clarion-line rounded-xl px-4 py-3 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50"
                  >
                    <option value="소프트웨어 개발 / SI">소프트웨어 개발 및 시스템 통합 (SI)</option>
                    <option value="AI / Cloud 플랫폼">AI · Cloud 플랫폼 구축</option>
                    <option value="빅데이터 서비스">빅데이터 및 데이터 서비스</option>
                    <option value="디지털 헬스케어">디지털 헬스케어 신사업 연계</option>
                    <option value="기타 B2B 제휴">기타 B2B 제휴 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-clarion-muted mb-1.5">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    placeholder="프로젝트 개요나 문의 사항을 입력해 주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-clarion-light border border-clarion-line rounded-xl p-4 text-sm text-clarion-text focus:outline-none focus:ring-2 focus:ring-clarion-blue/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-clarion w-full"
                >
                  <span>문의 제출하기</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
