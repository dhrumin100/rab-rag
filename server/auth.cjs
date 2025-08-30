const express = require('express');
const cors = require('cors');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();

const app = express();
const port = 3001;

// Enable CORS for frontend requests
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true
}));

app.use(express.json());

// Initialize Google Auth with service account
const auth = new GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
});

// Endpoint to get access token
app.get('/api/auth/token', async (req, res) => {
  try {
    const client = await auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    
    if (accessTokenResponse.token) {
      res.json({ 
        token: accessTokenResponse.token,
        expires_in: 3600 // Google tokens typically expire in 1 hour
      });
    } else {
      throw new Error('Failed to get access token');
    }
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).json({ 
      error: 'Failed to authenticate with Google Cloud',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Auth server running at http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
  console.log(`Token endpoint: http://localhost:${port}/api/auth/token`);
});
