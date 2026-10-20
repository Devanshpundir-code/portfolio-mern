import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../server.js';
import Contact from '../models/Contact.js';

let mongoServer;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Contact.deleteMany({});
});

describe('MERN Portfolio Server REST API Suite', () => {
  describe('GET /api/health', () => {
    it('should return 200 and healthy status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('online');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('GET /api/projects', () => {
    it('should return a list of projects with min 3 projects', async () => {
      const res = await request(app).get('/api/projects');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(3);

      const first = res.body.data[0];
      expect(first).toHaveProperty('title');
      expect(first).toHaveProperty('description');
      expect(first).toHaveProperty('techStack');
      expect(first).toHaveProperty('github');
      expect(first).toHaveProperty('liveDemo');
    });

    it('should filter projects by technology', async () => {
      const res = await request(app).get('/api/projects?tech=React.js');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.every(p => p.techStack.includes('React.js'))).toBe(true);
    });

    it('should return 404 for non-existent project id', async () => {
      const res = await request(app).get('/api/projects/unknown-project-id');
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });

  describe('Resume Downloads via Express (Requirements 5 & 6)', () => {
    it('should download PDF resume with correct headers (GET /api/resume/pdf)', async () => {
      const res = await request(app).get('/api/resume/pdf');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('application/pdf');
      expect(res.headers['content-disposition']).toContain('attachment; filename="Devansh_Pundir_Resume.pdf"');
      expect(res.body).toBeDefined();
    });

    it('should download Word (.docx) resume with correct headers (GET /api/resume/docx)', async () => {
      const res = await request(app).get('/api/resume/docx');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
      expect(res.headers['content-disposition']).toContain('attachment; filename="Devansh_Pundir_Resume.docx"');
      expect(res.body).toBeDefined();
    });
  });

  describe('Contact Form Mongoose Persistence (Requirements 3, 4, 8)', () => {
    it('should validate and persist contact submission to MongoDB', async () => {
      const newContact = {
        name: 'Assignment Evaluator',
        email: 'evaluator@university.edu',
        message: 'This is a verified test message confirming end-to-end MERN persistence.'
      };

      const res = await request(app)
        .post('/api/contact')
        .send(newContact);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toContain('received');
      expect(res.body.data.name).toBe(newContact.name);
      expect(res.body.data.email).toBe(newContact.email);

      // Verify actual database record in MongoDB
      const saved = await Contact.findOne({ email: newContact.email });
      expect(saved).not.toBeNull();
      expect(saved.message).toBe(newContact.message);
      expect(saved.createdAt).toBeDefined();
    });

    it('should reject submission if name is missing', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send({
          name: '',
          email: 'valid@example.com',
          message: 'This message has valid length but no name.'
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/name/i);
    });

    it('should reject submission if email is invalid', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send({
          name: 'Jane Doe',
          email: 'not-an-email',
          message: 'Valid length message for testing email format validation.'
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/email/i);
    });

    it('should reject submission if message is too short (< 10 chars)', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send({
          name: 'Jane Doe',
          email: 'jane@example.com',
          message: 'Hi'
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/10 characters/i);
    });

    it('should list saved messages via GET /api/contact/messages', async () => {
      await Contact.create({
        name: 'Alice Wonder',
        email: 'alice@example.com',
        message: 'First test message in test database verification.'
      });

      const res = await request(app).get('/api/contact/messages');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(1);
      expect(res.body.data[0].name).toBe('Alice Wonder');
    });
  });
});
