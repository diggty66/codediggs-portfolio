import { useEffect, useRef, useState } from 'react'
import type { Language } from './i18n'

type LanguageMenuProps = {
  language: Language
  onChoose: (language: Language) => void
}

const options: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' },
]

export default function LanguageMenu({ language, onChoose }: LanguageMenuProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const chooseLanguage = (next: Language) => {
    onChoose(next)
    setOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className="fixed right-[8rem] top-3 z-[60] sm:right-[8.5rem] xl:right-[5.5rem]"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={language === 'vi' ? 'Chọn ngôn ngữ' : 'Select language'}
        className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/95 px-3 text-sm font-medium text-slate-200 shadow-md backdrop-blur transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
      >
        <span aria-hidden="true" className="text-base">🌐</span>
        <span className="hidden sm:inline">{language === 'vi' ? 'Ngôn ngữ' : 'Language'}</span>
        <span
          aria-hidden="true"
          className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={language === 'vi' ? 'Chọn ngôn ngữ' : 'Select language'}
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 p-1.5 shadow-2xl"
        >
          {options.map((option) => {
            const selected = option.value === language

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => chooseLanguage(option.value)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  selected
                    ? 'bg-cyan-400/10 font-semibold text-cyan-300'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-cyan-300'
                }`}
              >
                <span>{option.label}</span>
                {selected && <span aria-hidden="true">✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
