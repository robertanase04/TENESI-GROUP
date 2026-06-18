import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Fades a page in on mount for a smooth route transition. */
export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
