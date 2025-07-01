
# 🛒 Agrolink Order Dashboard UI

A clean frontend dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**, replicating the Order Details and Orders Listing pages from Figma.

### 📸 Demo

[🔗 View Live Demo (Netlify)](https://agrolinkbuyerdashboard.netlify.app/)

#### /orders.....all orders page

#### /orders/id.....order details page

---

## 📦 Tech Stack

- **Next.js** – App Router
- **TypeScript** – Strong typing
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible, pre-styled components
- **Lucide Icons** – Clean icon set
- **Netlify** – Hosting & deployment

---

## 🧱 Features

### ✅ Orders Page
- Clean table layout for all orders
- Status badges with full color variants
- Responsive action buttons and filters (Search, Status, Date)

### ✅ Order Details Page
- Summary: Order Info, Billing, and Delivery
- Item list grouped by sellers
- Visual progress tracker for shipping status
- Status highlighting with current step

---

## 🔧 Running Locally

Clone the repo:

```bash
git clone https://github.com/your-username/agrolink-order-dashboard.git
cd agrolink-order-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🚀 Deployment

This project was deployed using [**Netlify**](https://netlify.com)

To redeploy:
- Push your changes to GitHub
- Netlify auto-builds and releases updates

---

## 📁 Folder Structure Overview

```
/app
  /orders
    page.tsx         → Orders list page
    [id]/page.tsx    → Dynamic order detail
/components/
  /layout            → Topbar & Sidebar
  /orders/           → Table, Badge, Timeline, etc.
  /ui                → shadcn components
/lib/
  mockOrderDetails.ts → Sample mock data orderdetails
  mockOrders.ts → Sample mock data all orders
  types.ts           → TypeScript types
```

---

## 🙋🏽‍♀️ Author

**Chioma**  
Frontend Developer 💻✨  


---

## 📌 License

This project is for assessment/demo purposes. Feel free to fork and modify but not for commercial purpose.


