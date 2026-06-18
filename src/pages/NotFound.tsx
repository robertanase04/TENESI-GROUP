import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { PageWrapper } from '../components/ui/PageWrapper'
import { IconSilo, IconArrowRight } from '../components/ui/icons'

export function NotFound() {
  const { t } = useI18n()
  return (
    <PageWrapper>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-steel-950 px-5">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative flex flex-col items-center text-center">
          <IconSilo className="h-16 w-16 text-safety-500" />
          <p className="mt-8 font-display text-7xl font-bold text-steel-100 sm:text-8xl">404</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">{t.notFound.title}</h1>
          <p className="mt-3 max-w-md text-steel-400">{t.notFound.text}</p>
          <Link to="/" className="btn-primary group mt-8">
            {t.notFound.cta}
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
