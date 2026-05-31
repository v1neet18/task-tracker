import React from "react";
import { AlertTriangle } from "lucide-react";
function DashBoxCard() {
  return (
    // parent div
    <div className="flex flex-col gap-2 rounded-3xl bg-white p-6 shadow-sm">
      {/* upper div */}
      <div className="flex gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-100">
          <AlertTriangle className="h-10 w-10 text-violet-600" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-zinc-950">Total Tasks</p>
          <h2 className="text-3xl sm:text-5xl font-bold">12</h2>
          <div className="flex gap-2 sm:hidden">
            <span className="text-green-300 text-sm">&uarr; 20%</span>
            <p className="text-sm text-gray-500">from last week</p>
          </div>
        </div>
      </div>
      {/* lower div */}
      <div className="hidden sm:flex gap-2">
        <span className="text-green-300 text-sm">&uarr; 20%</span>
        <p className="text-sm text-gray-500">from last week</p>
      </div>
    </div>
  );
}

export default DashBoxCard;
