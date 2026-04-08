const WA_NUMBER = '56927432287'

export default function Contact() {
  const generalLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hola Cubresuelos Pauchard, me gustaría recibir información sobre sus plantas y servicios.'
  )}`

  return (
    <section
      id="contacto"
      className="scroll-mt-16 py-24 lg:py-32 bg-[#f5f3ee]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — contact info */}
          <div>
            <span className="text-[#3d6b47] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Contacto
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight mb-5">
              Hablemos de<br />
              <span className="text-[#3d6b47]">tu jardín</span>
            </h2>
            <p className="text-[#78716c] text-lg leading-relaxed mb-8 max-w-[48ch]">
              Escríbenos directamente por WhatsApp para recibir asesoría personalizada, consultar disponibilidad o cotizar para tu proyecto.
            </p>

            {/* Main WhatsApp CTA */}
            <a
              href={generalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-base px-7 py-4 rounded-2xl hover:bg-[#1db954] active:scale-[0.98] transition-all duration-200 shadow-[0_6px_24px_-6px_rgba(37,211,102,0.5)] mb-10"
            >
              <WhatsAppSvg size={22} />
              Escribir por WhatsApp
            </a>

            {/* Contact details */}
            <div className="space-y-5">
              <ContactRow
                Icon={PhoneIcon}
                label="Teléfono / WhatsApp"
                href="tel:+56927432287"
                value="+56 9 2743 2287"
                sublabel="Jacqueline Pauchard"
              />
              <ContactRow
                Icon={MailIcon}
                label="Email"
                href="mailto:jardin-pauchard@hotmail.com"
                value="jardin-pauchard@hotmail.com"
              />
            </div>
          </div>

          {/* Right — map */}
          <div
            className="rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] h-64 sm:h-80 lg:h-[420px]"
          >
            <iframe
              title="Ubicación de Cubresuelos Pauchard"
              src="https://maps.google.com/maps?q=Papa+Beato+Paulo+VI+416,+Padre+Hurtado,+Chile&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactRow({ Icon, label, href, value, sublabel }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#e8f0ea] rounded-xl flex items-center justify-center text-[#3d6b47] shrink-0 mt-0.5">
        <Icon />
      </div>
      <div>
        <div className="text-[11px] font-semibold text-[#78716c] uppercase tracking-widest mb-0.5">{label}</div>
        <a
          href={href}
          className="font-semibold text-[#1c1917] hover:text-[#3d6b47] transition-colors"
        >
          {value}
        </a>
        {sublabel && <div className="text-sm text-[#78716c] mt-0.5">{sublabel}</div>}
      </div>
    </div>
  )
}

/* ── Icons ─────────────────────────────────────────────────────────── */

function WhatsAppSvg({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.88 8.81a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.99 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
