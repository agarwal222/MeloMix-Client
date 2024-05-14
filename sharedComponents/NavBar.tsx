import React from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"
import { iconFill } from "@/constants/colors"

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full px-7 lg:px-16 py-5 flex flex-row justify-between items-center bg-background/65 backdrop-blur-lg lg:bg-background lg:backdrop-blur-0">
      <div className="flex flex-row" id="logo">
        <h1 className="text-2xl font-bold">MeloMix</h1>
      </div>

      <div
        className="hidden lg:block w-full max-w-sm lg:max-w-2xl"
        id="searchbar"
      >
        <Input
          placeholder="Search"
          startIcon={Search}
          type="search"
          className="bg-input"
        />
      </div>
      <div className="flex flex-row items-center gap-5" id="right_menu">
        <div className="flex flex-row items-center gap-3" id="icons">
          <Search
            className="lg:hidden"
            fill={iconFill}
            stroke={iconFill}
            size={24}
          />
          <Bell fill={iconFill} stroke={iconFill} size={24} />
        </div>
        <div className="hidden lg:block w-full max-w-2xl" id="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>UT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
