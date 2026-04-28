import { useState } from "react";
import { RatingLabel, RatingOption, RatingWrapper } from "./App.styled";
import {
  FaFaceLaugh,
  FaFaceLaughSquint,
  FaFaceMeh,
  FaFaceSadCry,
  FaFaceSadTear,
} from "react-icons/fa6";

const Rating = ({ setData, sizeProp, mood }) => {
  const data = [
    { name: "very sad", icon: <FaFaceSadCry size={sizeProp} />, value: 1 },
    { name: "sad", icon: <FaFaceSadTear size={sizeProp} />, value: 2 },
    { name: "neutral", icon: <FaFaceMeh size={sizeProp} />, value: 3 },
    { name: "happy", icon: <FaFaceLaugh size={sizeProp} />, value: 4 },
    {
      name: "very happy",
      icon: <FaFaceLaughSquint size={sizeProp} />,
      value: 5,
    },
  ];

  return (
    <RatingWrapper>
      {data.map(({ name, value, icon }, idx) => (
        <RatingLabel htmlFor={name} key={idx}>
          <RatingOption
            type="radio"
            id={name}
            name="option"
            value={name}
            checked={mood === value}
            onChange={() => setData((p) => ({ ...p, mood: value }))}
          />
          {icon}
        </RatingLabel>
      ))}
    </RatingWrapper>
  );
};

export default Rating;
