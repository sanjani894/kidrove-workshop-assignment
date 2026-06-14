import Image from "next/image"
import { Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-secondary/40"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Summer 2026 Batch · Ages 8–14
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI &amp; Robotics{" "}
            <span className="text-primary">Summer Workshop</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Learn AI, Robotics and coding through hands-on, fun projects for
            kids aged 8–14. Build real things, make new friends, and discover
            the magic of technology.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#register">
  <Button
    size="lg"
    className="w-full rounded-full px-8 text-base font-bold shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
  >
    Enroll Now
  </Button>
</a>
            <a href="#details">
  <Button
    size="lg"
    variant="outline"
    className="w-full rounded-full border-2 px-8 text-base font-bold sm:w-auto"
  >
    View Details
  </Button>
</a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground lg:justify-start">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent text-accent"
                  aria-hidden="true"
                />
              ))}
            </span>
            Loved by 2,000+ young makers &amp; parents
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <Image
              src="/images/hero-kids-robotics.png"
              alt="Children working together to build and program a friendly robot using a laptop and tablet"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
