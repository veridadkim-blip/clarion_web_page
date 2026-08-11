import React from 'react'
import { Quote, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const visualPhilosophySteps = [
  { step: '01', title: 'TECHNOLOGY', kor: '사람을 향한 기술', desc: '기업의 복잡한 문제를 해결하는 고성능 AI·Cloud·Data 인프라' },
  { step: '02', title: 'CLARITY', kor: '명확한 판단과 실행', desc: '복잡성을 정돈하고 조직이 더 쉽고 정확하게 판단하도록 지원' },
  { step: '03', title: 'RESPONSIBILITY', kor: '책임 있는 성장', desc: '맡겨진 기술과 자원으로 사회와 사람에게 더 나은 가치 창출' },
  { step: '04', title: 'PEOPLE', kor: '사람 중심의 가치', desc: '제품과 시스템보다 사람의 삶에 남기는 긍정적인 변화 최우선' },
]

export default function CompanyOverview() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-clarion-line">
      <div className="container-main space-y-20">
        
        {/* Top Section Label */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            ABOUT CLARION · CEO MESSAGE & PHILOSOPHY
          </span>
          <p className="text-xs font-mono text-[#68758A] font-semibold tracking-widest uppercase">
            WHO WE ARE & WHAT WE BELIEVE
          </p>
        </div>

        {/* CEO Message Main Layout: Visual 60-70% / Text 30-40% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Editorial Portrait Image (Approx 42% on Desktop) */}
          <div className="lg:col-span-5 relative group">
            {/* Background Ambient Glow Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1265E5]/20 via-[#37B7FF]/10 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-clarion-line bg-[#07152B]">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-auto max-h-[620px] object-cover object-top transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-mono text-[#37B7FF] font-bold tracking-wider uppercase">
                  CLARION CEO
                </span>
                <h4 className="text-xl font-extrabold text-white">김동욱 <span className="text-xs font-normal text-white/80 font-mono">/ 대표이사</span></h4>
              </div>
            </div>
          </div>

          {/* RIGHT: Corporate Philosophy & CEO Message Text (Desktop & Mobile Responsive) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* 1. Main Core Philosophy (Huge Typography Spec) */}
            <div className="space-y-3 border-b border-clarion-line/80 pb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-[1.2] tracking-tight">
                사람을 이롭게 하는 기술,
                <br />
                <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                Technology for People. Growth with Responsibility.
              </p>
            </div>

            {/* 2. Highlighted CEO Quote */}
            <div className="bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border-l-4 border-[#1265E5] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#1265E5]">
                <Quote className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">CORE QUESTION</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* 3. Compressed CEO Message Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              <p className="font-semibold text-[#142033]">
                저는 기업을 경영하면서 늘 한 가지를 묻습니다.
              </p>
              <p>
                제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
                기업은 우리에게 맡겨진 기술과 자원을 책임 있게 사용하여 사람과 사회에 더 나은 가치를 만들어 가야 한다고 믿습니다.
              </p>
              <p>
                AI와 디지털 기술이 빠르게 발전할수록 기술 그 자체보다 그것이 사람의 삶에 어떤 변화를 남기는지가 중요합니다.
                클라리온은 복잡한 문제를 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
              </p>
            </div>

            {/* 4. Signature */}
            <div className="pt-4 flex items-center justify-between border-t border-clarion-line/60">
              <div className="space-y-0.5">
                <p className="text-xs text-[#68758A] font-mono uppercase">CLARION CO., LTD.</p>
                <p className="text-lg font-bold text-[#142033]">대표이사 김동욱</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1265E5] bg-[#1265E5]/10 px-3.5 py-1.5 rounded-full font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>RESPONSIBLE LEADERSHIP</span>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Philosophy Minimal Diagram (CEO Message Bottom Section) */}
        <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-3xl border border-clarion-line/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clarion-line/60 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">VISUAL PHILOSOPHY</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#142033]">클라리온 기업철학의 가치 연결 흐름</h3>
            </div>
            <span className="text-xs font-mono text-[#68758A] bg-white px-3 py-1 rounded-md border border-clarion-line/60">
              MINIMAL VALUE CHAIN
            </span>
          </div>

          {/* 4 Steps Minimal Flow: TECHNOLOGY -> CLARITY -> RESPONSIBILITY -> PEOPLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualPhilosophySteps.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-5 rounded-2xl border border-clarion-line/80 shadow-xs space-y-2 hover:border-[#1265E5]/40 transition-all duration-200 relative group"
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
