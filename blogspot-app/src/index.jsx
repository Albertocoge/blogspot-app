import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './compoments/Layout.jsx'
import ErrorPage from './assets/pages/ErrorPage.jsx'
import Home from './assets/pages/Home.jsx'
import PostDetail from './assets/pages/PostDetail.jsx'
import Register from './assets/pages/Register.jsx'
import Login from './assets/pages/Login.jsx'
import UserProfile from './assets/pages/UserProfile.jsx'
import CreatePost from './assets/pages/CreatePost.jsx'
import Authors from './assets/pages/Authors.jsx'
import CategoryPosts from './assets/pages/CategoryPosts.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'
import EditPost from './assets/pages/EditPost.jsx'
import Logout from './assets/pages/Logout.jsx'

const router = createBrowserRouter([
{
path: "/",
element: <Layout/>,
errorElement: <ErrorPage/>,
children: [
  {index: true, element:<Home/>},
  {path: "posts/:id", element: <PostDetail/>},
  {path: "register", element: <Register/>},
  {path: "Login", element: <Login/>},
  {path: "profile/:id", element: <UserProfile/>},
  {path: "authors", element: <Authors/>},
  {path: "create", element: <CreatePost/>},
  {path: "posts/categories/:category", element: <CategoryPosts/>},
  {path: "posts/users/:id", element: <Dashboard/>},
  {path: "posts/:id/edit", element: <EditPost/>},
  {path: "logout", element: <Logout/>},
]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)