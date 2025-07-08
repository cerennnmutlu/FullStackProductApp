💍 Full Stack Product App
This is a full-stack product listing application built using React for the frontend and .NET Core Web API for the backend. The app dynamically calculates product prices based on real-time gold prices and includes features such as filtering, responsive design, and popularity score visualization.

🚀 Features
✅ Frontend (React)
Product listing with image carousel and color variations

Popularity score indicators

Responsive design (desktop & mobile)

API integration using Axios

✅ Backend (.NET Core Web API)
Reads product data from a JSON file

Calculates price using the formula:
(popularityScore + 1) * weight * goldPrice

Supports filtering by:

Price Range

Popularity Score

Simulated or real-time gold price fetching


FullStackProductApp/
│
├── backend/
│   └── ProductApi/       # ASP.NET Core Web API
│
├── frontend/
│   └── product-frontend/ # React Frontend
│
├── README.md
└── FullStackProductApp.sln


⚙️ Getting Started

###Backend
cd backend/ProductApi
dotnet run

###Frontend
cd frontend/product-frontend
npm install
npm start

⚠️ Make sure to create a .env file in product-frontend/ with the following content:
env:
REACT_APP_API_URL=https://fullstack-product-api-0097192acc0a.herokuapp.com

🌐 Live Demo
🖥️ Frontend (React - Vercel)
🔗 https://fullstack-product-frontend-6fwiyu4xf-cerennnmutlus-projects.vercel.app/

⚙️ Backend (ASP.NET Core - Heroku)
🔗 [https://fullstack-product-api-0097192acc0a.herokuapp.com/api/products](https://fullstack-product-api-0097192acc0a.herokuapp.com/api/products)

🛠 Tech Stack
Frontend: React, JavaScript, Axios, HTML, CSS

Backend: ASP.NET Core Web API

Deployment: Vercel (Frontend), Heroku (Backend)

## 🖼️ Screenshots
[CaseStudyImages.pdf](https://github.com/user-attachments/files/21119248/CaseStudyImages.pdf)

