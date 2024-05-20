"use client"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useGlobule } from "@/context/useGlobule"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "@/components/ui/button"
import githubLogo from "@/public/githubLogo.svg"
import googleLogo from "@/public/googleLogo.svg"
import Image from "next/image"

export default function SigninPopover() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient()
  const { isMobile } = useGlobule()

  if (isMobile && !isAuthenticated && !isLoading) {
    return (
      <Drawer open={!isAuthenticated} dismissible={false}>
        <DrawerContent className="bg-card-border border-0 px-14 pb-7">
          <DrawerHeader>
            <DrawerTitle className="text-text-primary text-3xl font-bold">
              Welcome
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className="text-text-primary text-sm leading-6 text-center mb-4">
            By logging in you accept our{" "}
            <span className="text-link-secondary">Privacy Policy</span>
            and <span className="text-link-secondary"> Terms of Service</span>
          </DrawerDescription>
          <div className="flex flex-col gap-4 mt-2">
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_X_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={githubLogo} alt="github logo" />
                Login with X
              </Button>
            </LoginLink>
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_GOOGLE_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={googleLogo} alt="google logo" />
                Login with Google
              </Button>
            </LoginLink>
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_GITHUB_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={githubLogo} alt="github logo" />
                Login with GitHub
              </Button>
            </LoginLink>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  if (!isAuthenticated && !isLoading) {
    return (
      <Dialog open={!isAuthenticated}>
        <DialogContent
          noClose
          className="bg-card-border border-0 px-10 py-10 w-[370px]"
        >
          <DialogHeader>
            <DialogTitle className="text-text-primary text-3xl font-bold">
              Welcome
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-text-primary text-sm leading-6">
            By logging in you accept our{" "}
            <span className="text-link-secondary">Privacy Policy</span>
            and <span className="text-link-secondary"> Terms of Service</span>
          </DialogDescription>
          <div className="flex flex-col gap-4 mt-2">
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_X_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={githubLogo} alt="github logo" />
                Login with X
              </Button>
            </LoginLink>
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_GOOGLE_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={googleLogo} alt="google logo" />
                Login with Google
              </Button>
            </LoginLink>
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_GITHUB_TOKEN || "",
              }}
            >
              <Button
                className="w-full flex flex-row justify-center items-center gap-3 py-4 h-full"
                variant="secondary"
              >
                <Image src={githubLogo} alt="github logo" />
                Login with GitHub
              </Button>
            </LoginLink>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}
