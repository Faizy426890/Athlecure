"use client"

import {
  Toaster as SonnerToaster,
  toast as sonnerToast,
  ToasterProps,
} from "sonner"

export const Toaster = (props: ToasterProps) => (
  <SonnerToaster
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
    {...props} // ✅ allows external overrides
  />
)

export const toast = sonnerToast
