import Footer from "@/components/footer"
import Header from "@/components/header"
import AccordionSection from "@/components/individualsolution2/accordion-section"
import ContactCTASection from "@/components/individualsolution2/contact-cta-section"
import FAQSection from "@/components/individualsolution2/faq-section"
import IndiSolutionHeroSection from "@/components/individualsolution2/hero-section"
import TimelineSection from "@/components/individualsolution2/timeline-section"

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
