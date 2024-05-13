import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

interface AvatarSetProps {
  height?: number
  width?: number
  avatarArr: AvatarArr[]
}

type AvatarArr = {
  url: string
  fallback: string
}

export default function AvatarSet({
  height,
  width,
  avatarArr,
}: AvatarSetProps) {
  const w = width ? width * 4 : 16
  const h = height ? height * 4 : 16
  if (avatarArr.length === 1) {
    return (
      <Avatar
        className="w-4 h-4 rounded-full shadow-md"
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
          className={`w-4 h-4 rounded-full ${
            i === avatarArr.length - 1 ? "" : "-ml-3.5"
          } shadow-md`}
          style={{ height: h, width: w }}
        >
          <AvatarImage src={avatar.url} alt={avatar.fallback} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
