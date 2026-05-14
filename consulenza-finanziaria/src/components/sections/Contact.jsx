import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\+\-\(\)]{7,}$/

const initialFields = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  servizio: '',
  messaggio: '',
}

function validate(f) {
  const errors = {}
  if (!f.nome.trim() || f.nome.trim().length < 2) errors.nome = 'Il nome deve contenere almeno 2 caratteri.'
  if (!f.cognome.trim() || f.cognome.trim().length < 2) errors.cognome = 'Il cognome deve contenere almeno 2 caratteri.'
  if (!f.email.trim() || !EMAIL_REGEX.test(f.email.trim())) errors.email = 'Inserisci un indirizzo email valido.'
  if (!f.telefono.trim() || !PHONE_REGEX.test(f.telefono.trim())) errors.telefono = 'Inserisci un numero di telefono valido.'
  if (!f.servizio) errors.servizio = 'Seleziona un servizio di interesse.'
  if (!f.messaggio.trim() || f.messaggio.trim().length < 20) errors.messaggio = 'Il messaggio deve contenere almeno 20 caratteri.'
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
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputBase =
    'w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200'
  const inputNormal = `${inputBase} border-gray-200 focus:ring-forest-700/30 focus:border-forest-700/50`
  const inputError = `${inputBase} border-red-400 focus:ring-red-400/30 focus:border-red-400`

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Messaggio inviato!</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Grazie per averci contattato. Un nostro consulente ti risponderà entro 24 ore lavorative per discutere la soluzione più adatta alle tue esigenze.
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
              Invia un altro messaggio
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div>
            <SectionHeader
              eyebrow="Contattaci"
              title="Parliamo del tuo progetto finanziario"
              subtitle="Compila il modulo e un nostro consulente certificato ti ricontatterà senza impegno."
              center={false}
            />

            <ul className="space-y-5 mt-8">
              {[
                { icon: '✅', text: 'Consulenza gratuita, senza impegno' },
                { icon: '⚡', text: 'Risposta entro 24 ore lavorative' },
                { icon: '🔒', text: 'I tuoi dati sono al sicuro (GDPR)' },
                { icon: '📄', text: 'Documento SECCI prima di qualsiasi firma' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Trust note */}
            <div className="mt-10 bg-forest-900/5 border border-forest-900/15 rounded-2xl p-6">
              <p className="text-forest-900 text-sm font-medium mb-1">Nota sulla privacy</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Utilizziamo i tuoi dati esclusivamente per risponderti. Non effettuiamo marketing non richiesto e non vendiamo i tuoi dati. Puoi esercitare i diritti di cui al GDPR inviando una richiesta scritta.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Nome + Cognome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-nome" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-nome"
                    name="nome"
                    type="text"
                    autoComplete="given-name"
                    value={fields.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Mario"
                    className={errors.nome && touched.nome ? inputError : inputNormal}
                  />
                  {errors.nome && touched.nome && (
                    <p className="mt-1.5 text-red-500 text-xs">{errors.nome}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-cognome" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Cognome <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-cognome"
                    name="cognome"
                    type="text"
                    autoComplete="family-name"
                    value={fields.cognome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Rossi"
                    className={errors.cognome && touched.cognome ? inputError : inputNormal}
                  />
                  {errors.cognome && touched.cognome && (
                    <p className="mt-1.5 text-red-500 text-xs">{errors.cognome}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="mario.rossi@email.it"
                  className={errors.email && touched.email ? inputError : inputNormal}
                />
                {errors.email && touched.email && (
                  <p className="mt-1.5 text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Telefono */}
              <div>
                <label htmlFor="contact-telefono" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefono <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  value={fields.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+39 333 1234567"
                  className={errors.telefono && touched.telefono ? inputError : inputNormal}
                />
                {errors.telefono && touched.telefono && (
                  <p className="mt-1.5 text-red-500 text-xs">{errors.telefono}</p>
                )}
              </div>

              {/* Servizio */}
              <div>
                <label htmlFor="contact-servizio" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Servizio di interesse <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-servizio"
                  name="servizio"
                  value={fields.servizio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${errors.servizio && touched.servizio ? inputError : inputNormal} appearance-none cursor-pointer`}
                >
                  <option value="">Seleziona un servizio...</option>
                  <option value="cessione">Cessione del Quinto</option>
                  <option value="consolidamento">Consolidamento Debiti</option>
                  <option value="prestito">Prestito Personale</option>
                  <option value="mutuo">Mutuo</option>
                </select>
                {errors.servizio && touched.servizio && (
                  <p className="mt-1.5 text-red-500 text-xs">{errors.servizio}</p>
                )}
              </div>

              {/* Messaggio */}
              <div>
                <label htmlFor="contact-messaggio" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Descrivi la tua situazione <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-messaggio"
                  name="messaggio"
                  rows={4}
                  value={fields.messaggio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Descrivi la tua situazione finanziaria attuale e cosa stai cercando..."
                  className={`${errors.messaggio && touched.messaggio ? inputError : inputNormal} resize-none`}
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.messaggio && touched.messaggio ? (
                    <p className="text-red-500 text-xs">{errors.messaggio}</p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ${fields.messaggio.length < 20 ? 'text-gray-400' : 'text-green-600'}`}>
                    {fields.messaggio.length}/20 min
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={loading}
                className="py-3 text-base mt-2"
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
                  'Invia richiesta di consulenza'
                )}
              </Button>

              <p className="text-gray-400 text-xs text-center mt-2">
                Inviando accetti il trattamento dei dati ai sensi del GDPR. Nessun costo, nessun impegno.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
