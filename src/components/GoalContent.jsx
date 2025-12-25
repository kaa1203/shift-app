import Accordion from "./Accordion";
import {
  GoalBodyWrapper,
  GoalStatsWrapper,
  GoalWrapper,
  GoalHeadingTwo,
} from "./App.styled";

import convertNumberToWords from "../utils/convertNumberToWords";

const GoalContent = () => {
  const goals = {
    type: "finite",
    title: "code for 10 days",
    description: "to become a better coder",
    unit: "day",
    target: 10,
    start: "start date",
    end: "end date",
    attempts: [
      { day: 1, date: "", isCompleted: true, note: "coded this morning" },
      { day: 1, date: "", isCompleted: true, note: "coded this afternoon" },
      { day: 2, date: "", isCompleted: true, note: "coded this morning" },
      { day: 3, date: "", isCompleted: true, note: "coded this afternoon" },
      {
        day: 3,
        date: "",
        isCompleted: true,
        note: "coded this afternoon again",
      },
      {
        day: 3,
        date: "",
        isCompleted: true,
        note: "coded this night again",
      },
    ],
  };

  const groupedAttempts = (goals) => {
    const mergedAttempts = goals.attempts.reduce((acc, att) => {
      const day = att.day;

      if (!acc[[day]]) acc[day] = [];

      acc[day].push(att);

      return acc;
    }, {});

    return mergedAttempts;
  };

  const formatAccordionData = (grouped) => {
    return Object.entries(grouped).map(([day, items]) => ({
      title: `${goals.unit} ${convertNumberToWords(day)}`,
      key: day,
      items,
    }));
  };

  return (
    <GoalWrapper>
      <GoalStatsWrapper>
        <div>
          <p>{goals.title}</p>
        </div>
        <div>
          <p>{goals.description}</p>
        </div>
        <div>
          <p>{goals.type}</p>
        </div>
        <div>
          <p>{goals.unit}</p>
        </div>
        <div>
          <p>{goals.start}</p>
          <p>{goals.end}</p>
        </div>
      </GoalStatsWrapper>
      <GoalBodyWrapper>
        <GoalHeadingTwo>Daily Logs</GoalHeadingTwo>
        <Accordion datas={formatAccordionData(groupedAttempts(goals))} />
      </GoalBodyWrapper>
    </GoalWrapper>
  );
};

export default GoalContent;
