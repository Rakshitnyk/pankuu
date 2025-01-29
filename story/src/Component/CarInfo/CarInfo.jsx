import React from "react";

export const CarInfo = ({ title, specs, price, emi }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{specs}</p>
      <p className="text-xl font-semibold text-black">{price}</p>
      <p className="text-sm text-gray-500">EMI starts @ {emi}/mo</p>
    </div>
  );
};
