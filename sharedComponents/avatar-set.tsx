import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

interface AvatarSetProps {
  variant?: Variant
  avatarArr: AvatarArr[]
}

type Variant = "lg" | "md" | "sm"

type AvatarArr = {
  url: string
  fallback: string
}

export default function AvatarSet({ variant, avatarArr }: AvatarSetProps) {
  const w = variant === "lg" ? 80 : variant === "md" ? 40 : 20
  const h = variant === "lg" ? 80 : variant === "md" ? 40 : 20
  if (avatarArr.length === 1) {
    return (
      <Avatar
        className="w-5 h-5 rounded-full shadow-md"
        style={{ height: h, width: w }}
      >
        <AvatarImage src={avatarArr[0].url} alt={avatarArr[0].fallback} />
        <AvatarFallback>{avatarArr[0].fallback}</AvatarFallback>
      </Avatar>
    )
  }
  return (
    <div className="flex flex-row-reverse gap-2 items-center justify-center">
      {avatarArr.map((avatar, i) => (
        <Avatar
          key={i}
          className={`w-5 h-5 rounded-full ${
            i === avatarArr.length - 1 ? "" : "-ml-4"
          } shadow-md border-2 border-card-border`}
          style={{ height: h, width: w }}
        >
          <AvatarImage src={avatar.url} alt={avatar.fallback} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
