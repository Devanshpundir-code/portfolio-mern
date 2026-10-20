# Devansh Pundir - Personal MERN Stack Portfolio

A personal developer portfolio built from scratch with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), featuring a black-and-white hand-drawn sketchbook visual identity, React Router SPA navigation, Express REST APIs, Mongoose database persistence, multi-format resume streaming (PDF and Word .docx), and dark/light chalkboard themes.

---

## 🔗 Live Deployment & Demonstration Links

- **Frontend Live URL**: [https://devanshpundir-portfolio.vercel.app](https://devanshpundir-portfolio.vercel.app) *(or Vercel / Netlify)*
- **Backend API Live URL**: [https://mern-portfolio-backend.onrender.com](https://mern-portfolio-backend.onrender.com) *(Render / Railway)*
- **GitHub Repository**: [https://github.com/Devanshpundir-code/portfolio](https://github.com/Devanshpundir-code/portfolio)

---

## 🎨 Visual Identity & Architecture

- **Visual Style**: Hand-drawn monochrome sketchbook aesthetic with dynamic CSS wobbly sketch borders, tactile drop shadows, typewriter hero animations, and smooth light (paper)/dark (slate chalkboard) themes.
- **Frontend**: React 18 SPA with React Router v6, responsive mobile navigation drawer, interactive skill proficiency bars, technology filter chips, and real-time contact validation.
- **Backend**: Express.js modular REST API with route handlers, controllers, input validation, custom error handling middleware, and file stream downloaders.
- **Database**: MongoDB with Mongoose schema modeling, automatic sanitization, validation constraints, and in-memory development fallback.

---

## 📋 Features Checklist (Assignment Compliance)

| Section / Feature | Implementation Status | Tech Stack & Location |
| :--- | :--- | :--- |
| **1. Hero Section** | ✅ Implemented | Typewriter animation, CTAs, animated badge (`client/src/components/Hero.jsx`) |
| **2. About Me** | ✅ Implemented | Bio, status, location, Dyoraa internship context (`client/src/components/About.jsx`) |
| **3. Skills Section** | ✅ Implemented | Category filters, animated progress bars, tooltips (`client/src/components/Skills.jsx`) |
| **4. Projects Showcase** | ✅ Implemented | 4 real projects, tech stack badges, GitHub & live links (`client/src/components/Projects.jsx`) |
| **5. CV Download (PDF)** | ✅ Implemented | Served via Express stream with attachment headers (`GET /api/resume/pdf`) |
| **6. CV Download (DOCX)** | ✅ Implemented | Real Microsoft Word file served via Express (`GET /api/resume/docx`) |
| **7. Vertical Timeline** | ✅ Implemented | Education degrees & Dyoraa Robotics internship (`client/src/components/Timeline.jsx`) |
| **8. Certifications & Awards** | ✅ Implemented | Coursera, NPTEL Elite, Robotex, JKLU & LNMIIT hackathons (`client/src/components/Certifications.jsx`) |
| **9. Contact Form** | ✅ Implemented | Name, Email, Message fields, real-time feedback (`client/src/components/Contact.jsx`) |
| **10. Mongoose Persistence** | ✅ Implemented | Stored in MongoDB collection with schema validation (`server/models/Contact.js`) |
| **11. React Router** | ✅ Implemented | SPA routing with `/`, `/project/:id`, and `*` 404 (`client/src/App.jsx`) |
| **12. Dark / Light Mode** | ✅ Implemented | Chalkboard dark & Paper light with `localStorage` (`client/src/components/ThemeToggle.jsx`) |

---

## 🛠️ REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Healthcheck and server uptime verification |
| `GET` | `/api/projects` | List projects (supports `?tech=React.js` or `?category=Full-Stack`) |
| `GET` | `/api/projects/:id` | Retrieve single project details |
| `GET` | `/api/resume/pdf` | Stream Devansh Pundir's resume PDF |
| `GET` | `/api/resume/docx` | Stream Devansh Pundir's Word (.docx) resume |
| `POST` | `/api/contact` | Submit and persist contact form message in MongoDB |
| `GET` | `/api/contact/messages` | Evaluator/Admin verification endpoint to view saved submissions |

---

## 💻 Local Setup & Installation

### Prerequisites
- Node.js (v18+ or v22+)
- npm (v9+ or v10+)
- MongoDB (Local instance or free MongoDB Atlas URI; an automatic in-memory MongoDB fallback runs automatically if no server is running locally)

### 1. Clone the repository
```bash
git clone https://github.com/Devanshpundir-code/portfolio.git
cd portfolio
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Notice: `.env` is listed in `.gitignore` and must never be committed to GitHub)*

### 3. Install all dependencies
```bash
npm run install-all
```

### 4. Run Development Servers
To run both backend Express server (port 5000) and frontend React Vite dev server (port 5173) concurrently:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Running Automated Tests

Run the backend REST API test suite (powered by Jest, Supertest, and MongoMemoryServer):
```bash
npm test
```
All tests verify route functionality, resume file streaming, MongoDB validation errors, and end-to-end persistence without needing a local database daemon running.

---

## 🚀 Production Build & Deployment

To create a production-optimized build of the React client:
```bash
npm run build
```
In production, running `npm start` serves both the Express API and the compiled React SPA from port 5000 with complete fallback routing.
