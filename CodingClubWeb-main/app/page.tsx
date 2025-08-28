import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WhoWeAre from "@/components/who-we-are"
import DomainsSection from "@/components/domains-section"
import UpcomingEvents from "@/components/upcoming-events"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <DomainsSection />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}
