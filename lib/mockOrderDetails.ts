

export const mockOrder = {
  id: "ORD56ERV",
  placedOn: "May 6, 2024",
  paymentMode: "Card Payment",
  items: [
    {
      seller: "Uchenna Nwachukwu",
      products: [
        {
          name: "Sweet Potatoes",
          image: "/images/potatoes.png",
          quantity: 4,
          size: "2kg",
          price: "₦4,800",
          currentStatus: "Delivered",
          timeline: [
            { date: "May 6", label: "Order Placed" },
            { date: "May 6", label: "Confirmed" },
            { date: "May 7", label: "Shipped" },
            { date: "May 7", label: "Delivered" },
          ],
        },
        {
          name: "Onions",
          image: "/images/onions.png",
          quantity: 4,
          size: "2kg",
          price: "₦2,200",
          currentStatus: "Shipped",
          timeline: [
            { date: "May 6", label: "Order Placed" },
            { date: "May 6", label: "Confirmed" },
            { date: "May 7", label: "Shipped" },
            { date: "May 7", label: "Delivered" },
          ],
        },
      ],
    },
    {
      seller: "Daniel Suleman",
      products: [
        {
          name: "Tomatoes",
          image: "/images/tomatoes.png",
          quantity: 4,
          size: "2kg",
          price: "₦14,000",
          currentStatus: "Confirmed",
          timeline: [
            { date: "May 6", label: "Order Placed" },
            { date: "May 6", label: "Confirmed" },
            { date: "May 7", label: "Shipped" },
            { date: "May 7", label: "Delivered" },
          ],
        },
      ],
    },
  ],
  summary: {
    subtotal: "₦27,000",
    vat: "₦720",
    deliveryFee: "₦2,400",
    total: "₦37,120",
  },
  delivery: {
    method: "Home Delivery",
    address: "123 Wamba-Obi Road, Wamba, Nasarawa",
  },
  status: "Pending",
}