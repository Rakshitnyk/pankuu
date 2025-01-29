import React from "react";
import { LocationTag } from "./LocationTag";

export default {
  title: "Components/LocationTag",
  component: LocationTag,
};

export const Default = () => (
  <LocationTag location="Yelahanka, Bangalore" trending={true} />
);
