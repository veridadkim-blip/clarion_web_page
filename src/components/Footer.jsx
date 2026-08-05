import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-clarion-navy text-white py-12 border-t border-clarion-line/10">
      <div className="container-main space-y-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="text-xl font-bold font-mono tracking-wider text-white">
              ㈜클라리온
            </span>
            <p className="text-xs font-mono text-clarion-cyan">
              AI · Data · Cloud Platform Company
            </p>
          </div>
          <p className="text-xs text-clarion-light/60 font-mono">
            © {currentYear} ㈜클라리온. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clarion-light/50">
          <p>회사 상세정보는 준비 중입니다.</p>
          <div className="flex items-center gap-4 text-clarion-light/40">
            <span>개인정보처리방침</span>
            <span>·</span>
            <span>이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
