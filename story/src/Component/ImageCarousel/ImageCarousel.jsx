import React from "react";

export const ImageCarousel = ({ images, totalPhotos }) => {
  return (
    <div className="relative w-full h-auto">
      <img
        src={images[0]}
        alt="Car"
        className="rounded-lg w-full object-cover"
      />
      <div className="absolute bottom-2 right-2 bg-black text-white text-sm p-1 rounded-md">
        {totalPhotos} PHOTOS
      </div>
    </div>
  );
};
