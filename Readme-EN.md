📰 Blogspot — Frontend

Full-Stack MERN Blogging Platform

Modern web interface built with React + Vite, enabling users to create, read, and manage blog posts from a growing community of authors. It consumes the Blogspot API for authentication, post CRUD actions, profile management, and image uploading.

🌍 API Repository: https://github.com/Albertocoge/blogspot-api

🚀 Live App: https://blogspot-app-mauve.vercel.app/

📌 Overview

Blogspot is a Medium-style blogging application where registered users can:

✅ Register and log in securely
✅ Publish blog posts with rich text content
✅ Edit and delete their own posts
✅ Browse and read posts from other writers
✅ Filter posts by category
✅ Explore authors and their publications
✅ Update profile info and avatar
✅ Enjoy a smooth browsing experience with protected routes

🧩 Tech Stack
Category	Technologies
Framework	React + Vite
Styling	Vanilla CSS (index.css)
Routing	React Router DOM v7
State Management	React Context API (userContext)
HTTP Client	Axios
Rich Text Editing	React Quill
Time Formatting	React-Time-Ago
Code Quality	ESLint with recommended rules
📂 Project Structure
src/
│
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Loader.jsx
│   ├── PostAuthor.jsx
│   ├── PostItem.jsx
│   ├── Posts.jsx
│
├── context/
│   └── userContext.jsx
│
├── images/        # Static asset files
│
├── pages/
│   ├── AuthorPosts.jsx
│   ├── Authors.jsx
│   ├── CategoryPosts.jsx
│   ├── CreatePost.jsx
│   ├── Dashboard.jsx
│   ├── DeletePost.jsx
│   ├── EditPost.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── PostDetail.jsx
│   └── Register.jsx
│   └── UserProfile.jsx
│
├── data.js
├── index.css
├── index.jsx

🚀 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Albertocoge/blogspot-app.git
cd blogspot-app

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
VITE_API_URL=https://blogspot-api-production... (or local URL)

4️⃣ Start the development server
npm run dev


Visit:
👉 http://localhost:5173

🔐 Authentication & Security

JWT authentication provided by backend API

Protected routes requiring valid session

UI-level authorization (only authors can modify their posts)

User session stored with React Context

📡 Backend Integration
Feature	Status
Register / Login	✅
Post CRUD	✅
Categories	✅
Avatars & thumbnails upload	✅
List / view authors	✅
Post detail page	✅

🔗 Backend documentation available in its repository.

🎨 Screenshots / Demo Preview

📌 Placeholders included — to be updated with real screenshots:

[Home Page Screenshot]
[Create Post Page Screenshot]
[Dashboard Screenshot]


If you want, I can help you generate high-quality screenshots and GIF demo ✅

👤 Author

Alberto Codoñer
Michael B. Diaz B.
Full-Stack Developer | MERN Stack
🔗 GitHub: https://github.com/Albertocoge

📰 Backend: https://github.com/Albertocoge/blogspot-api

🌍 Live App: https://blogspot-app-mauve.vercel.app/

🪪 License

Distributed under the ISC License.
Feel free to use, modify, and distribute with proper attribution.

🚀 Future Improvements
Feature	Status
Post comments	⏳ Planned
Advanced profile dashboard	⏳ Planned
Cloudinary image hosting	⏳ Planned
Dark mode	🚧 Under review
Tests (Cypress / Jest)	🚧 Future enhancement
⭐ Support the Project

If you like this project, please consider leaving a star ⭐ on GitHub — it helps support my work and motivates further development!
