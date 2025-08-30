# Learn with Rav - AI Tutor Website

A beautiful, interactive AI tutoring platform powered by Vertex AI Search, designed to help users learn AI/ML concepts through structured, comprehensive responses.

## Features

- 🎨 Beautiful, warm design with soft gradients and elegant typography
- 🔍 Vertex AI Search integration for intelligent responses
- 📚 Structured learning with theory, math, insights, and sources
- 📱 Fully responsive design for all devices
- ✨ Smooth animations and micro-interactions
- 🔐 Secure authentication backend

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Google Cloud Project with Vertex AI Search enabled
- Service account credentials

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up your environment variables in `.env` (already configured with your service account)

3. Start the authentication server:
```bash
npm run auth-server
```

4. In a separate terminal, start the development server:
```bash
npm run dev
```

Or run both simultaneously:
```bash
npm run dev:full
```

### How It Works

1. **Authentication**: The backend server (`server/auth.js`) uses your Google Cloud service account to generate access tokens
2. **Frontend**: The React app fetches tokens from the backend and uses them to authenticate with Vertex AI Search
3. **Search Widget**: The Vertex AI search widget provides intelligent responses to user queries
4. **Beautiful UI**: All responses are displayed in a structured, visually appealing format

### Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Main header with title and tagline
│   ├── SearchBox.tsx           # Search interface with Vertex AI widget
│   ├── ResponseDisplay.tsx     # Structured response display
│   ├── LoadingAnimation.tsx    # Loading states and animations
│   └── DecorativeElements.tsx  # Background decorative elements
├── data/
│   └── mockResponses.ts        # Fallback responses for development
├── App.tsx                     # Main application component
└── index.css                   # Global styles and animations

server/
└── auth.js                     # Authentication server for Google Cloud
```

### Customization

- **Colors**: Modify the Tailwind color scheme in `src/index.css`
- **Content**: Update mock responses in `src/data/mockResponses.ts`
- **Styling**: Adjust component styles in individual component files
- **Authentication**: Modify auth logic in `server/auth.js`

### Deployment

For production deployment, ensure:
1. Your service account credentials are securely stored
2. The authentication server is deployed and accessible
3. CORS settings are updated for your production domain
4. Environment variables are properly configured

## Security Notes

- Service account credentials are stored in environment variables
- Authentication tokens are generated server-side
- CORS is configured to only allow requests from your frontend domain
- Tokens have a 1-hour expiration for security