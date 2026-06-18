import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { services } from '../../content/services'
import { IconSilo, IconPhone, IconMail, IconPin } from '../ui/icons'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-steel-800 bg-steel-950">
      {/* hazard tape divider */}
      <div className="hazard-stripes h-1.5 w-full opacity-80" />

      <div className="container-tenesi grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        {/* Brand + tagline */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <IconSilo className="h-7 w-7 text-safety-500" />
            <span className="font-display text-lg font-bold tracking-tight text-steel-100">
              TENESI<span className="text-safety-500"> GROUP</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
            {t.footer.tagline}
          </p>
          <p className="mt-4 tech-label-muted">{t.footer.builtNote}</p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h3 className="tech-label-muted">{t.footer.navTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-steel-300 transition-colors hover:text-safety-500">{t.nav.home}</Link></li>
            <li><Link to="/despre" className="text-steel-300 transition-colors hover:text-safety-500">{t.nav.about}</Link></li>
            <li><Link to="/servicii" className="text-steel-300 transition-colors hover:text-safety-500">{t.nav.services}</Link></li>
            <li><Link to="/portofoliu" className="text-steel-300 transition-colors hover:text-safety-500">{t.nav.portfolio}</Link></li>
            <li><Link to="/contact" className="text-steel-300 transition-colors hover:text-safety-500">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h3 className="tech-label-muted">{t.footer.servicesTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.key}>
                <Link to="/servicii" className="text-steel-300 transition-colors hover:text-safety-500">
                  {t.services.list[s.key].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h3 className="tech-label-muted">{t.footer.contactTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-300">
            <li className="flex items-start gap-2.5">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-safety-500" />
              <span>{t.contact.info.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-safety-500" />
              <span>{t.contact.info.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-safety-500" />
              <span>{t.contact.info.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <div className="container-tenesi flex flex-col gap-2 py-5 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.common.companyFull}. {t.footer.rights}
          </p>
          {/* TODO: completează cu datele reale de înregistrare ale firmei */}
          <p className="text-steel-600">{t.footer.placeholderLegal}</p>
        </div>
      </div>
    </footer>
  )
}
