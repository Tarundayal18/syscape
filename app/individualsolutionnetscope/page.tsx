import Footer from "@/components/footer"
import Header from "@/components/header"
import CaseSection from "@/components/individualsolutionnetscope/casesection"
import Herosectioni from "@/components/individualsolutionnetscope/herosectioni"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Herosectioni />
      <CaseSection />
      <Footer />
    </main>
  )
}
