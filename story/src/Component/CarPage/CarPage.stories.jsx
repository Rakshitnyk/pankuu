import React from 'react';
import CarPage from './CarPage';

export default {
  title: 'Pages/CarPage',
  component: CarPage,
};

const Template = (args) => <CarPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  car: {
    title: '2023 Maruti Alto K10 VXI Plus',
    price: '₹5.21 Lakh',
    mileage: '5,846 kms',
    fuelType: 'Petrol',
    transmission: 'Manual',
    owner: '1st Owner',
    location: 'Yelahanka, Bangalore',
    emi: '₹12,932/mo',
    imageUrl: 'data:image/jpeg;base64,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', // Replace with your image path
  },
};