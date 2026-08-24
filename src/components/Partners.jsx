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
    <section
      id="track-record"
      className="py-20 lg:py-28 bg-[#F8FAFC] text-[#142033] border-b border-clarion-line/60 relative overflow-hidden"
    >
      <div className="container-main space-y-16 lg:space-y-20">
        
        {/* 1. PROJECT EXPERIENCE MATRIX SECTION */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-clarion-line/40 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-3 py-0.5 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#1265E5]/20">
                {projectExperience.labelEn}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#142033]">
                현장에서 쌓인 실행력이, <br />
                <span className="text-[#1265E5]">다음 기술의 기반이 됩니다.</span>
              </h2>
            </div>
            <div className="space-y-1 max-w-md">
              <p className="text-sm sm:text-base text-clarion-muted font-medium leading-relaxed">
                검증된 엔터프라이즈 프로젝트 수행 경험과 실행 체계가 <br className="hidden sm:inline" />
                클라리온 기술자산의 핵심 원동력입니다.
              </p>
              <p className="text-xs font-mono text-[#1265E5] font-bold uppercase tracking-wider">
                PROVEN IN REAL OPERATIONS · ENTERPRISE IT
              </p>
            </div>
          </div>

          {/* Primary Infographic: Project Experience Matrix & Delivery Engine */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clarion-line/60 shadow-lg space-y-8">
            
            {/* Top Sector Matrix Header (BANKING / SECURITIES / INSURANCE) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-clarion-line/40 pb-3">
                <span className="text-xs font-mono font-extrabold text-[#1265E5] tracking-widest uppercase">
                  01 DOMAIN EXPERIENCE MATRIX
                </span>
                <span className="text-[11px] font-mono text-clarion-muted">
                  FINANCIAL & ENTERPRISE SECTORS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {referenceGovernance.categorySectors.map((sector) => {
                  return (
                    <div key={sector.code} className="bg-[#F8FAFC] p-4 rounded-xl border border-clarion-line/60 space-y-2 group hover:border-[#1265E5]/40 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-black font-mono tracking-wider text-[#142033] group-hover:text-[#1265E5] transition-colors truncate">
                          {sector.code}
                        </span>
                        <Building2 className="w-4 h-4 text-[#1265E5] shrink-0" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-[#142033] truncate">{sector.title}</h4>
                        <p className="text-[10px] text-clarion-muted leading-tight line-clamp-2">{sector.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>


            {/* Center Connector Engine: CLARION DELIVERY LIFECYCLE ENGINE */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b border-clarion-line/40 pb-2">
                <span className="text-xs font-mono font-extrabold text-[#1265E5] tracking-widest uppercase">
                  CLARION DELIVERY LIFECYCLE ENGINE
                </span>
                <span className="text-[10px] font-mono text-clarion-muted">
                  5-NODE EXECUTION FLOW
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {projectExperience.deliveryLifecycle.map((item, idx) => (
                  <div
                    key={item.key}
                    className="bg-[#07152B] text-white p-4 rounded-xl border border-white/10 space-y-1.5 relative group"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#37B7FF]">{item.node}</span>
                      <span className="font-mono font-extrabold text-white/50 text-[10px]">{item.key}</span>
                    </div>
                    <h5 className="text-xs font-extrabold text-white">{item.title}</h5>
                    <p className="text-[11px] text-white/70 leading-snug font-normal">{item.desc}</p>

                    {idx < projectExperience.deliveryLifecycle.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#37B7FF] absolute -right-2.5 top-1/2 -translate-y-1/2 hidden lg:block z-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Execution Scopes (Concise 1-line descriptions) */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-extrabold text-clarion-muted uppercase tracking-widest block">
                EXECUTION CAPABILITY SCOPE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {projectExperience.executionScopes.map((scope) => (
                  <div
                    key={scope.key}
                    className="bg-[#F8FAFC] p-3 rounded-xl border border-clarion-line/60 space-y-1"
                  >
                    <span className="text-[10px] font-mono font-extrabold text-[#1265E5] block">
                      {scope.key}
                    </span>
                    <p className="text-[11px] font-medium text-[#142033] leading-tight">
                      {scope.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transition Note to Growth Tech */}
            <div className="pt-2 border-t border-clarion-line/40 flex items-center justify-between text-xs font-medium text-clarion-muted">
              <span className="text-[#1265E5] font-semibold">{projectExperience.transitionNote}</span>
              <a
                href="#growth-technology"
                className="inline-flex items-center gap-1 font-mono font-bold text-xs text-[#1265E5] hover:underline"
              >
                <span>GROWTH TECH CHANNELS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* 2. R&D CENTER + INTELLECTUAL PROPERTY VISUAL TECHNOLOGY EVIDENCE */}
        <div className="space-y-10 pt-6 border-t border-clarion-line/60">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-clarion-line/40 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-3 py-0.5 bg-[#1265E5]/10 text-[#1265E5] font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-[#1265E5]/20">
                {rndCenterInfo.labelEn}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#142033]">
                실행의 경험을, <br />
                <span className="text-[#1265E5]">기술자산으로 축적합니다.</span>
              </h2>
            </div>
            <div className="space-y-1 max-w-md">
              <p className="text-sm sm:text-base text-clarion-muted font-medium leading-relaxed">
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

      </div>
    </section>
  )
}





