import { useEffect, useState } from 'react'

const storageKey = 'portfolio-inverted-colors'

export default function ColorToggle() {
  const [isInverted, setIsInverted] = useState(false)

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(storageKey) === 'true'
    setIsInverted(savedPreference)
    document.documentElement.classList.toggle('color-inverted', savedPreference)
  }, [])

  const toggleColors = () => {
    setIsInverted((currentValue) => {
      const nextValue = !currentValue
      document.documentElement.classList.toggle('color-inverted', nextValue)
      window.localStorage.setItem(storageKey, String(nextValue))
      return nextValue
    })
  }

  return (
    <button
      type="button"
      onClick={toggleColors}
      aria-label={isInverted ? 'Use light color mode' : 'Use inverted color mode'}
      title={isInverted ? 'Use light color mode' : 'Invert black and white'}
      className={`grid size-12 self-end place-items-center rounded-full border bg-bg p-1.5 shadow-sm transition-transform duration-200 hover:scale-110 focus-visible:outline-orange sm:size-14 sm:self-auto ${isInverted ? 'border-orange' : 'border-rule'}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/${isInverted ? 'duckW.png' : 'duckie.png'}`}
        alt=""
        className="size-full rounded-full object-cover"
      />
    </button>
  )
}
