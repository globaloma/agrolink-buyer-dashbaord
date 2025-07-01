'use client'
import Link from "next/link";
import { Order } from "@/lib/mockOrders";
import { StatusBadge } from "./StatusBadge";

export default function OrderTable({ orders }: { orders: Order[] }) {
  return (
    <div className="">
      {/* Table */}
      <table className="min-w-full text-sm text-left ">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr className="text-gray-600">
            <th className="px-6 py-4 font-medium rounded-tl-2xl">Order ID</th>
            <th className="px-6 py-4 font-medium">Order Date</th>
            <th className="px-6 py-4 font-medium">Total Amount</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium rounded-tr-2xl">Details</th>
          </tr>
          </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 transition text-gray-600"
            >
              <td className="px-6 py-4 font-medium rounded-tl-md rounded-bl-md">{order.id}</td>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4">{order.amount}</td>
              <td className="px-6 py-4">
                <StatusBadge status={order.status} />
              </td>
              <td className="px-6 py-4 rounded-tr-md rounded-br-md">
                <Link
                  href={`/orders/${order.id}`}
                  className="text-green-700 text-sm hover:underline"
                >
                  See details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="px-6 py-4 text-xs text-gray-500 border-t bg-white">
        Showing {orders.length} of 132 orders
      </div>
    </div>
  );
}
