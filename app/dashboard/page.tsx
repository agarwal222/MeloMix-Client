import { Button } from "@/components/ui/button"
import { DiamondPlus } from "lucide-react"
import React from "react"
import RoomCard from "./components/room-card"

export default function Dashboard() {
  return (
    <div className="grow px-7 lg:px-14">
      <div className="sticky bg-background z-50 top-[81px] py-5 flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">For You</h2>
        <Button className="gap-2">
          <DiamondPlus size={20} />
          Create Room
        </Button>
      </div>
      <div className="flex flex-col my-9 gap-4">
        {"abcdefghijklmopq".split("").map((p, i) => (
          <RoomCard key={i} />
        ))}
      </div>
    </div>
  )
}
