import React from "react";
import { CarInfo } from "./CarInfo";

export default {
  title: "Components/CarInfo",
  component: CarInfo,
};

export const Default = () => (
  <CarInfo
    title="2023 Maruti Alto K10 VXI Plus"
    specs="5,846 kms • Petrol • Manual • 1st Owner"
    price="₹5.21 Lakh"
    emi="₹12,932"
  />
);
