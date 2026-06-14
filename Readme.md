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

- **app/** – Main application pages, layouts, and global styling.
- **components/** – Reusable React components used across the website.
- **components/ui/** – Shared UI elements such as buttons.
- **lib/** – Utility/helper functions.
- **public/** – Static assets like images and icons.
- **server/** – Backend server files and API-related code.
- **globals.css** – Global styling configuration.
- **page.tsx** – Main landing page entry point.
- **layout.tsx** – Root layout for the application.
- **package.json** – Project dependencies and scripts.
- **next.config.mjs** – Next.js configuration.
- **tsconfig.json** – TypeScript configuration.

------

## 📁 Folder Structure
```text
project_/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── faq-section.tsx
│   ├── hero-section.tsx
│   ├── learning-outcomes.tsx
│   ├── registration-form.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── workshop-details.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│
├── server/
│   ├── node_modules/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .env.development.local
├── .env.local
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```
