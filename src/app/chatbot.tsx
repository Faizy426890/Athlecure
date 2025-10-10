"use client"

import * as React from "react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AthelcureChatbot() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! We’re working on something special. We’re coming soon — please join the waitlist to get the latest updates.",
    },
  ])
  const [input, setInput] = React.useState("")

  function sendUserMessage(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Respond with a friendly "coming soon" message
    const reply: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Thanks for reaching out! We’re building Athelcure and will launch soon. Please join the waitlist to be first to know.",
    }
    setTimeout(() => setMessages((prev) => [...prev, reply]), 300)
  }

  function openWaitlist() {
    // Notify waitlist modal
    window.dispatchEvent(new CustomEvent("open-waitlist"))
    // Close the sheet immediately
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Athelcure chat"
          className={cn(
            "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50",
            "rounded-full bg-transparent p-0 outline-none transition",
            "hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <Image
            src="https://res.cloudinary.com/diml90c1y/image/upload/v1758075156/chat-bot-3d-icon_235528-2179-removebg-preview_epyyls.png"
            alt="Chatbot icon"
            width={74}
            height={74}
            className="h-14 w-14 md:h-20 md:w-20 select-none drop-shadow-md"
            priority
          />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-sm p-0">
        <SheetHeader className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/diml90c1y/image/upload/v1759972747/1_Transparent_Image_pjpbxm.png"
                alt="Brand Logo"
                className="h-20 lg:h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <SheetTitle className="text-base">Chat with Athelcure</SheetTitle>
              <SheetDescription className="text-xs">
                Light, modern, and professional. How can we help?
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                  m.role === "assistant"
                    ? "bg-secondary text-foreground"
                    : "ml-auto bg-primary text-primary-foreground",
                )}
              >
                {m.content}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs text-muted-foreground">
                We’re coming soon — join the waitlist for updates.
              </span>
              <Button size="sm" variant="default" onClick={openWaitlist}>
                Join Waitlist
              </Button>
            </div>

            <form onSubmit={sendUserMessage} className="flex items-center gap-2">
              <Input
                aria-label="Your message"
                placeholder="Type a message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit" variant="secondary">
                Send
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
