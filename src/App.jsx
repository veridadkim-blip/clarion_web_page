import Header from './components/Header'
import Hero from './components/Hero'
import CompanyOverview from './components/CompanyOverview'
import BusinessArchitecture from './components/BusinessArchitecture'
import CoreBusiness from './components/CoreBusiness'
import GrowthTechnology from './components/GrowthTechnology'
import HealthcareHighlight from './components/HealthcareHighlight'
import Partners from './components/Partners'
import B2BContact from './components/B2BContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-clarion-light font-sans antialiased text-clarion-text selection:bg-clarion-blue selection:text-white">
      {/* Navigation Header */}
      <Header />

      <main>
        {/* 1. CLARITY WAVE (Hero: 복잡한 기술을, 명확한 실행으로) */}
        <Hero />

        {/* 2. WHO WE ARE (Company Overview: AI · Data · Cloud Platform Company) */}
        <CompanyOverview />

        {/* 3. BUSINESS PORTFOLIO (Business Architecture: NOW → NEXT → FUTURE) */}
        <BusinessArchitecture />

        {/* 4. CORE BUSINESS (Core Business: 금융·보험 IT · SI · Cloud · Software) */}
        <CoreBusiness />

        {/* 5. GROWTH TECHNOLOGY (Growth Technology: AI · Data · Platform · GovTech) */}
        <GrowthTechnology />

        {/* 6. HEALTHCARE INNOVATION (Healthcare Highlight: 한생AI · 비의료 웰니스 · 생활건강솔루션) */}
        <HealthcareHighlight />

        {/* 7. VERIFIED TRACK RECORD (Partners: 실제 프로젝트와 실행력) */}
        <Partners />

        {/* 8. B2B CONTACT (B2B Project Consultation) */}
        <B2BContact />
      </main>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  )
}
