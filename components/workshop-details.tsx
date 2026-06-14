import { Users, CalendarClock, Wifi, IndianRupee, CalendarDays } from "lucide-react"

const details = [
  {
    icon: Users,
    label: "Age Group",
    value: "8–14 Years",
  },
  {
    icon: CalendarClock,
    label: "Duration",
    value: "4 Weeks",
  },
  {
    icon: Wifi,
    label: "Mode",
    value: "Online",
  },
  {
    icon: IndianRupee,
    label: "Fee",
    value: "₹2,999",
  },
  {
    icon: CalendarDays,
    label: "Start Date",
    value: "15 July 2026",
  },
]

export function WorkshopDetails() {
  return (
    <section id="details" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Workshop at a Glance
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about the program, in one quick look.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
