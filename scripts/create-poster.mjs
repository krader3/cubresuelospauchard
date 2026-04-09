import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import sharp from 'sharp'
import { unlinkSync } from 'fs'

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

// Extrae frame en segundo 3 del video
const tmpJpg = './public/hero-poster-tmp.jpg'
const output = './public/hero-poster.webp'

await new Promise((resolve, reject) => {
  ffmpeg('./public/hero.mp4')
    .screenshots({ timestamps: ['3'], filename: 'hero-poster-tmp.jpg', folder: './public', size: '1280x?' })
    .on('end', resolve)
    .on('error', reject)
})

// Convertir a webp con buena compresión
await sharp(tmpJpg)
  .resize(1280)
  .webp({ quality: 75 })
  .toFile(output)

unlinkSync(tmpJpg)

const { statSync } = await import('fs')
const size = Math.round(statSync(output).size / 1024)
console.log(`✓ hero-poster.webp creado — ${size}KB`)
