// components/orders/StatusBadge.tsx
import { cn } from "@/lib/utils"

export function StatusBadge({ status }: { status: string }) {
  const classes = {
    Delivered: "bg-green-100 text-green-700 py-2 px-3",
    Pending: "bg-yellow-100 text-yellow-700 py-2 px-3",
    Canceled: "bg-red-100 text-red-700 py-2 px-3",
  }

  return (
    <span
      className={cn(
        "text-xs font-medium px-3 py-1 rounded-full",
        classes[status as keyof typeof classes]
      )}
    >
      {status}
    </span>
  )
}