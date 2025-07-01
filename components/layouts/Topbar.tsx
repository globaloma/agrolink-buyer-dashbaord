
"use client"

import Image from 'next/image'


export default function Topbar() {
  return (
    <div className="flex justify-end items-center px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-4">
         {/* bell and dot */}
        <div className="relative w-[24px] h-[24px]">
          <Image
            src="/images/notification-02.png"
            alt="Notifications"
            fill
            className="object-contain"
          />
          <Image
            src="/images/dot.png"
            alt="Notification Dot"
            width={8}
            height={8}
            className="absolute -top-[-2px] -right-[-1.8px]"
          />
        </div>

        {/* Avatar and name */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/Image-72.png"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800">Priscilla Rumero</span>
        </div>
      </div>
    </div>
  )
}




// "use client"
// import Image from 'next/image'

// export default function Topbar({ title }: { title: string }) {
//   return (
//     <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
//       <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

//       {/* Right side: bell and user avatar */}
//       <div className="flex items-center gap-4">
//         <div className="relative w-[24px] h-[24px]">
//           <Image src="/images/notification-02.png" alt="Notifications" fill className="object-contain" />
//           <Image src="/images/dot.png" alt="Dot" width={8} height={8} className="absolute -top-[2px] -right-[2px]" />
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer">
//           <Image src="/images/Image-72.png" alt="User avatar" width={32} height={32} className="rounded-full object-cover" />
//           <span className="text-sm font-medium text-gray-800">Priscilla Romero</span>
//         </div>
//       </div>
//     </div>
//   )
// }