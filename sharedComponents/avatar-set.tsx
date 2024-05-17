import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarSetProps {
  variant?: Variant
  avatarArr: AvatarArr[]
  className?: string
}

type Variant = "xl" | "lg" | "lmd" | "md" | "sm"

type AvatarArr = {
  url: string
  fallback: string
}

export default function AvatarSet({
  variant,
  avatarArr,
  className,
}: AvatarSetProps) {
  const w =
    variant === "xl"
      ? 80
      : variant === "lg"
      ? 50
      : variant === "lmd"
      ? 40
      : variant === "md"
      ? 30
      : 20
  const h =
    variant === "xl"
      ? 80
      : variant === "lg"
      ? 50
      : variant === "lmd"
      ? 40
      : variant === "md"
      ? 30
      : 20
  if (avatarArr.length === 1) {
    return (
      <Avatar
        className={cn("w-5 h-5 rounded-full shadow-md", className)}
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
          className={cn(
            `w-5 h-5 rounded-full ${
              i === avatarArr.length - 1 ? "" : "-ml-4"
            } shadow-md border-2 border-card-border`,
            className
          )}
          style={{ height: h, width: w }}
        >
          <AvatarImage src={avatar.url} alt={avatar.fallback} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
