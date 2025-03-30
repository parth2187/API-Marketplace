# API Marketplace Cuvette Hand On Project 

---
## Project Description 

This is the project where user can 

## Getting Started

This project requires the following software to be intstalled on your system
1. NodeJS / NPM - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Git - [https://git-scm.com/downloads](https://git-scm.com/downloads)

### Getting a copy of this starter 

You can simply fork this folder to start working on it.

To push your changes to Github/Gitlab you need to create a new repository and push the changes there.

## Folder Structure

This is the predefined folder structure for this project. You can create new folder and files as per your requirement inside the `src` folder inside frontend or backend.

```
backend
    src
        middlewares -> create and store new middlewares here
        models -> create and store new models here
        routes -> create and store new route groups here
        utils -> create and store new utilities here

frontend
    src# API Marketplace - Cuvette Hands-On Project

A full-stack MERN application that serves as a marketplace for API endpoints. Users can publish, discover, and manage API endpoints through a comprehensive interface with complete CRUD functionality.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Routes](#frontend-routes)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The API Marketplace is a platform where developers can publish their API endpoints for others to discover and use. This project demonstrates a full-stack implementation using the MERN stack with complete CRUD operations, allowing users to create, read, update, and delete API listings through an intuitive interface connected to a MongoDB database.

## Features

- **User Authentication**: Register, login, and profile management for API publishers and consumers
- **API Management**: 
  - Create and publish new API endpoints with documentation
  - Browse and search available APIs by category, rating, or keywords
  - Update API details, documentation, and endpoints
  - Delete or deprecate APIs
- **API Testing Console**: Test endpoints directly from the platform
- **Documentation Generation**: Automatic documentation generation for published APIs
- **Analytics Dashboard**: Track API usage and performance metrics
- **Rating System**: Allow users to rate and review APIs
- **Responsive UI**: Mobile-friendly interface built with React
- **RESTful API**: Backend API built with Express.js
- **Database Integration**: MongoDB for data persistence
- **Form Validation**: Client and server-side validation

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- CSS/SCSS for styling
- Redux for state management
- JSON Schema Form for dynamic form generation
- Swagger UI for API documentation display

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- Express Validator for request validation
- Multer for file uploads
- Cors for cross-origin resource sharing

## Project Structure

```
api-marketplace/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux state management
│   │   │   ├── actions/    # Redux actions
│   │   │   ├── reducers/   # Redux reducers
│   │   │   └── store.js    # Redux store configuration
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Application entry point
│   └── package.json
│
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   │   ├── authController.js
│   │   ├── apiController.js
│   │   ├── userController.js
│   │   └── analyticsController.js
│   ├── middleware/         # Custom middleware
│   │   ├── auth.js         # Authentication middleware
│   │   ├── error.js        # Error handling middleware
│   │   └── upload.js       # File upload middleware
│   ├── models/             # Mongoose models
│   │   ├── User.js
│   │   ├── Api.js
│   │   ├── Endpoint.js
│   │   └── Analytics.js
│   ├── routes/             # API route definitions
│   │   ├── auth.js
│   │   ├── apis.js
│   │   ├── users.js
│   │   └── analytics.js
│   ├── utils/              # Utility functions
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json
│
├── .env.example            # Example environment variables
├── .gitignore
├── package.json            # Root package.json for scripts
└── README.md               # Project documentation
```

## Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB (local instance or MongoDB Atlas account)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/api-marketplace.git
   cd api-marketplace
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

## Configuration

1. Create a `.env` file in the server directory based on the `.env.example` file:
   ```
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/api-marketplace
   # For MongoDB Atlas: MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/api-marketplace

   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d

   # Email Configuration (optional for notifications)
   EMAIL_SERVICE=gmail
   EMAIL_USERNAME=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password

   # Optional: CORS Configuration
   CLIENT_URL=http://localhost:3000
   ```

2. If you're using MongoDB Atlas, create a database and get your connection string.

## Running the Application

### Development Mode

1. Start the server:
   ```bash
   cd server
   npm run dev
   ```

2. In a new terminal, start the client:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Production Mode

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. Start the server in production mode:
   ```bash
   cd ../server
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/update-profile` - Update user profile

### APIs
- `GET /api/apis` - Get all APIs (with optional filtering)
- `GET /api/apis/:id` - Get a single API by ID
- `POST /api/apis` - Create a new API listing
- `PUT /api/apis/:id` - Update an API listing
- `DELETE /api/apis/:id` - Delete an API listing
- `POST /api/apis/:id/rate` - Rate an API

### Endpoints
- `GET /api/apis/:apiId/endpoints` - Get all endpoints for an API
- `GET /api/apis/:apiId/endpoints/:id` - Get a single endpoint
- `POST /api/apis/:apiId/endpoints` - Create a new endpoint
- `PUT /api/apis/:apiId/endpoints/:id` - Update an endpoint
- `DELETE /api/apis/:apiId/endpoints/:id` - Delete an endpoint
- `POST /api/apis/:apiId/endpoints/:id/test` - Test an endpoint

### Analytics
- `GET /api/analytics/apis/:apiId` - Get usage analytics for an API
- `GET /api/analytics/user` - Get analytics for current user's APIs

## Frontend Routes

- `/` - Home page / API marketplace
- `/login` - Login page
- `/register` - Registration page
- `/profile` - User profile page
- `/dashboard` - User dashboard
- `/apis` - Browse all APIs
- `/apis/new` - Create a new API
- `/apis/:id` - View API details
- `/apis/:id/edit` - Edit an API
- `/apis/:id/endpoints` - View API endpoints
- `/apis/:id/endpoints/new` - Add new endpoint
- `/apis/:id/endpoints/:endpointId` - View endpoint details
- `/apis/:id/endpoints/:endpointId/edit` - Edit endpoint
- `/analytics` - View analytics

## Testing

### Backend Testing

```bash
cd server
npm test
```

### Frontend Testing

```bash
cd client
npm test
```

## Deployment

### Backend Deployment

The backend can be deployed to platforms like Heroku, Digital Ocean, or AWS.

Example for Heroku:
```bash
heroku create
git push heroku main
```

### Frontend Deployment

The React frontend can be deployed to services like Netlify, Vercel, or GitHub Pages.

Example for Netlify:
1. Build your React app: `npm run build`
2. Deploy using the Netlify CLI or connect your GitHub repository to Netlify

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
        components -> create and store components here
        pages -> create and store pages here
        utils -> create and store utilities here

```

