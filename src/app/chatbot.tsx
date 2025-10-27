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
  timestamp: Date
}

export function AthelcureChatbot() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! We're working on something special. We're coming soon — please join the waitlist to get the latest updates.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = React.useState("")
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  function formatTime(date: Date) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  function sendUserMessage(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Respond with a friendly "coming soon" message
    const reply: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Thanks for reaching out! We're building Athelcure and will launch soon. Please join the waitlist to be first to know.",
      timestamp: new Date(),
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
            className="h-20 w-20 select-none drop-shadow-md"
            priority
          />
        </button>
      </SheetTrigger>

      <SheetContent 
        side="right" 
        className="w-full sm:max-w-md md:max-w-lg p-0 flex flex-col h-full max-h-screen"
      >
        {/* Header - Fixed */}
        <SheetHeader className="flex-shrink-0 p-3 sm:p-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/diml90c1y/image/upload/v1761520947/1_Transparent_Image_dq1uba.png"
                alt="Brand Logo"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <SheetTitle className="text-sm sm:text-base truncate">Chat with Athlecure</SheetTitle>
              <SheetDescription className="text-xs sm:text-sm truncate">
                Light, modern, and professional. How can we help?
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Messages Area - Scrollable */}
        <div
          className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4"
          aria-live="polite"
          aria-atomic="false"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex gap-2",
                m.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {m.role === "assistant" && (
                <div className="flex-shrink-0 mt-1">
                  <img
                    src="https://res.cloudinary.com/diml90c1y/image/upload/v1761520947/1_Transparent_Image_dq1uba.png"
                    alt="Athelcure"
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-contain bg-white border border-border"
                  />
                </div>
              )}
              
              <div className={cn("flex flex-col max-w-[75%] sm:max-w-[80%]", m.role === "user" ? "items-end" : "items-start")}>
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 text-xs sm:text-sm leading-relaxed break-words inline-block w-fit",
                    m.role === "assistant"
                      ? "bg-secondary text-foreground rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none",
                  )}
                >
                  {m.content}
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground mt-1 px-1">
                  {formatTime(m.timestamp)}
                </span>
              </div>

              {m.role === "user" && (
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs font-medium">
                    You
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer - Fixed */}
        <div className="flex-shrink-0 border-t border-border p-3 sm:p-4 bg-background">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              We're coming soon — join the waitlist for updates.
            </span>
            <Button 
              size="sm" 
              variant="default" 
              onClick={openWaitlist}
              className="text-xs sm:text-sm whitespace-nowrap"
            >
              Join Waitlist
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Input
              aria-label="Your message"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  sendUserMessage()
                }
              }}
              className="text-base"
            />
            <Button 
              onClick={() => sendUserMessage()} 
              variant="secondary"
              className="text-xs sm:text-sm flex-shrink-0"
            >
              Send
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}