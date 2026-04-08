const WA_NUMBER = '56927432287'
const WA_MSG    = encodeURIComponent(
  'Hola Cubresuelos Pauchard, me gustaría recibir información sobre sus plantas.'
)

// Plant names styled as "partner logos" at the bottom
const speciesNames = ['Tiqui Tiqui', 'Cótula', 'Falkia', 'Dymondia', 'Doca']

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-hidden bg-[#f5f3ee] flex flex-col"
    >
      {/* ── Background video ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pt-[120px] md:pt-[200px]"
        aria-hidden="true"
      >
        <video
          className="w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* ── Overlays ──────────────────────────────────────────── */}
      {/* Base tint over the whole video so nunca compite con el texto */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'rgba(245,243,238,0.45)' }}
      />
      {/* Strong cream gradient: sólido en zona de texto, fade al video */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #f5f3ee 50%, rgba(245,243,238,0.0) 78%)',
        }}
      />
      {/* Bottom vignette so the species bar text is readable */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '220px',
          background: 'linear-gradient(to top, rgba(28,25,23,0.65) 0%, transparent 100%)',
        }}
      />

      {/* ── Hero content ──────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex flex-col justify-start items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-24 sm:pb-40 max-w-5xl mx-auto w-full text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-5 sm:mb-7 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-6 h-6 border border-[#b9ddc4] rounded bg-[#e8f0ea] flex items-center justify-center text-[#3d6b47]">
            <LeafSvg />
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#1c1917]">
            20+ años transformando jardines chilenos
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-normal leading-[1.08] tracking-tight mb-4 sm:mb-5 animate-fade-in-up"
          style={{
            fontSize: 'clamp(36px, 6.5vw, 76px)',
            animationDelay: '0.3s',
          }}
        >
          {/* Mobile — 3 lines */}
          <span className="sm:hidden">
            Cubre tu jardín.<br />
            Transforma tu espacio.<br />
            <span className="text-[#1c1917]">
              Plantas que perduran.
            </span>
          </span>
          {/* Desktop — 2 lines */}
          <span className="hidden sm:inline">
            Cubre tu jardín. Transforma tu espacio.<br />
            <span className="text-[#1c1917]">
              Plantas que perduran.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl text-[#1c1917] mb-7 sm:mb-9 max-w-2xl px-2 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Especialistas en plantas cubresuelos de alta calidad. Adaptadas al clima chileno, resistentes y de bajo mantenimiento.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#3d6b47] text-white px-7 sm:px-9 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-[#2d5235] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(61,107,71,0.45)]"
          >
            <WhatsAppSvg />
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      {/* ── Bottom species bar ────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-3 sm:gap-4 pb-5 sm:pb-8 px-4 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        {/* Glass pill */}
        <div className="rounded-full px-3.5 py-1 backdrop-blur-md bg-white/15 border border-white/20">
          <span className="text-[10px] sm:text-xs font-medium text-white">
            Disponibles con envío a todo Chile
          </span>
        </div>

        {/* Species names as decorative logos */}
        <div className="flex gap-5 sm:gap-10 md:gap-14 flex-wrap justify-center">
          {speciesNames.map(name => (
            <span
              key={name}
              className="text-base sm:text-2xl md:text-[1.6rem] italic text-white/90 tracking-tight select-none"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Inline SVGs ──────────────────────────────────────────────────── */

function LeafSvg() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}

function WhatsAppSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
