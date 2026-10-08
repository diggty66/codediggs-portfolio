import { useEffect, useState } from 'react'
import {
  detectInitialLanguage,
  persistLanguage,
  translateText,
  type Language,
} from './i18n'

type AttributeName = 'aria-label' | 'alt' | 'title'

const textOriginals = new WeakMap<Text, string>()
const attributeOriginals = new WeakMap<Element, Partial<Record<AttributeName, string>>>()
const translatedAttributes: AttributeName[] = ['aria-label', 'alt', 'title']

const localizedValue = (language: Language, original: string) =>
  language === 'vi' ? translateText(language, original) : original

const translateTextNode = (node: Text, language: Language) => {
  const current = node.nodeValue ?? ''
  const previousOriginal = textOriginals.get(node)

  if (previousOriginal === undefined) {
    textOriginals.set(node, current)
  } else {
    const previousVietnamese = translateText('vi', previousOriginal)
    if (current !== previousOriginal && current !== previousVietnamese) {
      textOriginals.set(node, current)
    }
  }

  const original = textOriginals.get(node) ?? current
  const next = localizedValue(language, original)
  if (current !== next) node.nodeValue = next
}

const translateAttributes = (element: Element, language: Language) => {
  const originals = attributeOriginals.get(element) ?? {}

  translatedAttributes.forEach((attribute) => {
    const current = element.getAttribute(attribute)
    if (current === null) return

    const previousOriginal = originals[attribute]
    if (previousOriginal === undefined) {
      originals[attribute] = current
    } else {
      const previousVietnamese = translateText('vi', previousOriginal)
      if (current !== previousOriginal && current !== previousVietnamese) {
        originals[attribute] = current
      }
    }

    const original = originals[attribute] ?? current
    const next = localizedValue(language, original)
    if (current !== next) element.setAttribute(attribute, next)
  })

  attributeOriginals.set(element, originals)
}

const translateSubtree = (root: Node, language: Language) => {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, language)
    return
  }

  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateAttributes(root as Element, language)
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  )

  let node = walker.nextNode()
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, language)
    if (node.nodeType === Node.ELEMENT_NODE) translateAttributes(node as Element, language)
    node = walker.nextNode()
  }
}

const updatePageMetadata = (language: Language) => {
  document.documentElement.lang = language
  document.title =
    language === 'vi'
      ? 'CodeDiggs | Phần mềm, Kỹ thuật & Giáo dục'
      : 'CodeDiggs | Software, Engineering & Education'

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content =
      language === 'vi'
        ? 'CodeDiggs là hồ sơ đa lĩnh vực về kỹ thuật phần mềm, giáo dục kỹ thuật, chẩn đoán ô tô và nghiên cứu độc lập.'
        : 'CodeDiggs is a multidisciplinary portfolio exploring software engineering, technical education, automotive diagnostics, and independent research.'
  }
}

export default function LanguageController() {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage)

  useEffect(() => {
    persistLanguage(language)
    updatePageMetadata(language)

    const apply = (root: Node = document.body) => translateSubtree(root, language)
    const frame = window.requestAnimationFrame(() => apply())

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          apply(mutation.target)
          return
        }

        if (mutation.type === 'attributes') {
          apply(mutation.target)
          return
        }

        mutation.addedNodes.forEach((node) => apply(node))
      })
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [language])

  const chooseLanguage = (next: Language) => {
    setLanguage(next)
    persistLanguage(next)

    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState({}, '', url)
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[90] flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-900/95 p-1 shadow-2xl backdrop-blur"
      role="group"
      aria-label={language === 'vi' ? 'Ngôn ngữ trang web' : 'Site language'}
    >
      <button
        type="button"
        onClick={() => chooseLanguage('en')}
        aria-pressed={language === 'en'}
        title="English"
        className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
          language === 'en'
            ? 'bg-cyan-400 text-slate-950'
            : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-300'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => chooseLanguage('vi')}
        aria-pressed={language === 'vi'}
        title="Tiếng Việt"
        className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
          language === 'vi'
            ? 'bg-cyan-400 text-slate-950'
            : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-300'
        }`}
      >
        VI
      </button>
    </div>
  )
}
