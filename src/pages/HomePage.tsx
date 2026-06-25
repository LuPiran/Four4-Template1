import { HeroCarousel } from '../components/sections/HeroCarousel'
import { TrustBadges } from '../components/sections/TrustBadges'
import { PathologiesSection } from '../components/sections/PathologiesSection'
import { AboutStoreSection } from '../components/sections/AboutStoreSection'
import { BlogPreviewSection } from '../components/sections/BlogPreviewSection'
import { HomeAgeVerification } from '../components/common/HomeAgeVerification'

export function HomePage() {
  return (
    <HomeAgeVerification>
      <div className="page-content-enter">
        <HeroCarousel />
        <TrustBadges />
        <PathologiesSection compact />
        <AboutStoreSection compact />
        <BlogPreviewSection />
      </div>
    </HomeAgeVerification>
  )
}
