import React from 'react';

export const CarPage = ({ car }) => {
  const {
    title,
    price,
    mileage,
    fuelType,
    transmission,
    owner,
    location,
    emi,
    imageUrl,
  } = car;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex gap-4">
        {/* Left Section: Car Image */}
        <div className="w-1/2">
          <img
            src={imageUrl || 'https://via.placeholder.com/600x400?text=Car+Image'}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Car Description */}
        <div className="w-1/2 flex flex-col justify-between">
          {/* Title and Certified */}
          <div className="mb-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm ml-2">
              CERTIFIED
            </button>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <p>
              <strong>Price:</strong> {price}
            </p>
            <p>
              <strong>Mileage:</strong> {mileage}
            </p>
            <p>
              <strong>Fuel Type:</strong> {fuelType}
            </p>
            <p>
              <strong>Transmission:</strong> {transmission}
            </p>
            <p>
              <strong>Owner:</strong> {owner}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>EMI:</strong> {emi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;