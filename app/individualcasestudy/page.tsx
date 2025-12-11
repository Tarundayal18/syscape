import Footer from "@/components/footer"
import Header from "@/components/header"
import FeaturedProductsSection from "@/components/individualcasestudy/featured-products-section"
import FeaturesCardsGridSection from "@/components/individualcasestudy/features-cards-grid-section"
import CaseHeroSection from "@/components/individualcasestudy/hero-section"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <CaseHeroSection />
      <FeaturedProductsSection />
      <FeaturesCardsGridSection />
      <Footer />
    </main>
  )
}
