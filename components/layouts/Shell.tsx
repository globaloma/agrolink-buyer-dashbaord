
import './globals.css'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agrolink Admin',
  description: 'Orders dashboard for Agrolink',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50">
            <Topbar />
            <main className="p-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}