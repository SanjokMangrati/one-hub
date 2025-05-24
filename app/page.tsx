import { Suspense } from "react"
import HeroSection from "@/components/sections/hero-section"
import LogoCloud from "@/components/sections/logo-cloud"
import FeaturesSection from "@/components/sections/features-section"
import PerformanceSection from "@/components/sections/performance-section"
import PricingSection from "@/components/sections/pricing-section"
import IntegrationsSection from "@/components/sections/integrations-section"
import BlogSection from "@/components/sections/blog-section"
import FaqSection from "@/components/sections/faq-section"
import CtaSection from "@/components/sections/cta-section"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import ComparisonSection from "@/components/sections/comparison-section"
import TestimonialSection from "@/components/sections/testimonial-section"
import UseCasesSection from "@/components/sections/use-cases-section"
import PageLoader from "@/components/ui/page-loader"

export default function OneHubLanding() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <Suspense fallback={<PageLoader />}>
          <HeroSection />
          <LogoCloud />
          <FeaturesSection />
          <PerformanceSection />
          <UseCasesSection />
          <IntegrationsSection />
          <ComparisonSection />
          <TestimonialSection />
          <PricingSection />
          <BlogSection />
          <FaqSection />
          <CtaSection />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
