# 💰 Expense Tracker App

A simple and responsive Expense Tracker built with **React** and **Tailwind CSS**. It allows users to **add**, **search**, **sort**, and **delete** expenses, while storing data in **localStorage** for persistence.

---

## 🚀 Features

- ✅ Add new expenses with description, amount, and category
- ✅ Display expenses in a styled table
- ✅ Real-time search by description or category
- ✅ Sort expenses by category or description
- ✅ Delete individual expenses
- ✅ Responsive UI built with Tailwind CSS
- ✅ Data stored in `localStorage` (persists across refresh)

---

## 🖼️ Screenshot

![Expense Tracker Screenshot](./public/expense-tracker-screenshot.png)

---

## 🛠️ Technologies Used

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- HTML5 & JSX
- LocalStorage API
- Git for version control

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/elizabeth-7664/expense-tracker.git

# Navigate to project folder
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev

🧪 How It Works

    The form collects expense data (description, amount, category)

    On submit, the data is added to the state and saved in localStorage

    The table dynamically updates with each new entry

    Search input filters expenses in real time

    Sorting is handled using JavaScript's array .sort() method

    Delete button removes expenses from the state and localStorage

🌍 Live Demo

Live URL: https://my-live-site-url.netlify.app
📁 Project Structure

expense-tracker/
│
├── public/
│   └── expense-tracker-screenshot.png
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseTable.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── tailwind.config.js
├── package.json
└── README.md

📌 Assignment Rubric Coverage

    ✅ Expense Table — Fully implemented

    ✅ Form for Adding Expenses — Functional and dynamic

    ✅ Search Functionality — Works in real-time

    ✅ Sorting Functionality — By category or description

    ✅ Delete Functionality — Updates the UI and storage

    ✅ UI/UX Design — Built with Tailwind, responsive, and user-friendly

    ✅ Code Structure — Separated components and clean logic

