import Footer from "@/components/footer"
import Header from "@/components/header"
import AccordionSection from "@/components/individualsolution/accordion-section"
import ContactCTASection from "@/components/individualsolution/contact-cta-section"
import FAQSection from "@/components/individualsolution/faq-section"
import IndiSolutionHeroSection from "@/components/individualsolution/hero-section"
import TimelineSection from "@/components/individualsolution/timeline-section"

export const metadata = {
  title: "Industries - Syscape",
  description: "Explore our industry solutions and expertise",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <IndiSolutionHeroSection />
      <TimelineSection />
      <AccordionSection />
      <FAQSection />
      <ContactCTASection />
      <Footer />
    </main>
  )
}
