# 🍅 Tomato Delivery – Fullstack Food Ordering System

Welcome to **Tomato Delivery**, a complete food ordering solution including a **Customer Frontend**, **Admin Dashboard**, and a **Backend API**.

This monorepo is structured into three core parts:
- `frontend/` → User interface for food ordering
- `admin/` → Admin panel to manage food items & orders
- `backend/` → Node.js API for data management and business logic

---

## 🚀 Live Demo

- 🔗 **User App:** [tomato-delivery-frontend](https://tomato-delivery-frontend-upy2.onrender.com)
- 🔗 **Admin Panel:** [tomato-delivery-admin](https://tomato-delivery-admin.onrender.com)
- 🔗 **Backend API:** [tomato-delivery-backend](https://tomato-delivery-backend-62wn.onrender.com)

---

## 🎥 Live Demo Video

https://github.com/user-attachments/assets/181b4050-b397-4a5e-a756-cf30210c4fd0

---

## 🧱 Monorepo Structure

```bash
tomato-delivery/
├── frontend/            # Customer-facing food ordering platform
├── admin/               # Admin dashboard for managing food and orders
├── backend/             # Node.js Express backend (API, DB, Auth)
└── README.md
```

---

## 🧰 Tech Stack Summary

| Layer      | Technologies                                                   |
|------------|----------------------------------------------------------------|
| Frontend   | React, Vite, React Router, Context API, Axios, CSS             |
| Admin      | React, Vite, React Toastify, Axios, React Router               |
| Backend    | Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt            |
| Common     | REST API, JWT Auth, Toast Notifications, Environment Variables |

---

## 🚀 Quick Start Instructions

> 📌 Make sure you have **Node.js**, **npm**, and **MongoDB** installed. Use [MongoDB Atlas](https://www.mongodb.com/atlas) for remote DB if needed.

---

### 📦 1. Clone the Repository

```bash
git clone https://github.com/sanjitxdutta/tomato-delivery.git
cd tomato-delivery
```

### 🛠️ 2. Setup Backend

```bash
cd backend
npm install
```
- Create a .env file:
```bash
MONGODB_URI=your_mongodb_connection
JWT_SECRET_USER=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```
- Start the backend server:
```bash
npm run dev
```
Runs on http://localhost:4000

### 🎯 3. Setup Frontend (User)

```bash
cd ../frontend
npm install
npm run dev
```
Runs on http://localhost:5173

### 🛠️ 4. Setup Admin Panel

```bash
cd ../admin
npm install
npm run dev
```
Runs on http://localhost:5174

---

## 📚 Project Overview
### 🔻 Frontend – User App (/frontend)
- Browse the menu by categories
- Add to Cart & Checkout
- Login popup (token-based)
- View past orders
- Payment gateway support (Razorpay/Stripe-ready)
- Built with React + Vite

📂 See full [Frontend README →](./frontend/README.md)

### 🧑‍💼 Admin Panel (/admin)
- Add new food items (with images)
- Delete or list food
- Track and update order status
- Built with React, Toastify, Axios

📂 See full [Admin README →](./admin/README.md)

### 🔌 Backend API (/backend)
- Secure user authentication (JWT + bcrypt)
- REST API for:
  - Food items
  - Cart
  - Orders
- MongoDB using Mongoose
- Stripe integration support

📂 See full [Backend README →](./backend/README.md)

---

## ✅ Features Overview
### 👨‍🍳 Customer App (Frontend)
- Explore meals by category
- Add/remove items in cart
- Place orders with delivery info
- Simple token-based login
- View your order history

### 🛠 Admin Panel
- Add food (title, price, category, image)
- View/delete food items
- Update order status (Processing, Delivered, etc.)

### ⚙️ Backend API
- Signup/Login with JWT
-Manage food and order data in MongoDB
-  Auth-protected routes
- Easy Stripe API support

---

## 📈 Future Improvements
- Dashboard analytics in Admin
- Email confirmations
- Payment gateway live integration
- Filtering/sorting orders
- Role-based access control

---

## 📄 License

MIT License © 2025 [Sanjit Dutta](https://github.com/sanjitxdutta)

---

## 🙌 Contributions

Contributions, issues, and suggestions are welcome!  
Feel free to fork the repo and submit a pull request.

---

## 🔗 Useful Links

- 🔗 [Frontend](./frontend)
- 🔗 [Admin Panel](./admin)
- 🔗 [Backend API](./backend)
- 🔗 [GitHub: sanjitxdutta](https://github.com/sanjitxdutta)
