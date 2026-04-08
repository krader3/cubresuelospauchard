import { useInView } from '../hooks/useInView'

const features = [
  {
    Icon: PlantIcon,
    title: 'Plantas de calidad comprobada',
    desc: 'Cada especie es cultivada con cuidado, garantizando plantas sanas, bien desarrolladas y listas para adaptarse a tu jardín.',
  },
  {
    Icon: PersonIcon,
    title: 'Asesoría personalizada',
    desc: 'Te ayudamos a elegir la planta ideal según tu jardín, clima, exposición solar y necesidades de mantenimiento.',
  },
  {
    Icon: ShieldIcon,
    title: 'Garantía de adaptación',
    desc: 'Respaldamos cada venta con orientación post-compra. Si tu planta no se adapta, te acompañamos en el proceso.',
  },
  {
    Icon: TruckIcon,
    title: 'Envíos a todo Chile',
    desc: 'Despachamos con embalaje especializado para que cada planta llegue en perfectas condiciones a cualquier región.',
  },
]

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 lg:py-32 bg-[#ebe8e1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <span className="text-[#3d6b47] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight mb-5">
              Más que plantas,<br />
              <span className="text-[#3d6b47]">una garantía</span>
            </h2>
            <p className="text-[#78716c] text-base leading-relaxed max-w-[42ch]">
              Desde hace más de 20 años entregamos calidad, conocimiento y compromiso en cada venta. Tu jardín merece lo mejor.
            </p>
          </div>

          {/* Right — feature cards */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-[#f5f3ee] rounded-3xl p-7 reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}
              >
                <div className="w-11 h-11 bg-[#e8f0ea] rounded-2xl flex items-center justify-center text-[#3d6b47] mb-5">
                  <Icon />
                </div>
                <h3 className="font-bold text-[#1c1917] text-[17px] mb-2 leading-snug">{title}</h3>
                <p className="text-[#78716c] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Icons ─────────────────────────────────────────────────────────── */

function PlantIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12"/>
      <path d="M12 12C12 12 7.5 10 5 6c4.5 0 7 2.5 7 6z"/>
      <path d="M12 12c0 0 4.5-2 7-6-4.5 0-7 2.5-7 6z"/>
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 5v4h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}
