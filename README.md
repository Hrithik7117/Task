# Task Manager App (Scalable REST API + React Frontend)

> A scalable, secure full-stack task management application with user authentication, role-based access control, and a clean React + Tailwind frontend.

---

## Features

### Backend (Node.js + Express + MongoDB)

- User registration and login with **hashed passwords** and **JWT authentication**
- Role-based access control (User vs Admin)
- CRUD APIs for tasks linked to authenticated users
- API versioning (`/api/v1/`)
- Global error handling and input validation
- Modular, scalable project structure using ES modules
- MongoDB data storage with Mongoose models

### Frontend (React + Tailwind CSS)

- Responsive UI with clean Tailwind styling
- User registration and login forms
- Protected dashboard accessible only with valid JWT
- Task management (create, list, delete tasks)
- Axios API client with JWT interceptor for authorization headers
- React Router for client-side routing with protected routes


---

### Setup Instructions

#### Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   
2. Install dependencies: 
npm install

3. .env file in the backend folder with the following content:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

4. Start the backend server
npm run dev

#### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   
2. Install dependencies: 
npm install

3.Start the React development server:
npm run dev




