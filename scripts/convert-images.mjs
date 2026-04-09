import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import path from 'path'

const assetsDir = './assets'
const jpgs = readdirSync(assetsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'))

for (const jpg of jpgs) {
  const input = path.join(assetsDir, jpg)
  const output = path.join(assetsDir, jpg.replace(/\.jpe?g$/, '.webp'))
  // Redimensionar a max 800px ancho (suficiente para 2x en mobile/tablet)
  await sharp(input).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output)
  const before = statSync(input).size
  const after = statSync(output).size
  const saving = Math.round((1 - after / before) * 100)
  console.log(`✓ ${jpg} → ${path.basename(output)}  (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB, -${saving}%)`)
}
