/**
 * Service definitions. Text comes from the i18n dictionary (services.list.*);
 * here we keep the stable structure: key, icon and category mapping.
 */
import {
  IconSilo,
  IconHall,
  IconFarm,
  IconDryer,
  IconTurnkey,
} from '../components/ui/icons'
import type { PortfolioCategory } from './portfolio'

export type ServiceKey = 'silos' | 'halls' | 'farms' | 'dryers' | 'turnkey'
/** The subset of services that also appear on the home "what we do" grid. */
export type HomeServiceKey = 'silos' | 'halls' | 'farms' | 'dryers'

export interface ServiceDef {
  key: ServiceKey
  icon: typeof IconSilo
  /** Linked portfolio category, when applicable */
  category?: PortfolioCategory
  /** Two-digit index shown as a technical label */
  index: string
}

export const services: ServiceDef[] = [
  { key: 'silos', icon: IconSilo, category: 'silozuri', index: '01' },
  { key: 'halls', icon: IconHall, category: 'hale', index: '02' },
  { key: 'farms', icon: IconFarm, category: 'ferme', index: '03' },
  { key: 'dryers', icon: IconDryer, category: 'uscatoare', index: '04' },
  { key: 'turnkey', icon: IconTurnkey, index: '05' },
]

/** The four headline activities shown on the home "what we do" grid. */
export const homeServices: HomeServiceKey[] = ['silos', 'halls', 'farms', 'dryers']
