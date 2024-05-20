import React from "react"
import dynamic from "next/dynamic"
import Peoples from "./components/peoples"
import { JoinedRoomCardDesktop } from "./components/joined-room"
const SigninPopover = dynamic(
  () => import("@/sharedComponents/signin-popover"),
  { ssr: false }
)

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-row pt-4 xl:mx-auto">
      <SigninPopover />
      <Peoples />
      {children}
      <JoinedRoomCardDesktop />
    </div>
  )
}
