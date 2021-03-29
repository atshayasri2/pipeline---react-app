import React from "react";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import CarouselAndFilters from "./components/CarouselAndFilters/CarouselAndFilters";
import "font-awesome/css/font-awesome.min.css";
const ImageData = [
  {
    id: 1,
    name: "Villa",
    imgURL: "https://cf.bstatic.com/images/hotel/max1024x768/134/134997012.jpg",
    title: "Guaranteed modern Villa",
    location: "14 Tottenham Road, London",
    price: "$389.000",
    type: "For Sale",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
  {
    id: 2,
    name: "House",
    imgURL:
      "https://i.pinimg.com/originals/c7/13/f0/c713f070f12ff742b085b7b0229641e6.jpg",
    title: "Luxury family home",
    location: "14 Tottenham Road, London",
    price: "$775/mo",
    type: "For Rent",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
  {
    id: 3,
    name: "Office",
    imgURL:
      "https://www.businesscomparison.com/uk/wp-content/uploads/2019/10/Startup-business-getting-your-first-office.jpg",
    title: "Guaranteed modern Office",
    location: "14 Tottenham Road, London",
    price: "$200/mo",
    type: "For Rent",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
  {
    id: 4,
    name: "Apartment",
    imgURL:
      "https://is1-2.housingcdn.com/4f2250e8/7fe3f307b76520f1a126eba25ea4c70c/v5/fs/axis_pleasant_apartments-manikonda-hyderabad-axis_home_developers.jpg",
    title: "Guaranteed modern Apartment",
    location: "14 Tottenham Road, London",
    price: "$4,200/mo",
    type: "For Rent",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
  {
    id: 5,
    name: "Office",
    imgURL:
      "https://www.businesscomparison.com/uk/wp-content/uploads/2019/10/Startup-business-getting-your-first-office.jpg",
    title: "Guaranteed modern Office",
    location: "14 Tottenham Road, London",
    price: "$299.000",
    type: "For Sale",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
  {
    id: 6,
    name: "Villa",
    imgURL: "https://cf.bstatic.com/images/hotel/max1024x768/134/134997012.jpg",
    title: "Guaranteed modern Villa",
    location: "14 Tottenham Road, London",
    price: "$439.000",
    type: "For Sale",
    squarefeet: 3060,
    noOfBeds: 3,
    noOfBaths: 3,
    taxiAvailability: " Yes",
  },
];
function homeMain() {
  return (
    <div className="App">
      <CarouselAndFilters />
      <FeaturedProperties properties={ImageData} />
    </div>
  );
}

export default homeMain;
