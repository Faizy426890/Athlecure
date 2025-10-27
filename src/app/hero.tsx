import WaitlistForm from './wait-list-form';

export default function CurvyHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Curved Overlay */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src="https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/interior-of-clothing-store.jpg?w=1600&h=900&fit=crop"
            alt="Clothing store interior"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/50" />
        </div>

        {/* Curved SVG Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large organic curved shape from left */}
            <path
              d="M0,0 L0,800 C200,750 350,680 450,600 C580,500 650,420 750,380 C850,340 950,340 1050,380 C1150,420 1250,500 1350,600 C1420,670 1440,720 1440,800 L1440,0 Z"
              fill="rgba(0,0,0,0.7)"
            />
            {/* Accent curve */}
            <path
              d="M0,100 C200,80 350,120 450,180 C580,260 650,320 750,340 C850,360 950,340 1050,300 C1150,260 1250,200 1350,160 C1420,130 1440,120 1440,120 L1440,0 L0,0 Z"
              fill="rgba(235,32,39,0.15)"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex items-center">
        <div className="grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 w-full">
          {/* Left: Headline and Copy */}
          <div className="text-white space-y-6 md:pr-6 lg:pr-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs uppercase tracking-wider text-white/90">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#EB2027' }} />
              Athlecure
            </span>

            <h1 className="text-balance text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join the Waitlist
              <span className="block mt-2 text-white/80">We are coming soon</span>
            </h1>

            <p className="max-w-prose text-pretty text-base sm:text-lg leading-relaxed text-white/80">
              A modern, professional experience is on the way. Be first to know when ATHLECURE launches.
            </p>

            <div className="h-1 w-16" style={{ backgroundColor: '#EB2027' }} />
          </div>

          {/* Right: Waitlist Form Card */}
          <div className="md:pl-6 lg:pl-12">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-black/10" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-black">ATHLECURE</h2>
                <p className="mt-2 text-sm text-neutral-600">Join the waitlist — we are coming soon</p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
