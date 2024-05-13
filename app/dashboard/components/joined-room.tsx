import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Activity, AudioWaveform, Dot, Headphones } from "lucide-react"
import React from "react"

export function JoinedRoomCardDesktop() {
  const roomJoined = true
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

export function JoinedRoomCardMobile() {
  const roomJoined = true
  return (
    roomJoined && (
      <div className="block mb-4 lg:hidden">
        <Card className="bg-card flex flex-col justify-center border-text-secondary py-3 px-3 shadow-lg shadow-text-primary/15 border">
          <CardHeader className="flex flex-row justify-between items-start py-2">
            <span className="flex flex-row gap-2 items-center">
              <AudioWaveform size={18} className="text-text-primary" />
              <CardTitle className="text-2xl text-text-primary">
                Room Name
              </CardTitle>
            </span>
            <span className="flex flex-row gap-1 items-center text-text-primary">
              <Dot size={28} />
              <strong>25k</strong>
            </span>
          </CardHeader>
          <CardContent className="flex flex-row items-center gap-3 pb-6 pt-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>UT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <CardDescription className="text-sm text-text-secondary">
                Hosted by
              </CardDescription>
              <strong className="text-sm">Utkarsh Agarwal</strong>
            </div>
          </CardContent>
          <CardFooter className="py-2 px-4">
            <Badge variant="secondary" className="flex flex-row gap-2">
              <Headphones size={18} />
              When i see you
            </Badge>
          </CardFooter>
        </Card>
      </div>
    )
  )
}
