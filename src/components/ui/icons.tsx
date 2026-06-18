/**
 * Custom line icons drawn for the industrial brand language.
 * Stroke-based, currentColor, no emoji. ~24×24 viewBox.
 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

/** Grain silo — conical roof + corrugated body */
export function IconSilo(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8 L12 3 L17 8 Z" />
      <path d="M7 8 H17 V20 H7 Z" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="16" x2="17" y2="16" />
      <line x1="20" y1="20" x2="4" y2="20" />
    </svg>
  )
}

/** Industrial hall — gabled steel frame */
export function IconHall(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11 L12 5 L21 11" />
      <path d="M5 11 V20 H19 V11" />
      <line x1="3" y1="20" x2="21" y2="20" />
      <path d="M10 20 V14 H14 V20" />
    </svg>
  )
}

/** Livestock farm — barn with vent */
export function IconFarm(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10 L12 4 L20 10" />
      <path d="M5 10 V20 H19 V10" />
      <path d="M9 20 V15 a3 3 0 0 1 6 0 V20" />
      <line x1="12" y1="6.5" x2="12" y2="9" />
    </svg>
  )
}

/** Grain dryer — tower with heat waves */
export function IconDryer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4 H16 V18 a4 4 0 0 1 -8 0 Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <path d="M11 11 c0 1 -1 1 -1 2 s1 1 1 2" />
      <path d="M14 11 c0 1 -1 1 -1 2 s1 1 1 2" />
    </svg>
  )
}

/** Turnkey / gears */
export function IconTurnkey(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3 v2 M12 19 v2 M3 12 h2 M19 12 h2 M5.6 5.6 l1.4 1.4 M17 17 l1.4 1.4 M18.4 5.6 l-1.4 1.4 M7 17 l-1.4 1.4" />
    </svg>
  )
}

export function IconQuality(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 l7 3 v5 c0 5 -3.5 8 -7 9 c-3.5 -1 -7 -4 -7 -9 V6 Z" />
      <path d="M9 12 l2 2 l4 -4" />
    </svg>
  )
}

export function IconSafety(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 a6 6 0 0 1 6 6 v2 H6 v-2 a6 6 0 0 1 6 -6 Z" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="12" y1="4" x2="12" y2="2.5" />
      <path d="M8 18 h8 M9 21 h6" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8 v4 l3 2" />
    </svg>
  )
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 l7 3 v5 c0 5 -3.5 8 -7 9 c-3.5 -1 -7 -4 -7 -9 V6 Z" />
      <line x1="12" y1="8" x2="12" y2="13" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6 l6 6 l-6 6" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4 h3 l1.5 4 l-2 1.5 a11 11 0 0 0 5 5 l1.5 -2 l4 1.5 v3 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2 Z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 7 l9 6 l9 -6" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21 c4 -4.5 6 -7.5 6 -11 a6 6 0 0 0 -12 0 c0 3.5 2 6.5 6 11 Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 6 l-6 6 l6 6" />
    </svg>
  )
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 6 l6 6 l-6 6" />
    </svg>
  )
}
