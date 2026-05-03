<div align="center">

<img src="https://nestaway-k2wb.onrender.com/images/web-icon.png" alt="NestAway Logo" width="80" height="80" style="border-radius:16px;">

# NestAway

**Discover premium stays worldwide — homes, cabins, villas & more**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-nestaway--k2wb.onrender.com-33c375?style=for-the-badge)](https://nestaway-k2wb.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-NestAway-181717?style=for-the-badge&logo=github)](https://github.com/Aryanmaurya07/NestAway)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render)](https://render.com)

</div>

---

## 📸 Screenshots

> _Add your screenshots here after uploading them to the repo_

| Home Page | Listings | Listing Detail |
|:---------:|:--------:|:--------------:|
| ![Home](screenshots/home.png) | ![Listings](screenshots/listings.png) | ![Detail](screenshots/detail.png) |

| Login | Add Listing | Mobile View |
|:-----:|:-----------:|:-----------:|
| ![Login](screenshots/login.png) | ![Add](screenshots/add.png) | ![Mobile](screenshots/mobile.png) |

---

## 🌟 About

**NestAway** is a full-stack Airbnb-inspired vacation rental platform built with the MERN-adjacent stack (Node.js + Express + MongoDB + EJS). It allows users to browse handpicked global stays, list their own properties with image uploads, leave reviews, and interact with an interactive location map — all wrapped in a sleek dark-theme UI with a green accent palette.

This project was built as a **B.Tech Computer Science** minor project at **St. Andrews Institute of Technology & Management (SAITM), Gurugram**, affiliated with Maharishi Dayanand University, Rohtak.

---

## ✨ Features

### 🏠 Core
- **Browse Listings** — Explore 2.4K+ handpicked stays across 140+ countries
- **Category Filters** — Filter by Trending, Beach, Mountains, City, Cabins, Luxury, Countryside, Arctic, Camping, Farms, Pools — with scroll navigation
- **Search** — Full-text search by title and location, auto-scrolls to results
- **Listing Detail Page** — Rich property view with images, host info, amenities, pricing, and interactive Leaflet.js map
- **Add / Edit / Delete Listings** — Full CRUD for authenticated property owners
- **Image Upload** — Cloudinary integration with Multer for property images

### 👤 Authentication & Security
- **Signup / Login / Logout** — Passport.js with Local Strategy
- **Session Management** — MongoDB-backed sessions via connect-mongo
- **Authorization** — Route-level guards; only listing/review owners can edit or delete
- **HTTP-only Cookies** — 7-day session expiry with secure cookie settings

### ⭐ Reviews
- Authenticated users can post star ratings (1–5) and written reviews
- Review authors can delete their own reviews
- Average rating calculated and displayed on the detail page

### 🗺️ Maps
- Interactive **Leaflet.js** map on every listing detail page
- GeoJSON coordinates stored in MongoDB (`geometry.coordinates`)
- Custom green marker matching the site theme
- Graceful fallback when coordinates are unavailable

### 🎨 UI / UX
- **Dark luxury theme** with `#33c375` green accent palette
- **Fully responsive** — mobile, tablet, desktop
- **Reveal animations** — IntersectionObserver scroll animations
- **Auto-dismissing flash messages** — success/error toasts with 4-second auto-close
- **Sticky glass-morphism navbar** with search, brand, and user dropdown
- **Filter scroll arrows** — navigate all category pills without overflow

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js 20** | Runtime environment |
| **Express.js 4** | Web framework & routing |
| **MongoDB Atlas** | Cloud NoSQL database |
| **Mongoose** | ODM — schema, validation, queries |
| **Passport.js** | Authentication (Local Strategy) |
| **passport-local-mongoose** | User model helpers |
| **express-session** | Session handling |
| **connect-mongo** | MongoDB session store |
| **connect-flash** | Flash messaging |
| **Joi** | Server-side schema validation |
| **Multer** | Multipart form handling (image upload) |
| **method-override** | PUT/DELETE via HTML forms |
| **dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|---|---|
| **EJS** | Server-side templating |
| **ejs-mate** | Layout engine (boilerplate wrapping) |
| **Bootstrap 5.3** | Responsive grid & components |
| **Bootstrap Icons** | Icon library |
| **Font Awesome 6** | Additional icons |
| **Leaflet.js** | Interactive maps |
| **Custom CSS** | Dark theme, animations, variables |
| **Vanilla JS** | Filter logic, reveal animations, flash dismiss |

### Cloud & Deployment
| Service | Purpose |
|---|---|
| **Cloudinary** | Image storage & CDN |
| **MongoDB Atlas** | Database hosting |
| **Render** | App deployment & hosting |

---

## 📁 Project Structure

```
NestAway/
├── app.js                    # Express app entry point
├── schemaValidation.js       # Joi validation schemas
├── cloudConfig.js            # Cloudinary + Multer config
├── middlewares.js            # Auth guards, validation middleware
│
├── models/
│   ├── listing.js            # Listing schema (title, price, location, geometry…)
│   ├── review.js             # Review schema (rating, comment, author)
│   └── user.js               # User schema (passport-local-mongoose)
│
├── routes/
│   ├── listing.js            # /listings — CRUD + search + reserve
│   ├── review.js             # /listings/:id/reviews — create & delete
│   └── user.js               # /signup /login /logout
│
├── controllers/
│   ├── listings.js           # Listing controller logic
│   ├── reviews.js            # Review controller logic
│   └── users.js              # Auth controller logic
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs   # HTML shell (head, navbar, flash, footer)
│   ├── includes/
│   │   ├── navbar.ejs        # Sticky glass-morphism navbar
│   │   ├── flash.ejs         # Auto-dismiss flash alerts
│   │   └── footer.ejs        # Site footer
│   └── listings/
│       ├── index.ejs         # Browse + filter + search
│       ├── show.ejs          # Listing detail + map + reviews
│       ├── new.ejs           # Add new listing form
│       ├── edit.ejs          # Edit listing form
│       └── error.ejs         # Error page
│
├── public/
│   ├── css/
│   │   ├── style.css         # Dark theme, animations, components
│   │   └── rating.css        # Star rating styles
│   ├── js/
│   │   ├── script.js         # Reveal, filters, scroll-to-results
│   │   └── map.js            # Leaflet map helpers
│   └── images/
│       └── web-icon.png      # Favicon
│
├── init/
│   └── data.js               # Seed data (20+ sample listings)
│
└── utils/
    └── ExpressError.js       # Custom error class
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20+ → [Download](https://nodejs.org)
- **MongoDB Atlas** account → [Create free cluster](https://mongodb.com/atlas)
- **Cloudinary** account → [Sign up free](https://cloudinary.com)

### 1. Clone the repository

```bash
git clone https://github.com/Aryanmaurya07/NestAway.git
cd NestAway
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
# MongoDB Atlas connection string
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/nestaway

# Session secret (use a long random string)
SECRET=your_super_secret_session_key_here

# Cloudinary credentials (from your Cloudinary dashboard)
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

### 4. (Optional) Seed the database

```bash
node init/index.js
```

### 5. Run the development server

```bash
node app.js
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🔑 Environment Variables Reference

| Variable | Description | Where to find |
|---|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string | Atlas Dashboard → Connect → Drivers |
| `SECRET` | Session encryption secret | Generate with `openssl rand -base64 32` |
| `CLOUD_NAME` | Cloudinary cloud name | Cloudinary Dashboard |
| `CLOUD_API_KEY` | Cloudinary API key | Cloudinary Dashboard → API Keys |
| `CLOUD_API_SECRET` | Cloudinary API secret | Cloudinary Dashboard → API Keys |

---

## 🌐 Deployment (Render)

This app is deployed on **Render** as a Web Service.

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `node app.js`
6. Add all environment variables from the table above
7. Set **Node Version**: `20`
8. Deploy!

> ⚡ **Live URL:** [https://nestaway-k2wb.onrender.com](https://nestaway-k2wb.onrender.com)

---

## 🔗 API Routes

### Listings

| Method | Route | Description | Auth Required |
|---|---|---|---|
| `GET` | `/listings` | Browse all listings | No |
| `GET` | `/listings/search?q=` | Search listings | No |
| `GET` | `/listings/new` | New listing form | Yes |
| `POST` | `/listings` | Create listing | Yes |
| `GET` | `/listings/:id` | Listing detail | No |
| `GET` | `/listings/:id/edit` | Edit listing form | Yes (owner) |
| `PUT` | `/listings/:id` | Update listing | Yes (owner) |
| `DELETE` | `/listings/:id` | Delete listing | Yes (owner) |
| `GET` | `/listings/:id/reservelisting` | Reserve a listing | Yes |

### Reviews

| Method | Route | Description | Auth Required |
|---|---|---|---|
| `POST` | `/listings/:id/reviews` | Post a review | Yes |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a review | Yes (author) |

### Users

| Method | Route | Description |
|---|---|---|
| `GET` | `/signup` | Signup form |
| `POST` | `/signup` | Register user |
| `GET` | `/login` | Login form |
| `POST` | `/login` | Authenticate user |
| `GET` | `/logout` | Logout user |

---

## 🎨 Theme & Design

NestAway uses a custom **dark luxury design system**:

```css
--bg-primary:    #08080f   /* Deep dark background */
--bg-secondary:  #10101c   /* Card backgrounds      */
--gold:          #33c375   /* Primary green accent  */
--gold-light:    #5ddfa0   /* Lighter green hover   */
--text-primary:  #f4f4f8   /* Main text             */
--text-muted:    #6b7280   /* Secondary text        */
```

Key design decisions:
- `backdrop-filter` placed on `::before` pseudo-elements (not the element itself) to avoid CSS stacking context trapping Bootstrap dropdowns
- `overflow-x: clip` instead of `hidden` so absolutely-positioned dropdowns aren't clipped
- IntersectionObserver for performant scroll-reveal animations

---

## 👨‍💻 Author

**Aryan Maurya**
- 💼 Full Stack MERN Developer
- 🐙 GitHub: [@Aryanmaurya07](https://github.com/Aryanmaurya07)

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Aryan Maurya](https://github.com/Aryanmaurya07)

</div>
