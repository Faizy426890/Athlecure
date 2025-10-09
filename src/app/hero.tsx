import WaitlistForm from "./wait-list-form"

export default function CurvyHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Curvy blob background - black only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          className="absolute -left-32 -top-24 h-[500px] w-[800px] max-w-none"
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* organic blob shape */}
          <path
            d="M0,120 C120,40 260,0 380,40 C500,80 600,210 720,220 C820,230 840,260 800,320 C760,380 620,440 460,460 C300,480 180,460 100,420 C20,380 -20,320 0,120 Z"
            fill="#000000"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: headline and copy */}
          <div className="text-white md:pr-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
              {/* subtle red accent dot */}
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#EB2027" }} />
              Athlecure
            </span>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Join the Waitlist
              <span className="block text-white/80">We are coming soon</span>
            </h1>
            <p className="mt-5 max-w-prose text-pretty text-sm leading-relaxed text-white/80 md:text-base">
              A modern, professional experience is on the way. Be first to know when ATHLECURE launches.
            </p>
            {/* small accent rule */}
            <div className="mt-6 h-1 w-16" style={{ backgroundColor: "#EB2027" }} />
          </div>

          {/* Right: device-like card with the waitlist form */}
          <div className="md:pl-6">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-black/10" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-black">ATHLECURE</h2>
                <p className="mt-1 text-sm text-neutral-600">Join the waitlist — we are coming soon</p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
