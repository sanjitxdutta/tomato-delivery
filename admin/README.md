# 🍽️ Admin Panel - Tomato Delivery
This is the **Admin Panel** for the Food Ordering System. It allows administrators to manage food items, view orders, and control the status of ongoing deliveries. Built with **React**, this panel interfaces with a backend API to maintain real-time control over food items and order management.

---

## 🔧 Features

- 📦 **Add Food Items**: Upload images, set price, category, and description.
- 📝 **List Food Items**: View and delete items from the database.
- 🚚 **Manage Orders**: Track and update delivery status (`Processing`, `Out for Delivery`, `Delivered`).
- 🎨 **Responsive UI**: Clean and minimal admin interface.
- 🔔 **Toast Notifications**: Instant feedback using `react-toastify`.

---

## 🧰 Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| **React**      | Frontend framework             |
| **Vite**       | Fast dev server and bundler    |
| **Axios**      | API requests                   |
| **React Router** | Routing between pages        |
| **React Toastify** | Notifications UI           |
| **ESLint**     | Code linting and quality       |

---

## 📁 Folder Structure
```bash
admin/
├── public/
├── src/
│ ├── assets/              # Static images and icons
│ ├── components/
│ │ ├── Navbar/
│ │ └── Sidebar/
│ ├── pages/
│ │ ├── Add/               # Add food item
│ │ ├── List/              # List food items
│ │ └── Orders/            # Manage orders
│ ├── App.jsx              # Main routing and layout
│ ├── main.jsx 
│ └── index.css 
├── package.json
├── vite.config.js
└── README.md
```

---

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/sanjitxdutta/tomato-delivery.git
cd admin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```
Vite will run the server, typically on http://localhost:5173.
Make sure the backend is also running and accessible. The default API URL is configured in App.jsx:
const url = "https://tomato-delivery-backend.com"

---

## 🔌 API Endpoints Used
- These are consumed from the backend:
- GET /api/food/list – Fetch all food items
- POST /api/food/add – Add new food item
- POST /api/food/remove – Delete item
- GET /api/order/list – List all orders
- POST /api/order/status – Update order status

---

## ✅ To-Do / Improvements
- Add authentication for admin access
- Add pagination for large orders/menus
- Improve order filtering (e.g., by status/date)
- Add dashboard analytics (e.g., daily revenue, top items)

---

## 📄 License
This project is under the MIT License – feel free to use, modify, and distribute.
