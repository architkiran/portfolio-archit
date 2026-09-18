"use client"

import { createContext, useContext, useState } from "react"

// `ready` flips to true once the preloader hands off, so the hero can start
// its reveal exactly as the curtain lifts instead of animating underneath it.
const IntroContext = createContext<{ ready: boolean; setReady: (v: boolean) => void }>({
  ready: true,
  setReady: () => {},
})

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  return <IntroContext.Provider value={{ ready, setReady }}>{children}</IntroContext.Provider>
}

export const useIntro = () => useContext(IntroContext)
