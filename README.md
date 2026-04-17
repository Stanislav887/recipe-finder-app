# 🍽 Recipe Finder App (Ionic + Angular)

An Ionic recipe browsing application built using **Ionic Angular** and the **TheMealDB API**. The app allows users to search meals, browse categories, view detailed recipes, and manage a list of favourite meals using local storage.

> ⚠️ This project is still under development and may receive further UI and feature improvements.

---

## ▶️ Installation

```bash
git clone https://github.com/Stanislav887/recipe-finder-app.git
cd recipe-finder-app
npm install
ionic serve
```

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

---

## 📸 Screenshots

### Home Page
<img width="365" alt="Home Page" src="https://github.com/user-attachments/assets/296d6773-cf07-40aa-9a6a-8bebc5217552" />

---

### Chicken Page
<img width="365" alt="Chicken Page" src="https://github.com/user-attachments/assets/6b8e1b0c-a180-4a5b-9e1b-b9ce68b11aa0" />

---

### Beef Page
<img width="365" alt="Beef Page" src="https://github.com/user-attachments/assets/8b3eaa49-5408-435c-aa71-6775c71cf305" />

---

### Seafood Page
<img width="365" alt="Seafood Page" src="https://github.com/user-attachments/assets/2a77b5a0-d110-4723-a926-8f7c0cc0b73e" />

---

### Recipe Details Page
<img width="365" alt="Recipe Details Page" src="https://github.com/user-attachments/assets/a2e113a5-4fdd-4094-93d8-c3b6c8f1945f" />

---

### Favourites Page
<img width="365" alt="Favourites Page" src="https://github.com/user-attachments/assets/bebe62d7-55a7-461c-9dd5-b8dfeee1d21a" />
