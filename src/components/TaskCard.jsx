import React from "react";

function TaskCard({
  tags = [Misc],
  title,
  description,
  priority,
  status,
  dueDate,
  createdAt,
}) {
  return (
    <div className="px-4 py-6 flex flex-col bg-white shadow-sm border border-gray-300 rounded-lg">
      {/* upper side/ header of card */}
      <div className="pb-4">
        <button 
        disabled
          className="bg-purple-100 text-purple-700 px-4 py-1 border-0 rounded-md"
        >
          {tags[0]}
        </button>
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold py-2">{title}</h3>
        <p className="text-gray-700">{description}</p>

        {/* lets create buttons for now if we require changes then we will made */}
        <div className="flex justify-between py-3">
          <button className="bg-red-100 text-red-700 font-bold py-1 px-2 rounded-md">{priority}</button>
          <button className="bg-blue-100 text-blue-700 font-bold py-1 px-2 rounded-md">{status}</button>
        </div>
      </div>
      <div className="flex justify-between border-t border-t-gray-300">
        <span>Due: {dueDate}</span>
        <span>Created At: {createdAt}</span>
      </div>
    </div>
  )
}

export default TaskCard;
