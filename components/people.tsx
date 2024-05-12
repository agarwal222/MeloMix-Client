"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

export default function People() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>UT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <strong className="text-sm">Utkarsh Agarwal</strong>
        <p className="text-sm text-text-secondary">room name</p>
      </div>
    </div>
  )
}
