import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg 
    w-full
    flex 
    flex-col
    items-center 
    justify-center 
    pr-4 
    pl-4 
    md:pl-0 
    md:pr-0 
    mb-10
`};
`;

const Title = styled.h2`
  ${tw`
 text-3xl 
 lg:text-5xl 
 text-black 
 font-extrabold
`}
`;

const CarsContainer = styled.div`
  ${tw`
   w-full 
   flex 
   flex-wrap 
   justify-center 
   mt-7 
   md:mt-10 
`}
`;

export function TopCars() {
  const testCar: ICar = {
    name: "Mazda Car",
    thumbnailSrc: "https://bit.ly/3DwmnFt",
    dailyPrice: 25,
    monthlyprice: 160,
    gearType: "Auto",
    gas: "Petrol",
    mileage: "250khm/her",
  };
  const testCar3: ICar = {
    name: "Toyota Nissan",
    thumbnailSrc: "https://bit.ly/3mD6mHG",
    dailyPrice: 25,
    monthlyprice: 160,
    gearType: "Auto",
    gas: "Petrol",
    mileage: "250khm/her",
  };
  const testCar2: ICar = {
    name: "Mazda Car",
    thumbnailSrc: "https://bit.ly/3DwmnFt",
    dailyPrice: 25,
    monthlyprice: 160,
    gearType: "Auto",
    gas: "Petrol",
    mileage: "250khm/hr",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top deals</Title>
      <CarsContainer>
        <Car {...testCar} />
        <Car {...testCar3} />
        <Car {...testCar2} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
