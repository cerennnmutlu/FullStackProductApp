# 💍 Full Stack Product App

This is a full-stack product listing application built with **React** (frontend) and **.NET Core Web API** (backend). The project dynamically calculates product prices based on real-time gold prices and includes features like filtering and responsive design.

---

## 🚀 Features

### ✅ Frontend (React)
- Product list with image carousel and color variants
- Popularity score visualization
- Responsive design for desktop & mobile
- Axios-based API integration

### ✅ Backend (.NET Core Web API)
- Reads products from a JSON file
- Calculates price: `(popularityScore + 1) * weight * goldPrice`
- Provides filtering by:
  - **Price Range**
  - **Popularity Score**
- Dynamic gold price fetching (mocked or real)

---

## 📁 Project Structure
FullStackProductApp/
│
├── backend/
│ └── ProductApi/ # ASP.NET Core Web API
│
├── frontend/ # React frontend
│
├── README.md
└── FullStackProductApp.sln


### Backend
cd backend/ProductApi
dotnet run

### Frontend
cd frontend
npm install
npm start

🌐 Live Demo
Frontend (Vercel): https://your-vercel-link.vercel.app

Backend (Heroku / Render): https://your-api-link

🛠 Tech Stack
Frontend: React, JavaScript, Axios, HTML, CSS

Backend: ASP.NET Core Web API

Deployment: Vercel (Frontend), Heroku/Render (Backend)


