import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const allowed = [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:5000',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:3000',
        process.env.CLIENT_URL
      ].filter(Boolean);

      if (allowed.some(url => origin.startsWith(url))) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serverless DB Connection Middleware:
// Ensures cached database connection is established across Vercel serverless function invocations
app.use(async (req, res, next) => {
  if (req.path.startsWith('/api') && req.path !== '/api/health') {
    try {
      await connectDB();
    } catch (error) {
      console.error('Database connection failed in serverless request lifecycle:', error.message);
    }
  }
  next();
});

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/projects', projectRoutes);

// Production Static Serving for React SPA (standalone Node)
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>MERN Portfolio API</title></head>
          <body style="font-family:sans-serif;padding:2rem;text-align:center;">
            <h1>MERN Portfolio Backend Active</h1>
            <p>API is running smoothly on port ${PORT}. Run frontend dev server or build client.</p>
            <p><a href="/api/health">Check API Health</a> | <a href="/api/projects">View Projects</a></p>
          </body>
        </html>
      `);
    }
  });
});

// Error handling middleware
app.use(errorHandler);

// Standalone Server Initialization
// (Only listen when running standalone locally, NOT inside Vercel serverless function)
if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`===============================================`);
        console.log(`🚀 Portfolio Express Server running on port ${PORT}`);
        console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`🔗 API Base: http://localhost:${PORT}/api`);
        console.log(`===============================================`);
      });
    })
    .catch((err) => {
      console.error('Initial database connection failed on startup:', err.message);
      // Still listen so healthcheck and non-db routes are available
      app.listen(PORT, () => {
        console.log(`🚀 Portfolio Express Server running on port ${PORT} (fallback mode)`);
      });
    });
}

export default app;
