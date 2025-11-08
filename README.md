# 💰 Expenses – Personal Finance Tracker

## 📌 Project Description

This project is a simple and interactive web application for **tracking and managing personal expenses**.

Users can:

- Set a **total budget**.
- **Add new categorized expenses** (Groceries, Eating Out, Transport, Home, and Subscriptions).
- View **general statistics**, including total expenses, average spending, and balance.
- Check **category totals** and identify the **largest spending category**.
- **Delete individual expenses** or **clear all data** at once.
- Have all data **saved locally (LocalStorage)**, so it persists after refreshing or reopening the page.

## 🧩 Main Features

- Modal form to add new expenses.
- Automatic calculation of:
  - Total expenses
  - Average expense
  - Remaining balance
  - Expenses by category
  - Category with the highest spending
- Dynamic UI updates when adding or removing expenses.
- Persistent data storage using **LocalStorage**.
- Buttons to set a new budget or reset all saved data.

## 🛠️ Technologies Used

- **HTML5** → semantic structure and use of dynamic templates
- **CSS3** → styling and modular layout (stored in `/pages/index.css`)
- **JavaScript** → DOM manipulation, financial calculations, and local data storage

## ♻️ Data Flow Overview

1. The user sets a budget.
2. Expenses are added and stored in the `expenseEntries` array.
3. JavaScript automatically recalculates all metrics and updates the interface.
4. Data is stored in **LocalStorage** for persistence.

## 🔧 Future Improvements

Planned enhancements for upcoming versions:

- 💾 Export expenses as `.csv` or `.pdf`.
- 📱 Better responsiveness for smaller screens (mobile-first design).
- 📊 Add **interactive charts** (e.g., using Chart.js) to visualize spending by category.
- 🌓 Add a **light/dark mode toggle**.
- 🔐 Optional login for multiple users.
