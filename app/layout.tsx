
import "../app/globals.css"
import { Inter } from "next/font/google"
import Sidebar from "../components/layouts/Sidebar"
import Topbar from "../components/layouts/Topbar"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Agrolink Dashboard",
  description: "Manage Orders",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* App-wide Shell Layout */}
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Topbar  />
            <div className=" bg-gray-100">
              <main className="p-6 m-6 bg-white rounded-2xl shadow ">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}