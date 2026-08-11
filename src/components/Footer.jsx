import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-[#07152B] text-white py-12 border-t border-white/10">
      <div className="container-main space-y-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xl font-bold font-mono tracking-wider text-white">
              ㈜클라리온
            </span>
            <p className="text-xs font-mono text-[#37B7FF]">
              AI · Data · Cloud Platform Company
            </p>
          </div>
          <p className="text-xs text-white/70 font-mono">
            © {currentYear} ㈜클라리온. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>회사 상세정보는 준비 중입니다.</p>
          <div className="flex items-center gap-4 text-white/60">
            <span>개인정보처리방침</span>
            <span>·</span>
            <span>이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
