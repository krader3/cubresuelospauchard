const YEAR = new Date().getFullYear()

const navLinks = [
  { label: 'Inicio',   href: '#inicio' },
  { label: 'Plantas',  href: '#plantas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b border-[#2a2520]">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LeafSvg />
              <span className="font-bold text-white text-[15px] tracking-tight">Cubresuelos Pauchard</span>
            </div>
            <p className="text-[#a89f97] text-sm leading-relaxed max-w-[34ch]">
              Especialistas en tapizantes y cubresuelos. La alternativa al césped más confiable de Chile, con más de 20 años transformando jardines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#a89f97] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-5">
              Contacto
            </h3>
            <div className="space-y-2.5">
              <a
                href="tel:+56927432287"
                className="block text-[#a89f97] hover:text-white transition-colors text-sm"
              >
                +56 9 2743 2287
              </a>
              <a
                href="mailto:jardin-pauchard@hotmail.com"
                className="block text-[#a89f97] hover:text-white transition-colors text-sm"
              >
                jardin-pauchard@hotmail.com
              </a>
              <a
                href="https://wa.me/56927432287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#5a9168] hover:text-[#7db88a] transition-colors text-sm mt-1"
              >
                <WhatsAppSvg />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[#a89f97] text-xs">
            © {YEAR} Cubresuelos Pauchard. Todos los derechos reservados.
          </p>
          <a
            href="https://www.jaimecofre.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a89f97] hover:text-white transition-colors text-xs"
          >
            Hecho con amor ❤️&nbsp; por Jaime Cofré
          </a>
        </div>
      </div>
    </footer>
  )
}

function LeafSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d6b47" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}

function WhatsAppSvg() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
