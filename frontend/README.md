# 🍽️ Tomato - Food Ordering Frontend

This is the frontend interface of a **Food Ordering System**, enabling customers to browse meals, manage cart items, and place orders. Built with **React**, **Vite**, and **Context API**, this project is optimized for speed, modularity, and real-time interaction with the backend API.

---

## 📁 Folder Structure

```bash
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ExploreMenu/
│   │   ├── FoodDisplay/
│   │   ├── FoodItem/
│   │   ├── Header/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── LoginPopup/
│   │   └── PlaceOrder/
│   ├── context/
│   │   └── StoreContext.jsx
│   ├── pages/
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── MyOrders/
│   │   ├── PlaceOrder/
│   │   └── Verify/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Features

- 🔍 Explore menu by category
- 🛒 Add to Cart with quantity controls
- 📦 Place orders with delivery info
- ✅ Payment verification (Stripe/Razorpay compatible structure)
- 📃 View order history
- 🔐 Simple login popup with token-based auth
- 📊 Context API-powered global state for cart and user

---

## 🧪 Tech Stack

| Tech             | Purpose                          |
|------------------|----------------------------------|
| React + Vite     | UI framework & fast bundler      |
| Context API      | Global state management          |
| React Router DOM | Routing between pages            |
| Axios            | API requests                     |
| CSS              | Styling                          |
| Node/Express     | (Backend - assumed integration)  |

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/sanjitxdutta/tomato-delivery.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```
- Vite will run the server, typically on http://localhost:5173.
- Make sure the backend is also running and accessible. The default API URL is configured in App.jsx:
```bash
const url = "https://tomato-delivery-backend.com"
```

---

## 🧠 Context API (StoreContext.jsx)
- The app uses StoreContext to manage:
- food_list: All fetched food items
- cartItems: Items added to cart
- addToCart(), removeFromCart(): Cart control
- getTotalCartAmount(): Billing logic
- token, setToken: Auth token for user
- url: Base URL for backend

---

## 🔒 Auth & Token
The login popup sets a token on success. Token is saved in localStorage and used in API headers for:
- Orders
- User-specific requests

---

## 📄 License
MIT License © 2025 Sanjit Dutta
