import React from "react";

export const ActionButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <button className="bg-orange-500 text-white font-bold py-2 rounded-lg">
        View Seller Details
      </button>
      <div className="flex space-x-4 text-sm">
        <button className="text-blue-500">Chat with Seller</button>
        <button className="text-gray-500">Compare</button>
        <button className="text-gray-500">Share</button>
      </div>
    </div>
  );
};
