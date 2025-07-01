// // components/layout/Sidebar.tsx
// "use client"

// import Link from 'next/link'
// import { ClipboardList, MessageSquare, User, ShoppingBag, CircleUserRound, LogOut } from 'lucide-react'

// const menuItems = [
//   { name: 'Orders', icon: ClipboardList, href: '/orders' },
//   { name: 'Hedging Agreements', icon: ShoppingBag, href: '#' },
//   { name: 'Inbox', icon: MessageSquare, href: '#' },
//   { name: 'Pending Reviews', icon: User, href: '#' },
//   { name: 'Corporate Buying', icon: ShoppingBag, href: '#' },
//   { name: 'Profile', icon: CircleUserRound, href: '#' },
//   { name: 'Support', icon: MessageSquare, href: '#' },
//   { name: 'Log Out', icon: LogOut, href: '#' },
// ]

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white border-r h-full flex flex-col justify-between px-4 py-6">
//       <div>
//         {/* Logo */}
//         <div className="text-green-600 text-xl font-bold mb-10">AGRO<span className="text-black">LINK</span></div>
//         <div>
          
//         </div>

//         {/* Nav */}
//         <nav className="space-y-1">
//           {menuItems.map(({ name, icon: Icon, href }) => (
//             <Link href={href} key={name} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-700 text-sm">
//               <Icon className="w-5 h-5 text-green-600" />
//               {name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div className="bg-green-50 p-4 rounded mt-10 text-xs text-gray-700">
//         <p className="mb-2 font-medium">Become an investor 🚀</p>
//         <p className="mb-3">Support farmers and unlock exclusive investment opps.</p>
//         <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">Upgrade To Investor</button>
//       </div>
//     </aside>
//   )
// }


"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ClipboardList,
  MessageSquare,
  User,
  ShoppingBag,
  CircleUserRound,
  LogOut,
} from "lucide-react"

const menuItems = [
  { name: "Orders", icon: ClipboardList, href: "/orders" },
  { name: "Hedging Agreements", icon: ShoppingBag, href: "#" },
  { name: "Inbox", icon: MessageSquare, href: "#" },
  { name: "Pending Reviews", icon: User, href: "#" },
  { name: "Corporate Buying", icon: ShoppingBag, href: "#" },
  { name: "Profile", icon: CircleUserRound, href: "#" },
  { name: "Support", icon: MessageSquare, href: "#" },
  { name: "Log Out", icon: LogOut, href: "#" },
]

export default function Sidebar() {
  return (
    <aside className="w-70 bg-white border-r h-full flex flex-col justify-between px-8 py-6">
      <div>
        {/* Logo section */}
        <div className="mb-8 pl-2 justify-center">
          <Image
            src="/images/logo.svg"
            width={120}
            height={120}
            alt="Agrolink Logo"
            className="object-contain"
          />
        </div>
        <nav className="space-y-2">
            {menuItems.map(({ name, icon: Icon, href }) => (
              <Link href={href} key={name}>
                <div
                  className="flex items-center gap-4 p-2  transition-all duration-200 border border-transparent
                  hover:bg-green-50 hover:text-green-600  hover:border-green-300 hover:text-bold  group"
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-green-600" />
                  <span className="text-sm text-gray-500 group-hover:text-green-600 font-medium">
                    {name}
                  </span>
                </div>
              </Link>
            ))}
        </nav>
      </div>

      {/* Investor CTA */}
      <div className="bg-[#FFF4D9] p-4 rounded mt-10 text-xs text-gray-700">
        <p className="mb-2 font-medium">Become an investor 🚀</p>
        <p className="mb-3">
          Support farmers and unlock exclusive investment opps.
        </p>
        <button className="bg-black text-white px-3 py-1 rounded text-xs">
          Upgrade To Investor
        </button>
      </div>
    </aside>
  )
}