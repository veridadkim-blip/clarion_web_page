import React from 'react'

export default function CompanyOverview() {
  return (
    <>
      {/* DESKTOP VIEWPORT LAYOUT (lg:flex hidden) — 100% FROZEN */}
      <section id="about" className="hidden lg:flex fullscreen-section bg-white border-b border-clarion-line">
        <div className="container-main max-w-7xl lg:max-w-[1280px] space-y-8 pt-24 pb-10 my-auto">
          {/* Top Section Label */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
              ABOUT CLARION · CEO PHILOSOPHY
            </span>
          </div>

          {/* CEO Editorial Hero Layout */}
          <div className="grid grid-cols-12 gap-14 items-center">
            <div className="col-span-5 order-1 relative">
              <div className="relative rounded-lg overflow-hidden border border-clarion-line/70 bg-[#F4F7FB] shadow-sm">
                <img
                  src="/images/ceo-portrait.jpg"
                  alt="㈜클라리온 대표이사 김동욱"
                  className="w-full h-auto max-h-[540px] object-cover object-top transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>

            <div className="col-span-7 order-2 space-y-7 text-left">
              <div className="space-y-3 border-b border-clarion-line/80 pb-6">
                <h2 className="text-[54px] font-extrabold text-[#142033] leading-[1.22] tracking-tight">
                  사람을 이롭게 하는 기술,
                  <br />
                  <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
                </h2>
                <p className="text-sm font-mono text-[#68758A] font-semibold tracking-wide pt-1">
                  Technology for People. Growth with Responsibility.
                </p>
              </div>

              <div className="pl-5 border-l-4 border-[#1265E5] space-y-1 py-0.5">
                <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase tracking-widest block">
                  LEADERSHIP QUOTE
                </span>
                <p className="text-[26px] font-extrabold text-[#142033] leading-snug">
                  “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
                </p>
              </div>

              <div className="space-y-3 text-[17px] text-[#334155] font-normal leading-[1.8]">
                <p>
                  제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
                </p>
                <p>
                  클라리온은 복잡한 기술을 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
                </p>
              </div>

              <div className="pt-3 border-t border-clarion-line/60">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-[#68758A] font-mono uppercase tracking-wider">CLARION CO., LTD.</p>
                  <p className="text-xl font-extrabold text-[#142033]">대표이사 김동욱</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SLIDE 1 (#about) — CEO PORTRAIT & MAIN PHILOSOPHY (lg:hidden) */}
      <section id="about" className="lg:hidden fullscreen-section bg-white border-b border-clarion-line">
        <div className="container-main max-w-7xl h-full flex flex-col justify-between py-4 text-left">
          {/* Top Label */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-[10px] tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
              ABOUT CLARION · CEO PHILOSOPHY
            </span>
          </div>

          {/* Middle CEO Portrait (44% of viewport height) */}
          <div className="my-auto py-1">
            <div className="relative rounded-lg overflow-hidden border border-clarion-line/70 bg-[#F4F7FB] shadow-sm h-[43vh] max-h-[300px]">
              <img
                src="/images/ceo-portrait.jpg"
                alt="㈜클라리온 대표이사 김동욱"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bottom Headline & Tagline & Signature */}
          <div className="space-y-2 pt-2 border-t border-clarion-line/40">
            <h2 className="text-2xl font-extrabold text-[#142033] leading-tight tracking-tight">
              사람을 이롭게 하는 기술,<br />
              <span className="text-[#1265E5]">책임 있게 성장하는 기업.</span>
            </h2>
            <p className="text-[11px] font-mono text-[#68758A] font-semibold">
              Technology for People. Growth with Responsibility.
            </p>
            <div className="flex items-center justify-between pt-1 border-t border-clarion-line/30 text-[10px] font-mono">
              <span className="text-clarion-muted uppercase">CLARION CO., LTD.</span>
              <span className="font-extrabold text-[#142033]">대표이사 김동욱</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SLIDE 2 (#about-philosophy) — LEADERSHIP QUOTE & CORE VALUES (lg:hidden) */}
      <section id="about-philosophy" className="lg:hidden fullscreen-section bg-[#F8FAFC] border-b border-clarion-line">
        <div className="container-main max-w-7xl h-full flex flex-col justify-between py-5 text-left">
          {/* Top Label */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-[10px] tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
              LEADERSHIP QUOTE & CORE VALUES
            </span>
          </div>

          {/* Middle Quote & Philosophy */}
          <div className="my-auto space-y-4">
            {/* Quote Box */}
            <div className="p-4 bg-white rounded-xl border-l-4 border-[#1265E5] border-y border-r border-clarion-line/60 shadow-xs space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase tracking-widest block">
                LEADERSHIP QUOTE
              </span>
              <p className="text-xl font-extrabold text-[#142033] leading-snug">
                “우리가 만드는 기술은 결국 누구를 향하고 있는가.”
              </p>
            </div>

            {/* Philosophy Body */}
            <div className="space-y-2 text-xs text-[#334155] leading-relaxed">
              <p className="p-3 bg-white rounded-lg border border-clarion-line/50">
                제품보다 시스템을, 시스템보다 사람을, 그리고 사람을 움직이는 가치와 방향을 중요하게 생각합니다.
              </p>
              <p className="p-3 bg-white rounded-lg border border-clarion-line/50">
                클라리온은 복잡한 기술을 더 명확하게 만들고, 사람과 조직이 더 나은 판단과 실행을 할 수 있도록 돕겠습니다.
              </p>
            </div>
          </div>

          {/* Bottom Pillars */}
          <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-clarion-line/40">
            <div className="py-2 bg-white rounded border border-clarion-line/50 text-[10px] font-mono font-bold text-[#1265E5]">
              SYSTEM IT
            </div>
            <div className="py-2 bg-white rounded border border-clarion-line/50 text-[10px] font-mono font-bold text-[#1265E5]">
              HUMAN TECH
            </div>
            <div className="py-2 bg-white rounded border border-clarion-line/50 text-[10px] font-mono font-bold text-[#1265E5]">
              EXECUTION
            </div>
          </div>
        </div>
      </section>
    </>
  )
}








