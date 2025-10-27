📰 Blogspot — Frontend

Plataforma de Blogging Full-Stack MERN

Interfaz web desarrollada con React + Vite que permite a los usuarios crear y leer publicaciones de una comunidad de autores. Se conecta con la API Blogspot para gestionar autenticación, posts, imágenes y perfiles.

🌍 API Backend: https://github.com/Albertocoge/blogspot-api

🚀 App Online: https://blogspot-app-mauve.vercel.app/

📌 Descripción

Blogspot es una aplicación full-stack estilo Medium, donde los usuarios pueden:

✅ Crear, editar y eliminar sus propios posts
✅ Leer artículos de otros autores
✅ Filtrar según categoría
✅ Gestionar su perfil y avatar
✅ Iniciar sesión y mantener sesión con autenticación JWT
✅ Navegación fluida gracias a React Router

🧩 Tecnologías Utilizadas
Área	Tecnologías
Frontend	React + Vite
UI	CSS modular (index.css)
Estado	React Context API (userContext)
Routing	React Router DOM v7
API Client	Axios
Rich Text Editor	React Quill
Utilidades	React-Time-Ago, React Icons
Estándares	ESLint configurado con recomendaciones oficiales
📂 Estructura del Proyecto
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
├── images/        # Recursos gráficos
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

⚙️ Configuración e Instalación
1️⃣ Clonar el proyecto
git clone https://github.com/Albertocoge/blogspot-app.git
cd blogspot-app

2️⃣ Instalar dependencias
npm install

3️⃣ Variables de entorno

Crear archivo .env en raíz:

VITE_API_URL=https://blogspot-api-production... (o localhost)

4️⃣ Ejecutar en desarrollo
npm run dev


Acceder a:
👉 http://localhost:5173

🔐 Autenticación & Seguridad

Login mediante JWT proporcionado por la API

Guardia de rutas para páginas protegidas

Botones de edición/borrado solo visibles para el autor del post

Almacenamiento del usuario en Context API

📡 Integración con Backend
Funcionalidad	Aplicación
Registro/Login	✅
CRUD de Posts	✅
Thumbnails y Avatares	✅
Categorías	✅
Ver autores	✅
Página de detalle	✅

👉 La API utiliza MongoDB, JWT y manejo de errores (más info en el repo backend)

🎨 Capturas / Demo visual

📌 Aquí podrás añadir imágenes del proyecto más adelante:

[Imagen de la página Home]
[Imagen de crear post]
[Imagen Dashboard usuario]


Si quieres, puedo ayudarte a generar capturas y un GIF promocional ✅

👤 Autor

Alberto Codoñer
Michael B. Diaz B.
Desarrollador Full Stack MERN
🔗 GitHub: https://github.com/Albertocoge

📰 API Backend: https://github.com/Albertocoge/blogspot-api

🌍 App Deploy: https://blogspot-app-mauve.vercel.app/

🪪 Licencia

Este proyecto está bajo la licencia ISC.
Puedes usarlo, modificarlo y distribuirlo citando al autor.

🚀 Posibles Mejoras
Feature	Estado
Comentarios en posts	⏳ Pendiente
Panel avanzado de usuario	⏳ Pendiente
Upload en Cloudinary	⏳ Pendiente
Modo oscuro	🚧 En estudio
Tests (Cypress / Jest)	🚧 Futuro
⭐️ Apoya el proyecto

Si te ha gustado este proyecto, regalarle una estrella ⭐ en GitHub ayuda muchísimo 💙
