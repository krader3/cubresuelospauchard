import { useInView } from '../hooks/useInView'
import festucaImg from '../../assets/festuca-C3ZmUChx.webp'

const stats = [
  {
    value: '20+',
    label: 'años de experiencia',
    desc:  'Desde siempre apasionados por el mundo vegetal chileno',
  },
  {
    value: '12',
    label: 'especies cubresuelos',
    desc:  'Seleccionadas para el clima y los suelos de Chile',
  },
  {
    value: '100%',
    label: 'asesoría directa',
    desc:  'Jacqueline te orienta personalmente en cada consulta',
  },
]

export default function About() {
  const [statsRef, statsInView] = useInView()
  const [textRef, textInView]   = useInView()

  return (
    <section
      id="nosotros"
      className="scroll-mt-16 bg-[#ebe8e1] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header + image */}
        <div
          ref={textRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center mb-20 lg:mb-24"
        >
          <div className={`reveal ${textInView ? 'visible' : ''}`}>
            <span className="text-[#3d6b47] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nuestra historia
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c1917] tracking-tight leading-[1.1] mb-6">
              Una pasión familiar<br />
              <span className="text-[#3d6b47]">convertida en oficio</span>
            </h2>
            <p className="text-[#78716c] text-lg leading-relaxed mb-5 max-w-[55ch]">
              Cubresuelos Pauchard nació de un sueño: transformar jardines comunes en espacios verdes vibrantes y sostenibles. Hoy somos referentes en Chile por nuestra experiencia, variedad y compromiso con cada cliente.
            </p>
            <p className="text-[#78716c] leading-relaxed max-w-[55ch]">
              Llevamos más de dos décadas dedicados al cultivo y comercialización de plantas cubresuelos, acompañando siempre a cada cliente con asesoría personalizada y directa.
            </p>
          </div>

          <div className={`reveal reveal-delay-1 ${textInView ? 'visible' : ''}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src={festucaImg}
                  alt="Festuca glauca — gramínea ornamental plateada cultivada en Chile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#3d6b47] text-white px-5 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold leading-none">20+</div>
                <div className="text-sm text-[#b8d4bb] mt-0.5">años en Chile</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#dbd8d2]"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} px-0 md:px-10 py-10 first:pt-0 md:first:pt-10 last:pb-0 md:last:pb-10 ${statsInView ? 'visible' : ''}`}
            >
              <div className="text-5xl font-bold text-[#3d6b47] mb-2 leading-none">{s.value}</div>
              <div className="font-semibold text-[#1c1917] mb-1">{s.label}</div>
              <div className="text-sm text-[#78716c] leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
