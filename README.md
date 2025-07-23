# 🍅 Tomato Delivery

A full-stack food delivery application built with **React** (frontend) and **Node.js + Express + MongoDB** (backend). The app supports user authentication, shopping cart, and food listings. Still a work in progress!

## 🚀 Features Implemented

### 🔧 Backend
- ✅ User registration and login with JWT authentication
- ✅ Secure password hashing via bcrypt
- ✅ `food/list` endpoint to fetch available dishes
- ✅ Cart route scaffolding (`/api/cart/add`, `/remove`, `/get`) — logic to be implemented

### 🧩 Frontend
- ✅ User sign-up and login popup integrated with backend
- ✅ JWT token storage in React context and `localStorage`
- ✅ Navbar shows login/logout dynamically
- ✅ Food listing fetched from backend and displayed on the app
- ✅ Shopping cart functionality (add/remove, total amount calculation) in context

---

## 🛠 Tech Stack

| Layer       | Tech                                     |
|-------------|------------------------------------------|
| Frontend    | React, React Router, Axios, Context API  |
| Backend     | Node.js, Express, Mongoose, JWT, bcrypt  |
| Database    | MongoDB                                  |
| UI/CSS      | CSS Modules + Flexbox + Responsive Design |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sanjitxdutta/tomato-delivery.git
cd tomato-delivery

# Server setup
cd backend
npm install
# — create .env with MONGODB_URI and JWT_SECRET
npm run dev

# Frontend setup (in separate terminal)
cd ../frontend
npm install
npm run dev
