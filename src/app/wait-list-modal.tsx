"use client"

import { useEffect, useState } from "react"
import WaitlistForm from "./wait-list-form"

export default function WaitlistModal() {
  const [open, setOpen] = useState(false)

  // Open on first client render
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 150)
    return () => clearTimeout(t)
  }, [])

  // Close on ESC for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Join the waitlist modal"
      className="fixed inset-0 z-50 flex items-start justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden="true" />

      {/* Modal Panel */}
      <div
        className="relative z-10 mx-4 mt-32 w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border-t-4"
        style={{ borderTopColor: "#EB2027" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-500">Athlecure</p>
            <h3 className="mt-1 text-xl font-semibold text-black">Join the Waitlist</h3>
            <p className="text-sm text-neutral-600">We are coming soon</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close modal"
            className="rounded-md border border-black/10 p-2 text-black/70 transition hover:bg-neutral-50"
          >
            {"✕"}
          </button>
        </div>

        <div className="mt-4">
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
}
