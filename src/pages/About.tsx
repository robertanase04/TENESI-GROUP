import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'
import { PageWrapper } from '../components/ui/PageWrapper'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/sections/CTASection'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import {
  IconQuality,
  IconSafety,
  IconClock,
  IconShield,
} from '../components/ui/icons'

const valueIcons = {
  quality: IconQuality,
  safety: IconSafety,
  onTime: IconClock,
  durability: IconShield,
} as const

export function About() {
  const { t } = useI18n()
  usePageMeta(t.seo.about.title, t.seo.about.description)
  const valueKeys = ['quality', 'safety', 'onTime', 'durability'] as const
  const stepKeys = ['s1', 's2', 's3', 's4', 's5', 's6'] as const

  return (
    <PageWrapper>
      <PageHero
        eyebrow={t.about.hero.eyebrow}
        title={t.about.hero.title}
        subtitle={t.about.hero.subtitle}
      />

      {/* ===================== STORY ===================== */}
      <section className="bg-brushed bg-steel-900 py-24 md:py-32">
        <div className="container-tenesi grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t.about.story.eyebrow}
              title={t.about.story.title}
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-steel-400">
              <Reveal><p>{t.about.story.p1}</p></Reveal>
              <Reveal delay={0.05}><p>{t.about.story.p2}</p></Reveal>
              <Reveal delay={0.1}><p>{t.about.story.p3}</p></Reveal>
            </div>
          </div>

          {/* Image placeholder column */}
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-steel-800">
              {/* TODO: imagine reală echipă/șantier — va fi adăugată din raw-images/ */}
              <PlaceholderImage category="silozuri" seed="about-story" label="TENESI GROUP" />
            </div>
            {/* floating spec tag */}
            <div className="absolute -bottom-5 -left-3 border border-steel-700 bg-steel-950 px-5 py-4 shadow-xl sm:-left-6">
              <span className="tech-label">Inginerie agricolă · RO</span>
              <p className="mt-1 font-display text-sm font-semibold text-steel-100">
                {t.footer.builtNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="relative border-y border-steel-800 bg-steel-950 py-24 md:py-28">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="container-tenesi relative">
          <SectionHeading
            eyebrow={t.about.values.eyebrow}
            title={t.about.values.title}
          />
          <Stagger className="mt-14 grid gap-px overflow-hidden border border-steel-800 bg-steel-800 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key]
              const v = t.about.values.items[key]
              return (
                <StaggerItem key={key}>
                  <div className="h-full bg-steel-950 p-7">
                    <Icon className="h-9 w-9 text-safety-500" />
                    <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{v.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="bg-brushed bg-steel-900 py-24 md:py-32">
        <div className="container-tenesi">
          <SectionHeading
            eyebrow={t.about.process.eyebrow}
            title={t.about.process.title}
          />
          <ol className="mt-14 grid gap-px overflow-hidden border border-steel-800 bg-steel-800 md:grid-cols-2 lg:grid-cols-3">
            {stepKeys.map((key, i) => {
              const step = t.about.process.steps[key]
              return (
                <Reveal as="li" key={key} delay={i * 0.06} className="group relative bg-steel-900 p-8">
                  <span className="font-display text-5xl font-bold text-steel-800 transition-colors duration-300 group-hover:text-safety-500/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.desc}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
