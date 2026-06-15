# Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack and Socket.IO. The application enables secure user authentication, real-time messaging, online user tracking, and seamless communication between users.

## 🚀 Features

* Secure user authentication and authorization using JWT and HTTP-only cookies
* Real-time one-to-one messaging with Socket.IO
* Online/offline user status tracking
* User search functionality
* Persistent chat history stored in MongoDB
* Auto-scrolling chat interface
* Real-time message synchronization
* Responsive and modern user interface

## 🛠️ Tech Stack

### Frontend

* ReactJS
* Redux Toolkit
* Tailwind CSS
* DaisyUI
* Axios
* React Router DOM
* Socket.IO Client

### Backend

* NodeJS
* ExpressJS
* Socket.IO

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Tokens (JWT)
* HTTP-only Cookies

## 📸 Screenshots

## Screenshots

### Login Page

![Login Page](screenshots/login.png)

### Signup Page

![Signup Page](screenshots/signup.png)

### Chat Interface

![Chat Interface](screenshots/chat.png)

### Online Users

![Online Users](screenshots/online-users.png)

## 📂 Project Structure

```bash
chat-application
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── socket
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/PariGoyal27/chat-application.git
cd chat-application
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The application will run at:

```bash
Frontend: http://localhost:3000
Backend: http://localhost:8080
```

## 🔐 Environment Variables

Create a `.env` file in the backend folder and add:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🎯 Key Functionalities

* User Registration & Login
* Secure Authentication using JWT
* Real-Time Messaging
* Online User Detection
* User Search
* Message History Retrieval
* Responsive Chat Interface
* Socket.IO Based Communication

## 📈 Future Enhancements

* Group Chat Support
* Typing Indicators
* Image and File Sharing
* Message Notifications
* Read Receipts
* Emoji Support
* User Profile Customization

## 👩‍💻 Author

**Pari Goyal**

GitHub: https://github.com/PariGoyal27

LinkedIn: https://www.linkedin.com/in/pari-goyal-b3194522a/
