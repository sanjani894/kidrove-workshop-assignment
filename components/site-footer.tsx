import { Bot } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Bot className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-base font-bold text-foreground">
            BrightBots
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          AI &amp; Robotics Summer Workshop · Empowering young makers aged 8–14.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BrightBots. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
