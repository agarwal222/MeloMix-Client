"use client"
import React from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"
import { useGlobule } from "@/context/useGlobule"

export default function NavBar() {
  const { isMobile } = useGlobule()
  return (
    <nav className="w-full px-16 py-2 my-2 flex flex-row justify-between items-center">
      <div className="flex flex-row" id="logo">
        <h1 className="text-2xl font-bold">MeloMix</h1>
      </div>
      <div className="w-full max-w-2xl" id="searchbar">
        {!isMobile && (
          <Input placeholder="Search" startIcon={Search} type="search" />
        )}
      </div>
      <div className="flex flex-row items-center gap-5" id="right_menu">
        <div className="flex flex-row items-center gap-3" id="icons">
          {isMobile && <Search size={18} />}
          <Bell size={18} />
        </div>
        <div className="w-full max-w-2xl" id="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>UT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
