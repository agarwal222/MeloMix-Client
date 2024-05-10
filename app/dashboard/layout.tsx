import React from "react"
import Peoples from "./components/peoples"
import JoinedRoomCard from "./components/joined-room"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row mx-14 mt-12 gap-24">
      <Peoples />
      {children}
      <JoinedRoomCard />
    </div>
  )
}
