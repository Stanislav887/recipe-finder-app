# 🍽 Recipe Finder App (Ionic + Angular)

An Ionic recipe browsing application built using **Ionic Angular** and the **TheMealDB API**. The app allows users to search meals, browse categories, view detailed recipes, and manage a list of favourite meals using local storage.

> ⚠️ This project is still under development and may receive further UI and feature improvements.

---

## 📱 Features

### 🍗 Categories
- Browse recipes by:
  - Chicken
  - Beef
  - Seafood

### 📄 Recipe Details Page
- View full meal instructions
- Expand/collapse instructions
- View ingredient list
- Navigate back to home

### ⭐ Favourites System
- Add/remove meals from favourites
- Persistent storage using Ionic Storage
- Heart toggle button (❤️ / 🤍)
- Real-time UI updates
- Inline feedback message when updating favourites

### 💾 Local Storage
- Stores favourite meal IDs locally
- Loads saved favourites on app start

### 📱 UI / UX Improvements
- Ionic card-based layout
- Responsive design
- Icon-based navigation
- Conditional UI rendering for favourites state
- Inline feedback message system

---

## 🧰 Technologies Used

- Ionic Framework
- Angular (Standalone Components)
- TypeScript
- Capacitor
- Ionic Storage
- TheMealDB API
- Ionicons

---

## 🧠 Core Features Logic

### Toggle Favourites
- Adds/removes meal IDs from storage
- Updates UI state instantly (`isFavourite`)
- Displays feedback message in UI

### Storage Key
