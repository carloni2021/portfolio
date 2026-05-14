import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Cessione del Quinto',
    description:
      'Fino al 20% dello stipendio o pensione, con rate fisse e copertura assicurativa obbligatoria inclusa.',
    detail: 'Ideale per dipendenti pubblici, privati e pensionati. Nessuna busta paga richiesta: la rata viene trattenuta direttamente dall\'ente pagatore.',
    highlight: 'Rate fisse garantite',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Consolidamento Debiti',
    description:
      'Unifica più finanziamenti in un\'unica rata mensile ottimizzata, riducendo il tasso medio ponderato complessivo.',
    detail: 'Semplifichi la gestione dei tuoi impegni finanziari e ottieni un risparmio concreto ogni mese. Analisi gratuita della situazione debitoria.',
    highlight: 'Risparmio mensile immediato',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Prestiti Personali',
    description:
      'Liquidità immediata da 1.000€ a 75.000€ con istruttoria rapida e risposta in 24-48 ore.',
    detail: 'Finalità libera: ristrutturazione casa, acquisto auto, spese mediche o qualsiasi altra necessità. Erogazione rapida con documentazione minima.',
    highlight: 'Risposta in 24-48h',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Mutui',
    description:
      'Soluzioni a tasso fisso, variabile o misto per l\'acquisto o la ristrutturazione del tuo immobile.',
    detail: 'Confrontiamo le offerte di oltre 20 istituti di credito per trovare il mutuo con le condizioni più vantaggiose in base al tuo profilo.',
    highlight: 'Confronto oltre 20 banche',
  },
]

export default function Services() {
  const handleScroll = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="I nostri servizi"
          title="Soluzioni per ogni esigenza finanziaria"
          subtitle="Dalla liquidità immediata al mutuo di lungo periodo, ti guidiamo con competenza e trasparenza verso la soluzione più adatta a te."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-stone-50 border border-gray-100 rounded-2xl p-8 hover:border-forest-900/20 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-forest-900/8 flex items-center justify-center text-forest-900 mb-5 group-hover:bg-forest-900/12 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(6, 78, 59, 0.08)' }}
              >
                {service.icon}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                {service.highlight}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 font-medium">{service.description}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Non sai quale soluzione fa per te? I nostri consulenti ti guideranno gratuitamente.
          </p>
          <Button variant="primary" className="px-8 py-3 text-base" onClick={handleScroll}>
            Parla con un consulente
          </Button>
        </div>
      </div>
    </section>
  )
}
