import SectionHeader from '../ui/SectionHeader'

const trustItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'GDPR & Privacy',
    description:
      'I tuoi dati sono protetti con crittografia AES-256 e non vengono mai ceduti a terzi senza il tuo esplicito consenso.',
    badge: 'Regolamento UE 2016/679',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 2.95 1.072 5.64 2.834 7.705A11.97 11.97 0 0012 22.5c5.773 0 10.649-4.07 11.798-9.527M9 12.75a3 3 0 106 0 3 3 0 00-6 0z" />
      </svg>
    ),
    title: 'Agenti OAM',
    description:
      'Tutti i nostri consulenti sono iscritti all\'Organismo Agenti e Mediatori (OAM), l\'ente di controllo vigilato dalla Banca d\'Italia.',
    badge: 'Iscritti OAM',
    badgeColor: 'bg-forest-900/5 text-forest-900 border-forest-900/15',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Nessun Costo Nascosto',
    description:
      'Ricevi sempre il documento SECCI (Standard European Consumer Credit Information) prima di firmare qualsiasi contratto di finanziamento.',
    badge: 'Direttiva UE 2008/48/CE',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
  },
]

const complianceLogos = [
  { label: 'Banca d\'Italia', sub: 'Vigilanza' },
  { label: 'OAM', sub: 'Organismo Agenti' },
  { label: 'GDPR', sub: 'EU 2016/679' },
  { label: 'SECCI', sub: 'Documento UE' },
]

export default function Transparency() {
  return (
    <section id="transparency" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Compliance & Sicurezza"
          title="Trasparenza e Compliance"
          subtitle="Operiamo nel pieno rispetto della normativa europea e italiana. La tua fiducia è la nostra priorità assoluta."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="bg-stone-50 border border-gray-100 rounded-2xl p-8 hover:border-forest-900/20 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-forest-900"
                style={{ backgroundColor: 'rgba(6, 78, 59, 0.08)' }}
              >
                {item.icon}
              </div>

              {/* Badge */}
              <span className={`inline-flex items-center text-xs font-semibold border rounded-full px-3 py-1 mb-4 ${item.badgeColor}`}>
                {item.badge}
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance logos strip */}
        <div className="bg-stone-50 border border-gray-100 rounded-2xl p-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Operatori conformi a
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {complianceLogos.map((logo, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-forest-900">{logo.label}</span>
                </div>
                <span className="text-xs text-gray-400">{logo.sub}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 max-w-xl mx-auto">
            Intermediatori del credito ai sensi del D.Lgs. 141/2010. Iscritti nell&apos;Elenco degli Agenti in Attività Finanziaria tenuto dall&apos;OAM.
          </p>
        </div>
      </div>
    </section>
  )
}
