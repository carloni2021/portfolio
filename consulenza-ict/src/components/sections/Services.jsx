import SectionHeader from '../ui/SectionHeader'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    label: 'Cloud Architecture',
    title: 'Cloud Architecture',
    description:
      'Progettiamo infrastrutture AWS, Azure e GCP multi-region con auto-scaling, disaster recovery e SLA garantiti al 99.9%. Migrazione lift-and-shift o cloud-native dalla fase di assessment alla go-live.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 2.95 1.072 5.64 2.834 7.705A11.97 11.97 0 0012 22.5c5.773 0 10.649-4.07 11.798-9.527M9 12.75a3 3 0 106 0 3 3 0 00-6 0z" />
      </svg>
    ),
    label: 'Cybersecurity & Hardening',
    title: 'Cybersecurity & Hardening',
    description:
      'Penetration testing, vulnerability assessment, hardening di sistemi e reti. Implementazione di architetture zero-trust, gestione degli accessi privilegiati (PAM) e monitoraggio SOC 24/7.',
    tags: ['Zero Trust', 'SIEM', 'PAM', 'Pen Testing', 'ISO 27001'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: 'Full-Stack Development',
    title: 'Full-Stack Development',
    description:
      'Sviluppo di applicazioni enterprise scalabili con architettura a microservizi, API RESTful e GraphQL. Stack moderno React/Next.js, Node.js, Python, con CI/CD pipeline automatizzate.',
    tags: ['React', 'Node.js', 'Python', 'Docker', 'CI/CD'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: 'Digital Transformation',
    title: 'Digital Transformation',
    description:
      'Accompagniamo le organizzazioni nel percorso di trasformazione digitale: analisi dei processi, automazione RPA, integrazione di sistemi legacy e adozione di piattaforme modern data stack.',
    tags: ['RPA', 'Data Platform', 'ERP Integration', 'Change Mgmt'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cosa facciamo"
          title="Servizi di eccellenza"
          subtitle="Dalla strategia all'implementazione, copriamo l'intero stack tecnologico con competenza certificata e approccio ingegneristico."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-slate-900/80 border border-slate-800/60 rounded-2xl p-8 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600/20 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700/60 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
