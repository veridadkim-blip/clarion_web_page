import React from 'react'
import { ArrowUpRight, ShieldCheck, Award, FileCode } from 'lucide-react'
import {
  companyFacts,
  rndCenterInfo,
  patentInfo,
  corporateContactInfo,
  footerNavigation
} from '../data/companyContent'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-[#07152B] text-white py-8 lg:py-10 border-t border-white/10 relative overflow-hidden">
      <div className="container-main relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Brand & Slogan (LEFT) */}
          <div className="space-y-1.5 max-w-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold font-mono tracking-wider text-white">
                CLARION
              </span>
              <span className="text-xs font-mono text-[#37B7FF] font-bold bg-[#37B7FF]/10 px-2.5 py-0.5 rounded border border-[#37B7FF]/20">
                (주)클라리온
              </span>
            </div>
            <p className="text-xs text-white/70 font-medium">
              AI · Data · Cloud Platform Company · {companyFacts.slogan}
            </p>
            <p className="text-[11px] font-mono text-white/50">
              {companyFacts.philosophyEn}
            </p>
          </div>

          {/* Trust Metadata & Links (RIGHT / TOP) */}
          <div className="space-y-2 text-right self-start md:self-auto font-mono text-xs text-white/70">
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-4 gap-y-1 text-[11px]">
              <span className="inline-flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#37B7FF]" />
                R&D Center · {rndCenterInfo.recognitionDate}
              </span>
              <span className="inline-flex items-center gap-1">
                <FileCode className="w-3.5 h-3.5 text-[#37B7FF]" />
                Patent Pending · {patentInfo.applicationNo}
              </span>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-3 text-[11px] text-white/50 pt-1">
              <a href="#about" className="hover:text-white transition-colors">회사소개</a>
              <span>·</span>
              <a href="#portfolio" className="hover:text-white transition-colors">사업 영역</a>
              <span>·</span>
              <a href="#contact" className="hover:text-white transition-colors">B2B 문의</a>
            </div>
          </div>
        </div>

        {/* Corporate Legal Info & Copyright (BOTTOM) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50 font-mono">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>(주)클라리온</span>
            <span>대표이사 {companyFacts.ceoName}</span>
            {corporateContactInfo.businessNo && <span>사업자등록번호: {corporateContactInfo.businessNo}</span>}
          </div>
          <p>
            © {currentYear} (주)클라리온. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}




