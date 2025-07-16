import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "IZI HOUSE",
  description: "Quản lý thông tin hồ sơ cá nhân của bạn",
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}