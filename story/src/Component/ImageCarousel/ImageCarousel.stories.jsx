import React from "react";
import { ImageCarousel } from "./ImageCarousel";

export default {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
};

export const Default = () => (
  <ImageCarousel
    images={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cmg2LrKpmjyGHnYiu7J-L88Bbbqd55bldQ&s"]}
    totalPhotos={40}
  />
);
