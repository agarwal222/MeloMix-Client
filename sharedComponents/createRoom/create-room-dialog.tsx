"use client"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useGlobule } from "@/context/useGlobule"
import CreateRoomForm from "./create-room-form"

type CreateRoomDialogProps = {
  button: React.ReactNode
}

export default function CreateRoomDialog(dialogProps: CreateRoomDialogProps) {
  const { button } = dialogProps
  const [open, setOpen] = React.useState(false)

  const { isMobile } = useGlobule()

  function handleClose() {
    setOpen(false)
  }

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen} {...dialogProps}>
        <DrawerTrigger asChild>{button}</DrawerTrigger>
        <DrawerContent className="bg-card-border border-0">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-text-primary">
              Create a room
            </DrawerTitle>
            <DrawerDescription className="text-text-secondary">
              Rooms are where you can listen to music together with friends,
              chat and have fun.
            </DrawerDescription>
          </DrawerHeader>
          <CreateRoomForm onClose={handleClose} />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} {...dialogProps}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="bg-card-border border-0">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-text-primary">
            Create a room
          </DialogTitle>
          <DialogDescription className="text-text-secondary">
            Rooms are where you can listen to music together with friends, chat
            and have fun.
          </DialogDescription>
        </DialogHeader>
        <CreateRoomForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
