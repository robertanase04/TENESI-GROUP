import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { PageWrapper } from '../components/ui/PageWrapper'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/sections/CTASection'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { portfolioItems, type PortfolioCategory } from '../content/portfolio'
import {
  IconClose,
  IconChevronLeft,
  IconChevronRight,
} from '../components/ui/icons'

type Filter = 'all' | PortfolioCategory
const filterKeys: Filter[] = ['all', 'silozuri', 'hale', 'ferme', 'uscatoare']

export function Portfolio() {
  const { t, lang } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const visible = useMemo(
    () =>
      filter === 'all'
        ? portfolioItems
        : portfolioItems.filter((p) => p.category === filter),
    [filter],
  )

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  )

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex !== null ? visible[activeIndex] : null

  return (
    <PageWrapper>
      <PageHero
        eyebrow={t.portfolio.hero.eyebrow}
        title={t.portfolio.hero.title}
        subtitle={t.portfolio.hero.subtitle}
      />

      <section className="bg-brushed bg-steel-900 py-16 md:py-24">
        <div className="container-tenesi">
          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`border px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === key
                    ? 'border-safety-500 bg-safety-500 text-steel-950'
                    : 'border-steel-700 text-steel-300 hover:border-steel-500 hover:text-steel-100'
                }`}
              >
                {t.portfolio.filters[key]}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          {visible.length === 0 ? (
            <p className="mt-16 text-center text-steel-500">{t.portfolio.empty}</p>
          ) : (
            <motion.div
              layout
              className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
            >
              <AnimatePresence mode="popLayout">
                {visible.map((item, i) => (
                  <motion.button
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveIndex(i)}
                    className="group relative block w-full overflow-hidden border border-steel-800 text-left"
                  >
                    <div
                      className={`${item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} w-full`}
                    >
                      {/* TODO: imagine reală proiect — va fi adăugată din raw-images/<categorie>/ */}
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                        <PlaceholderImage
                          category={item.category}
                          seed={item.id}
                          label={t.portfolio.filters[item.category]}
                        />
                      </div>
                    </div>
                    {/* hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-steel-950 via-steel-950/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="tech-label">{item.spec}</span>
                      <p className="mt-1 font-display text-base font-semibold text-steel-100">
                        {item.caption[lang]}
                      </p>
                    </div>
                    {/* always-visible category chip */}
                    <span className="absolute left-3 top-3 border border-steel-700 bg-steel-950/80 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-wider text-steel-300">
                      {t.portfolio.filters[item.category]}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          <p className="mt-10 text-center text-xs text-steel-600">
            {t.portfolio.placeholderNote}
          </p>
        </div>
      </section>

      {/* ===================== LIGHTBOX ===================== */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-steel-950/95 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            {/* close */}
            <button
              onClick={close}
              aria-label={t.portfolio.lightbox.close}
              className="absolute right-4 top-4 z-10 border border-steel-700 p-2 text-steel-200 transition-colors hover:border-safety-500 hover:text-safety-500 sm:right-8 sm:top-8"
            >
              <IconClose className="h-6 w-6" />
            </button>

            {/* prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label={t.portfolio.lightbox.prev}
              className="absolute left-3 z-10 border border-steel-700 p-2 text-steel-200 transition-colors hover:border-safety-500 hover:text-safety-500 sm:left-8"
            >
              <IconChevronLeft className="h-6 w-6" />
            </button>
            {/* next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label={t.portfolio.lightbox.next}
              className="absolute right-3 z-10 border border-steel-700 p-2 text-steel-200 transition-colors hover:border-safety-500 hover:text-safety-500 sm:right-8"
            >
              <IconChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-steel-700">
                {/* TODO: imagine reală la rezoluție mare — va fi adăugată din raw-images/ */}
                <PlaceholderImage
                  category={active.category}
                  seed={active.id}
                  label={t.portfolio.filters[active.category]}
                />
              </div>
              <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="tech-label">{t.portfolio.filters[active.category]}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-steel-100">
                    {active.caption[lang]}
                  </h3>
                </div>
                <span className="font-display text-sm text-steel-400">{active.spec}</span>
              </div>
              <p className="mt-3 text-xs text-steel-600">{t.portfolio.placeholderNote}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </PageWrapper>
  )
}
