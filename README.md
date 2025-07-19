# 🌾 AgroMitra

AgroMitra is a full-stack web application built to **connect farmers who own agricultural machinery** with **farmers who need them**, reducing idle machine time and preventing crop damage due to delays.

---

## 🔗 Live Demo
*(Coming Soon)*

---

## 📸 Screenshot

![AgroMitra Screenshot](client/public/AgroMitra_UI.png)

---

## 🚀 Features

- 👨‍🌾 Farmer Registration & Login
- 🚜 Machinery Listing by Provider Farmers
- 🔍 Geo-location based Search & Booking
- 📅 Slot-based Reservation System
- ⭐ Ratings & Reviews after job completion
- 💳 (Upcoming) UPI/Online Payment Support
- 📲 (Upcoming) WhatsApp Bot Integration
- 🌦️ Weather API Integration (planned)

---

## 👥 User Roles

- **Service Provider Farmer (SPF)** – Lists available machinery with slots, accepts jobs
- **User Farmer (UF)** – Books available machines for specific slots

---

## 💡 Tech Stack

### 🖥 Frontend
- React.js
- Tailwind CSS
- React Router
- i18next (for multi-language support)

### 🛠 Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer (notifications)

---

## 📁 Folder Structure
agro-mitra/
├── client/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI
│       ├── pages/           # Page views (Home, Login, Register, etc.)
│       ├── utils/           # API utils, helpers
│       └── App.jsx
│   └── tailwind.config.js
│   └── index.html
│   └── package.json

├── server/                  # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│   └── .env

├── README.md
├── .gitignore
└── package.json            # Root package (optional for scripts)



---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/agro-mitra.git
cd agro-mitra

---
## Frontend

# cd client
# npm install

# Backend

# cd server
# npm install
# Create .env in /server
# .env

# PORT=5000
# MONGO_URI=your_mongodb_connection
# JWT_SECRET=your_secret_key

# Run App
# In development
# In root folder
# npm run dev

# 📦 Upcoming Features

# ✅ Weather warnings using OpenWeatherMap API
# ✅ WhatsApp chatbot booking
# ✅ Offline Kiosk PWA
# ✅ Machine Marketplace


# 🙌 Contributors
# Sonu – Idea, Design & Full Stack Implementation

# Want to contribute? Fork this repo and make a PR!


## 📜 License

# MIT © 2025 Sonu Kumar
