import Header from "./header"
import CurvyHero from "./hero"
import WaitlistModal from "./wait-list-modal" 
import { SiteFooter } from "./site-footer"

export default function Page() {
  return (
    <main>
      {/* Header from user-provided component */}
      <Header />

      {/* Auto-opening modal on first paint */}
      {/* <WaitlistModal /> */}

      {/* Hero with curvy black blob and right-side waitlist form */}
      <CurvyHero /> 
      <SiteFooter/>
    </main>
  )
}
