import { MoveLeft } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'
// import { dummyTasks } from './TaskListPage';
import useTask from '../context/TaskContext';

function TaskDetailsPage() {

  const { id } = useParams();

  const { tasks } = useTask();

  const task = tasks.find((task) => task.id === id);

  console.log(task);
  return (
    <div className='px-4 py-3 rounded-md shadow-sm'>
      {/* upper div */}
      <div className='flex flex-col gap-2'>
        <p className='font-medium text-gray-500'>
          <MoveLeft />
          Back to tasks
        </p>

        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold'>{task.title}</h2>
          
          {/* edit / delete buttons div */}
          <div className='flex gap-2'>
            <button className='px-3 py-1 rounded-md border border-blue-500'>Edit</button>
            <button className='px-3 py-1 rounded-md border border-red-500'>Delete</button>
          </div>
        </div>

        <div>
          <select
            className='px-3 py-1 font-semibold bg-green-100 text-green-600'
            value={task.status}
          >
            <option value="todo">todo</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </div>

      {/* lower div */}
      {/* for now we are styling just justify-between */}
      <div className="flex justify-between">
        {/* left side div */}
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <span>Due Date</span>
            <p>{task.dueDate}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <span>Category</span>
            <p>{task.tags? task.tags[0]: "Misc"}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <span>Priority</span>
            <p>{task.priority}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <span>Created At</span>
            <p>{task.createdAt}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <span>Updated At</span>
            <p>{task.updatedAt}</p>
          </div>
        </div>

        {/* right side description div */}
        <div>
          <h4>Description</h4>
          <p>
            {task.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsPage