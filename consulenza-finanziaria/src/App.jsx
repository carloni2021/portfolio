import MasterShell from './components/layout/MasterShell'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Calculator from './components/sections/Calculator'
import Transparency from './components/sections/Transparency'
import Contact from './components/sections/Contact'

const shellConfig = {
  brand: 'Aequitas Finance',
  navLinks: [
    { label: 'Servizi', href: '#services' },
    { label: 'Simulatore', href: '#calculator' },
    { label: 'Trasparenza', href: '#transparency' },
    { label: 'Contatti', href: '#contact' },
  ],
  ctaText: 'Consulenza gratuita',
  ctaHref: '#contact',
  footerTagline: 'Soluzioni finanziarie trasparenti per ogni esigenza',
  theme: 'light',
}

export default function App() {
  return (
    <MasterShell config={shellConfig}>
      <Hero />
      <Services />
      <Calculator />
      <Transparency />
      <Contact />
    </MasterShell>
  )
}
