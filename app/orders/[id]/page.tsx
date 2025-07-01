"use client";

import { mockOrder } from "@/lib/mockOrderDetails";
import Image from "next/image";
import Link from "next/link";
import { MoreVertical } from "lucide-react"

export default function OrderDetailsPage() {
  const order = mockOrder;
  const totalItems = order.items.reduce(
    (sum, group) => sum + group.products.length,
    0
  );

  return (
    <main className=" px-6 py-12  md:py-10  mx-auto space-y-8">
      {/* Row 1: Back Button */}
      <div>
        <Link
          href="/orders"
          className="text-sm text-green-700 border border-green-300 shadow rounded-md px-4 py-[6px] font-medium hover:bg-green-100 transition"
        >
          ← Back
        </Link>
      </div>

      {/*  Row 2: Title, Notice, status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b pb-6">
        {/* Column 1: Order title */}
        <div className="space-y-1">
          <p className="font-semibold text-black">
            Order #{order.id} <br />
            <span className=" text-gray-400 text-sm">
              placed on {order.placedOn}
            </span>
          </p>
        </div>

        {/* Column 2: Notice message */}
        <p className="text-xs bg-blue-50 text-blue-700 px-4 py-2 rounded-md w-fit">
          Please note all order returns must be within 3 days of delivery
        </p>

        {/* Column 3: Status pill */}
        <div className="flex justify-end">
          <p className="text-sm text-gray-600">
            Overall status:{" "}
            <span className="text-xs font-medium text-yellow-800 bg-[#FFF4D9] px-4 py-[6px] rounded-full">
              {order.status}
            </span>
          </p>
        </div>
      </div>

      {/* Row 3: Summary boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Order Info */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm space-y-3 pr-24">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Order Info</h3>
          <div className="text-sm space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Order ID:</span>
              <span>{order.id}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Placed on:</span>
              <span>{order.placedOn}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Number of items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Mode of Payment:</span>
              <span>{order.paymentMode}</span>
            </div>
          </div>
        </div>

        {/* Billing Summary */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm space-y-3 pr-24">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Billing Summary
          </h3>
          <div className="text-sm space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>{order.summary.subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>VAT:</span>
              <span>{order.summary.vat}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee:</span>
              <span>{order.summary.deliveryFee}</span>
            </div>
            <div className="flex justify-between font-semibold text-green-600">
              <span>Total:</span>
              <span>{order.summary.total}</span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm space-y-3 text-sm pr-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Delivery Information
          </h3>

          <div className="grid grid-cols-2 text-gray-600">
            <span className="whitespace-nowrap">Delivery Method:</span>
            <span className="text-left">{order.delivery.method}</span>
          </div>

          <div className="grid grid-cols-2 text-gray-600">
            <span className="whitespace-nowrap">Home Address:</span>
            <span className="text-left">{order.delivery.address}</span>
          </div>
        </div>
      </div>

      {/* Items Ordered Section */}
      <div className="space-y-6">
        <h2 className="text-base font-semibold text-gray-900">
          Items Ordered ({totalItems})
        </h2>

        {order.items.map((group, i) => (
          <div key={i} className="space-y-4">
            <p className="text-sm text-gray-600 font-medium">
              Seller:{" "}
              <span className="text-green-700 underline">{group.seller}</span>
            </p>

            {group.products.map((product, j) => (
              <div
                key={j}
                className="bg-white border border-gray-200 p-4 rounded-md flex flex-col md:flex-row gap-4 relative"
              >
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Size: {product.size} | Quantity: {product.quantity}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {product.price}
                  </p>
                </div>
                {/* Tracker */}
                <div className="flex-1 grid grid-cols-4 gap-2 text-[10px] text-center text-gray-700">
                  {product.timeline.map((step, index) => {
                    const isCurrent = step.label === product.currentStatus;
                    const isCompleted =
                      product.timeline.findIndex(
                        (s) => s.label === product.currentStatus
                      ) > index;
                    const isUpcoming =
                      product.timeline.findIndex(
                        (s) => s.label === product.currentStatus
                      ) < index;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center relative w-full"
                      >
                        {/* Connecting Line */}
                        {index < product.timeline.length - 1 && (
                          <div className="absolute top-[22px] left-1/2 w-full h-[1px] shadow bg-green-500 z-0" />
                        )}

                        {/* Date */}
                        <span
                          className={`text-[11px] mb-1 ${
                            isCompleted || isCurrent
                              ? "text-gray-800"
                              : "text-gray-400"
                          }`}
                        >
                          {step.date}
                        </span>

                        {/* Dot */}
                        <div
                          className={`w-2 h-2 rounded-full z-10 relative transition
            ${isCurrent ? "bg-green-600 scale-110" : ""}
            ${isCompleted ? "bg-green-400" : ""}
            ${isUpcoming ? "bg-gray-300" : ""}
          `}
                        />

                        {/* Label */}
                        <span
                          className={`mt-1 text-[10px] ${
                            isCurrent
                              ? "font-semibold text-green-700"
                              : isCompleted
                              ? "text-gray-700"
                              : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      
                      
                    );
                  })}
                </div>
                {/* More icon */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
