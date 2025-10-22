// app/layout.tsx 

import type { Metadata } from 'next'
import './globals.css' 
import { Toaster } from './sooner' 
import { AthelcureChatbot } from './chatbot'
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/next'

// Google Fonts
import {
  Inter as FontInter,
  Geist_Mono as FontGeistMono,
  Source_Serif_4 as FontSourceSerif,
} from 'next/font/google'

// Load fonts with all weights
const inter = FontInter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-inter' })
const geistMono = FontGeistMono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-geist-mono' })
const serif = FontSourceSerif({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-serif' })

// Metadata
export const metadata: Metadata = {
  title: 'Athlecure',
  description: 'the next gen',
  generator: 'Athlecure',
}

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${serif.variable}`}>
      <body className="font-sans">
        {children} 
         <AthelcureChatbot />
        <Analytics /> 
          <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
