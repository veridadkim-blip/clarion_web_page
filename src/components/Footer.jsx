import React from 'react'
import { companyFacts, rndCenterInfo, patentInfo } from '../data/companyContent'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-[#07152B] text-white py-6 lg:py-7 border-t border-white/10 relative overflow-hidden snap-start">
      <div className="container-main max-w-7xl lg:max-w-[1320px] relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left">
          
          {/* LEFT: Brand, Legal Name, CEO & Slogan */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold font-mono tracking-wider text-white">
                CLARION
              </span>
              <span className="text-xs sm:text-[13px] text-white/90 font-semibold">
                (주)클라리온 <span className="text-white/50 px-1">·</span> 대표이사 {companyFacts.ceoName}
              </span>
            </div>
            <p className="text-xs sm:text-[13px] font-mono text-[#37B7FF] font-semibold tracking-wide">
              {companyFacts.philosophyEn}
            </p>
          </div>

          {/* RIGHT: R&D, Patent & Copyright */}
          <div className="space-y-1.5 text-left md:text-right font-mono text-xs text-white/80">
            <div className="flex flex-wrap items-center md:justify-end gap-x-3 gap-y-1 text-xs sm:text-[12.5px] text-white/85 font-medium">
              <span>R&D Center · {rndCenterInfo.recognitionDate}</span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span>Patent Pending · {patentInfo.applicationNo}</span>
            </div>
            <p className="text-xs text-white/65 pt-0.5 font-medium">
              © {currentYear} (주)클라리온. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
