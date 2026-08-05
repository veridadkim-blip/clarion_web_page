import Header from './components/Header'
import Hero from './components/Hero'
import CompanyOverview from './components/CompanyOverview'
import BusinessArchitecture from './components/BusinessArchitecture'
import RnDPatents from './components/RnDPatents'
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
        {/* 1. Hero Section (Clarity Wave Canvas & Clear Decision Message) */}
        <Hero />

        {/* 2. Company Overview (About Clarion) */}
        <CompanyOverview />

        {/* 3. Core Business Areas (Software, SI, AI Solutions, Big Data, Fintech, SaaS) */}
        <BusinessArchitecture />

        {/* 4. Technology & R&D Orientation */}
        <RnDPatents />

        {/* 5. Insurance-linked Non-Medical Healthcare Positioning */}
        <HealthcareHighlight />

        {/* 6. Projects & Execution Capabilities */}
        <Partners />

        {/* 7. B2B Project & Consultation Contact */}
        <B2BContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
