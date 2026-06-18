import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/** Eyebrow label + large display title used to open most sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <span className="tech-label flex items-center gap-2">
        <span className="inline-block h-px w-8 bg-safety-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed text-steel-400 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
