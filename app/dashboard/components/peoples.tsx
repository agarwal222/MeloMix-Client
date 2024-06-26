import People from "@/components/people"
import Link from "next/link"
import React from "react"

export default function Peoples() {
  return (
    <aside className="hidden lg:sticky h-full top-28 xl:flex flex-col gap-4 min-w-[300px]">
      <h1 className="text-2xl font-bold">Peoples</h1>
      {"peoples".split("").map((p, i) => (
        <People key={i} />
      ))}
      <Link href="/dashboard/peoples">See all</Link>
    </aside>
  )
}
