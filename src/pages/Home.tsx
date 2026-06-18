import Hero from '../components/Hero'
import GroupSection from '../components/sections/GroupSection'
import CompaniesSection from '../components/sections/CompaniesSection'
import VisionSection from '../components/sections/VisionSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import WhySection from '../components/sections/WhySection'
import CTASection from '../components/sections/CTASection'
import SEO from '../components/SEO'
import { seoMeta } from '../data/seo'

export default function Home() {
  return (
    <div className="bg-ivory">
      <SEO {...seoMeta['/']} pathname="/" />
      <Hero />
      <GroupSection />
      <CompaniesSection />
      <VisionSection />
      <ProjectsSection />
      <WhySection />
      <CTASection />
    </div>
  )
}
