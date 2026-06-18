import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { PageWrapper } from '../components/ui/PageWrapper'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/sections/CTASection'
import { Reveal } from '../components/ui/Reveal'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { services } from '../content/services'
import { IconArrowRight } from '../components/ui/icons'

export function Services() {
  const { t } = useI18n()

  return (
    <PageWrapper>
      <PageHero
        eyebrow={t.services.hero.eyebrow}
        title={t.services.hero.title}
        subtitle={t.services.hero.subtitle}
      />

      <div className="bg-brushed bg-steel-900">
        {services.map((svc, i) => {
          const data = t.services.list[svc.key]
          const Icon = svc.icon
          const reversed = i % 2 === 1
          return (
            <section
              key={svc.key}
              className="border-b border-steel-800 py-20 md:py-28"
              id={svc.key}
            >
              <div className="container-tenesi">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Text */}
                  <Reveal className="[direction:ltr]">
                    <div className="flex items-center gap-4">
                      <Icon className="h-11 w-11 text-safety-500" />
                      <span className="font-display text-sm font-semibold text-steel-600">
                        / {svc.index}
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                      {data.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-steel-400">
                      {data.desc}
                    </p>

                    <div className="mt-8">
                      <span className="tech-label">{t.services.specsLabel}</span>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {data.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2.5 text-sm text-steel-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-safety-500" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {svc.category && (
                      <Link
                        to="/portofoliu"
                        className="group mt-8 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-steel-300 transition-colors hover:text-safety-500"
                      >
                        {t.home.portfolioTeaser.cta}
                        <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </Reveal>

                  {/* Image placeholder */}
                  <Reveal delay={0.1} className="[direction:ltr]">
                    <div className="relative aspect-[5/4] overflow-hidden border border-steel-800">
                      {/* TODO: imagine/randare reală a serviciului — va fi adăugată din raw-images/ */}
                      <PlaceholderImage
                        category={svc.category ?? 'silozuri'}
                        seed={svc.key}
                        label={data.title}
                      />
                      <span className="absolute right-4 top-4 border border-steel-700 bg-steel-950/80 px-3 py-1 font-display text-xs font-semibold text-safety-500">
                        {svc.index}
                      </span>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <CTASection />
    </PageWrapper>
  )
}
