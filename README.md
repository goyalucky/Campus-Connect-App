# 🎓 Campus Connect App

🚀 **Campus Connect App** is a mobile application built using **React Native** that allows students to easily explore, register, and manage campus events.  
It’s designed to enhance student engagement by providing an intuitive and interactive event management experience — all in one place.

🔗 **Live Demo:** [Campus Connect App on Vercel](https://campus-connect-app-gules.vercel.app/home)

---

## 📱 Features

### 🏠 Home Screen (Event List)
- Fetches event data from a mock API or JSON file.
- Displays:
  - **Event Name**
  - **Category**
  - **Date**
- Includes a **search bar** to filter events by name or category.
- Clicking an event navigates to the **Event Details Screen**.

### 📅 Event Details Screen
- Displays:
  - Event Name  
  - Description  
  - Date  
  - Location  
  - Organizer
- Includes a **“Register” button** that, when tapped, shows a success message:
  > ✅ You have successfully registered for this event!

### 🎟️ Registered Events Screen
- Shows a list of all **registered events**.
- Allows users to **unregister** from events.
- Data persistence using **useState** or **AsyncStorage**.

### 🔀 Navigation
- Built with **React Navigation v6**:
  - **Tab 1:** Home (Event List)
  - **Tab 2:** Registered Events
- Smooth stack + tab navigation experience.

---

## 🧠 Technical Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ React Native | Framework for building cross-platform apps |
| 📦 React Navigation v6 | For tab and stack navigation |
| 🪝 React Hooks | For managing component state and side effects |
| 🌐 Fetch / Axios | For API calls |
| 💾 AsyncStorage | For local data persistence |
| 🎨 StyleSheet | For consistent and reusable UI design |

---

## 📂 Project Structure

CampusConnectApp/
├── src/
│ ├── components/ # Reusable UI components (EventCard, SearchBar, etc.)
│ ├── screens/ # App screens (Home, EventDetails, RegisteredEvents)
│ ├── navigation/ # Stack & Tab navigation setup
│ ├── assets/ # Images, icons, and static resources
│ └── utils/ # Helper functions and constants
├── App.js # Entry point of the app
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

