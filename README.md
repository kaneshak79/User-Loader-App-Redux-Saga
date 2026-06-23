# 🚀 Redux Saga User Loader App

A simple React application demonstrating **Redux Toolkit + Redux Saga** for handling asynchronous API calls and state management.

---

## 📌 Features

* Fetch users from a public API
* Redux Toolkit for state management
* Redux Saga for handling side effects (async API calls)
* Loading and error handling states
* Clean and simple UI

---

## 🛠️ Tech Stack

* React (Vite)
* Redux Toolkit
* Redux Saga
* React-Redux
* Axios
* JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
 ├── redux/
 │    ├── store.js
 │    ├── userSlice.js
 │    └── saga.js
 │
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone project

```
git clone <your-repo-url>
cd redux-saga-demo
```

### 2. Install dependencies

```
npm install
```

### 3. Install required packages

```
npm install @reduxjs/toolkit react-redux redux-saga axios
```

### 4. Run the project

```
npm run dev
```

---

## 🔄 How it works

1. User clicks **"Load Users"** button
2. Redux dispatches `fetchUsersRequest` action
3. Redux Saga listens for the action
4. Saga makes API call using Axios
5. On success → data is stored in Redux store
6. React UI updates automatically from store

---

## 🌐 API Used

* JSONPlaceholder Users API
  https://jsonplaceholder.typicode.com/users

---

## 📸 UI Flow

Button Click → Redux Action → Saga API Call → Redux Store Update → UI Render

---

## 🎯 Learning Outcome

* Understanding Redux architecture
* Handling async operations with Redux Saga
* Middleware concept in Redux
* State management in React applications

---

## 👨‍💻 Author

Kanesha K
GitHub: https://github.com/kaneshak79
LinkedIn: https://linkedin.com/in/kanesha-k-7308671a6
