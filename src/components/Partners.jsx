import React from 'react'
import {
  CheckCircle2,
  Workflow,
  Building2,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Layers,
  FileCode,
  Award,
  Sparkles,
  Landmark,
  TrendingUp,
  ShieldAlert,
  Binary,
  Globe2,
  Lock
} from 'lucide-react'
import {
  rndCenterInfo,
  patentInfo,
  projectExperience,
  referenceGovernance,
  companyFacts
} from '../data/companyContent'


export default function Partners() {
  // Check if any client or partner reference has been authorized for public display
  const approvedReferences = referenceGovernance.inventory.filter((item) => item.publicApproved)

  return (
    <>

      {/* 1. PROJECT EXPERIENCE MATRIX SECTION */}
      <section
        id="track-record"
        className="fullscreen-section bg-[#F8FAFC] text-[#142033] border-b border-clarion-line/60 relative overflow-hidden"
      >
        <div className="container-main max-w-7xl lg:max-w-[1320px] space-y-6 lg:space-y-7 relative z-10 pt-20 lg:pt-24 pb-8 lg:pb-10 my-auto">

          {/* 1. Section Editorial Header */}
          <div className="border-b border-clarion-line/60 pb-4 text-left">
            <span className="inline-flex items-center gap-2 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase border-b-2 border-[#1265E5] pb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1265E5]" />
              PROJECT EXPERIENCE · EXECUTION IN PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#142033] leading-tight tracking-tight pt-1.5">
              현장에서 쌓인 실행력이, <span className="text-[#1265E5]">다음 기술의 기반이 됩니다.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#334155] font-semibold pt-1">
              금융·보험 IT 및 대형 엔터프라이즈 환경에서 검증된 프로젝트 수행 경험과 실체 있는 실행 체계입니다.
            </p>
          </div>

          {/* 2. PRIMARY ARCHITECTURE CANVAS: Flat Editorial Industry Landscape */}
          <div className="py-2 space-y-6 relative text-left">
            
            {/* Top Header Bar */}
            <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1265E5]" />
                <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">
                  01 INDUSTRY EXPERIENCE LANDSCAPE
                </span>
              </div>
              <span className="text-xs font-mono text-clarion-muted hidden sm:inline-block">
                FINANCIAL & ENTERPRISE IT DOMAINS
              </span>
            </div>

            {/* 5 Industry Experience Flat Editorial Landscape */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-1">
              {referenceGovernance.categorySectors.map((sector) => (
                <div
                  key={sector.code}
                  className="space-y-1.5 px-2.5 py-2 border-l-2 border-clarion-line/80 hover:border-[#1265E5] transition-all duration-200 group"
                >
                  <span className="text-[11px] font-mono font-bold text-[#1265E5] block">
                    {sector.code}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#142033] group-hover:text-[#1265E5] transition-colors leading-snug">
                    {sector.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#475569] font-medium leading-snug whitespace-nowrap">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 3. PROJECT DELIVERY TIMELINE RAIL */}
            <div className="space-y-3 pt-3 border-t border-clarion-line/40">
              <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1265E5]" />
                  <span className="text-xs font-mono font-bold text-[#1265E5] uppercase tracking-wider">
                    02 PROJECT DELIVERY TIMELINE RAIL
                  </span>
                </div>
                <span className="text-xs font-mono text-clarion-muted hidden sm:inline-block">
                  END-TO-END METHODOLOGY
                </span>
              </div>

              {/* Desktop Horizontal Delivery Lifecycle Rail */}
              <div className="hidden lg:block relative py-6">
                <div className="absolute top-[32px] left-[6%] right-[6%] h-[2px] bg-clarion-line/80 z-0">
                  <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-[#1265E5] to-transparent animate-[pulseLine_3s_linear_infinite]" />
                </div>

                <div className="grid grid-cols-5 gap-3 relative z-10">
                  {projectExperience.deliveryLifecycle.map((item) => (
                    <div
                      key={item.key}
                      className="group cursor-pointer flex flex-col items-center text-center space-y-3 px-2 py-1"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#07152B] text-white flex items-center justify-center font-mono text-xs font-extrabold shadow-sm border border-[#1265E5]/40">
                        {item.node}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-mono font-bold text-[#1265E5] block">
                          {item.key}
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#142033] group-hover:text-[#1265E5] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-mono text-clarion-muted truncate whitespace-nowrap max-w-[170px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Vertical Delivery Timeline Flow */}
              <div className="lg:hidden space-y-3 relative py-2">
                <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-clarion-line/80 z-0" />
                {projectExperience.deliveryLifecycle.map((item) => (
                  <div
                    key={item.key}
                    className="relative z-10 cursor-pointer flex items-start gap-3.5 pl-1.5 text-left"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#07152B] text-white flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0 mt-0.5">
                      {item.node}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-extrabold text-[#142033]">{item.title}</h4>
                      <p className="text-[11px] text-clarion-muted font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* 4. Core Execution Scope Inline Summary Bar */}
          <div className="pt-2 border-t border-clarion-line/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-extrabold text-[#1265E5] uppercase tracking-wider shrink-0">
                EXECUTION SCOPE:
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#142033]">
                System Integration <span className="text-clarion-line px-1.5">/</span> Financial IT Development <span className="text-clarion-line px-1.5">/</span> Cloud Infrastructure <span className="text-clarion-line px-1.5">/</span> Operations & Maintenance
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1265E5] hover:text-[#07152B] transition-colors duration-200 shrink-0 group"
            >
              <span>프로젝트 수행 문의하기</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* 2. R&D CENTER + INTELLECTUAL PROPERTY VISUAL TECHNOLOGY EVIDENCE */}
      <section
        id="rnd-ip"
        className="fullscreen-section bg-white text-[#142033] border-b border-clarion-line/60 relative overflow-hidden lg:!justify-start"
      >
        <div className="container-main space-y-5 lg:space-y-6 pt-20 lg:pt-24 pb-8 lg:pb-10 flow-root">


          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-clarion-line/40 pb-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-0.5 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#1265E5]/20">
                {rndCenterInfo.labelEn}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-[#142033]">
                실행의 경험을, <br />
                <span className="text-[#1265E5]">기술자산으로 축적합니다.</span>
              </h2>
            </div>
            <div className="space-y-1 max-w-md">
              <p className="text-xs sm:text-sm text-clarion-muted font-medium leading-relaxed">
                공식 인정 기업부설연구소와 출원된 특허 지식재산을 바탕으로 <br className="hidden sm:inline" />
                지능형 기술 자산을 확장합니다.
              </p>
              <p className="text-xs font-mono text-[#1265E5] font-bold uppercase tracking-wider">
                FROM EXECUTION TO TECHNOLOGY ASSETS
              </p>
            </div>
          </div>


          {/* Desktop Composition: LEFT 58% Real Photo / RIGHT 42% Technology Proof */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT 58%: Real R&D Office Photo (User Provided Authentic Photo) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-clarion-line/60 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-clarion-line/40 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#1265E5] text-white flex items-center justify-center font-mono font-extrabold text-xs">
                      02
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase tracking-wider">
                        CORPORATE R&D CENTER
                      </span>
                      <h3 className="text-base sm:text-xl font-extrabold text-[#142033]">
                        {rndCenterInfo.korTitle}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold text-[#1265E5] bg-[#1265E5]/10 px-2.5 py-1 rounded-full border border-[#1265E5]/20">
                    {rndCenterInfo.displayBadge}
                  </span>
                </div>

                {/* Real R&D Office Photo Crop */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-clarion-line/60 group aspect-[16/10]">
                  <img
                    src={rndCenterInfo.image}
                    alt="(주)클라리온 기업부설연구소 실제 사무실 전경 및 연구 공간"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {rndCenterInfo.locationCaption}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 hidden sm:inline-block">
                      KOITA RECOGNIZED 2026.07.29
                    </span>
                  </div>
                </div>
              </div>

              {/* Domain Badges & Metadata */}
              <div className="space-y-3 pt-2 border-t border-clarion-line/40">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-clarion-muted font-medium">인정기관: {rndCenterInfo.agency}</span>
                  <span className="font-mono text-clarion-muted text-[11px]">인정일: {rndCenterInfo.recognitionDate}</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-clarion-muted uppercase mr-1">R&D DOMAINS:</span>
                  {rndCenterInfo.researchDomains.map((domain) => (
                    <span
                      key={domain}
                      className="bg-[#F8FAFC] text-[#1265E5] text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded border border-[#1265E5]/20"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT 42%: Patent Pending Abstract Flow (VERIFIED) */}
            <div className="lg:col-span-5 bg-[#07152B] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#37B7FF] text-[#07152B] flex items-center justify-center font-mono font-extrabold text-xs">
                      03
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#37B7FF] uppercase tracking-wider">
                        PATENT PENDING
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white">
                        특허출원 (PATENT PENDING)
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-black text-cyan-200 bg-[#37B7FF]/20 px-2.5 py-1 rounded-full border border-[#37B7FF]/40">
                    PATENT PENDING
                  </span>
                </div>

                {/* Patent Metadata Box */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#37B7FF]">출원번호: {patentInfo.applicationNo}</span>
                    <span className="font-mono text-white/50 text-[10px]">Filed: {patentInfo.filingDate}</span>
                  </div>
                  <p className="text-xs font-bold text-white leading-snug">
                    "{patentInfo.shortTitle}"
                  </p>
                </div>

                {/* Abstract Technology Cascade Flow Diagram */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-wider">
                      ABSTRACT CASCADE INFERENCE FLOW
                    </span>
                    <span className="text-[9px] font-mono text-[#37B7FF]">NON-MEDICAL WELLNESS</span>
                  </div>
                  <div className="space-y-1.5">
                    {patentInfo.abstractFlow.map((item) => (
                      <div
                        key={item.step}
                        className="bg-white/5 px-3 py-2 rounded-xl border border-white/10 text-xs flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#37B7FF]">
                            {item.step}
                          </span>
                          <span className="font-extrabold text-[#37B7FF]">{item.key}</span>
                        </div>
                        <span className="text-[11px] text-white/70 font-normal truncate max-w-[140px] sm:max-w-none">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patent Boundary Note */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>출원인: {patentInfo.applicant}</span>
                <span>발명자: {patentInfo.inventor}</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. ECOSYSTEM & REFERENCE GOVERNANCE LAYER (STEP 4) */}
        <div className="space-y-8 pt-6 border-t border-clarion-line/60">
          
          {/* Layer Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-clarion-line/40 pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-0.5 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#1265E5]/20">
                {referenceGovernance.labelEn}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142033]">
                책임 있는 거버넌스로, <span className="text-[#1265E5]">생태계와 협업합니다.</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-clarion-muted">
              <Lock className="w-3.5 h-3.5 text-[#1265E5]" />
              <span>DISCLOSURE GOVERNANCE ACTIVE</span>
            </div>
          </div>

          {/* Ecosystem Architecture Stream Diagram */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clarion-line/60 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2">
              <span className="text-xs font-mono font-extrabold text-[#1265E5] uppercase tracking-wider">
                ECOSYSTEM RELATIONSHIP FLOW
              </span>
              <span className="text-[10px] font-mono text-clarion-muted">
                VERIFIED ARCHITECTURE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-clarion-line/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase block">
                  01 CLOUD / IT ECOSYSTEM
                </span>
                <h4 className="text-xs font-extrabold text-[#142033]">엔터프라이즈 Cloud IT 생태계</h4>
              </div>

              <div className="bg-[#07152B] text-white p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#37B7FF] uppercase block">
                  02 CLARION DELIVERY ENGINE
                </span>
                <h4 className="text-xs font-extrabold text-white">클라리온 시스템 통합 엔진</h4>
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-clarion-line/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1265E5] uppercase block">
                  03 FINANCIAL & ENTERPRISE
                </span>
                <h4 className="text-xs font-extrabold text-[#142033]">금융·기업 수행 프로젝트</h4>
              </div>
            </div>
          </div>

          {/* Sector Governance Cards Grid (Seamless Fallback to Approved Companies) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {referenceGovernance.categorySectors.map((sector) => {
              // Find if any specific approved reference exists for this category
              const approvedMatch = approvedReferences.find((ref) => ref.categoryFallback === sector.code)

              return (
                <div
                  key={sector.code}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-clarion-line/60 shadow-xs space-y-3 hover:border-[#1265E5]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-[#1265E5] bg-[#1265E5]/10 px-2 py-0.5 rounded border border-[#1265E5]/20">
                        {sector.code}
                      </span>
                      <span className="text-[9px] font-mono text-clarion-muted uppercase">
                        {approvedMatch ? 'APPROVED' : 'CATEGORY'}
                      </span>
                    </div>

                    {/* Render Approved Reference or Sector Title */}
                    <div>
                      <h4 className="text-xs font-extrabold text-[#142033]">
                        {approvedMatch ? approvedMatch.name : sector.title}
                      </h4>
                      <p className="text-[10px] font-mono text-clarion-muted">
                        {sector.subTitle}
                      </p>
                    </div>

                    <p className="text-[11px] text-clarion-muted leading-tight">
                      {sector.desc}
                    </p>
                  </div>

                  {/* Scopes */}
                  <div className="pt-2 border-t border-clarion-line/40 flex flex-wrap gap-1">
                    {sector.scopes.map((scope) => (
                      <span
                        key={scope}
                        className="bg-[#F8FAFC] text-clarion-muted text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-clarion-line/40"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </section>
    </>
  )
}






