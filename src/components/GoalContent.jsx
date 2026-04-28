import {
  ChartPercentage,
  ChartWrapper,
  GoalCheckpoints,
  GoalHeader,
  GoalInsights,
  GoalStatsWrapper,
  HeadingThree,
  HeadingTwo,
} from "./App.styled";

import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import convertNumberToWords from "../utils/convertNumberToWords";

import ChartsTest from "./ChartsTest";
import { useEffect, useRef, useState } from "react";
import Progress from "./Progress";
import HalfDonut from "./Charts/PieChart";

const GoalContent = () => {
  const accData = [
    {
      title: {
        content: "Why this goal matters",
        styling: {
          fontSize: "18px",
          textTransform: "unset",
          fontWeight: 400,
          padding: "unset",
          border: "none",
        },
      },
      items: [
        <>
          <p>Goal description</p>
        </>,
      ],
    },
  ];

  return (
    <>
      <GoalHeader>
        <HeadingTwo>Goal Title</HeadingTwo>
        <GoalStatsWrapper>
          <ChartWrapper>
            <ChartPercentage>60%</ChartPercentage>
            <HalfDonut />
          </ChartWrapper>
          <GoalStatsWrapper $style={{ flexDirection: "column", flex: "auto" }}>
            <p>6/10 checkpoints</p>
            <p>Current streak: 3 days</p>
            <p>Total hours: 45 mins</p>
            <p>Priority: High</p>
            <p>Focus: Deep</p>
          </GoalStatsWrapper>
        </GoalStatsWrapper>
        <>
          <p>Tags: #tag1, #tag2</p>
          <Accordion
            datas={accData}
            startIcon={true}
            containerStyling={{ width: "80%" }}
            wrapperStyling={{ border: "none" }}
          />
        </>
      </GoalHeader>
      <GoalCheckpoints>
        <HeadingTwo>Checkpoints</HeadingTwo>
        <HeadingThree>Today</HeadingThree>
        <ul>
          <li>list one</li>
          <li>list two</li>
          <li>list three</li>
        </ul>
        <p>Yesterday(accordion)</p>
        <p>January 29(accordion)</p>
      </GoalCheckpoints>
      <GoalInsights>
        <HeadingTwo>Insights</HeadingTwo>
        <p>Avg checkpoints/day: 2.3</p>
        <p>Missed days this week: 2</p>
        <p>Total time: 5h 20m</p>
        <p>{"Consistency > perfection"}</p>
      </GoalInsights>
    </>
  );
};

export default GoalContent;
