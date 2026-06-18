import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { Reveal } from '../ui/Reveal'
import { IconArrowRight } from '../ui/icons'

/** Final call-to-action band, reused across pages. */
export function CTASection() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden border-y border-steel-800 bg-steel-950">
      <div className="bg-grid absolute inset-0 opacity-60" />
      {/* hazard accent on the left edge */}
      <div className="hazard-stripes absolute inset-y-0 left-0 w-1.5 opacity-80" />

      <div className="container-tenesi relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.home.cta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-400 sm:text-lg">
            {t.home.cta.text}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="shrink-0">
          <Link to="/contact" className="btn-primary group">
            {t.home.cta.button}
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
