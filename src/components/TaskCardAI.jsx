import React from "react";

const priorityStyles = {
  high: "bg-red-100 text-red-600",
  medium: "bg-yellow-100 text-yellow-600",
  low: "bg-green-100 text-green-600",
};

const statusStyles = {
  todo: "bg-gray-100 text-gray-600",
  "in-progress": "bg-blue-100 text-blue-600",
  completed: "bg-green-100 text-green-600",
};

const tagStyles = [
  "bg-cyan-100 text-cyan-700",
  "bg-purple-100 text-purple-700",
  "bg-green-100 text-green-700",
  "bg-pink-100 text-pink-700",
  "bg-orange-100 text-orange-700",
];

function TaskCardAI({
  tags = ["Misc"],
  title,
  description,
  priority,
  status,
  dueDate,
  createdAt,
}) {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex-1">
        {/* Tag + menu */}
        <div className="flex items-center justify-between mb-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${tagStyles[Math.floor(Math.random() * tagStyles.length)]}`}
          >
            {tags[0]}
          </span>

          <button className="text-gray-400 hover:text-gray-600 transition">
            ⋯
          </button>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* Bottom Section */}
      <div className="mt-6">
        {/* Priority + Status */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${priorityStyles[priority]}`}
          >
            {priority}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-sm text-gray-400">
          <span>Due: {dueDate}</span>
          <span>Created: {createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCardAI;
