import { useState, useMemo } from 'react'

const DURATION_OPTIONS = [24, 36, 48, 60, 84, 120]

function formatCurrency(value) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatAmount(value) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * PMT formula: P * [r(1+r)^n] / [(1+r)^n - 1]
 * where r = annualRate / 12 / 100, n = months
 */
function calcPMT(principal, annualRate, months) {
  if (annualRate === 0) return principal / months
  const r = annualRate / 12 / 100
  const factor = Math.pow(1 + r, months)
  return (principal * (r * factor)) / (factor - 1)
}

export default function Calculator() {
  const [importo, setImporto] = useState(15000)
  const [durata, setDurata] = useState(60)
  const [tasso, setTasso] = useState(8.5)

  const results = useMemo(() => {
    const rata = calcPMT(importo, tasso, durata)
    const totale = rata * durata
    const interessi = totale - importo
    return { rata, totale, interessi }
  }, [importo, durata, tasso])

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-forest-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-forest-700" />
            Strumento gratuito
            <span className="w-6 h-px bg-forest-700" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Simula la tua rata mensile
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Imposta i parametri e scopri subito la rata stimata. Senza impegno.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* Inputs panel */}
            <div className="p-8 lg:p-10 space-y-8">
              {/* Importo */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">Importo richiesto</label>
                  <span className="text-lg font-bold text-forest-900">{formatAmount(importo)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={75000}
                  step={500}
                  value={importo}
                  onChange={(e) => setImporto(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-forest-900"
                  aria-label="Importo"
                />
                <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                  <span>1.000€</span>
                  <span>75.000€</span>
                </div>
              </div>

              {/* Durata */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">Durata</label>
                  <span className="text-lg font-bold text-forest-900">{durata} mesi</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setDurata(m)}
                      className={`flex-1 min-w-[3rem] py-2 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                        durata === m
                          ? 'bg-forest-900 border-forest-900 text-white shadow-md'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-forest-900/40 hover:text-forest-900'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tasso */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">Tasso annuo (TAN)</label>
                  <span className="text-lg font-bold text-forest-900">{tasso.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={18}
                  step={0.1}
                  value={tasso}
                  onChange={(e) => setTasso(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-forest-900"
                  aria-label="Tasso annuo"
                />
                <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                  <span>5%</span>
                  <span>18%</span>
                </div>
              </div>
            </div>

            {/* Results panel */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                  Risultato simulazione
                </h3>

                {/* Main result */}
                <div className="bg-gradient-to-br from-forest-900 to-forest-800 rounded-2xl p-6 text-white mb-6">
                  <p className="text-green-200 text-sm font-medium mb-1">Rata mensile stimata</p>
                  <p className="text-4xl font-extrabold tracking-tight">
                    {formatCurrency(results.rata)}
                  </p>
                  <p className="text-green-300 text-sm mt-1">per {durata} mesi</p>
                </div>

                {/* Secondary results */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Totale da restituire</span>
                    <span className="text-sm font-bold text-gray-900">{formatCurrency(results.totale)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Capitale richiesto</span>
                    <span className="text-sm font-bold text-gray-900">{formatCurrency(importo)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-gray-600">Interessi totali</span>
                    <span className="text-sm font-bold text-amber-600">{formatCurrency(results.interessi)}</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-amber-700 text-xs leading-relaxed">
                  <strong>Simulazione indicativa.</strong> Le condizioni finali dipendono dalla valutazione creditizia e dalle politiche dell&apos;istituto finanziatore. TAN e TAEG effettivi comunicati prima della firma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
