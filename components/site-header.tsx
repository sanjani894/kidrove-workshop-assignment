import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Details", href: "#details" },
  { label: "What You'll Learn", href: "#outcomes" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            BrightBots
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#register">
  <Button className="rounded-full font-semibold shadow-sm">
    Enroll Now
  </Button>
</a>
      </div>
    </header>
  )
}
