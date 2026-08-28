import React from 'react'

export default function CompanyOverview() {
  return (
    <section id="about" className="fullscreen-section bg-white border-b border-clarion-line">
      <div className="container-main max-w-7xl lg:max-w-[1280px] space-y-6 lg:space-y-8 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">
        
        {/* Top Section Label (Clean Editorial Underline Style) */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
            ABOUT CLARION · CEO PHILOSOPHY
          </span>
        </div>

        {/* CEO Editorial Hero Layout: Desktop CEO Photo 43-45% (col-span-5) / Text & Philosophy 55-57% (col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Editorial Corporate Portrait Image (Clean, No Overlay, Scaled Up ~10-12%) */}
          <div className="lg:col-span-5 order-1 lg:order-1 relative">
            <div className="relative rounded-lg overflow-hidden border border-clarion-line/70 bg-[#F8FAFC] shadow-sm">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-auto max-h-[460px] sm:max-h-[500px] lg:max-h-[540px] object-cover object-top transition-transform duration-700 hover:scale-102"
              />
            </div>
          </div>

          {/* Right Editorial Typography & Content (Scaled Up ~10-12%) */}
          <div className="lg:col-span-7 order-2 lg:order-2 space-y-6 sm:space-y-7 text-left">
            
            {/* 1. Main Philosophy Scaled Headline */}
            <div className="space-y-3 border-b border-clarion-line/80 pb-6">
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#142033] leading-[1.22] lg:leading-[1.22] tracking-tight">
                사람을 이롭게 하는 기술,
                <br />
                <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                Technology for People. Growth with Responsibility.
              </p>
            </div>

            {/* 2. Editorial Quote Block (Clean left accent line, no grey card box) */}
            <div className="pl-5 border-l-4 border-[#1265E5] space-y-1 py-0.5">
              <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase tracking-widest block">
                LEADERSHIP QUOTE
              </span>
              <p className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* 3. CEO Body Copy (2 Short Paragraphs) */}
            <div className="space-y-3 text-base sm:text-[17px] text-[#334155] font-normal leading-[1.8]">
              <p>
                제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
              </p>
              <p>
                클라리온은 복잡한 기술을 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
              </p>
            </div>

            {/* 4. CEO Signature Block (Clean metadata style, no badges) */}
            <div className="pt-3 border-t border-clarion-line/60">
              <div className="space-y-0.5">
                <p className="text-[10px] text-[#68758A] font-mono uppercase tracking-wider">CLARION CO., LTD.</p>
                <p className="text-lg sm:text-xl font-extrabold text-[#142033]">대표이사 김동욱</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}








