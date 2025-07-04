# 📰 SnapNews - React News Aggregator

SnapNews is a sleek, responsive news application built using **React.js**, styled with **Bootstrap 5**, and powered by the **GNews API**. It delivers real-time top headlines categorized by topics and regions. Designed as a professional-grade project for showcase, it features lazy image loading, dark/light themes, custom alerts, and a smooth user experience.

---

## ✨ Features

- ✅ Real-time news from GNews API
- 🌓 Dark & Light mode toggle
- 🚥 Top loading progress bar (react-top-loading-bar)
- 📸 Lazy-loaded images (blur effect)
- 🔔 Toast-style alert system
- 🌐 Country and category filters
- 📱 Fully responsive Bootstrap layout
- 🔁 Retry fetch on API failure
- 🔍 SEO metadata via `react-helmet`

---

## 🧪 Tech Stack

- **React** (with Hooks and Lazy loading)
- **Bootstrap 5** (responsive UI)
- **React Router DOM** (SPA routing)
- **React Helmet** (SEO optimization)
- **React Lazy Load Image Component** (for performance)
- **GNews API** (news data source)

---

## 🔑 Environment Setup

Create a `.env.local` file in the root directory with the following variable:

```env
REACT_APP_NEWS_API=your_gnews_api_key_here
```
🔐 Get your API key from https://gnews.io

---

## 🚀 Getting Started

```
# 1. Clone the repo
git clone https://github.com/your-username/newsapp.git
cd newsapp

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

---

## 📁 Project Structure

```
newsapp/
├── public/
│   └── default.webp         # Optimized fallback image
├── src/
│   ├── Components/
│   │   ├── News.js
│   │   ├── NewsItem.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Alert.js
│   │   └── Spinner.js
│   ├── App.js
│   └── index.js
├── .env.local               # API key
├── package.json
└── README.md

```

---

## 🎯 Performance

✅ SEO score: 90%+

✅ Accessibility: 90%+

⚠️ Performance: ~65–70% (Need Bootstrap optimization)

A future TailwindCSS-powered version is in progress with better Lighthouse scores and reduced bundle size which will improve performace.

---

##📌 Author
Sarvam Patel
📅 Project (July 2025)
🌐 GitHub: @CoreTech7704

---

## 📄 License
MIT License – feel free to use and contribute
