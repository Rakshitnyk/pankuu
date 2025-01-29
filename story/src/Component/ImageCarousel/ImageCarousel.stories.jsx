import React from "react";
import { ImageCarousel } from "./ImageCarousel";

export default {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
};

export const Default = () => (
  <ImageCarousel
    images={["https://via.placeholder.com/300"]}
    totalPhotos={40}
  />
);
