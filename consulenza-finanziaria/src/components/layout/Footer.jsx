export default function Footer({ config }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forest-900 to-forest-700 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                {config.brand}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {config.footerTagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Navigazione
            </h3>
            <ul className="space-y-2">
              {config.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-gray-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Informazioni legali
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: –</li>
              <li>Telefono: –</li>
              <li className="mt-3 text-xs text-gray-500 leading-relaxed">
                Agenti iscritti OAM. Intermediazione del credito soggetta a vigilanza Banca d&apos;Italia.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {config.brand}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Note Legali</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
