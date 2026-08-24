import React from 'react'
import { Building2, ShieldCheck, CheckCircle2, Award, FileText, Cpu, ChevronRight } from 'lucide-react'
import { rndCenterInfo, patentInfo, referenceGovernance } from '../data/companyContent'

export default function Partners() {
  return (
    <section id="track-record" className="py-20 lg:py-28 bg-white border-b border-clarion-line space-y-20">
      
      {/* 1. VERIFIED TRACK RECORD & SECTOR MATRIX */}
      <div className="container-main space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-wider uppercase rounded-full border border-[#1265E5]/20">
            VERIFIED TRACK RECORD & ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142033] leading-tight">
            실제 프로젝트와 <span className="text-[#1265E5]">검증된 실행력</span>
          </h2>
          <p className="text-base sm:text-lg text-[#68758A] font-normal leading-relaxed">
            금융·보험 IT 현장에서 쌓인 시스템 통합 경험과 투명한 거버넌스를 바탕으로
            고객사의 업무 체계를 명확하게 지탱합니다.
          </p>
        </div>

        {/* Category Sectors */}
        <div className="grid md:grid-cols-3 gap-6">
          {referenceGovernance.categorySectors.slice(0, 3).map((sec) => (
            <div
              key={sec.code}
              className="bg-[#F8FAFC] p-8 rounded-2xl border border-clarion-line/80 space-y-4 shadow-sm hover:border-[#1265E5]/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#1265E5]/10 text-[#1265E5] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#1265E5] bg-white px-2.5 py-1 rounded border border-clarion-line/60">
                  {sec.subTitle}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#142033]">{sec.title}</h3>
                <p className="text-xs sm:text-sm text-[#68758A] leading-relaxed font-normal">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. CORPORATE R&D CENTER & PATENT PENDING VISUAL EVIDENCE */}
      <div className="bg-[#07152B] py-16 text-white relative overflow-hidden">
        <div className="container-main space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 bg-[#37B7FF]/15 text-[#37B7FF] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#37B7FF]/30">
                {rndCenterInfo.labelEn}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {rndCenterInfo.headline}
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#37B7FF]">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIALLY RECOGNIZED R&D & PATENT PENDING</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Corporate R&D Center Office Photo (Left 6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src={rndCenterInfo.image}
                  alt={rndCenterInfo.title}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="bg-[#1265E5] text-white px-3 py-1 rounded-full font-bold shadow-md">
                    {rndCenterInfo.displayBadge}
                  </span>
                  <span className="text-white/80 font-bold">{rndCenterInfo.locationCaption}</span>
                </div>
              </div>

              <div className="bg-[#0B1F3A] p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
                <div className="flex justify-between text-white/90">
                  <span>연구소명: <strong className="text-white">{rndCenterInfo.korTitle}</strong></span>
                  <span className="text-[#37B7FF]">{rndCenterInfo.agency}</span>
                </div>
                <div className="flex justify-between text-white/60 text-[11px]">
                  <span>인정번호: {rndCenterInfo.recognitionNo}</span>
                  <span>인정일: {rndCenterInfo.recognitionDate}</span>
                </div>
              </div>
            </div>

            {/* Patent Pending Visual Abstract Cascade (Right 6 Cols) */}
            <div className="lg:col-span-6 bg-[#0B1F3A] p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#37B7FF] font-bold uppercase tracking-wider block">
                    PATENT PENDING · 출원번호 {patentInfo.applicationNo}
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    {patentInfo.shortTitle}
                  </h4>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">
                  출원일 {patentInfo.filingDate}
                </span>
              </div>

              <p className="text-xs text-white/70 font-normal leading-relaxed">
                {patentInfo.title}
              </p>

              {/* 5-Step Abstract Cascade */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-white/50 uppercase block">CASCADE INFERENCE PROCESS</span>
                <div className="grid grid-cols-5 gap-1 text-center font-mono">
                  {patentInfo.abstractFlow.map((stg) => (
                    <div key={stg.step} className="bg-[#07152B] p-2 rounded-lg border border-white/10 space-y-1">
                      <span className="text-[9px] text-[#37B7FF] font-bold block">{stg.step}</span>
                      <span className="text-[10px] font-extrabold text-white truncate block">{stg.key}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>출원인: {patentInfo.applicant}</span>
                <span>발명자: {patentInfo.inventor}</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
