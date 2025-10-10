"use client"

import { Toaster as Sonner, toast as sonnerToast } from "sonner"

export const Toaster = () => (
  <Sonner
    position="top-center"
    richColors
    closeButton
    theme="light"
    toastOptions={{
      classNames: {
        toast:
          "rounded-xl border border-black/10 bg-white text-black shadow-md px-4 py-3",
        title: "font-medium",
        description: "text-sm text-neutral-600",
      },
    }}
  />
)

export const toast = sonnerToast
