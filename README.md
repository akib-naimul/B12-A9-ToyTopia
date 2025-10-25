# 🧸 ToyTopia – A Local Kids Toy Store Platform

**Live Website: https://famous-blini-8c1aa6.netlify.app/

---

## 🎯 Project Purpose

**ToyTopia** is a vibrant and playful online toy marketplace designed for families to discover, explore, and support local toy sellers.  
Users can browse a wide range of toys, view detailed information, and securely manage their own toy listings.  
The platform emphasizes **fun, engagement, and safety**, providing a smooth experience for both visitors and registered users.

---

## 🌟 Key Features

### 🧩 Core Functionality
- 🔐 **User Authentication:** Email/Password and Google login using Firebase Auth.
- 👤 **My Profile:** Protected route where logged-in users can view and update their profile (name, photoURL) using Firebase’s `updateProfile()` method.
- 🎁 **Add Toy / My Toys / All Toys:**  
  - Add, view, update, and delete toy listings.  
  - Each toy includes name, category, price, rating, stock, and image.
- 🧒 **Toy Details Page (Protected):**  
  - Accessible only to logged-in users.  
  - Shows complete toy info and includes a **“Try Now” form** (Name + Email + Submit with toast message).
- 🧱 **Dynamic JSON Data:** Hosted toy images on [PostImages](https://postimages.org) and fetched dynamically via `toys.json`.
- 📰 **Extra Route:** “My Profile” page (protected) where users can view and edit their details.

---

### 🎨 UI & Design
- 💫 **Dark theme** with professional modern design (Tailwind + DaisyUI)
- 🌈 **Swiper Slider** in navbar banner
- 🪄 **AOS Animations** on scroll for gallery, cards, and sections
- 📱 Fully **responsive design** (mobile, tablet, desktop)
- 🧭 Persistent **Navbar & Footer** across all pages
- ⚙️ **Dynamic Titles** via custom `useTitle()` hook
- 📸 **Gallery section** with interactive hover and smooth transitions

---

### 💡 Additional Functionalities
- 🧠 **Private Routes** using React Router
- 📃 **404 Not Found Page**
- 🔁 **Persistent Auth State** (`onAuthStateChanged` ensures user data stays on refresh)
- 🔔 **Notifications:** Using `react-hot-toast` for success/error alerts
- 👁️ **Show/Hide Password Toggle** on registration page
- ✉️ **Forget Password:** Functional reset page with pre-filled email
- 📊 **Sorting & Filtering:** In “All Toys” and “My Toys” pages (by price, rating, date)
- ⏳ **Loader/Spinner** during authentication and data fetch

---

## 🧰 Technologies & npm Packages Used

| Category | Packages / Tools |
|-----------|------------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Routing** | react-router-dom |
| **Authentication** | Firebase Authentication |
| **Animations** | AOS (Animate on Scroll) |
| **Slider** | Swiper |
| **Notifications** | react-hot-toast |
| **Password Toggle** | React State (custom implementation) |
| **Hosting** | Netlify / Firebase Hosting |
| **Environment Variables** | `.env.local` for secure Firebase config |

---

## 🧱 Folder Structure

