import {  faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react"
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
 ${tw`
    flex
    justify-center
    items-center
    rounded-md 
    bg-white 
    pt-1
    pb-1
    pr-2 
    pl-2 
    md:pt-2 
    md:pb-2
    md:pl-6 
    md:pr-7
    lg:pt-7 
    lg:pb-7 
 `}
`;

const ItemContainer = styled.h2`
  ${tw`flex relative`};
`;

const Icon = styled.span`
 ${tw`
    text-red-500  
    fill-current
    text-xs 
    md:text-base 
    mr-1 
    md:mr-3
 `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600 
    text-xs 
    md:text-sm
    cursor-pointer
  `}
`;

const LineSeperator = styled.span`
 width: 2px;
 height: 45%;
 ${tw`
  bg-gray-300 
  mr-2 
  ml-2
  md:mr-5 
  md:ml-5 
 `}
`;

const DataCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

const SmallIcon = styled.span`
  ${tw`
   text-gray-700 
   fill-current 
   text-xs 
   md: text-base 
   ml-1
  `}
`;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendar] = useState(false);
  
  const [returDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendar] = useState(false);
   
  const toggleStartCalendar = () => {
     setIsStartCalendar(!isStartCalendarOpen);
     if(setIsReturnCalendar) setIsReturnCalendar(false);
  }

   const toggleReturnCalendar = () => {
     setIsReturnCalendar(!isReturnCalendarOpen);
     if(setIsStartCalendar) setIsStartCalendar(false);
  }

   return (
   <CardContainer>
      <ItemContainer>
         <Icon>
            <FontAwesomeIcon icon={faCalendarAlt}/>
         </Icon>
         <Name onClick={toggleStartCalendar}> Pick Your Date</Name>
         <SmallIcon> 
            <FontAwesomeIcon icon={isStartCalendarOpen? faCaretUp : faCaretDown} />
         </SmallIcon>
         {isStartCalendarOpen && <DataCalendar value={startDate} onChange={setStartDate}/>}
         </ItemContainer>
         <LineSeperator/>
         <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt}/>
         </Icon>
         <Name onClick={toggleReturnCalendar}>Return Date</Name>
         <SmallIcon>
            <FontAwesomeIcon icon={isReturnCalendarOpen? faCaretUp : faCaretDown} />
         </SmallIcon>
         {isReturnCalendarOpen && <DataCalendar  value={returDate} onChange={setReturnDate}/>}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em"/>
      <Button theme="filled" text="Book Your Ride"/>
   </CardContainer>
   )
}