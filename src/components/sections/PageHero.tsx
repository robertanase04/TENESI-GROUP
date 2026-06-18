import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Compact hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-steel-800 bg-steel-950 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="bg-vignette absolute inset-0" />
      {/* large ghost number / accent line */}
      <div className="hazard-stripes absolute bottom-0 left-0 h-1.5 w-32 opacity-80" />

      <div className="container-tenesi relative">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tech-label flex items-center gap-2.5"
        >
          <span className="inline-block h-px w-10 bg-safety-500" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-steel-400 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
