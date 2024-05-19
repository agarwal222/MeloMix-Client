import React from "react"
import { Button } from "@/components/ui/button"
import { DiamondPlus } from "lucide-react"
import RoomCard from "./components/room-card"
import { JoinedRoomCardMobile } from "./components/joined-room"
import CreateRoomDialog from "@/sharedComponents/createRoom/create-room-dialog"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Dashboard() {
  return (
    <div className="grow shrink-1 md:px-7 lx:px-14">
      <div className="hidden sticky bg-background z-50 top-[81px] py-5 md:flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">For You</h2>
        <CreateRoomDialog
          button={
            <Button className="gap-2">
              <DiamondPlus size={20} />
              Create Room
            </Button>
          }
        />
      </div>
      <div className="flex flex-col my-9 gap-4">
        <JoinedRoomCardMobile />
        {"abcdefghijklmopq".split("").map((p, i) => (
          <RoomCard key={i} />
        ))}
      </div>
    </div>
  )
}
