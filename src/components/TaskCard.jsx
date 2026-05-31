import React from "react";

function TaskCard({
  tags = ["Misc"],
  title,
  description,
  priority,
  status,
  dueDate,
  createdAt,
}) {
  const tagStyles = [
    "bg-cyan-100 text-cyan-700",
    "bg-purple-100 text-purple-700",
    "bg-green-100 text-green-700",
    "bg-pink-100 text-pink-700",
    "bg-orange-100 text-orange-700",
  ];

  const priorityStyles = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-600",
    low: "bg-green-100 text-green-600",
  };

  const statusStyles = {
    todo: "bg-gray-100 text-gray-600",
    "in-progress": "bg-blue-100 text-blue-600",
    done: "bg-green-100 text-green-600",
  };

  return (
    <div className="px-4 py-5 h-full flex flex-col bg-white shadow-sm border border-gray-300 rounded-lg">
      {/* upper side/ header of card */}
      <div className="flex-1">
        <button
          disabled
          className={`${tagStyles[Math.floor(Math.random() * tagStyles.length)]} text-sm px-3 py-1 border-0 rounded-md`}
        >
          {tags[0]}
        </button>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold py-2">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>

          {/* lets create buttons for now if we require changes then we will made */}
          {/* <div className="flex justify-between py-3">
          <button className="bg-red-100 text-red-700 font-bold py-1 px-2 rounded-md">
            {priority}
          </button>
          <button className="bg-blue-100 text-blue-700 font-bold py-1 px-2 rounded-md">
            {status}
          </button>
        </div> */}
        </div>
      </div>

      {/* <div className="flex flex-col bg-green-300">
        <h3 className="text-xl font-semibold py-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>

        {/* lets create buttons for now if we require changes then we will made
        <div className="flex justify-between py-3">
          <button className="bg-red-100 text-red-700 font-bold py-1 px-2 rounded-md">
            {priority}
          </button>
          <button className="bg-blue-100 text-blue-700 font-bold py-1 px-2 rounded-md">
            {status}
          </button>
        </div>
      </div> */}
      <div className="">
        <div className="flex justify-between py-3">
          <button
            className={`${priorityStyles[priority]}  text-sm font-semibold py-1 px-3 rounded-xl`}
          >
            {priority}
          </button>
          <button className={`${statusStyles[status]} text-sm font-semibold py-1 px-3 rounded-xl`}>
            {status}
          </button>
        </div>
        <div className="flex justify-between border-t border-t-gray-300">
          <span className="text-gray-500 text-sm">Due: {dueDate}</span>
          <span className="text-gray-500 text-sm">Created At: {createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
