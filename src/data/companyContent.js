/**
 * CLARION CORPORATE FACTUAL CONTENT & TRUST DATA MODULE (PHASE 2 FACTUAL SINGLE SOURCE OF TRUTH)
 * 
 * Includes:
 * - Company Facts & Positioning
 * - Verified KOITA Corporate R&D Center Recognition & Office Photo
 * - Verified Patent Pending (10-2026-0152975) & Cascade Process Flow
 * - Enterprise Project Experience Matrix
 * - Reference Governance & Disclosure Control
 * - Corporate Contact & Footer Navigation
 */

export const companyFacts = {
  companyName: '㈜클라리온',
  companyLegalName: '주식회사 클라리온',
  companyNameEn: 'CLARION Co., Ltd.',
  ceoName: '김동욱',
  established: '2026',
  slogan: '복잡한 기술을, 명확한 실행으로.',
  sloganEn: 'Technology for Clearer Decisions.',
  philosophy: '사람을 이롭게 하는 기술, 책임 있게 성장하는 기업.',
  philosophyEn: 'Technology for People. Growth with Responsibility.',
}

// VERIFIED CORPORATE R&D CENTER (KOITA RECOGNIZED)
export const rndCenterInfo = {
  status: 'VERIFIED',
  publicApproved: true,
  headline: '실행의 경험을, 기술자산으로 축적합니다.',
  labelEn: 'R&D & INTELLECTUAL PROPERTY · FROM EXECUTION TO TECHNOLOGY ASSETS',
  title: 'CORPORATE R&D CENTER',
  korTitle: '(주)클라리온 기업부설연구소',
  recognitionDate: '2026.07.29',
  agency: '한국산업기술진흥협회 (KOITA)',
  recognitionNo: '제 2026112566호',
  displayBadge: 'Recognized · 2026.07.29',
  image: '/images/clarion-rnd-center.jpg',
  locationCaption: 'CLARION CORPORATE R&D CENTER · Seoul 2026',
  researchDomains: ['AI', 'DATA', 'CLOUD', 'PLATFORM'],
}

// VERIFIED PATENT PENDING (특허출원)
export const patentInfo = {
  status: 'PATENT PENDING',
  publicApproved: true,
  displayBadge: 'PATENT PENDING · Filed 2026.08.14',
  applicationNo: '10-2026-0152975',
  filingDate: '2026.08.14',
  applicant: '주식회사 클라리온',
  inventor: '김동욱',
  agent: '특허법인 더웨이브',
  examinationRequested: true,
  title: '장부 건강벡터와 전조 신호를 이용한 비의료 생활건강 관리 우선순위 연쇄 추론 방법, 및 그 장치',
  shortTitle: '장부 건강벡터와 전조 신호를 이용한 비의료 생활건강 관리 우선순위 연쇄 추론 방법, 및 그 장치',
  abstractFlow: [
    { step: '01', key: 'QUESTIONNAIRE / SIGNAL', desc: '문진 및 생활신호 수집' },
    { step: '02', key: 'HEALTH VECTOR', desc: '장부 건강벡터 분석' },
    { step: '03', key: 'HEALTH AXIS', desc: '건강축 전조신호 연동' },
    { step: '04', key: 'CASCADE INFERENCE', desc: '우선순위 연쇄 추론' },
    { step: '05', key: 'LIFESTYLE PRIORITY', desc: '생활건강 관리 실천' },
  ],
}

// STEP 2: PROJECT EXPERIENCE MATRIX & DELIVERY ENGINE DATA
export const projectExperience = {
  headline: '현장에서 쌓인 실행력이, 다음 기술의 기반이 됩니다.',
  labelEn: 'PROJECT EXPERIENCE · PROVEN IN REAL OPERATIONS',
  sectors: [
    { code: 'BANKING', title: '금융기관 IT', desc: '고가용성 코어 및 채널 통합' },
    { code: 'SECURITIES', title: '증권 IT', desc: '실시간 데이터 처리 및 트랜잭션' },
    { code: 'INSURANCE', title: '보험 IT', desc: '업무 프로세스 및 심사 연동' },
  ],
  deliveryLifecycle: [
    { node: '01', key: 'REQUIREMENT', title: '요구분석', desc: '기업 요건 수립' },
    { node: '02', key: 'ARCHITECTURE', title: '시스템 설계', desc: '아키텍처 및 보안' },
    { node: '03', key: 'DEVELOPMENT', title: '전문 개발', desc: '코어 인프라 구축' },
    { node: '04', key: 'INTEGRATION', title: '데이터 통합', desc: '이종 시스템 연동' },
    { node: '05', key: 'OPERATION', title: '책임 운영', desc: '안정적 운용 지원' },
  ],
  executionScopes: [
    { key: 'SYSTEM INTEGRATION', desc: '기업 시스템과 외부 서비스를 연결' },
    { key: 'PROGRAM DEVELOPMENT', desc: '실제 업무 프로세스에 맞춘 개발' },
    { key: 'DATA PROCESSING', desc: '운영 데이터를 안정적으로 처리' },
    { key: 'MAINTENANCE', desc: '서비스 안정성과 지속 운영 지원' },
    { key: 'OPERATION SUPPORT', desc: '현장 운영 흐름을 고려한 지원' },
  ],
  transitionNote: '현장의 경험과 데이터는 AI·Data 기술자산으로 이어집니다.',
}

// STEP 4: PUBLIC DISCLOSURE & REFERENCE GOVERNANCE MODEL
export const referenceGovernance = {
  headline: '책임 있는 거버넌스로, 생태계와 협업합니다.',
  labelEn: 'ECOSYSTEM & REFERENCE GOVERNANCE · VERIFIED RELATIONSHIPS',
  inventory: [
    {
      id: 'partner_01',
      name: '메가존클라우드',
      relationshipType: 'partner',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'CLOUD ECOSYSTEM',
    },
    {
      id: 'partner_02',
      name: '삼성SDS',
      relationshipType: 'partner',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'ENTERPRISE IT',
    },
    {
      id: 'partner_03',
      name: '이니텍',
      relationshipType: 'partner',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'SECURITY / INTEGRATION',
    },
    {
      id: 'client_01',
      name: '수협은행',
      relationshipType: 'client',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'BANKING',
    },
    {
      id: 'client_02',
      name: '미래에셋증권',
      relationshipType: 'client',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'SECURITIES',
    },
    {
      id: 'client_03',
      name: '한화손해보험',
      relationshipType: 'client',
      publicApproved: false,
      logoApproved: false,
      projectNameApproved: false,
      descriptionApproved: false,
      categoryFallback: 'INSURANCE',
    },
  ],
  categorySectors: [
    {
      code: 'BANKING',
      title: '금융기관 IT',
      subTitle: 'FINANCIAL SERVICES',
      desc: '안정적인 금융 시스템 구축 및 운영',
      scopes: ['SYSTEM INTEGRATION', 'PROGRAM DEVELOPMENT'],
    },
    {
      code: 'SECURITIES',
      title: '증권 IT',
      subTitle: 'SECURITIES IT',
      desc: '실시간 거래 환경과 데이터 연계',
      scopes: ['DATA PROCESSING', 'PROGRAM DEVELOPMENT'],
    },
    {
      code: 'INSURANCE',
      title: '보험 IT',
      subTitle: 'INSURANCE IT',
      desc: '보험 업무 시스템 및 프로세스 연계',
      scopes: ['SYSTEM INTEGRATION', 'OPERATION SUPPORT'],
    },
    {
      code: 'ENTERPRISE IT',
      title: '기업 인프라 IT',
      subTitle: 'ENTERPRISE SYSTEM',
      desc: '기업 시스템 구축과 현대화',
      scopes: ['SYSTEM INTEGRATION', 'MAINTENANCE'],
    },
    {
      code: 'CLOUD ECOSYSTEM',
      title: '클라우드 생태계',
      subTitle: 'CLOUD INTEGRATION',
      desc: '클라우드 기반 인프라 및 시스템 연계',
      scopes: ['CLOUD INTEGRATION', 'OPERATION SUPPORT'],
    },
  ],
}

// FACTUAL CONTACT DETAILS
export const corporateContactInfo = {
  companyLegalName: '주식회사 클라리온',
  ceoName: '김동욱',
  businessNo: null,
  address: null,
  email: null,
  phone: null,
  hansaengAiUrl: null,
}

// FOOTER NAVIGATION LINKS
export const footerNavigation = {
  company: [
    { label: '회사소개', href: '#about' },
    { label: '사업 포트폴리오', href: '#portfolio' },
    { label: 'Core Business', href: '#core-business' },
    { label: 'Growth Tech', href: '#growth-technology' },
    { label: 'Healthcare AI', href: '#healthcare' },
  ],
  project: [
    { label: 'Project Experience', href: '#track-record' },
    { label: 'B2B Inquiry', href: '#contact' },
  ],
}
