Soil Farming Agent

A web application built with React and Firebase to help users explore soil types and recommended crops, along with vendor information. The system supports Admins (who manage content) and Users (who can register, login, and view data).

🔧 Features
------------
👤 User
---------

Register and login securely using Firebase Authentication

View a list of soil types and their suitable crops

View seed/crop distributors with location and contact info

Logout functionality for session management

🛠 Admin
----------

Login securely

Post new soil details (soil type, crops)

Post new distributor/vendor details


## 🛠️ Technologies Used

- **React** – front-end library for building UI
- **JavaScript** – countdown logic and state management
- **HTML5** – semantic structure
- **CSS3** – custom styling
-**Firebase** - back-end 

---

📁 Project Structure

src/

├── Components/

│   ├── Login.js

│   ├── Register.js

│   ├── AdminDashboard.js

│   ├── UserDashboard.js

│   └── ...

├── firebase.js

├── App.js

└── index.js
------------------------------------
🧭 Workflow: How to Use the Web App
-----------------------------------

[🔗 View the Live Demo](https://Tempest200.github.io/soil-farming-agent)  


Go to the Login Page

Example :-
 For Admin id:- admin@gmail.com     
           pass:-123456
 
 For User id:- user@gmail.com
            pass:-123456


Click Register if you're a new user

Choose a role: admin or user

Admins:

Login and post soil and distributor information

Users:

Login and access the User Dashboard

View soil details and vendor contact info

Use the Logout button to exit your session


🛡 Firebase Firestore Structure

roles (Collection)
├── {uid} → { role: "admin" | "user" }

soils (Collection)
├── {autoId} → { type: "Clay", crops: ["Wheat", "Cotton"] }

vendors (Collection)
├── {autoId} → { name: "AgroCorp", location: "Nashik", phone: "1234567890" }


-------------------------------

📌 Future Enhancements

Search/filter functionality for soil and vendors

Admin edit/delete capability

UI Improvements with animations