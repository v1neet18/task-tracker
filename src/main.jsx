import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import TaskListPage from './pages/TaskListPage.jsx'
import CreateTaskPage from './pages/CreateTaskPage.jsx'
import Layout from './Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import TaskDetailsPage from './pages/TaskDetailsPage.jsx'
// import { Layout } from 'lucide-react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<DashboardPage />} />
      <Route path='tasks' element= {<TaskListPage />} />
      <Route path='tasks/new' element={<CreateTaskPage />} />
      <Route path='tasks/:id' element={<TaskDetailsPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
