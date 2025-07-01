
import { orders } from "@/lib/mockOrders";
import OrderTable from "../../components/orders/OrderTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function OrdersPage() {
  return (
    <section className="space-y-12">
      <div className="flex justify-between items-center mb-3 ">
        <div className="relative w-90 bg-gray-50">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <Input
            placeholder="Search with Order ID"
            className="pl-10 w-full"
          />
      </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">Status: All Orders</Button>
          <Button variant="outline">Select dates</Button>
        </div>
      </div>

      {/* Table */}
      <OrderTable orders={orders} />

      {/* Pagination */}
      <div className="flex justify-end mt-4 text-sm text-gray-500">
        <div className="border rounded flex items-center px-3 py-1 gap-2">
          <button className="text-green-700">&lt;</button>
          <span>1</span>
          <span className="text-gray-400">of 8</span>
          <button className="text-green-700">&gt;</button>
        </div>
      </div>
    </section>
  );
}
