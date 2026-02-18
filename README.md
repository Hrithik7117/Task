# Task Manager Project

## Overview
This is a full-stack Task Manager project with authentication and CRUD operations for tasks. It includes:

- **Backend:** Node.js + Express + MongoDB
- **Frontend:** React (basic UI)
- **Authentication:** JWT with HTTP-only cookies
- **Role-based access:** Users and Admins

---

## Features

1. **Authentication**
   - User registration (`POST /auth/register`)
   - User login (`POST /auth/login`)
   - Admin role can delete tasks

2. **Task Management**
   - Create a task (`POST /tasks`)
   - Get all tasks (`GET /tasks`)
   - Delete a task (`DELETE /tasks/:id`) – admin only

3. **Frontend**
   - Basic React UI to register, login, create, list, and delete tasks
   - Connected to backend APIs using Axios (`withCredentials: true`)

4. **API Documentation**
   - Postman collection included: `PostmanCollection.json`  
   - Can be imported into Postman to test all endpoints
  

   ## How to use Postman Collection

   1. **Register User**
   -  Register:POST /api/v1/auth/register → create a new user (password ≥ 6 chara
   - Login: POST /api/v1/auth/login → copy the JWT token into {{token}}.
  

   2. **Tasks CRUD**
   - POST /api/v1/tasks → create a task
   - GET /api/v1/tasks → get tasks

   3. **Notes**
   - All task requests require JWT in Authorization header. 
   - Replace {{taskId}} with a valid task ID for deletion.
   

---


## Setup Instructions

### Backend
1. Clone the repo:  
   ```bash
   git clone https://github.com/yourusername/Task-manager.git
   cd backend
   
2. Install dependencies: 
    
   ```bash
   npm install

3. .env file in the backend folder with the following content:

   MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000



5. Start the backend server

   ```bash
   npm run dev

#### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   
2. Install dependencies:

    ```bash
   npm install

3.Start the React development server:

 ```bash
   npm run dev




