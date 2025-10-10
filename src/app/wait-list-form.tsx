"use client"

import type React from "react"

import { useState } from "react"

type FormState = {
  name: string
  email: string
  phone: string
}

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

 async function onSubmit(e: React.FormEvent) {
  e.preventDefault()
  setError(null)

  if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
    setError("Please provide a valid name and email.")
    return
  }

  try {
    setLoading(true)

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || "Failed to send email")
    }

    setSubmitted(true)
    setForm({ name: "", email: "", phone: "" })
  } catch (err: any) {
    setError(err.message || "Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}

  if (submitted) {
    return (
      <div className="rounded-xl border border-black/10 bg-neutral-50 p-4 text-center">
        <p className="text-sm text-neutral-700">Thanks for joining the waitlist! We will be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-black">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Jane Doe"
          required
          className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-black"
          aria-invalid={!!error && !form.name.trim()}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="jane@domain.com"
          required
          className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-black"
          aria-invalid={!!error && !/^\S+@\S+\.\S+$/.test(form.email)}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-black">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={onChange}
          placeholder="+1 555 123 4567"
          required
          className="w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-black"
          aria-invalid={!!error && !form.phone.trim()}
        />
      </div>

      {error && (
        <p className="text-xs text-[color:#EB2027]" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm font-medium text-white transition hover:bg-black/90 disabled:opacity-60"
      >
        {loading ? "Submitting…" : "Join the Waitlist"}
      </button>

      <p className="text-center text-xs text-neutral-500">
        By joining, you agree to be contacted about ATHLECURE updates.
      </p>
    </form>
  )
}
