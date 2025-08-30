'use strict';

const { GoogleAuth } = require('google-auth-library');

exports.handler = async function handler(event, context) {
  try {
    const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!key) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Missing GOOGLE_SERVICE_ACCOUNT_KEY env var' }),
      };
    }

    const auth = new GoogleAuth({
      credentials: JSON.parse(key),
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    if (!accessTokenResponse || !accessTokenResponse.token) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to get access token' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // CORS not required for same-origin, but harmless if left in
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ token: accessTokenResponse.token, expires_in: 3600 }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Auth function error', details: err.message }),
    };
  }
};
