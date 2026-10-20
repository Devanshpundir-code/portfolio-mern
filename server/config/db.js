const mongoose = require('mongoose');

let memoryServer = null;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    if (uri) {
      console.log(`Connecting to MongoDB at: ${uri.replace(/\/\/.*@/, '//<credentials>@')}...`);
      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
      return conn;
    }
    throw new Error('No MONGODB_URI provided');
  } catch (err) {
    console.warn(`Standard MongoDB connection failed: ${err.message}`);

    // In development/test mode, fall back to in-memory MongoDB so the portfolio works seamlessly
    if (process.env.NODE_ENV !== 'production') {
      try {
        console.log('Starting in-memory MongoDB fallback engine for testing/local preview...');
        const { MongoMemoryServer } = require('mongodb-memory-server');
        memoryServer = await MongoMemoryServer.create();
        const memUri = memoryServer.getUri();
        const conn = await mongoose.connect(memUri);
        console.log(`In-memory MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
        return conn;
      } catch (memErr) {
        console.error('Failed to initialize in-memory MongoDB:', memErr.message);
      }
    }

    if (process.env.NODE_ENV === 'production') {
      console.error('Production MongoDB connection is critical. Please verify MONGODB_URI.');
    }
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    if (memoryServer) {
      await memoryServer.stop();
    }
  } catch (err) {
    console.error('Error disconnecting MongoDB:', err.message);
  }
};

module.exports = { connectDB, disconnectDB };
