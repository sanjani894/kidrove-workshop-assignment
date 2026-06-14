# 🚀 AI & Robotics Summer Workshop Landing Page

This is a responsive workshop landing page built using **Next.js (React)** and **Tailwind CSS** with a backend API built using **Node.js + Express**.

It is designed for a fictional platform "BrightBots", inspired by Kidrove-style workshop pages for children aged 8–14.

---

## 📌 Features

### 🎨 Frontend
- Modern responsive UI (mobile + desktop)
- Hero section with CTA buttons
- Workshop details section
- Learning outcomes (5+ points)
- FAQ section
- Registration form with validation
- Loading & success states

### ⚙️ Backend
- Express.js server
- POST `/api/enquiry` endpoint
- Receives form data (name, email, phone)
- Logs data to console
- CORS enabled

---

## 🧑‍💻 Tech Stack

- Next.js (React)
- Tailwind CSS
- Node.js
- Express.js
- Lucide Icons

---


## 📂 Project Structure

project_/
├── app/ # Next.js pages and layout
├── components/ # UI components (Hero, Form, FAQ, etc.)
├── components/ui/ # Reusable UI elements
├── lib/ # Utility functions
├── public/ # Static assets (images, icons)
├── server/ # Express backend API
│ └── index.js
├── .env.local
├── next.config.mjs
├── package.json
└── tsconfig.json

└── tsconfig.json
```
