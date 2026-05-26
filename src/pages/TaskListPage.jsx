import React from "react";
import TaskCard from "../components/TaskCard";

function TaskListPage() {
  const tasks = [
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
    {
      id: "task_002",
      title: "Solve Binary Search problems",
      description: "Practice LeetCode medium questions on binary search",
      priority: "medium",
      status: "todo",
      dueDate: "2026-05-30",
      tags: ["dsa", "leetcode"],
      createdAt: "2026-05-24T09:15:00.000Z",
      updatedAt: "2026-05-24T09:15:00.000Z",
    },
    {
      id: "task_003",
      title: "Build Tailwind dashboard UI",
      description: "Create responsive dashboard cards and sidebar layout",
      priority: "high",
      status: "done",
      dueDate: "2026-05-22",
      tags: ["tailwind", "ui"],
      createdAt: "2026-05-20T08:00:00.000Z",
      updatedAt: "2026-05-22T18:45:00.000Z",
    },
    {
      id: "task_004",
      title: "Prepare Node.js notes",
      description: "Write detailed notes for Express middleware and routing",
      priority: "low",
      status: "todo",
      dueDate: "2026-06-02",
      tags: ["nodejs", "backend"],
      createdAt: "2026-05-21T11:20:00.000Z",
      updatedAt: "2026-05-21T11:20:00.000Z",
    },
    {
      id: "task_005",
      title: "English speaking practice",
      description: "Speak for 15 minutes on a random topic",
      priority: "medium",
      status: "in-progress",
      dueDate: "2026-05-27",
      tags: ["english", "practice"],
      createdAt: "2026-05-25T07:00:00.000Z",
      updatedAt: "2026-05-25T07:30:00.000Z",
    },
    {
      id: "task_006",
      title: "Learn Solidity mappings",
      description: "Understand mappings with small smart contract examples",
      priority: "high",
      status: "todo",
      dueDate: "2026-06-01",
      tags: ["solidity", "blockchain"],
      createdAt: "2026-05-23T14:40:00.000Z",
      updatedAt: "2026-05-23T14:40:00.000Z",
    },
    {
      id: "task_007",
      title: "Gym workout",
      description: "Focus on chest and triceps exercises",
      priority: "medium",
      status: "done",
      dueDate: "2026-05-26",
      tags: ["fitness", "health"],
      createdAt: "2026-05-26T05:30:00.000Z",
      updatedAt: "2026-05-26T07:00:00.000Z",
    },
    {
      id: "task_008",
      title: "Read Atomic Habits",
      description: "Finish chapter 4 and take notes",
      priority: "low",
      status: "in-progress",
      dueDate: "2026-05-29",
      tags: ["books", "self-improvement"],
      createdAt: "2026-05-22T16:10:00.000Z",
      updatedAt: "2026-05-25T19:00:00.000Z",
    },
  ];

  return (
    <div className="w-full h-screen px-5 py-10">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
        {tasks.map((task) => (
          <TaskCard
            tags={task.tags}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
            dueDate={new Date(task.dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            createdAt={new Date(task.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskListPage;
