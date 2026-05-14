export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center font-semibold text-sm rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5'

  const variants = {
    primary:
      'bg-forest-900 hover:bg-forest-800 active:bg-forest-900 text-white shadow-md shadow-forest-900/20 focus:ring-forest-700 focus:ring-offset-white',
    outline:
      'border border-forest-900/40 hover:border-forest-900 text-forest-900 hover:bg-forest-900/5 focus:ring-forest-700',
    ghost:
      'text-forest-900 hover:bg-forest-900/10 focus:ring-forest-700',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  )
}
