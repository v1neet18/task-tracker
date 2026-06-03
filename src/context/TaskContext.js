import { createContext, useContext } from "react";

export const TaskContext = createContext({
  tasks: [
    {
      id: "task_001",
      title: "Revise React hooks",
      description: "Build small examples using useState and useEffect",
      priority: "high",
      status: "in-progress",
      dueDate: "2026-05-28",
      tags: ["react", "hooks"],
      createdAt: "2026-05-25T10:30:00.000Z",
      updatedAt: "2026-05-25T10:30:00.000Z",
    },
  ],

  addTask : () => {},
});

export const TaskProvider = TaskContext.Provider

export default function useTask() {
  return useContext(TaskContext)
}
