import { Card, CardContent } from "@/components/ui/card"
import { Activity } from "lucide-react"
import React from "react"

export default function JoinedRoomCard() {
  const roomJoined = false
  return (
    <div className="min-w-[280px]">
      {roomJoined ? (
        "joined"
      ) : (
        <Card className="h-60 bg-transparent flex items-center justify-center border-card-border">
          <CardContent className="flex flex-row gap-2 p-0">
            <Activity size={24} className="text-gray-500" />
            <p className="text-sm text-gray-500">Joined Room</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
