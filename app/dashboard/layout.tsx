import React from "react"
import Peoples from "./components/peoples"
import JoinedRoomCard from "./components/joined-room"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-row lg:mx-14 pt-4 xl:mx-auto">
      <Peoples />
      {children}
      <JoinedRoomCard />
    </div>
  )
}
