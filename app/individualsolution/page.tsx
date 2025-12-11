import Footer from "@/components/footer"
import Header from "@/components/header"
import IndiSolutionHeroSection from "@/components/individualsolution/hero-section"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <IndiSolutionHeroSection />
      <Footer />
    </main>
  )
}
