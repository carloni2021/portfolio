import Button from '../ui/Button'

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'ISO 27001', label: 'Certified' },
  { value: '50+', label: 'Enterprise Clients' },
]

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-950 via-slate-900 to-midnight-950">
      {/* Animated gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-slate-300 text-xs font-medium tracking-wide">
            Soluzioni Enterprise • Sempre operative
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
          Infrastrutture{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 gradient-text">
            cloud-native
          </span>
          .<br />
          Sicurezza by design.
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Progettiamo e implementiamo architetture scalabili, sicure e ad alta disponibilità
          per aziende che non possono permettersi di fermarsi.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            variant="primary"
            className="text-base px-8 py-3"
            onClick={() => handleScroll('#contact')}
          >
            Richiedi un&apos;analisi gratuita
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="text-base px-8 py-3"
            onClick={() => handleScroll('#services')}
          >
            Guarda i servizi
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white mb-1">{stat.value}</span>
              <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scorri</span>
        <div className="w-5 h-8 border border-slate-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
