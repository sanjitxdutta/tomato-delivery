# 🍽️ Tomato Delivery – Backend API

This is the backend of a **Tomato Delivery**. It provides RESTful APIs to manage user registration, food listings, cart items, and orders.

---

## 📌 Live Features

### User Authentication
- ✅ Signup & Login with JWT authentication
- ✅ Secure password handling with bcrypt

### Food Management
- ✅ Fetch available food items
- ✅ Filter food items by category

### Cart Management
- ✅ Add/remove items to/from cart
- ✅ View and update cart contents

### Order Management
- ✅ Place new orders
- ✅ View previous orders

### MongoDB Integration
- ✅Uses Mongoose for schema definition and database interaction

---

## 🛠️ Tech Stack

| Category       | Technology            |
|----------------|------------------------|
| Runtime        | Node.js               |
| Framework      | Express.js            |
| Database       | MongoDB + Mongoose    |
| Authentication | JWT + bcrypt          |
| Environment    | dotenv                |
| Others         | axios (for testing), nodemon (dev)

---

## 📂 Project Structure
```
backend/
├── config/
│ └── db.js                        # MongoDB connection setup
├── controllers/                   # Logic layer for routes
│ ├── cartController.js
│ ├── foodController.js
│ ├── orderController.js
│ └── userController.js
├── middleware/
│ └── auth.js                      # JWT middleware
├── models/                        # Mongoose schemas
│ ├── foodModel.js
│ ├── orderModel.js
│ └── userModel.js
├── routes/                        # Express route handlers
│ ├── cartRoute.js
│ ├── foodRoute.js
│ ├── orderRoute.js
│ └── userRoute.js
├── uploads/                       # Placeholder for file uploads
├── .env                           # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── server.js                      # Entry point
```

## 📬 API Endpoints Overview

### 👤 User

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| POST   | `/api/signup` | Register a new user   |
| POST   | `/api/login`  | Login and receive JWT |

### 🍱 Food

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | `/api/food` | Get all food items |

### 🛒 Cart

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/cart/add`    | Add item to cart         |
| POST   | `/api/cart/remove` | Remove item from cart    |
| GET    | `/api/cart/`       | Get user's cart contents |

### 📦 Orders

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/api/order` | Place a new order   |
| GET    | `/api/order` | Get user order list |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sanjitxdutta/tomato-delivery.git
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root folder with the following:
```bash
- MONGODB_URI=mongodb+srv://youruser:yourpass@yourcluster.mongodb.net/food-del
- JWT_SECRET_USER=your_secret
- STRIPE_SECRET_KEY=sk_test_your_secret
```

### 4. Run the Server
```bash
npm run dev     # Using nodemon for development
```
Server will run at http://localhost:4000/

---

## 📌 Notes
- MongoDB must be running locally or via a cloud provider like MongoDB Atlas.
- All secure routes are protected with JWT middleware (middleware/auth.js).
- You can use the /uploads folder for handling product images or assets if needed.

---

## 🙌 Contributions
- Contributions, issues and feature requests are welcome!
- Feel free to fork the repo and open a pull request.
