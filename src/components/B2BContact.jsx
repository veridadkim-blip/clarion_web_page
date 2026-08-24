import React, { useState } from 'react'
import { Send, CheckCircle, MessageSquare } from 'lucide-react'

export default function B2BContact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interestArea: 'Enterprise IT / SI',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-10 lg:pt-12 lg:pb-10 bg-[#F4F8FC] border-b border-clarion-line">
      <div className="container-main space-y-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
                CONTACT US · B2B LEAD
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#142033] leading-tight">
                프로젝트 및 <br />
                <span className="text-[#1265E5]">B2B 문의하기</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#68758A] leading-relaxed font-normal">
                Enterprise IT/SI, Financial IT, Cloud, AI/Data 플랫폼 및 Healthcare AI 파트너십 문의를 남겨주시면
                담당자가 검토 후 연락드립니다.
              </p>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-2xl border border-clarion-line space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#1265E5]">
                <MessageSquare className="w-4 h-4" />
                <h3 className="text-sm font-bold text-[#142033]">B2B 상담 및 파트너십 안내</h3>
              </div>
              <p className="text-xs text-[#68758A] leading-relaxed font-normal">
                프로젝트 범위나 구축하고자 하는 인프라 요구사항을 남겨주시면
                담당 기술팀에서 빠르게 확인 후 커뮤니케이션을 도와드립니다.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white p-6 lg:p-7 rounded-3xl border border-clarion-line shadow-sm">

            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 bg-[#1265E5]/10 text-[#1265E5] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#142033]">
                  문의가 정상 접수되었습니다.
                </h3>
                <p className="text-[#68758A] text-sm max-w-sm mx-auto">
                  남겨주신 내용을 확인 후 담당자가 빠른 시일 내 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#1265E5] text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-[#142033]">프로젝트 문의 작성</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#142033] mb-1.5">
                      회사 / 기관명 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="기업명을 입력해 주세요"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl px-4 py-3 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#142033] mb-1.5">
                      담당자명 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="성함을 입력해 주세요"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl px-4 py-3 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#142033] mb-1.5">
                      이메일 주소 *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl px-4 py-3 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#142033] mb-1.5">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl px-4 py-3 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142033] mb-1.5">
                    문의 분야 *
                  </label>
                  <select
                    value={formData.interestArea}
                    onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                    className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl px-4 py-3 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50"
                  >
                    <option value="Enterprise IT / SI">Enterprise IT / SI</option>
                    <option value="Financial IT">Financial IT</option>
                    <option value="Cloud Integration">Cloud Integration</option>
                    <option value="AI / Data Platform">AI / Data Platform</option>
                    <option value="GovTech">GovTech</option>
                    <option value="Healthcare AI / Partnership">Healthcare AI / 웰니스 파트너십</option>
                    <option value="기타 B2B 제휴">기타 B2B 제휴 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142033] mb-1.5">
                    문의 내용 *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="프로젝트 개요나 구축하고자 하는 시스템 요구사항을 입력해 주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F4F8FC] border border-clarion-line rounded-xl p-4 text-sm text-[#142033] focus:outline-none focus:ring-2 focus:ring-[#1265E5]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1265E5] text-white font-extrabold text-base rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>프로젝트 문의하기</span>
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

