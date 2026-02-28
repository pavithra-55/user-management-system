# 👤 User Management System

A simple **User Management System** built using **ReactJS (Vite)** and **JSON Server** to perform basic **CRUD operations** (Create, Read, Update, Delete).

This project demonstrates form handling, validation, API integration, and state management using a mock backend.

---

## 🚀 Features

* ✅ Add new users
* ✅ Update existing users
* ✅ View user list
* ✅ Delete users
* ✅ Form validation
* ✅ Mock REST API using JSON Server
* ✅ Responsive UI with Bootstrap
* ✅ Controlled form components in React

---

## 🛠️ Tech Stack

* **Frontend:** ReactJS + Vite
* **Styling:** Bootstrap
* **Mock Backend:** JSON Server
* **Language:** JavaScript (ES6)

---

## 📁 Project Structure

```
user-management-system/
│
├── src/
│   ├── components/
│   │   ├── UserForm.jsx
│   │   ├── UserList.jsx
│   │   └── Button.jsx
│   ├── config/
│   │   └── formFields.js
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/pavithra-55/user-management-system.git
cd user-management-system
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start JSON Server (Mock API)

Run the following command to start the backend server:

```bash
npx json-server --watch db.json --port 3001
```

The API will run at:

```
http://localhost:3001/users
```

---

### 4️⃣ Start React Application

In another terminal:

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Fetch all users |
| POST   | /users     | Add new user    |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

## 🧠 Learning Objectives

This project helped practice:

* React Hooks (`useState`, `useEffect`)
* Controlled Forms
* Form Validation
* CRUD Operations
* API Integration
* Component Reusability
* Mock backend development

---

## 📌 Future Improvements

* Search & filter users
* Pagination
* Authentication
* Backend integration (Node.js / Laravel)
* Redux or Context API state management

---

## 👩‍💻 Author

**Pavithra Saravanan**

Frontend Developer | ReactJS Enthusiast

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!
