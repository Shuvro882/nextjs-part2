import React from "react";
import { format } from "date-fns";

const FeedbackCard = ({ feedback }) => {
  const { message, date } = feedback;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Customer Feedback
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <span className="font-medium">Date:</span>{" "}
          {format(new Date(date), "dd MMMM yyyy")}
        </div>

        <div className="flex gap-3 pt-2">
          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
            Update
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;