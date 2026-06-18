# TENESI GROUP — Website de prezentare

Website de prezentare (frontend, fără backend) pentru **SC TENESI GROUP SRL**,
companie din Brăila specializată în **silozuri metalice, hale industriale,
ferme zootehnice și uscătoare de cereale**.

Experiență imersivă, modernă, cinematică — hero 3D cu un siloz procedural,
scroll storytelling, micro-interacțiuni la hover și un design system industrial
(oțel/antracit + accent galben „de siguranță”). Bilingv **RO / EN**.

---

## Stack tehnic

| Domeniu        | Tehnologie |
| -------------- | ---------- |
| Build / dev    | [Vite](https://vite.dev) + React 19 + TypeScript |
| 3D             | [React Three Fiber](https://r3f.docs.pmnd.rs) + [drei](https://github.com/pmndrs/drei) + three.js |
| Animații       | [Framer Motion](https://www.framer.com/motion/) |
| Smooth scroll  | [Lenis](https://github.com/darkroomengineering/lenis) |
| Routing        | [React Router](https://reactrouter.com) v7 |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) (config CSS-first) |
| i18n           | soluție proprie, ușoară (React Context + fișiere de traducere) — fără backend |

Tot conținutul este **static**: fără API, fără bază de date, fără autentificare.
Formularul de contact este prezent vizual și deschide aplicația de email a
vizitatorului (`mailto:`), fiind pregătit pentru o integrare viitoare.

---

## Instalare și rulare

Cerințe: **Node.js 20+**.

```bash
# 1. Instalează dependențele
npm install

# 2. Rulează local (http://localhost:5173)
npm run dev

# 3. Build de producție (în folderul dist/)
npm run build

# 4. Previzualizează build-ul de producție
npm run preview
```

---

## Structura proiectului

```
src/
├─ main.tsx                # punct de intrare (Providers + Router)
├─ App.tsx                 # rutele aplicației
├─ index.css               # design system (Tailwind v4 @theme + utilitare industriale)
├─ i18n/
│  ├─ index.tsx            # context + hook useI18n (RO implicit, persistat în localStorage)
│  ├─ ro.ts                # traduceri RO (sursa principală de copy)
│  └─ en.ts                # traduceri EN (oglindă completă)
├─ content/
│  ├─ services.ts          # definițiile serviciilor (cheie + icon + categorie)
│  └─ portfolio.ts         # lista lucrărilor din portofoliu
├─ lib/
│  └─ useSmoothScroll.ts   # inițializare Lenis
├─ components/
│  ├─ layout/              # Navbar (cu toggle RO/EN), Footer, ScrollToTop
│  ├─ sections/            # PageHero, CTASection (secțiuni reutilizabile)
│  ├─ three/               # Hero3D (Canvas) + SiloModel (siloz procedural)
│  └─ ui/                  # Reveal, SectionHeading, PlaceholderImage, icons, ...
├─ pages/                  # Home, About, Services, Portfolio, Contact, NotFound
└─ assets/portfolio/       # foldere pregătite pentru pozele reale (vezi mai jos)
```

---

## Limbă (RO / EN)

- Conținutul principal este în **română**.
- Comutarea se face din butonul **RO / EN** din navbar (desktop și mobil).
- Alegerea este salvată în `localStorage` și aplicată pe `<html lang>`.
- Tot textul trăiește în `src/i18n/ro.ts` și `src/i18n/en.ts` — pentru a adăuga
  sau modifica un text, editează ambele fișiere (au aceeași structură de chei).

---

## Imagini & portofoliu — placeholder-uri

**Pozele reale nu sunt încă în repo.** Tot site-ul folosește momentan
placeholder-uri stilizate industrial (`<PlaceholderImage>`): gradient de oțel,
grid de tip blueprint, icon de categorie și etichetă tehnică. Fiecare loc unde
va veni o fotografie reală este marcat în cod cu un comentariu `TODO:`.

### Cum adaugi pozele reale (pasul următor)

1. Încarcă originalele în folderul `raw-images/` de la rădăcină (este în
   `.gitignore`, deci nu intră în repo — e doar zona de „depozit” temporar).
2. Optimizează-le și mută-le în structura deja pregătită, pe categorii:

   ```
   src/assets/portfolio/silozuri/
   src/assets/portfolio/hale/
   src/assets/portfolio/ferme/
   src/assets/portfolio/uscatoare/
   ```

3. În `src/content/portfolio.ts`, importă imaginea și setează câmpul `image` al
   item-ului respectiv. Grid-ul și lightbox-ul afișează automat `image` când
   există și revin la placeholder altfel — fără refactorizare.

---

## Date reale completate

Datele firmei sunt deja în `src/i18n/ro.ts` + `src/i18n/en.ts`:

- Experiență: **peste 40 de ani** în inginerie agricolă, **peste 20 de ani** în
  construcția de silozuri; proiecte pe tot teritoriul României și în afara ei
- Sediu social: **Str. Chișinău 54B, Brăila** (apare doar pe pagina Contact)
- Telefon: **0761 503 204** · Email: **ciceronetanase@yahoo.com**
- CUI: **RO33246762** · Reg. Com.: **J09/326/2014**

Rămase de adăugat ulterior (opțional):

- Fotografiile reale ale proiectelor (vezi secțiunea de mai sus)
- Un embed Google Maps real pe pagina Contact (acum e un placeholder stilizat)

> Nu au fost inventate cifre, clienți, certificări sau date financiare reale.

---

## Note de design

- **Paletă:** oțel/antracit (`steel-900/950`) ca bază, argintiu metalic
  (`steel-400`) pentru detaliu tehnic, **galben de siguranță** (`safety-500`,
  `#f5a623`) ca accent cald pentru CTA și evidențieri.
- **Tipografie:** *Space Grotesk* (titluri, caracter tehnic) + *Inter* (text).
- **Texturi industriale:** grid blueprint, oțel periat, benzi de avertizare
  (hazard stripes), vignette și un strat fin de „grain”.
- **Accesibilitate / performanță:** se respectă `prefers-reduced-motion`
  (scroll-ul lin și scena 3D au fallback static); scena 3D se simplifică pe
  mobil; Three.js este încărcat lazy (doar pe pagina Acasă).
