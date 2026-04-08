import tiquiImg  from '../../assets/Prato-Lippia-nodiflora-dettaglio-fiori-KnAkuChF.jpg'
import cotulaImg from '../../assets/cotula-BKO0TsRY.webp'
import falkiaImg from '../../assets/falkia repens-ByP6ONzR.webp'

const WA_NUMBER = '56927432287'
const WA_MSG = encodeURIComponent('Hola Cubresuelos Pauchard, me gustaría recibir información sobre sus plantas y servicios.')

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[100dvh] flex items-center bg-[#f5f3ee] pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-[#e8f0ea] text-[#3d6b47] text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d6b47] animate-pulse" aria-hidden="true" />
              20+ años cultivando Chile
            </div>

            <h1 className="text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold text-[#1c1917] tracking-tight leading-[1.04]">
              Cubre tu jardín<br />
              <span className="text-[#3d6b47]">con plantas</span><br />
              que perduran
            </h1>

            <p className="text-lg text-[#78716c] leading-relaxed max-w-[50ch]">
              Especialistas en plantas cubresuelos de alta calidad. Transformamos jardines comunes en espacios verdes vibrantes, resistentes y de bajo mantenimiento.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-1">
              <Stat value="11" label="especies" />
              <div className="w-px h-8 bg-[#dbd8d2]" aria-hidden="true" />
              <Stat value="20+" label="años de exp." />
              <div className="w-px h-8 bg-[#dbd8d2]" aria-hidden="true" />
              <Stat value="Chile" label="envíos a todo" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#3d6b47] text-white font-semibold px-7 py-4 rounded-2xl hover:bg-[#2d5235] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(61,107,71,0.45)]"
              >
                <WhatsAppSvg />
                Consultar por WhatsApp
              </a>
              <a
                href="#plantas"
                className="flex items-center justify-center gap-2 text-[#1c1917] font-semibold px-7 py-4 rounded-2xl border border-[#dbd8d2] hover:border-[#3d6b47] hover:text-[#3d6b47] transition-all duration-200"
              >
                Ver plantas
                <ArrowSvg />
              </a>
            </div>
          </div>

          {/* Right — image collage (desktop only) */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[560px]" aria-hidden="true">
            <div className="row-span-2 rounded-3xl overflow-hidden">
              <img
                src={tiquiImg}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={cotulaImg}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                loading="eager"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={falkiaImg}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="lg:hidden rounded-3xl overflow-hidden h-60">
            <img
              src={tiquiImg}
              alt="Tiqui Tiqui — planta cubresuelo de alta calidad"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-[#1c1917] leading-none">{value}</div>
      <div className="text-xs text-[#78716c] mt-0.5">{label}</div>
    </div>
  )
}

function WhatsAppSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function ArrowSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L16.2 7.8M17 17V7H7"/>
    </svg>
  )
}
