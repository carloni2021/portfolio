import { useState, useEffect } from 'react'

// ── Icons ──────────────────────────────────────────────────────────────────
const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const ConsultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Team', href: '#team' },
    { label: 'Contatti', href: '#contatti' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-navy-900 font-bold text-sm">N</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Nexora</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contatti" className="hidden md:block bg-cyan-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-cyan-300 transition-colors">
          Parla con noi
        </a>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-slate-300 font-medium py-2" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contatti" className="bg-cyan-400 text-navy-900 font-semibold text-sm px-5 py-3 rounded-lg text-center mt-2" onClick={() => setMenuOpen(false)}>
            Parla con noi
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Consulenza IT & Soluzioni Tecnologiche</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Tecnologia che{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              trasforma
            </span>{' '}
            il tuo business
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
            Supportiamo le aziende nella digitalizzazione con soluzioni cloud, sicurezza informatica e sviluppo software su misura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contatti" className="bg-cyan-400 text-navy-900 font-bold px-8 py-4 rounded-xl hover:bg-cyan-300 transition-colors text-center">
              Richiedi una consulenza
            </a>
            <a href="#servizi" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center">
              Scopri i servizi
            </a>
          </div>

          <div className="flex flex-wrap gap-10">
            {[
              { value: '150+', label: 'Clienti attivi' },
              { value: '12+', label: 'Anni di esperienza' },
              { value: '98%', label: 'Soddisfazione clienti' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ───────────────────────────────────────────────────────────────
const services = [
  {
    icon: <CloudIcon />,
    title: 'Cloud Solutions',
    desc: "Migrazione, architettura e gestione di infrastrutture cloud scalabili su AWS, Azure e Google Cloud. Riduci i costi e aumenta l'affidabilità.",
    tags: ['AWS', 'Azure', 'GCP', 'DevOps'],
  },
  {
    icon: <ShieldIcon />,
    title: 'Cybersecurity',
    desc: 'Analisi delle vulnerabilità, penetration testing, compliance GDPR e NIS2. Proteggi i tuoi dati e la continuità operativa.',
    tags: ['Pen Test', 'GDPR', 'SOC', 'NIS2'],
  },
  {
    icon: <CodeIcon />,
    title: 'Software Development',
    desc: 'Sviluppo di applicazioni web, mobile e gestionali personalizzati. Dal concept al deploy, seguiamo ogni fase del ciclo di vita.',
    tags: ['React', 'Node.js', 'Python', 'Mobile'],
  },
  {
    icon: <ConsultIcon />,
    title: 'IT Consulting',
    desc: 'Strategia digitale, governance IT, vendor management e formazione del personale. Il tuo CTO esterno quando ne hai bisogno.',
    tags: ['Strategia', 'ITIL', 'Formazione', 'CTO-as-a-Service'],
  },
]

function Services() {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest">Cosa facciamo</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">Soluzioni per ogni esigenza</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Un partner tecnologico unico per tutte le necessità della tua azienda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.title} className="group p-8 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-50 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 group-hover:bg-cyan-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-cyan-500 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-5">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Methodology ────────────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Analisi', desc: 'Ascoltiamo le tue esigenze e analizziamo la situazione attuale per capire obiettivi e criticità.' },
  { num: '02', title: 'Strategia', desc: "Definiamo un piano d'azione personalizzato con roadmap, KPI e stima dei costi." },
  { num: '03', title: 'Sviluppo', desc: 'Implementiamo le soluzioni con metodologie agili, rilasci iterativi e massima trasparenza.' },
  { num: '04', title: 'Supporto', desc: 'Monitoriamo le performance e forniamo assistenza continuativa post-deploy.' },
]

function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest">Come lavoriamo</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">Il nostro metodo</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Un approccio strutturato che garantisce risultati misurabili in ogni progetto.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200" />
          {steps.map(step => (
            <div key={step.num} className="relative text-center">
              <div className="w-20 h-20 bg-white border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-cyan-100">
                <span className="text-2xl font-bold text-cyan-500">{step.num}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Team ───────────────────────────────────────────────────────────────────
const team = [
  { name: 'Marco Bianchi', role: 'CEO & Cloud Architect', initials: 'MB', color: 'bg-blue-100 text-blue-700' },
  { name: 'Sara Conti', role: 'Head of Cybersecurity', initials: 'SC', color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Luca Ferrari', role: 'Lead Developer', initials: 'LF', color: 'bg-violet-100 text-violet-700' },
  { name: 'Anna Russo', role: 'IT Strategy Consultant', initials: 'AR', color: 'bg-emerald-100 text-emerald-700' },
]

function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest">Chi siamo</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">Un team di esperti al tuo fianco</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Nexora nasce nel 2012 con un obiettivo chiaro: rendere accessibile l'eccellenza tecnologica alle PMI italiane. In oltre dieci anni abbiamo accompagnato più di 150 aziende nel loro percorso di trasformazione digitale.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Il nostro team multidisciplinare unisce competenze di cloud computing, sicurezza informatica, sviluppo software e strategia aziendale — tutto sotto lo stesso tetto.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '150+', label: 'Aziende clienti', bg: 'bg-slate-50' },
              { value: '12+', label: 'Anni sul mercato', bg: 'bg-cyan-50' },
              { value: '40+', label: 'Professionisti', bg: 'bg-blue-50' },
              { value: '4', label: 'Sedi in Italia', bg: 'bg-slate-50' },
            ].map(s => (
              <div key={s.label} className={`${s.bg} rounded-2xl p-6 text-center`}>
                <div className="text-3xl font-bold text-slate-900 mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map(member => (
            <div key={member.name} className="text-center group">
              <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {member.initials}
              </div>
              <h4 className="font-bold text-slate-900">{member.name}</h4>
              <p className="text-slate-500 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contatti" className="py-24 bg-gradient-to-br from-navy-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Contatti</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">Inizia la conversazione</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una proposta su misura.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Messaggio inviato!</h3>
                <p className="text-slate-400">Ti contatteremo entro 24 ore.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Nome *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mario@azienda.it" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Azienda</label>
                  <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Nome azienda" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Messaggio *</label>
                  <textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Descrivi brevemente il tuo progetto o le tue esigenze..." />
                </div>
                <button type="submit" className="w-full bg-cyan-400 text-navy-900 font-bold py-4 rounded-xl hover:bg-cyan-300 transition-colors">
                  Invia richiesta
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            {[
              { icon: '📍', title: 'Sede principale', text: 'Via della Tecnologia 42, 20121 Milano' },
              { icon: '📞', title: 'Telefono', text: '–' },
              { icon: '✉️', title: 'Email', text: '–' },
              { icon: '🕐', title: 'Orari', text: 'Lun–Ven: 9:00 – 18:00' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-cyan-400 rounded-md flex items-center justify-center">
            <span className="text-navy-900 font-bold text-xs">N</span>
          </div>
          <span className="text-white font-bold">Nexora</span>
          <span className="text-slate-500 text-sm ml-2">© 2024 – P.IVA 01234567890</span>
        </div>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
        </div>
      </div>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Methodology />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
