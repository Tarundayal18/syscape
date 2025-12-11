import CaseHeroSection from "@/components/casestudy/hero-section"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <CaseHeroSection />
      <Footer />
    </main>
  )
}
