"use client"
import React, { createContext, useContext } from "react"
import { useMediaQuery } from "usehooks-ts"

type GlobuleContext = {
  isMobile: boolean
  isTablet: boolean
} | null

const globuleContext = createContext<GlobuleContext>(null)

export default function GlobuleProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 768px)")

  return (
    <globuleContext.Provider
      value={{
        isMobile,
        isTablet,
      }}
    >
      {children}
    </globuleContext.Provider>
  )
}

export function useGlobule() {
  const context = useContext(globuleContext)

  if (context === null) {
    throw new Error("useGlobule must be used within a GlobuleProvider")
  }

  return context
}
