import { useState } from 'react'
import Button from '../ui/Button'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\+\-\(\)]{7,}$/

const trustBadges = [
  { icon: '🔒', label: 'GDPR Compliant' },
  { icon: '✅', label: 'Agenti Abilitati OAM' },
  { icon: '⭐', label: '4.9/5 clienti soddisfatti' },
]

const initialForm = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  importo: '',
  tipo: '',
}

function validateLeadForm(f) {
  const errors = {}
  if (!f.nome.trim()) errors.nome = 'Campo obbligatorio'
  if (!f.cognome.trim()) errors.cognome = 'Campo obbligatorio'
  if (!f.email.trim() || !EMAIL_REGEX.test(f.email.trim())) errors.email = 'Email non valida'
  if (!f.telefono.trim() || !PHONE_REGEX.test(f.telefono.trim())) errors.telefono = 'Telefono non valido'
  if (!f.importo) errors.importo = 'Seleziona un importo'
  if (!f.tipo) errors.tipo = 'Seleziona un servizio'
  return errors
}

export default function Hero() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validateLeadForm({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validateLeadForm(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(initialForm).map((k) => [k, true]))
    setTouched(allTouched)
    const newErrors = validateLeadForm(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputBase =
    'w-full border rounded-xl px-3 py-2.5 text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200'
  const inputNormal = `${inputBase} border-gray-200 focus:ring-forest-700/30 focus:border-forest-700/50`
  const inputError = `${inputBase} border-red-400 focus:ring-red-400/30 focus:border-red-400`

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-stone-50 via-white to-green-50/30 overflow-hidden">
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-forest-900/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-forest-900/5 border border-forest-900/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-700" />
              <span className="text-forest-900 text-xs font-semibold tracking-wide">
                Consulenza finanziaria indipendente
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
              Ottieni le condizioni{' '}
              <span className="text-forest-900">migliori</span>{' '}
              per il tuo finanziamento
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Confrontiamo le offerte di decine di istituti finanziari per trovare la soluzione più adatta alle tue esigenze, con massima trasparenza e senza costi nascosti.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — lead gen form */}
          <div>
            {submitted ? (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Richiesta inviata!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Un nostro consulente ti contatterà entro 24 ore per presentarti le migliori offerte disponibili.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-forest-900 px-6 py-4">
                  <h2 className="text-white font-bold text-lg">Ricevi una consulenza gratuita</h2>
                  <p className="text-green-200 text-sm mt-0.5">Risposta entro 24 ore lavorative</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div>
                      <label htmlFor="hero-nome" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hero-nome"
                        name="nome"
                        type="text"
                        autoComplete="given-name"
                        value={form.nome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Mario"
                        className={errors.nome && touched.nome ? inputError : inputNormal}
                      />
                      {errors.nome && touched.nome && (
                        <p className="mt-1 text-red-500 text-xs">{errors.nome}</p>
                      )}
                    </div>

                    {/* Cognome */}
                    <div>
                      <label htmlFor="hero-cognome" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Cognome <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hero-cognome"
                        name="cognome"
                        type="text"
                        autoComplete="family-name"
                        value={form.cognome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Rossi"
                        className={errors.cognome && touched.cognome ? inputError : inputNormal}
                      />
                      {errors.cognome && touched.cognome && (
                        <p className="mt-1 text-red-500 text-xs">{errors.cognome}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="mario.rossi@email.it"
                      className={errors.email && touched.email ? inputError : inputNormal}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefono */}
                  <div>
                    <label htmlFor="hero-telefono" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Telefono <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="hero-telefono"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+39 333 1234567"
                      className={errors.telefono && touched.telefono ? inputError : inputNormal}
                    />
                    {errors.telefono && touched.telefono && (
                      <p className="mt-1 text-red-500 text-xs">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Importo */}
                  <div>
                    <label htmlFor="hero-importo" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Importo richiesto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="hero-importo"
                      name="importo"
                      value={form.importo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${errors.importo && touched.importo ? inputError : inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="">Seleziona importo...</option>
                      <option value="1000-5000">Da 1.000€ a 5.000€</option>
                      <option value="5000-15000">Da 5.000€ a 15.000€</option>
                      <option value="15000-30000">Da 15.000€ a 30.000€</option>
                      <option value="30000-50000">Da 30.000€ a 50.000€</option>
                      <option value="50000+">Oltre 50.000€</option>
                    </select>
                    {errors.importo && touched.importo && (
                      <p className="mt-1 text-red-500 text-xs">{errors.importo}</p>
                    )}
                  </div>

                  {/* Tipo servizio */}
                  <div>
                    <label htmlFor="hero-tipo" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Tipo di servizio <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="hero-tipo"
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${errors.tipo && touched.tipo ? inputError : inputNormal} appearance-none cursor-pointer`}
                    >
                      <option value="">Seleziona servizio...</option>
                      <option value="cessione">Cessione del Quinto</option>
                      <option value="consolidamento">Consolidamento Debiti</option>
                      <option value="prestito">Prestito Personale</option>
                      <option value="mutuo">Mutuo</option>
                    </select>
                    {errors.tipo && touched.tipo && (
                      <p className="mt-1 text-red-500 text-xs">{errors.tipo}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={loading}
                    className="mt-2 py-3 text-base"
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
                      'Ricevi una consulenza gratuita'
                    )}
                  </Button>

                  <p className="text-gray-400 text-xs leading-relaxed text-center">
                    Inviando il modulo accetti il trattamento dei dati ai sensi del{' '}
                    <a href="#" className="underline hover:text-gray-600">GDPR (Reg. UE 2016/679)</a>.
                    I dati non verranno ceduti a terzi senza consenso.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
