import React, { useState } from 'react';

export const CarPage = ({ cars = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(cars) || cars.length === 0) {
    return <div className="p-4 max-w-6xl mx-auto text-center">No cars available</div>;
  }

  const car = cars[currentIndex] || {};

  const handleNextCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrevCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* Left Section: Car Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={car.imageUrl || 'https://via.placeholder.com/400'}
            alt={car.title || 'Car Image'}
            className="w-full h-auto rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Section: Car Description */}
        <div className="md:w-1/2 w-full flex flex-col justify-start text-left">
          {/* Title and Certification */}
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-2xl font-bold">{car.title || 'Unknown Car'}</h2>
            {car.certified && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                CERTIFIED
              </span>
            )}
          </div>

          {/* Car Details */}
          <div className="space-y-2">
            <p><strong>Price:</strong> {car.price || 'N/A'}</p>
            <p><strong>Mileage:</strong> {car.mileage || 'N/A'}</p>
            <p><strong>Fuel Type:</strong> {car.fuelType || 'N/A'}</p>
            <p><strong>Transmission:</strong> {car.transmission || 'N/A'}</p>
            <p><strong>Owner:</strong> {car.owner || 'N/A'}</p>
            <p><strong>Location:</strong> {car.location || 'N/A'}</p>
            <p><strong>EMI:</strong> {car.emi || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center gap-6">
        <button
          onClick={handlePrevCar}
          className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          ← Previous Car
        </button>

        <button
          onClick={handleNextCar}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          → Next Car
        </button>
      </div>
    </div>
  );
};

export default CarPage;
