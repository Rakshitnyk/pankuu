import React from "react";

export const LocationTag = ({ location, trending }) => {
  return (
    <div className="flex justify-between items-center text-sm p-2">
      <span>{location}</span>
      {trending && (
        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md">
          Trending Car! High chances of sale in next 6 days
        </span>
      )}
    </div>
  );
};
