import Footer from "@/components/footer"
import Header from "@/components/header"
import ContentSection from "@/components/industries/content-section"
import CTASection from "@/components/industries/cta-section"
import FeaturesSection from "@/components/industries/features-section"
import HeroSection from "@/components/industries/hero-section"
import IndustriesDetailSection from "@/components/industries/industries-detail-section"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <ContentSection />
      <IndustriesDetailSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
