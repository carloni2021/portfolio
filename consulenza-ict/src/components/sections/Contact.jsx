import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialFields = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim() || fields.name.trim().length < 2) {
    errors.name = 'Il nome deve contenere almeno 2 caratteri.'
  }
  if (!fields.email.trim() || !EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Inserisci un indirizzo email valido.'
  }
  if (!fields.company.trim()) {
    errors.company = 'Il nome azienda è obbligatorio.'
  }
  if (!fields.service) {
    errors.service = 'Seleziona un servizio di interesse.'
  }
  if (!fields.message.trim() || fields.message.trim().length < 20) {
    errors.message = 'Il messaggio deve contenere almeno 20 caratteri.'
  }
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(fields)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(initialFields).map((k) => [k, true]))
    setTouched(allTouched)
    const newErrors = validate(fields)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputBase =
    'w-full bg-slate-800/60 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200'
  const inputNormal = `${inputBase} border-slate-700/60 focus:ring-blue-500/50 focus:border-blue-500/50`
  const inputError = `${inputBase} border-red-500/60 focus:ring-red-500/40 focus:border-red-500/60`

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Richiesta inviata!</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Abbiamo ricevuto la tua richiesta. Un nostro architetto ti contatterà entro 24 ore lavorative per discutere le tue esigenze.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false)
                setFields(initialFields)
                setTouched({})
                setErrors({})
              }}
            >
              Invia un&apos;altra richiesta
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div>
            <SectionHeader
              eyebrow="Parlaci"
              title="Inizia un progetto con noi"
              subtitle="Compila il form e ricevi un'analisi preliminare gratuita entro 24 ore lavorative."
              center={false}
            />

            <ul className="space-y-5 mt-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Risposta garantita entro 24h lavorative',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Assessment tecnico preliminare gratuito',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'NDA disponibile su richiesta',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Nessun obbligo di acquisto',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-blue-400 shrink-0 mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-slate-900/80 border border-slate-800/60 rounded-2xl p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Nome e Cognome <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mario Rossi"
                  className={errors.name && touched.name ? inputError : inputNormal}
                />
                {errors.name && touched.name && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email aziendale <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="mario@azienda.it"
                  className={errors.email && touched.email ? inputError : inputNormal}
                />
                {errors.email && touched.email && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Azienda <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nome Azienda S.r.l."
                  className={errors.company && touched.company ? inputError : inputNormal}
                />
                {errors.company && touched.company && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.company}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Servizio di interesse <span className="text-red-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${errors.service && touched.service ? inputError : inputNormal} appearance-none cursor-pointer`}
                >
                  <option value="">Seleziona un servizio...</option>
                  <option value="cloud">Cloud Architecture</option>
                  <option value="cybersecurity">Cybersecurity & Hardening</option>
                  <option value="dev">Full-Stack Development</option>
                  <option value="consulting">Digital Transformation</option>
                </select>
                {errors.service && touched.service && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Descrivi il tuo progetto <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Descrivi brevemente l'infrastruttura attuale, le sfide e gli obiettivi..."
                  className={`${errors.message && touched.message ? inputError : inputNormal} resize-none`}
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.message && touched.message ? (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ${fields.message.length < 20 ? 'text-slate-500' : 'text-green-500'}`}>
                    {fields.message.length}/20 min
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={loading}
                className="mt-2 py-3"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Invio in corso...
                  </span>
                ) : (
                  'Invia richiesta'
                )}
              </Button>

              <p className="text-slate-500 text-xs text-center mt-2">
                I tuoi dati sono trattati ai sensi del GDPR. Non verranno mai ceduti a terzi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
