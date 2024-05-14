"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import AvatarSet from "@/sharedComponents/avatar-set"

export default function People() {
  return (
    <div className="flex items-center gap-4">
      <AvatarSet
        avatarArr={[{ url: "https://github.com/shadcn.png", fallback: "UT" }]}
        variant="lmd"
      />
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
