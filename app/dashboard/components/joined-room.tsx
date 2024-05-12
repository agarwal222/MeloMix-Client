import { Card, CardContent } from "@/components/ui/card"
import { Activity } from "lucide-react"
import React from "react"

export default function JoinedRoomCard() {
  const roomJoined = false
  return (
    <div className="hidden lg:block sticky top-28 h-full lg:min-w-[280px]">
      {roomJoined ? (
        "joined"
      ) : (
        <Card className="h-60 bg-transparent flex items-center justify-center border-card-border">
          <CardContent className="flex flex-row gap-2 p-0">
            <Activity size={24} className="text-text-secondary" />
            <p className="text-sm text-text-secondary">Joined Room</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
