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
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

export default function SigninPopover() {
  const { isAuthenticated } = useKindeBrowserClient()
  const { isMobile } = useGlobule()

  if (isMobile) {
    return (
      <Drawer open={!isAuthenticated} dismissible={false}>
        <DrawerContent className="bg-card-border border-0">
          <LoginLink
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_KINDE_X_TOKEN || "",
            }}
          >
            Login with X
          </LoginLink>
          <LoginLink
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_KINDE_GOOGLE_TOKEN || "",
            }}
          >
            Login with Google
          </LoginLink>
          <LoginLink
            authUrlParams={{
              connection_id: process.env.NEXT_PUBLIC_KINDE_GITHUB_TOKEN || "",
            }}
          >
            Login with GitHub
          </LoginLink>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={!isAuthenticated}>
      <DialogContent className="bg-card-border border-0">
        <LoginLink
          authUrlParams={{
            connection_id: process.env.NEXT_PUBLIC_KINDE_X_TOKEN || "",
          }}
        >
          Login with X
        </LoginLink>
        <LoginLink
          authUrlParams={{
            connection_id: process.env.NEXT_PUBLIC_KINDE_GOOGLE_TOKEN || "",
          }}
        >
          Login with Google
        </LoginLink>
        <LoginLink
          authUrlParams={{
            connection_id: process.env.NEXT_PUBLIC_KINDE_GITHUB_TOKEN || "",
          }}
        >
          Login with GitHub
        </LoginLink>
      </DialogContent>
    </Dialog>
  )
}
