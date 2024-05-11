import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { AudioWaveform, Dot, Headphones } from "lucide-react"
import React from "react"

export default function RoomCard() {
  return (
    <Card className="bg-card flex flex-col justify-center border-card-border">
      <CardHeader className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-2 items-center">
          <AudioWaveform size={18} />
          <CardTitle className="text-sm">Room Name</CardTitle>
        </span>
        <span className="flex flex-row gap-1 items-center">
          <Dot size={28} />
          25k
        </span>
      </CardHeader>
      <CardContent className="flex flex-row items-center gap-2">
        <Avatar className="w-4 h-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>UT</AvatarFallback>
        </Avatar>
        <CardDescription>Utkarsh Agarwal, Satoshi, Shadcn...</CardDescription>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary" className="flex flex-row gap-2">
          <Headphones size={18} />
          When i see you
        </Badge>
      </CardFooter>
    </Card>
  )
}
