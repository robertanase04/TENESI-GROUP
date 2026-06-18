/**
 * Portfolio items.
 *
 * IMAGES ARE NOT YET AVAILABLE. For this first round every item uses a
 * styled CSS placeholder (see <PlaceholderImage>). When real photos are
 * uploaded to `raw-images/` they will be optimised and placed into:
 *
 *   src/assets/portfolio/silozuri/
 *   src/assets/portfolio/hale/
 *   src/assets/portfolio/ferme/
 *   src/assets/portfolio/uscatoare/
 *
 * To wire a real image, import it and set the item's `image` field. The
 * grid/lightbox already render `image` when present and fall back to the
 * placeholder otherwise — no refactor needed.
 */

export type PortfolioCategory = 'silozuri' | 'hale' | 'ferme' | 'uscatoare'

export interface PortfolioItem {
  id: string
  category: PortfolioCategory
  /** RO + EN short captions (kept inline as they describe a specific work) */
  caption: { ro: string; en: string }
  /** Technical spec line shown on hover / in lightbox */
  spec: string
  /** Real image src — leave undefined to use the styled placeholder. */
  // TODO: imagine reală — va fi adăugată din raw-images/ în folderul aferent categoriei
  image?: string
  /** Loose aspect ratio hint for the masonry layout */
  tall?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'silo-01',
    category: 'silozuri',
    caption: { ro: 'Siloz cu fund plan — centru de colectare', en: 'Flat-bottom silo — collection centre' },
    spec: 'S350GD · Ø[—] m · [—] t',
    tall: true,
  },
  {
    id: 'silo-02',
    category: 'silozuri',
    caption: { ro: 'Baterie de silozuri — depozitare fermă', en: 'Silo battery — farm storage' },
    spec: 'Fund plan · aerare · senzori',
  },
  {
    id: 'silo-03',
    category: 'silozuri',
    caption: { ro: 'Siloz cu bază conică', en: 'Conical-base silo' },
    spec: 'Bază conică · golire gravitațională',
  },
  {
    id: 'silo-04',
    category: 'silozuri',
    caption: { ro: 'Platforme și scări de acces', en: 'Access platforms and stairs' },
    spec: 'EN ISO 14122',
    tall: true,
  },
  {
    id: 'hala-01',
    category: 'hale',
    caption: { ro: 'Hală de depozitare', en: 'Storage hall' },
    spec: 'Cadre metalice · învelitoare trapezoidală',
    tall: true,
  },
  {
    id: 'hala-02',
    category: 'hale',
    caption: { ro: 'Hală logistică', en: 'Logistics hall' },
    spec: 'Deschidere mare · platformă betonată',
  },
  {
    id: 'hala-03',
    category: 'hale',
    caption: { ro: 'Structură metalică de producție', en: 'Production steel structure' },
    spec: 'EUROCODE · panouri sandwich',
  },
  {
    id: 'ferma-01',
    category: 'ferme',
    caption: { ro: 'Adăpost zootehnic', en: 'Livestock shelter' },
    spec: 'Structură metalică · ventilație naturală',
    tall: true,
  },
  {
    id: 'ferma-02',
    category: 'ferme',
    caption: { ro: 'Grajd compartimentat', en: 'Compartmented barn' },
    spec: 'Pardoseli ranforsate',
  },
  {
    id: 'ferma-03',
    category: 'ferme',
    caption: { ro: 'Îngrășătorie', en: 'Fattening unit' },
    spec: 'Flux tehnologic optimizat',
  },
  {
    id: 'uscator-01',
    category: 'uscatoare',
    caption: { ro: 'Instalație de uscare cereale', en: 'Grain drying plant' },
    spec: 'Recuperare de căldură',
    tall: true,
  },
  {
    id: 'uscator-02',
    category: 'uscatoare',
    caption: { ro: 'Uscător integrat cu transport', en: 'Dryer integrated with conveying' },
    spec: 'Elevatoare · transportoare',
  },
]
