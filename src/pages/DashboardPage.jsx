import React from "react";
import DashBoxCard from "../components/DashBoxCard";
import { tasks } from "./TaskListPage"
// import { AlertTriangle } from "lucide-react";
function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        <DashBoxCard />
        <DashBoxCard />
        <DashBoxCard />
        <DashBoxCard />
      </div>
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold">
            Recent Tasks
          </h3>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50 border-b">
            <tr className="border-b hover:bg-slate-50 transition-colors">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Task Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Tags</th>
              {/* <th>Progress</th> */}
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-800">
                    <p className="font-medium">
                      {task.title}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                      {task.priority}
                    </span>

                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800">{task.dueDate}</td>
                  <td className="px-6 py-4 text-sm text-slate-800">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded-md bg-violet-100 text-violet-600">
                        {task.tags[0]}
                      </span>

                      {task.tags[1] && (
                        <span className="px-2 py-1 rounded-md bg-violet-100 text-violet-600">
                          {task.tags[1]}
                        </span>
                      )}
                    </div>
                  </td>
                  {/* <td></td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardPage;
