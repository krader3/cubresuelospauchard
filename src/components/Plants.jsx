import { useState } from 'react'
import { plants } from '../data/plants'

const WA_NUMBER = '56927432287'

function buildWaLink(plantName) {
  const msg = encodeURIComponent(
    `Hola Cubresuelos Pauchard, me interesa obtener información sobre la planta: ${plantName}`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export default function Plants() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="plantas"
      className="scroll-mt-16 py-24 lg:py-32 bg-[#f5f3ee]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-12 lg:mb-14 max-w-2xl">
          <span className="text-[#3d6b47] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Catálogo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight mb-4">
            Plantas cubresuelos
          </h2>
          <p className="text-[#78716c] text-lg leading-relaxed max-w-[55ch]">
            Cada especie seleccionada y cultivada en Chile por su adaptación al clima local, resistencia y bajo mantenimiento.
          </p>
        </div>

        {/*
          Asymmetric grid:
          - The featured plant (Tiqui Tiqui) spans 2 rows on desktop
          - Rest fill in naturally
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isActive={active === plant.id}
              onEnter={() => setActive(plant.id)}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#dbd8d2]">
          <p className="text-[#78716c] text-sm">
            ¿Necesitas ayuda para elegir la planta correcta?
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              'Hola Cubresuelos Pauchard, necesito asesoría para elegir un cubresuelo para mi jardín.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1c1917] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#3d6b47] active:scale-[0.98] transition-all duration-200 shrink-0"
          >
            <WhatsAppSvg />
            Solicitar asesoría personalizada
          </a>
        </div>
      </div>
    </section>
  )
}

function PlantCard({ plant, isActive, onEnter, onLeave }) {
  return (
    <article
      className={`group relative rounded-3xl overflow-hidden bg-[#ebe8e1] cursor-pointer select-none ${
        plant.featured ? 'lg:row-span-2' : ''
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
      aria-label={`${plant.name} — ${plant.scientific}`}
    >
      {/* Image */}
      <div
        className={`overflow-hidden ${
          plant.featured ? 'h-64 sm:h-72 lg:h-full lg:min-h-[540px]' : 'h-56 sm:h-60'
        }`}
      >
        <img
          src={plant.image}
          alt={`${plant.name} (${plant.scientific})`}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isActive ? 'scale-[1.06]' : 'scale-100'
          }`}
          loading="lazy"
        />
      </div>

      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#1c1917]/95 via-[#1c1917]/45 to-transparent transition-opacity duration-350 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Name badge — visible when NOT hovered */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isActive ? 'opacity-0 translate-y-1 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-3 inline-block">
          <div className="font-bold text-[#1c1917] text-[15px] leading-tight">{plant.name}</div>
          <div className="text-[#78716c] text-xs italic mt-0.5">{plant.scientific}</div>
        </div>
      </div>

      {/* Detail overlay — visible when hovered */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
      >
        <div className="font-bold text-white text-xl leading-tight">{plant.name}</div>
        <div className="text-white/55 text-xs italic mt-0.5 mb-3">{plant.scientific}</div>
        <p className="text-white/82 text-sm leading-relaxed mb-4">{plant.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Características">
          {plant.tags.map(tag => (
            <span
              key={tag}
              role="listitem"
              className="bg-white/15 text-white/90 text-xs px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={buildWaLink(plant.name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="inline-flex items-center gap-2 bg-[#3d6b47] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#2d5235] active:scale-[0.98] transition-all duration-150"
        >
          <WhatsAppSvg />
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}

function WhatsAppSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
