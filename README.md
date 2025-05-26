# A MERN Stack Blogging Platform

A modern full-stack blogging platform built with the **MERN stack** – MongoDB, Express.js, React.js, and Node.js. It allows users to register, log in securely using JWT, create and manage blog posts, browse content, and organize blogs by categories. The frontend is styled with clean and minimal **plain CSS** for a lightweight experience.

---

## 🌐 Live Demo

> _https://blog-mern-frontend-8fkj.onrender.com/_

---

## 📁 Project Structure

```

├── api/                        # Backend - Node.js + Express
│   ├── images/                # Uploaded blog images & avatars
│   ├── models/                # Mongoose schemas (User, Post, Category)
│   ├── routes/                # Express API routes
│   └── index.js               # Entry point for the backend server
│
├── client/                    # Frontend - React
│   ├── public/                # Static files and index.html
│   └── src/                   # React source code
│       ├── components/        # Reusable UI components
│       ├── context/           # Global auth context & reducer
│       ├── pages/             # Main pages (login, register, home, write etc.)
│       └── App.jsx            # Main app component
└── README.md

````

---

## 🎯 Features

- 🔐 **JWT Authentication** – Secure login & sign-up using username & password
- 🧠 **State Management** – Global user state using React Context API
- 📚 **CRUD Blog Posts** – Create, Read, Update, Delete blog posts
- 🗂️ **Categories** – Organize posts with categories
- 📸 **Image Uploads** – Upload blog images & profile pictures
- 🌐 **Responsive UI** – Clean layout with CSS (no external libraries)
- ⚠️ **404 Page** – Custom "Page Not Found" view

---

## 🧑‍💻 Tech Stack

| Technology | Role |
|------------|------|
| **MongoDB** | NoSQL database to store users, posts & categories |
| **Express.js** | Node.js framework for RESTful API development |
| **React.js** | Frontend library for building UI & SPA routing |
| **Node.js** | Backend runtime environment |
| **JWT** | JSON Web Token for user authentication |
| **bcryptjs** | Password hashing |
| **Axios** | HTTP requests from frontend |
| **React Router DOM** | Client-side routing |
| **CSS** | Styling the frontend |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AkshatPS/Blog-MERN.git
cd Blog-MERN
````

### 2. Setup Backend

```bash
cd api
npm install
```

* Create a `.env` file in `/api`:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

* Start the backend:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

> React app will run on `http://localhost:3000`

---

## 📸 Sample Pages

* **Home Page** – List of all blog posts
* **Single Post** – Full blog with edit/delete options
* **Write Page** – Create or edit your blog
* **Login & Register** – Auth forms
* **Settings** – Update user profile
* **About / Contact / 404** – Static info pages

---

## 📌 Future Enhancements

* ⏳ Pagination & Search Functionality
* 📝 Rich Text Editor for blogs
* 🧑‍🤝‍🧑 User profiles with bio and stats
* 💬 Comment & like system
* 🌈 Dark/Light theme toggle
* 🔗 Social sharing support

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request if you’d like to help.

---

## 🙋‍♂️ Author

**Akshat Pratap Singh**
*Full Stack Developer & Engineering Student*

[LinkedIn](https://www.linkedin.com/in/akshat-p-singh/) • [GitHub](https://github.com/AkshatPS)

---

