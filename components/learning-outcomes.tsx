import { Brain, Cog, Lightbulb, Code2, Rocket, CheckCircle2 } from "lucide-react"

const outcomes = [
  {
    icon: Brain,
    title: "Basics of AI",
    description:
      "Understand what artificial intelligence is and how smart machines learn and make decisions.",
  },
  {
    icon: Cog,
    title: "Robotics Fundamentals",
    description:
      "Explore sensors, motors and how robots sense and move through the world around them.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Skills",
    description:
      "Break big challenges into small steps and think like an engineer to solve them.",
  },
  {
    icon: Code2,
    title: "Hands-On Coding Experience",
    description:
      "Write your first lines of code with kid-friendly tools and watch your ideas come alive.",
  },
  {
    icon: Rocket,
    title: "Mini Project Building",
    description:
      "Bring it all together by designing and presenting your very own AI or robotics mini project.",
  },
]

export function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="scroll-mt-20 bg-secondary/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            What Your Child Will Learn
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills for a Smarter Future
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Five hands-on learning outcomes that build confidence and curiosity,
            one project at a time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/30 text-accent-foreground transition-transform group-hover:scale-110">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
