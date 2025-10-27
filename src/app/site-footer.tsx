"use client"

import type React from "react"

import Link from "next/link"

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.19 22 17.05 22 12.06z"
      />
    </svg>
  )
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z"
      />
    </svg>
  )
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.93L0 24l6.23-1.63A11.85 11.85 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.85 0-3.64-.5-5.2-1.45l-.37-.23-3.68.96.98-3.59-.24-.39A9.52 9.52 0 0 1 2.5 12C2.5 6.9 6.9 2.5 12 2.5S21.5 6.9 21.5 12 17.1 21.5 12 21.5zm5.24-6.67c-.29-.15-1.7-.83-1.97-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.95 1.12-.18.19-.35.21-.64.08-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.53.15-.18.2-.29.3-.49.1-.19.05-.36-.03-.5-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.51-.67-.52h-.57c-.2 0-.52.07-.8.36s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.13 3.26 5.15 4.57.72.31 1.28.49 1.72.62.72.23 1.37.2 1.89.12.58-.09 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35z"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-12">
      {/* Dark gray separator to differentiate content from footer */}
      <hr className="border-t border-gray-300 dark:border-gray-700" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Required logo block */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
          <img
            src="https://res.cloudinary.com/diml90c1y/image/upload/v1761520947/1_Transparent_Image_dq1uba.png"
            alt="Brand Logo"
            className="h-32 lg:h-36 w-auto object-contain"
          />
        </div>
            <div>
              <h3 className="text-lg font-semibold">Athlecure</h3>
              <p className="text-sm text-muted-foreground max-w-prose">
                Premium basics and performance wear designed for movement, comfort, and style. Ethically made, built to
                last, and ready for your everyday.
              </p>
            </div>
          </div>

          {/* Social icons only: Facebook, Instagram, WhatsApp */}
          <div className="flex items-center gap-5">
            <Link
              aria-label="Facebook"
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <IconFacebook />
            </Link>
            <Link
              aria-label="Instagram"
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <IconInstagram />
            </Link>
            <Link
              aria-label="WhatsApp"
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <IconWhatsApp />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-medium">Customer Care</h4>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Newsletter</h4>
            <p className="mt-3 text-muted-foreground">Be first to know about new drops and exclusive offers.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Athlecure Clothing Co. All rights reserved.</p>
          <p className="text-center sm:text-right">Crafted with care. Designed for life.</p>
        </div>
      </div>
    </footer>
  )
}
