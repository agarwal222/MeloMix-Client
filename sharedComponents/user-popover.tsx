import React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Bug, CircleHelp, Settings, UserRound } from "lucide-react"
import Link from "next/link"

type UserPopoverProps = {
  trigger: React.ReactNode
}

export default function UserPopover({ trigger }: UserPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={15}
        className="bg-card-border border border-card-border rounded-lg w-48 p-0 flex flex-col"
      >
        <div className="flex flex-col gap-6 justify-start text-text-primary text-sm p-4 mb-2">
          <Button
            className="gap-2.5 justify-start text-text-primary h-4 focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="link"
          >
            <UserRound size={20} />
            <Link href="/dashboard/profile">Profile</Link>
          </Button>
          <Button
            className="gap-2.5 justify-start text-text-primary h-4 focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="link"
          >
            <Settings size={20} />
            <Link href="/dashboard/profile">Settings</Link>
          </Button>
          <Button
            className="gap-2.5 justify-start text-text-primary h-4 focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="link"
          >
            <CircleHelp size={20} />
            <Link href="/dashboard/profile">Help</Link>
          </Button>
          <Button
            className="gap-2.5 justify-start text-text-primary h-4 focus-visible:ring-0 focus-visible:ring-offset-0"
            variant="link"
          >
            <Bug size={20} />
            <Link href="/dashboard/profile">Report a bug</Link>
          </Button>
        </div>
        <Button
          className="gap-2.5 justify-start text-text-primary focus-visible:ring-0 focus-visible:ring-offset-0 bg-card-foreground"
          variant="link"
        >
          <Link className="p-4" href="/dashboard/profile">
            Log Out
          </Link>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
