import React from 'react'
import { Quote } from 'lucide-react'

export default function CompanyOverview() {
  return (
    <section id="about" className="fullscreen-section bg-white border-b border-clarion-line">
      <div className="container-main max-w-7xl lg:max-w-[1240px] space-y-6 lg:space-y-8 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">




        
        {/* Top Section Label */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            ABOUT CLARION · CEO PHILOSOPHY
          </span>
        </div>

        {/* CEO Editorial Hero Layout: Desktop CEO Photo 43-45% (col-span-5) / Text & Philosophy 55-57% (col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Enlarged Editorial Corporate Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#1265E5]/15 via-[#37B7FF]/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-clarion-line bg-[#07152B]">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-auto max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] object-cover object-top transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5 z-10">
                <span className="text-[11px] font-mono text-[#37B7FF] font-bold tracking-wider uppercase">
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
            
            {/* 1. Main Philosophy Scaled Headline */}
            <div className="space-y-3 border-b border-clarion-line/80 pb-6">
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-[#142033] leading-[1.16] tracking-tight">
                사람을 이롭게 하는 기술,
                <br />
                <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                Technology for People. Growth with Responsibility.
              </p>
            </div>

            {/* 2. Editorial Quote Block */}
            <div className="bg-[#F8FAFC]/80 p-5 sm:p-6 rounded-xl border-l-4 border-[#1265E5] space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#1265E5]">
                <Quote className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">LEADERSHIP QUOTE</span>
              </div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* 3. CEO Body Copy (2 Short Paragraphs) */}
            <div className="space-y-3 text-[15px] sm:text-base text-[#334155] font-normal leading-[1.78]">
              <p>
                제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
              </p>
              <p>
                클라리온은 복잡한 기술을 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
              </p>
            </div>

            {/* 4. CEO Signature Block (Clean, No Pill Badge) */}
            <div className="pt-3 border-t border-clarion-line/60">
              <div className="space-y-0.5">
                <p className="text-[10px] text-[#68758A] font-mono uppercase">CLARION CO., LTD.</p>
                <p className="text-lg sm:text-xl font-extrabold text-[#142033]">대표이사 김동욱</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}






