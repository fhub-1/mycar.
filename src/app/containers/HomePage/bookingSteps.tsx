import { faCalendarAlt, faCarSide, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
   ${tw`
    w-full
    flex 
    flex-col
    items-center 
    pt-3 
    pb-3 
    lg:pt-6 
    lg:pb-6 
   `}
`;

const Title = styled.h2`
${tw`
 text-3xl
 mt-1
 m-3
 lg:text-5xl 
 text-black 
 font-extrabold
`}
`;

const StepsContainer = styled.div`
 ${tw`
  flex 
  justify-evenly 
  flex-wrap 
  mt-7 
  lg:mt-16 
 `}
`;

const StepContainer = styled.div`
${tw`
    flex 
    flex-col 
    md: w-96 
    items-center 
    transition-colors 
    hover: text-red-500
    m-3
`}
`;

const Step = styled.div`
box-shadow:0 1.3px 12px -3px rgba(0, 0, 0, 0.4); ;
  ${tw`
   flex 
   rounded-lg 
   items-center 
   justify-center 
   p-6
  `}
`;

const StepTitle = styled.h4`
 ${tw`
   text-black 
   text-lg 
   font-semibold 
   mt-4
 `}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12 
    text-sm 
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcons = styled.span`
${tw`
 text-red-500 
 text-3xl
`}
`;

export function BookingSteps(){
   return (
   <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
         <StepContainer>
            <Step>
               <StepIcons>
                  <FontAwesomeIcon icon={faMapMarkedAlt}/>
               </StepIcons>
            </Step>
            <StepTitle>Choose Your Location</StepTitle>
            <StepDescription>
               Find Your nearest RentCar point and book your car
            </StepDescription>
         </StepContainer>
         {/* 2 */}
         <StepContainer>
            <Step>
               <StepIcons>
                  <FontAwesomeIcon icon={faCalendarAlt}/>
               </StepIcons>
            </Step>
            <StepTitle>Pick-Your Date </StepTitle>
            <StepDescription>
               PickUp the Best Date to rent a car for your family or your partern  
            </StepDescription>
         </StepContainer>
         {/* 3 */}
         <StepContainer>
            <Step>
               <StepIcons>
                  <FontAwesomeIcon icon={faCarSide}/>
               </StepIcons>
            </Step>
            <StepTitle>Book Your Car</StepTitle>
            <StepDescription>
               Book Your nice car with RentCar with one click
            </StepDescription>
         </StepContainer>
      </StepsContainer>
   </Container>
   );
}