import { useState, type FormEvent } from 'react'
import { useI18n } from '../i18n'
import { PageWrapper } from '../components/ui/PageWrapper'
import { PageHero } from '../components/sections/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { IconPhone, IconMail, IconPin, IconClock, IconArrowRight } from '../components/ui/icons'

export function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  // NOTE: there is NO backend. The form is presentational and, on submit,
  // opens the visitor's email client (mailto:) with the message pre-filled.
  // It is ready to be wired to a real endpoint later if desired.
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const to = t.contact.info.email // [EMAIL_CONTACT] placeholder
    const subject = encodeURIComponent(`Cerere ofertă — ${form.name || 'Website TENESI GROUP'}`)
    const body = encodeURIComponent(
      `Nume: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`,
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  const info = [
    { icon: IconPhone, label: t.contact.info.phoneLabel, value: t.contact.info.phone },
    { icon: IconMail, label: t.contact.info.emailLabel, value: t.contact.info.email },
    { icon: IconPin, label: t.contact.info.addressLabel, value: t.contact.info.address },
    { icon: IconClock, label: t.contact.info.hoursLabel, value: t.contact.info.hours },
  ]

  const inputClass =
    'w-full border border-steel-700 bg-steel-950 px-4 py-3 text-sm text-steel-100 placeholder:text-steel-600 transition-colors focus:border-safety-500 focus:outline-none'

  return (
    <PageWrapper>
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
      />

      <section className="bg-brushed bg-steel-900 py-20 md:py-28">
        <div className="container-tenesi grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact info */}
          <Reveal className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight">{t.contact.info.title}</h2>
            {/* TODO: completează datele reale de contact ale firmei */}
            <ul className="mt-8 space-y-6">
              {info.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="border border-steel-700 bg-steel-950 p-2.5 text-safety-500">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="tech-label-muted">{item.label}</span>
                    <p className="mt-1 text-base text-steel-100">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Map placeholder (no API key required) */}
            <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-steel-800">
              <div className="bg-grid absolute inset-0 bg-steel-950" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <IconPin className="h-10 w-10 text-safety-500" />
                <span className="font-display text-sm font-semibold text-steel-200">
                  Brăila, România
                </span>
                {/* TODO: înlocuiește cu embed Google Maps real (fără API key, iframe simplu) */}
                <span className="px-6 text-center text-xs text-steel-600">
                  {t.contact.form.mapNote}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-steel-800 bg-steel-950 p-7 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">{t.contact.form.title}</h2>
              <p className="mt-2 text-sm text-steel-500">{t.contact.form.note}</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="tech-label-muted" htmlFor="name">{t.contact.form.name}</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className={`mt-2 ${inputClass}`}
                    />
                  </div>
                  <div>
                    <label className="tech-label-muted" htmlFor="phone">{t.contact.form.phone}</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t.contact.form.phonePlaceholder}
                      className={`mt-2 ${inputClass}`}
                    />
                  </div>
                </div>
                <div>
                  <label className="tech-label-muted" htmlFor="email">{t.contact.form.email}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label className="tech-label-muted" htmlFor="message">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className={`mt-2 resize-none ${inputClass}`}
                  />
                </div>
                <button type="submit" className="btn-primary group w-full sm:w-auto">
                  {t.contact.form.submit}
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
