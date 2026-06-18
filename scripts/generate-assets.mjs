/**
 * Generates brand raster assets from inline SVG sources using sharp.
 * Run with: node scripts/generate-assets.mjs
 *
 * Outputs into /public:
 *   - favicon-32.png, favicon-192.png, favicon-512.png  (PWA / browser icons)
 *   - apple-touch-icon.png (180×180, iOS home screen)
 *   - og-image.png (1200×630, social link preview)
 *
 * The vector master (favicon.svg) is kept for modern browsers.
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '..', 'public')

const STEEL_950 = '#121417'
const STEEL_900 = '#1a1d21'
const STEEL_800 = '#2b2f36'
const STEEL_400 = '#8a8f98'
const STEEL_100 = '#e7e9ec'
const SAFETY = '#f5a623'

/** Square app icon — corrugated silo on dark steel. `pad` insets the glyph. */
function iconSVG(size, rounded = true) {
  const r = rounded ? Math.round(size * 0.18) : 0
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${(r / size) * 64}" fill="${STEEL_900}"/>
  <rect width="64" height="64" rx="${(r / size) * 64}" fill="url(#g)" opacity="0.6"/>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="64" y2="64">
      <stop offset="0" stop-color="#21262d"/>
      <stop offset="1" stop-color="#121417"/>
    </linearGradient>
  </defs>
  <g stroke="${SAFETY}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 22 L32 11 L44 22 Z"/>
    <path d="M20 22 H44 V50 H20 Z"/>
    <line x1="20" y1="29" x2="44" y2="29"/>
    <line x1="20" y1="36" x2="44" y2="36"/>
    <line x1="20" y1="43" x2="44" y2="43"/>
  </g>
  <line x1="14" y1="50" x2="50" y2="50" stroke="${STEEL_400}" stroke-width="2" stroke-linecap="round"/>
</svg>`
}

/** 1200×630 social preview card. */
function ogSVG() {
  // blueprint grid lines
  let grid = ''
  for (let x = 0; x <= 1200; x += 48) grid += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="${STEEL_400}" stroke-opacity="0.06" stroke-width="1"/>`
  for (let y = 0; y <= 630; y += 48) grid += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${STEEL_400}" stroke-opacity="0.06" stroke-width="1"/>`

  // big silo glyph on the right
  const silo = `
    <g transform="translate(815,150) scale(9)" stroke="${SAFETY}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 8 L18 -2 L29 8 Z" fill="${SAFETY}" fill-opacity="0.06"/>
      <path d="M7 8 H29 V36 H7 Z" fill="${STEEL_800}" fill-opacity="0.35"/>
      <line x1="7" y1="14" x2="29" y2="14"/>
      <line x1="7" y1="20" x2="29" y2="20"/>
      <line x1="7" y1="26" x2="29" y2="26"/>
      <line x1="7" y1="32" x2="29" y2="32"/>
    </g>`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
      <stop offset="0" stop-color="#21262d"/>
      <stop offset="0.55" stop-color="${STEEL_900}"/>
      <stop offset="1" stop-color="${STEEL_950}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  ${grid}
  ${silo}
  <!-- hazard accent bar -->
  <rect x="0" y="0" width="1200" height="8" fill="${SAFETY}"/>
  <g font-family="'Space Grotesk','Inter',Arial,sans-serif">
    <!-- eyebrow -->
    <text x="90" y="150" fill="${SAFETY}" font-size="24" font-weight="600" letter-spacing="6">CONSTRUCȚII INDUSTRIALE · ROMÂNIA</text>
    <!-- wordmark -->
    <text x="88" y="250" fill="${STEEL_100}" font-size="92" font-weight="700" letter-spacing="-1">TENESI<tspan dx="26" fill="${SAFETY}">GROUP</tspan></text>
    <!-- tagline -->
    <text x="90" y="330" fill="${STEEL_100}" font-size="40" font-weight="500">Infrastructura care protejează recolta</text>
    <!-- services line -->
    <text x="90" y="392" fill="${STEEL_400}" font-size="28" font-weight="400">Silozuri metalice · Hale · Ferme zootehnice · Uscătoare</text>
    <!-- specs row -->
    <g transform="translate(90,470)">
      <rect x="0" y="-22" width="10" height="10" fill="${SAFETY}"/>
      <text x="24" y="-12" fill="${STEEL_400}" font-size="22" font-weight="500" letter-spacing="2">OȚEL GALVANIZAT S350GD</text>
      <rect x="360" y="-22" width="10" height="10" fill="${SAFETY}"/>
      <text x="384" y="-12" fill="${STEEL_400}" font-size="22" font-weight="500" letter-spacing="2">EXECUȚIE „LA CHEIE”</text>
    </g>
    <!-- experience badge -->
    <text x="90" y="540" fill="${STEEL_400}" font-size="22">40+ ani inginerie agricolă · 20+ ani silozuri</text>
  </g>
</svg>`
}

async function run() {
  const tasks = [
    ['favicon-32.png', iconSVG(32)],
    ['favicon-192.png', iconSVG(192)],
    ['favicon-512.png', iconSVG(512)],
    ['apple-touch-icon.png', iconSVG(180, false)],
  ]
  for (const [name, svg] of tasks) {
    await sharp(Buffer.from(svg)).png().toFile(join(PUBLIC, name))
    console.log('wrote', name)
  }
  await sharp(Buffer.from(ogSVG())).png({ quality: 90 }).toFile(join(PUBLIC, 'og-image.png'))
  console.log('wrote og-image.png')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
