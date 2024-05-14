import { iconFill } from "@/constants/colors"
import { Activity, DiamondPlus, Home, Radio, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

export default function Footer() {
  return (
    <footer className="lg:hidden sticky bottom-0 bg-background/65 backdrop-blur-lg text-text-secondary">
      <div className="container flex flex-row items-center justify-between py-4">
        <Home size={24} stroke={iconFill} />
        <Radio size={24} stroke={iconFill} />
        <DiamondPlus size={24} stroke={iconFill} />
        <Activity size={24} stroke={iconFill} />
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>UT</AvatarFallback>
        </Avatar>
      </div>
    </footer>
  )
}
