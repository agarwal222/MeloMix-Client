import React from "react"
import Peoples from "./components/peoples"
import { JoinedRoomCardDesktop } from "./components/joined-room"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-row pt-4 xl:mx-auto">
      <Peoples />
      {children}
      <JoinedRoomCardDesktop />
    </div>
  )
}
