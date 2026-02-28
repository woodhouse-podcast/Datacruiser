import Layout from './components/Layout'
import Hero from './components/Hero'
import DataInMotion from './components/DataInMotion'
import TemporalIntelligence from './components/TemporalIntelligence'
import SpatialIntelligence from './components/SpatialIntelligence'
import CapabilitiesGrid from './components/CapabilitiesGrid'
import EnterpriseSection from './components/EnterpriseSection'
import IndustriesSection from './components/IndustriesSection'
import ValueProposition from './components/ValueProposition'
import CTASection from './components/CTASection'

function App() {
  return (
    <Layout>
      <Hero />
      <DataInMotion />
      <TemporalIntelligence />
      <SpatialIntelligence />
      <CapabilitiesGrid />
      <EnterpriseSection />
      <IndustriesSection />
      <ValueProposition />
      <CTASection />
    </Layout>
  )
}

export default App
