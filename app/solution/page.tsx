import Footer from "@/components/footer"
import Header from "@/components/header"
import FeaturesGridSection from "@/components/solution/features-grid-section"
import SolutionHeroSection from "@/components/solution/hero-section"
import ShowcaseCardsSection from "@/components/solution/showcase-cards-section"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <SolutionHeroSection />
      <ShowcaseCardsSection />
      <FeaturesGridSection />
      <Footer />
    </main>
  )
}
