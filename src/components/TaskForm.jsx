import React, { useState } from "react";
// import { dummyTasks } from "../pages/TaskListPage";
import { useNavigate } from "react-router-dom";
import useTask from "../context/TaskContext";

function TaskForm() {

  const navigate = useNavigate();

  // getting addTask here from context;

  const { addTask } = useTask();

  function handleSubmit(e) {
    e.preventDefault();
    // let date = new Date();
    const formData = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      status,
      dueDate,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // dummyTasks.push(formData); do below thing in place of this 
    addTask(formData);

    // console.log(dummyTasks);

    console.log(formData);

    setTitle("");
    setDescription("");
    setPriority("high");
    setStatus("todo");
    setDueDate("");

    navigate("/tasks");
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");

  return (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="px-4 py-3 w-full max-w-xl bg-white shadow-2xl rounded-2xl flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-semibold text-gray-700">
            Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Enter task title"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-gray-700"
          >
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            rows={4}
            placeholder="Enter task description..."
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="priority"
              className="text-sm font-semibold text-gray-700"
            >
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              id="priority"
              // defaultValue="high"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="status"
              className="text-sm font-semibold text-gray-700"
            >
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              id="status"
              // defaultValue="todo"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="dueDate"
              className="text-sm font-semibold text-gray-700"
            >
              Due Date
            </label>

            <input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              id="dueDate"
              type="date"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          {/* <div>
            <label htmlFor="">Tags &lpar;optional&rpar;</label>
            <input type="text" />
          </div> */}
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
