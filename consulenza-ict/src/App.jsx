import MasterShell from './components/layout/MasterShell'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Methodology from './components/sections/Methodology'
import Contact from './components/sections/Contact'

const shellConfig = {
  brand: 'Axiom Systems',
  navLinks: [
    { label: 'Servizi', href: '#services' },
    { label: 'Metodologia', href: '#methodology' },
    { label: 'Contatti', href: '#contact' },
  ],
  ctaText: 'Richiedi un\'analisi',
  ctaHref: '#contact',
  footerTagline: 'Engineering the future, one layer at a time',
  theme: 'dark',
}

export default function App() {
  return (
    <MasterShell config={shellConfig}>
      <Hero />
      <Services />
      <Methodology />
      <Contact />
    </MasterShell>
  )
}
