export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-blue-400" />
          {eyebrow}
          <span className="w-6 h-px bg-blue-400" />
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? 'text-gray-900' : 'text-white'} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
