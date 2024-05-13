"use client"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function People() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>UT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <strong className="text-sm">Utkarsh Agarwal</strong>
        <Button
          variant="link"
          className="p-0 text-text-secondary justify-start h-6 cursor-pointer"
          asChild
        >
          <p className="text-sm text-text-secondary">room name</p>
        </Button>
      </div>
    </div>
  )
}
