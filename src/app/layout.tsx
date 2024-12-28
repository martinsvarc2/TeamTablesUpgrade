import type { Metadata } from 'next'
import "@/styles/globals.css" // Updated path using alias
import { Providers } from "@/components/providers" // We'll create this for theme support

export const metadata: Metadata = {
  title: "TeamTables",
  description: "Performance tracking dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
