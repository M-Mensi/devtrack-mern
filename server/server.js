require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

async function start() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is required. Set it in server/.env.');
  }

  await mongoose.connect(mongoUri);
  app.listen(port, () => {
    console.log(`DevTrack API listening on port ${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start DevTrack API:', error);
  process.exitCode = 1;
});
