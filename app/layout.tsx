import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Toaster } from 'sonner'

const mulish = Mulish({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Health Fortune',
  description: 'Aplicativo Web para gestão de finanças | ReggiDev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  )
}
