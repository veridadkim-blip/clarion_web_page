import React from 'react'
import { Quote, ArrowRight, ShieldCheck } from 'lucide-react'

const visualPhilosophySteps = [
  { step: '01', title: 'TECHNOLOGY', kor: '사람을 향한 기술', desc: '기업의 복잡성을 해결하는 기술 인프라' },
  { step: '02', title: 'CLARITY', kor: '명확한 판단과 실행', desc: '조직이 쉽고 정확하게 판단하도록 지원' },
  { step: '03', title: 'RESPONSIBILITY', kor: '책임 있는 성장', desc: '사회와 사람에게 더 나은 가치 창출' },
  { step: '04', title: 'PEOPLE', kor: '사람 중심의 가치', desc: '사람의 삶에 남기는 긍정적 변화 최우선' },
]

export default function CompanyOverview() {
  return (
    <section id="about" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-24 bg-white border-b border-clarion-line">
      <div className="container-main space-y-10 lg:space-y-12 my-auto">
        
        {/* Top Section Label */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            ABOUT CLARION · CEO PHILOSOPHY
          </span>
        </div>

        {/* CEO Editorial Hero Layout: Desktop CEO Photo 45% (col-span-5) / Content 55% (col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-center">
          
          {/* CEO Editorial Portrait Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#1265E5]/15 via-[#37B7FF]/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-clarion-line bg-[#07152B]">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[500px] object-cover object-top transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5">
                <span className="text-[10px] font-mono text-[#37B7FF] font-bold tracking-wider uppercase">
                  (주)클라리온 · CLARION CEO
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  김동욱 <span className="text-xs font-normal text-white/80 font-mono">/ 대표이사</span>
                </h4>
              </div>
            </div>
          </div>

          {/* Right Editorial Typography & Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* 1순위: Core Philosophy Headline */}
            <div className="space-y-2 border-b border-clarion-line/80 pb-5">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-[1.18] tracking-tight">
                사람을 이롭게 하는 기술,
                <br />
                <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                Technology for People. Growth with Responsibility.
              </p>
            </div>

            {/* 2순위: Leadership Quote */}
            <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border-l-4 border-[#1265E5] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#1265E5]">
                <Quote className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">LEADERSHIP QUOTE</span>
              </div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* 3순위: Concise CEO Philosophy Text */}
            <div className="space-y-2.5 text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
              <p>
                제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
              </p>
              <p>
                기업은 맡겨진 기술과 자원을 책임 있게 사용하여 사람과 사회에 더 나은 가치를 만들어야 한다고 믿습니다.
              </p>
              <p>
                클라리온은 복잡한 문제를 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-2 flex items-center justify-between border-t border-clarion-line/60">
              <div className="space-y-0.5">
                <p className="text-[10px] text-[#68758A] font-mono uppercase">CLARION CO., LTD.</p>
                <p className="text-lg sm:text-xl font-extrabold text-[#142033]">대표이사 김동욱</p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1265E5] bg-[#1265E5]/10 px-3.5 py-1.5 rounded-full font-bold border border-[#1265E5]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RESPONSIBLE LEADERSHIP</span>
              </div>
            </div>

          </div>
        </div>

        {/* Minimal Value Chain Flow Diagram */}
        <div className="bg-[#F8FAFC] p-6 lg:p-7 rounded-2xl lg:rounded-3xl border border-clarion-line/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-clarion-line/60 pb-3">
            <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">VALUE CHAIN FLOW</span>
            <span className="text-[11px] font-mono text-[#68758A]">TECHNOLOGY → PEOPLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {visualPhilosophySteps.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-4 rounded-xl border border-clarion-line/80 shadow-xs space-y-1.5 hover:border-[#1265E5]/40 transition-all duration-200 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-extrabold text-[#1265E5] bg-[#1265E5]/10 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#142033] tracking-wider">{item.title}</span>
                </div>
                <div className="pt-0.5 space-y-0.5">
                  <h4 className="text-xs font-bold text-[#142033]">{item.kor}</h4>
                  <p className="text-[11px] text-[#68758A] leading-relaxed">{item.desc}</p>
                </div>
                {idx < visualPhilosophySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#1265E5]/40">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}





