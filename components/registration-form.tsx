"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormValues = {
  name: string
  email: string
  phone: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = "Please enter your name."
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  const digits = values.phone.replace(/\D/g, "")
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number."
  } else if (digits.length < 10) {
    errors.phone = "Please enter a valid phone number (at least 10 digits)."
  }

  return errors
}

export function RegistrationForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const nextErrors = validate(values)
  setErrors(nextErrors)

  if (Object.keys(nextErrors).length > 0) return

  setSubmitting(true)

  // 🔥 DEBUG LOGS (ADDED HERE)
  console.log("🔥 API URL:", process.env.NEXT_PUBLIC_API_URL)
  console.log("🔥 FORM DATA:", values)

  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    if (!API_URL) {
      throw new Error("API URL missing in .env.local")
    }

    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    console.log("🔥 RESPONSE STATUS:", response.status)

    const data = await response.json()

    console.log("🔥 RESPONSE DATA:", data)

    if (data.success) {
      setSubmitted(true)
      setValues(initialValues)
    } else {
      alert(data.message || "Submission failed")
    }
  } catch (error) {
    console.log("🔥 ERROR:", error)
    alert("Backend not reachable or API error")
  }

  setSubmitting(false)
}

  const fields: {
    id: keyof FormValues
    label: string
    type: string
    placeholder: string
    inputMode?: "text" | "email" | "tel"
    autoComplete: string
  }[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Child's full name",
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "parent@email.com",
      inputMode: "email",
      autoComplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 98765 43210",
      inputMode: "tel",
      autoComplete: "tel",
    },
  ]

  return (
    <section id="register" className="scroll-mt-20 bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Reserve Your Child&apos;s Spot
          </h2>

          <p className="mt-4 text-muted-foreground">
            Seats are limited for July 2026 batch.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Small batches with live sessions",
              "Certificate after completion",
              "Beginner friendly learning",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border p-6 shadow-md bg-white">
          {submitted ? (
            <div className="text-center py-10">
              <PartyPopper className="mx-auto text-green-500" size={40} />
              <h3 className="mt-4 text-xl font-bold">
                Registration Successful!
              </h3>
              <p className="text-gray-500 mt-2">
                We will contact you soon.
              </p>

              <Button
                className="mt-5"
                onClick={() => setSubmitted(false)}
              >
                Register Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {fields.map((field) => (
                <div key={field.id}>
                  <label className="block font-medium mb-1">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.id]}
                    onChange={(e) =>
                      handleChange(field.id, e.target.value)
                    }
                    className="w-full border p-2 rounded"
                  />

                  {errors[field.id] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <Button
                type="submit"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}