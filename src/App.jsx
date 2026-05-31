import { useState } from 'react'
import TaskListPage from './pages/TaskListPage'
import CreateTaskPage from './pages/CreateTaskPage'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <>
      {/* <TaskListPage /> */}
      <div className='flex justify-center py-3 w-full'>
        <CreateTaskPage />
        {/* <DashboardPage /> */}
      </div>
    </>
  )
}

export default App
