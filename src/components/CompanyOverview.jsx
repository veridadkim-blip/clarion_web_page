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
    <section id="about" className="py-24 lg:py-32 bg-white border-b border-clarion-line">
      <div className="container-main space-y-16">
        
        {/* Top Section Label */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            ABOUT CLARION · CEO PHILOSOPHY
          </span>
        </div>

        {/* CEO Editorial Hero Layout: Desktop CEO Photo 45% / Editorial Text & Quote 55% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Editorial CEO Portrait Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1265E5]/20 via-[#37B7FF]/15 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-clarion-line bg-[#07152B]">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-auto max-h-[620px] object-cover object-top transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-mono text-[#37B7FF] font-bold tracking-wider uppercase">
                  CLARION CEO
                </span>
                <h4 className="text-2xl font-extrabold text-white">김동욱 <span className="text-sm font-normal text-white/80 font-mono">/ 대표이사</span></h4>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Impact Typography & CEO Quote */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* 1. Main Core Philosophy (Huge Typography as Hero) */}
            <div className="space-y-3 border-b border-clarion-line/80 pb-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#142033] leading-[1.15] tracking-tight">
                사람을 이롭게 하는 기술,
                <br />
                <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                Technology for People. Growth with Responsibility.
              </p>
            </div>

            {/* 2. CEO Hero Quote (Massive Visual Focus) */}
            <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border-l-4 border-[#1265E5] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#1265E5]">
                <Quote className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">LEADERSHIP QUOTE</span>
              </div>
              <p className="text-xl sm:text-3xl font-extrabold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* 3. Concise CEO Message Text (30-40% Compressed for Visual-first Impact) */}
            <div className="space-y-3 text-base text-[#475569] font-normal leading-relaxed">
              <p>
                제품보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
                클라리온은 복잡한 문제를 더 명확하게 다듬어 조직과 사회가 더 나은 판단과 실행을 하도록 돕겠습니다.
              </p>
            </div>

            {/* 4. Signature */}
            <div className="pt-3 flex items-center justify-between border-t border-clarion-line/60">
              <div className="space-y-0.5">
                <p className="text-xs text-[#68758A] font-mono uppercase">CLARION CO., LTD.</p>
                <p className="text-xl font-extrabold text-[#142033]">대표이사 김동욱</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1265E5] bg-[#1265E5]/10 px-4 py-2 rounded-full font-bold border border-[#1265E5]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>RESPONSIBLE LEADERSHIP</span>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Philosophy Minimal Flow Diagram */}
        <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-3xl border border-clarion-line/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-clarion-line/60 pb-4">
            <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">VALUE CHAIN FLOW</span>
            <span className="text-xs font-mono text-[#68758A]">TECHNOLOGY → PEOPLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualPhilosophySteps.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-5 rounded-2xl border border-clarion-line/80 shadow-xs space-y-2 hover:border-[#1265E5]/40 transition-all duration-200 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold text-[#1265E5] bg-[#1265E5]/10 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#142033] tracking-wider">{item.title}</span>
                </div>
                <div className="pt-1 space-y-1">
                  <h4 className="text-sm font-bold text-[#142033]">{item.kor}</h4>
                  <p className="text-xs text-[#68758A] leading-relaxed">{item.desc}</p>
                </div>
                {idx < visualPhilosophySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#1265E5]/40">
                    <ArrowRight className="w-4 h-4" />
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


