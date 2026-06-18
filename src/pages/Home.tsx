import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { PageWrapper } from '../components/ui/PageWrapper'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTASection } from '../components/sections/CTASection'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

// Three.js is heavy and only used in the hero — load it lazily so the rest
// of the site (and other routes) stay lightweight.
const Hero3D = lazy(() =>
  import('../components/three/Hero3D').then((m) => ({ default: m.Hero3D })),
)
import { homeServices, services } from '../content/services'
import { portfolioItems } from '../content/portfolio'
import { IconArrowRight } from '../components/ui/icons'

export function Home() {
  const { t, lang } = useI18n()
  const teaser = portfolioItems.filter((p) => p.tall).slice(0, 3)

  return (
    <PageWrapper>
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-steel-950 pt-16">
        {/* 3D layer */}
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>
        {/* readability vignette + grain */}
        <div className="bg-vignette pointer-events-none absolute inset-0" />
        <div className="noise-overlay pointer-events-none absolute inset-0" />

        <div className="container-tenesi relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="tech-label flex items-center gap-2.5">
              <span className="inline-block h-px w-10 bg-safety-500" />
              {t.home.hero.eyebrow}
            </span>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              {t.home.hero.titleLine1}
              <br />
              {t.home.hero.titleLine2}{' '}
              <span className="text-safety-500">{t.home.hero.titleHighlight}</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {t.home.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary group">
                {t.home.hero.ctaPrimary}
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/servicii" className="btn-outline">
                {t.home.hero.ctaSecondary}
              </Link>
            </div>

            {/* spec chips */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-steel-800/70 pt-6">
              {[t.home.hero.specCapacity, t.home.hero.specStandard, t.home.hero.specTurnkey].map(
                (spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-safety-500" />
                    <span className="font-display text-xs uppercase tracking-wider text-steel-400">
                      {spec}
                    </span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2 text-steel-500">
            <span className="font-display text-[0.65rem] uppercase tracking-[0.3em]">
              {t.common.scroll}
            </span>
            <motion.span
              className="block h-8 w-px bg-gradient-to-b from-safety-500 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===================== INTRO / WHAT WE DO ===================== */}
      <section className="bg-brushed relative bg-steel-900 py-24 md:py-32">
        <div className="container-tenesi">
          <SectionHeading
            eyebrow={t.home.intro.eyebrow}
            title={t.home.intro.title}
            intro={t.home.intro.text}
          />

          <Stagger className="mt-14 grid gap-px overflow-hidden border border-steel-800 bg-steel-800 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((key) => {
              const def = services.find((s) => s.key === key)!
              const Icon = def.icon
              const svc = t.home.services[key]
              return (
                <StaggerItem key={key}>
                  <Link
                    to="/servicii"
                    className="group flex h-full flex-col bg-steel-900 p-7 transition-colors duration-300 hover:bg-steel-850"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-10 w-10 text-safety-500 transition-transform duration-300 group-hover:-translate-y-1" />
                      <span className="font-display text-xs font-semibold text-steel-600">
                        {def.index}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{svc.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">
                      {svc.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-steel-400 transition-colors group-hover:text-safety-500">
                      {t.common.learnMore}
                      <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ===================== STATS / TRUST ===================== */}
      <section className="relative border-y border-steel-800 bg-steel-950 py-24 md:py-28">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="container-tenesi relative">
          <SectionHeading
            eyebrow={t.home.stats.eyebrow}
            title={t.home.stats.title}
            align="center"
            className="mx-auto"
          />

          <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-steel-800 bg-steel-800 lg:grid-cols-4">
            {(['years', 'projects', 'capacity', 'counties'] as const).map((k) => {
              const item = t.home.stats.items[k]
              return (
                <StaggerItem key={k}>
                  <div className="flex flex-col items-center bg-steel-950 px-4 py-10 text-center">
                    <span className="font-display text-4xl font-bold text-safety-500 sm:text-5xl">
                      {item.value}
                    </span>
                    <span className="mt-3 text-sm text-steel-400">{item.label}</span>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ===================== PORTFOLIO TEASER ===================== */}
      <section className="bg-brushed bg-steel-900 py-24 md:py-32">
        <div className="container-tenesi">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t.home.portfolioTeaser.eyebrow}
              title={t.home.portfolioTeaser.title}
              intro={t.home.portfolioTeaser.text}
            />
            <Reveal delay={0.1}>
              <Link
                to="/portofoliu"
                className="btn-outline group shrink-0 whitespace-nowrap"
              >
                {t.home.portfolioTeaser.cta}
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teaser.map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  to="/portofoliu"
                  className="group relative block aspect-[4/5] overflow-hidden border border-steel-800"
                >
                  {/* TODO: imagine reală siloz/hală — va fi adăugată din raw-images/ */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <PlaceholderImage
                      category={item.category}
                      seed={item.id}
                      label={t.portfolio.filters[item.category]}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-transparent p-5 pt-16">
                    <span className="tech-label">{t.portfolio.filters[item.category]}</span>
                    <p className="mt-1.5 font-display text-base font-semibold text-steel-100">
                      {item.caption[lang]}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <CTASection />
    </PageWrapper>
  )
}
