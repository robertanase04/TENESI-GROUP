import { useEffect } from 'react'

/**
 * Updates the document <title> and meta description as the user navigates the
 * SPA. The static index.html already carries the crawler-facing tags (social
 * scrapers don't run JS); this is for the browser tab, bookmarks and history.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (!description) return
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const prev = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', description)
    return () => {
      if (meta && prev !== null) meta.setAttribute('content', prev)
    }
  }, [description])
}
