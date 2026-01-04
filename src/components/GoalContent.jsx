import {
  GoalWrapper,
  GoalAccTitleWrapper,
  GoalStatusIndicator,
  GoalStatusIndicatorWrapper,
  GoalsNoteWrapper,
  TextArea,
  SmallText,
} from "./App.styled";

import { LuPencil, LuTrash } from "react-icons/lu";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import convertNumberToWords from "../utils/convertNumberToWords";

import ChartsTest from "./ChartsTest";
import { useState } from "react";

const GoalContent = () => {
  const [goals, setGoals] = useState({
    type: "finite",
    title: "code for 10 days",
    description: "to become a better coder",
    unit: "session",
    target: 10,
    start: "start date",
    end: "end date",
    attempts: [
      {
        day: 1,
        date: "",
        status: "completed",
        notes: ["coded this morning", "coded this afternoon"],
      },

      { day: 2, date: "", status: "completed", notes: ["coded this morning"] },
      {
        day: 3,
        date: "",
        status: "completed",
        notes: [
          "coded this afternooncoded this afternoon againcoded this afternooncoded this afternoon againcoded this afternoon",
          "coded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon again",
          "coded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon againcoded this afternoon again",
          ,
        ],
      },
      { day: 4, date: "", status: "skipped", notes: [] },
      {
        day: 5,
        date: "",
        status: "completed",
        notes: ["coded this afternoon"],
      },
      { day: 6, date: "", status: "ongoing", notes: [] },
    ],
  });

  const handleOnEdit = () => {};

  const handleOnDelete = () => {};

  const dropdownData = {
    type: "ellipsis-vertical",
    items: [
      {
        content: (
          <>
            <LuPencil size={20} />
            edit
          </>
        ),
        fn: handleOnEdit,
      },
      {
        content: (
          <>
            <LuTrash size={20} />
            delete
          </>
        ),
        fn: handleOnDelete,
      },
    ],
  };

  const groupedAttempts = (goals) => {
    const grouped = [
      ...goals.attempts.map(({ day, status, notes }) => {
        const title = goals.unit + " " + convertNumberToWords(day);

        const titleElem = (
          <GoalAccTitleWrapper>
            <>{title}</>
            <GoalStatusIndicatorWrapper>
              <GoalStatusIndicator $status={status} />
              {status}
            </GoalStatusIndicatorWrapper>
          </GoalAccTitleWrapper>
        );

        const itemElem = [
          ...notes.map((note, idx) => (
            <GoalsNoteWrapper>
              <SmallText $style={{ margin: "0 10px" }}>{idx + 1}.</SmallText>
              <TextArea
                $style={{
                  border: "1px solid transparent",
                  padding: "2px 5px",
                  minHeight: "5px",
                  background: "transparent",
                }}
                name="log"
                defaultValue={note}
                spellCheck={false}
              />
              <Dropdown data={dropdownData} />
            </GoalsNoteWrapper>
          )),
          <GoalsNoteWrapper>
            {/* <p>add log</p> */}
            <TextArea
              $style={{
                border: "1px solid transparent",
                padding: "2px 5px",
                minHeight: "5px",
                background: "transparent",
              }}
              name="log"
              defaultValue=""
              spellCheck={false}
            />
          </GoalsNoteWrapper>,
        ];

        return { title: { content: titleElem, size: "20px" }, items: itemElem };
      }),
      {
        title: { content: `add ${goals.unit}`, size: "20px" },
        items: [
          <GoalsNoteWrapper>
            {/* <p>add log</p> */}
            <TextArea
              $style={{
                border: "1px solid transparent",
                padding: "2px 5px",
                minHeight: "5px",
                background: "transparent",
              }}
              name="log"
              defaultValue=""
              spellCheck={false}
            />
          </GoalsNoteWrapper>,
        ],
      },
    ];

    // make this conditionally appear when there's no log for the current day

    return grouped;
  };

  const goalStatsData = [
    {
      title: { content: "Progress Overview", styling: { fontSize: "25px" } },
      items: [
        <>
          <div>
            <p>{goals.title}</p>
            <p>{goals.description}</p>
          </div>
          <ChartsTest />
        </>,
      ],
    },
  ];

  const goalStatsBody = [
    {
      title: {
        content: "Goal Logs",
        styling: { fontSize: "25px" },
      },
      items: [<Accordion datas={groupedAttempts(goals)} startIcon={true} />],
    },
  ];

  return (
    <GoalWrapper>
      <Accordion datas={goalStatsData} accIsOpen={{ 0: true }} endIcon={true} />
      <Accordion
        datas={goalStatsBody}
        accIsOpen={{ 0: true }}
        endIcon={true}
        containerStyling={{
          flex: "1 1 0",
          minHeight: 0,
          overflow: "auto",
        }}
        wrapperStyling={{ overflow: "auto" }}
        listStyling={{ overflow: "auto" }}
      />
    </GoalWrapper>
  );
};

export default GoalContent;
