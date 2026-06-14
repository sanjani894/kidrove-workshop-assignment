import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorkshopDetails } from "@/components/workshop-details"
import { LearningOutcomes } from "@/components/learning-outcomes"
import { FaqSection } from "@/components/faq-section"
import { RegistrationForm } from "@/components/registration-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WorkshopDetails />
        <LearningOutcomes />
        <FaqSection />
        <RegistrationForm />
      </main>
      <SiteFooter />
    </div>
  )
}
