import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-3">
      <h1 className="text-3xl font-bold">Welcome to MeloMix-Client</h1>
      <Link href="/dashboard" className="hover:underline underline-offset-8">
        Go to Dashboard
      </Link>
    </main>
  )
}
