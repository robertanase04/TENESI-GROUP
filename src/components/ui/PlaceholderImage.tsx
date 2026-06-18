/**
 * Industrial styled placeholder used everywhere a real photo will later go.
 * Renders a steel-toned gradient, a blueprint grid, a faint category icon
 * and a technical label — so the layout reads as "engineered" even without
 * real imagery. Deterministic per `seed` so placeholders stay stable.
 */
import type { PortfolioCategory } from '../../content/portfolio'
import { IconSilo, IconHall, IconFarm, IconDryer } from './icons'

const categoryIcon: Record<PortfolioCategory, typeof IconSilo> = {
  silozuri: IconSilo,
  hale: IconHall,
  ferme: IconFarm,
  uscatoare: IconDryer,
}

// A few steel-toned gradient pairs to vary the placeholders.
const gradients = [
  ['#252a31', '#171a1e'],
  ['#2b3037', '#1b1e23'],
  ['#21262d', '#14171b'],
  ['#2d333c', '#181b20'],
]

function hashSeed(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h
}

interface PlaceholderImageProps {
  category: PortfolioCategory
  seed: string
  label?: string
  className?: string
}

export function PlaceholderImage({
  category,
  seed,
  label,
  className = '',
}: PlaceholderImageProps) {
  const Icon = categoryIcon[category]
  const h = hashSeed(seed)
  const [from, to] = gradients[h % gradients.length]

  return (
    /* TODO: imagine reală — va fi înlocuită cu fotografia proiectului din raw-images/ */
    <div
      className={`bg-grid relative h-full w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
      role="img"
      aria-label={label ?? category}
    >
      {/* blueprint grid sits on the gradient via bg-grid; add corner ticks */}
      <div className="pointer-events-none absolute inset-3 border border-steel-700/40" />
      <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-safety-500/60" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-safety-500/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-20 w-20 text-steel-500/40" />
      </div>

      <div className="absolute bottom-4 left-4">
        <span className="tech-label-muted">{label ?? category}</span>
      </div>
    </div>
  )
}
