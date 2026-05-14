export default function SectionHeader({ eyebrow, title, subtitle, dark = false, center = true }) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-forest-700 text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-forest-700" />
          {eyebrow}
          <span className="w-6 h-px bg-forest-700" />
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
