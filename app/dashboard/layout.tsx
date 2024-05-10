import React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-screen mx-7 mt-7">
      <div className="flex flex-col w-64">MeloMix</div>
      {children}
    </div>
  )
}
