import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Assessment & Analysis',
    description:
      'Analisi approfondita dell\'infrastruttura esistente, identificazione dei requisiti tecnici e business, mappatura dei rischi e delle opportunità di ottimizzazione.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    phase: 'Design',
    title: 'Architecture Design',
    description:
      'Progettazione dell\'architettura target con Infrastructure as Code, definizione dei pattern di sicurezza, scelta dello stack tecnologico e stesura del piano di delivery.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: '03',
    phase: 'Delivery',
    title: 'Agile Implementation',
    description:
      'Implementazione iterativa con sprint bi-settimanali, continuous integration e deployment automatizzato. Ogni rilascio è testato, documentato e approvato dal cliente prima del merge.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.656 48.656 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7A48.95 48.95 0 0112 15m7.5-3l-3 3m3-3l3 3" />
      </svg>
    ),
  },
  {
    number: '04',
    phase: 'Operations',
    title: 'Monitor & Optimize',
    description:
      'Post go-live con monitoraggio proattivo H24, alerting predittivo, revisioni periodiche delle performance e roadmap di ottimizzazione continua per garantire il ROI nel tempo.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 lg:py-32 bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Come lavoriamo"
          title="Metodologia Agile/DevOps"
          subtitle="Un processo strutturato e trasparente che garantisce risultati prevedibili, qualità certificata e piena visibilità su ogni fase del progetto."
        />

        {/* Timeline — horizontal on large, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col lg:items-center lg:text-center">
                {/* Step connector — mobile */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/40 to-transparent lg:hidden" aria-hidden="true" />
                )}

                {/* Icon + number */}
                <div className="relative flex items-center gap-4 lg:flex-col lg:gap-3 mb-4">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600/10 border-2 border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex flex-col lg:items-center">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{step.phase}</span>
                    <span className="text-4xl font-extrabold text-slate-800/80 leading-none lg:hidden">{step.number}</span>
                  </div>
                  <span className="hidden lg:block text-5xl font-extrabold text-slate-800/60 absolute -top-6 left-1/2 -translate-x-1/2">{step.number}</span>
                </div>

                <div className="pl-16 lg:pl-0">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <p className="text-slate-300 text-sm font-medium">
            Ogni progetto include documentazione tecnica completa, code review automatizzata e handover strutturato.{' '}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Parla con un architetto
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
