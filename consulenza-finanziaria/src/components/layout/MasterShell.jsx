import Navbar from './Navbar'
import Footer from './Footer'

/**
 * MasterShell — configurable layout wrapper
 *
 * config shape:
 * {
 *   brand: string,
 *   navLinks: Array<{ label: string, href: string }>,
 *   ctaText: string,
 *   ctaHref: string,
 *   footerTagline: string,
 *   theme: 'dark' | 'light'
 * }
 */
export default function MasterShell({ config, children }) {
  return (
    <div className={`min-h-screen flex flex-col ${config.theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-stone-50 text-gray-900'}`}>
      <Navbar config={config} />
      <main className="flex-1">
        {children}
      </main>
      <Footer config={config} />
    </div>
  )
}
