import { iconFill } from "@/constants/colors"
import { Activity, DiamondPlus, Home, Radio } from "lucide-react"
import React from "react"
import AvatarSet from "./avatar-set"

export default function Footer() {
  return (
    <footer className="lg:hidden sticky bottom-0 bg-background/65 backdrop-blur-lg text-text-secondary">
      <div className="container flex flex-row items-center justify-between py-4">
        <Home size={24} stroke={iconFill} />
        <Radio size={24} stroke={iconFill} />
        <DiamondPlus size={24} stroke={iconFill} />
        <Activity size={24} stroke={iconFill} />
        <AvatarSet
          avatarArr={[{ url: "https://github.com/shadcn.png", fallback: "UT" }]}
          variant="md"
        />
      </div>
    </footer>
  )
}
