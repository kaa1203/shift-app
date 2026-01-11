import {
  GoalWrapper,
  GoalAccTitleWrapper,
  GoalStatusIndicator,
  GoalStatusIndicatorWrapper,
  GoalsNoteWrapper,
  TextArea,
  SmallText,
  GoalLog,
  GoalLogWrapper,
  ButtonWrapper,
  GoalEditButton,
  GoalAddLog,
  HeadingThree,
} from "./App.styled";

import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import convertNumberToWords from "../utils/convertNumberToWords";

import ChartsTest from "./ChartsTest";
import { useEffect, useRef, useState } from "react";

const GoalContent = () => {
  const [index, setIndex] = useState({});
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
  const [input, setInput] = useState("");
  const [activeEditor, setActiveEditor] = useState({});

  const inputRef = useRef(null);
  const inputValueRef = useRef(null);

  useEffect(() => {
    const textArea = inputRef.current;

    if (textArea) {
      const length = textArea.value.length;
      textArea.focus();
      textArea.setSelectionRange(length, length);
    }
  }, [activeEditor, inputRef]);

  const handleOnEdit = ({ parent, child }) => {
    setIndex({ parent, child });

    const prevInput = goals.attempts[parent]?.notes[child];

    inputValueRef.current = prevInput;
    setInput("");
    setActiveEditor({ mode: "edit" });
  };

  const handleOnAdd = (id) => {
    if (input === "") return;

    setGoals((prev) => ({
      ...prev,
      attempts: prev.attempts.map((att, idx) =>
        idx === id ? { ...att, notes: [...att.notes, input] } : att
      ),
    }));

    setActiveEditor(null);
    inputValueRef.current = null;
  };

  const handleOnDelete = ({ parent, child }) => {
    setGoals((prev) => ({
      ...prev,
      attempts: prev.attempts.map((att, idx) =>
        idx === parent
          ? {
              ...att,
              notes: att.notes.filter((note, id) => id !== child && note),
            }
          : att
      ),
    }));
    inputValueRef.current = null;
  };

  const handleOnCancel = () => {
    setInput("");
    setIndex({});
    setActiveEditor(null);
    inputValueRef.current = null;
  };

  const handleOnChange = (e) => setInput(e.target.value);

  const handleOnSave = ({ parent, child }) => {
    if (input === "") return;

    setGoals((prev) => {
      const updated = prev.attempts.map((att, i) =>
        i === parent
          ? {
              ...att,
              notes: att.notes.map((note, j) => (j === child ? input : note)),
            }
          : att
      );

      const parentExist = prev.attempts[parent] !== undefined;

      return parentExist
        ? { ...prev, attempts: updated }
        : {
            ...prev,
            attempts: [
              ...prev.attempts,
              { day: parent, date: "", status: "ongoing", notes: [input] },
            ],
          };
    });
    setIndex({});
    setInput("");
  };

  const groupedAttempts = (goals) => {
    const grouped = [
      ...goals.attempts.map(({ day, status, notes }, id) => {
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
          ...notes.map((note, idx) => {
            if (index.parent === id && index.child === idx) {
              //edit
              return (
                <GoalsNoteWrapper>
                  <SmallText $style={{ marginRight: "5px", width: "15px" }}>
                    {idx + 1}.
                  </SmallText>
                  <GoalLogWrapper>
                    <TextArea
                      ref={inputRef}
                      $style={{
                        boxShadow: "0 0 0 2px var(--indigo)",
                        border: "1px solid transparent",
                        padding: "2px 5px",
                        minHeight: "80px",
                        background: "transparent",
                      }}
                      name="log"
                      defaultValue={note}
                      onChange={handleOnChange}
                      spellCheck={false}
                    />
                    <ButtonWrapper>
                      <GoalEditButton
                        $colored
                        onClick={() => handleOnSave({ parent: id, child: idx })}
                        disabled={
                          input === "" ||
                          input.toLowerCase() ===
                            inputValueRef?.current?.toLowerCase()
                        }
                      >
                        save
                      </GoalEditButton>
                      <GoalEditButton onClick={handleOnCancel}>
                        cancel
                      </GoalEditButton>
                    </ButtonWrapper>
                  </GoalLogWrapper>
                </GoalsNoteWrapper>
              );
            }
            // print
            return (
              <GoalsNoteWrapper>
                <SmallText $style={{ marginRight: "5px", width: "15px" }}>
                  {idx + 1}.
                </SmallText>
                <GoalLog>{note}</GoalLog>
                <Dropdown
                  data={{
                    type: "ellipsis-vertical",
                    items: [
                      {
                        content: (
                          <>
                            <LuPencil size={20} />
                            edit
                          </>
                        ),
                        fn: () => handleOnEdit({ parent: id, child: idx }),
                      },
                      {
                        content: (
                          <>
                            <LuTrash size={20} />
                            delete
                          </>
                        ),
                        fn: () => handleOnDelete({ parent: id, child: idx }),
                      },
                    ],
                  }}
                />
              </GoalsNoteWrapper>
            );
          }),
          <GoalsNoteWrapper>
            {activeEditor?.mode === "newLog" && activeEditor.id === id ? (
              <>
                <SmallText $style={{ marginRight: "5px", width: "15px" }}>
                  {notes.length + 1}.
                </SmallText>
                <GoalLogWrapper>
                  <TextArea
                    ref={inputRef}
                    $style={{
                      boxShadow: "0 0 0 2px var(--indigo)",
                      border: "1px solid transparent",
                      padding: "2px 5px",
                      minHeight: "80px",
                      background: "transparent",
                    }}
                    name="log"
                    value={input}
                    placeholder="Add log..."
                    onChange={(e) => handleOnChange(e)}
                    spellCheck={false}
                  />
                  <ButtonWrapper>
                    <GoalEditButton
                      $colored
                      onClick={() => handleOnAdd(id)}
                      disabled={input === ""}
                    >
                      add
                    </GoalEditButton>
                    <GoalEditButton onClick={handleOnCancel}>
                      cancel
                    </GoalEditButton>
                  </ButtonWrapper>
                </GoalLogWrapper>
              </>
            ) : (
              <GoalAddLog
                onClick={() => {
                  setIndex({});
                  setActiveEditor({ mode: "newLog", id });
                  setInput("");
                  inputValueRef.current = null;
                }}
              >
                Add log...
              </GoalAddLog>
            )}
          </GoalsNoteWrapper>,
        ];

        return { title: { content: titleElem, size: "20px" }, items: itemElem };
      }),
      {
        title: { content: `add ${goals.unit}`, size: "20px" },
        items: [
          <GoalsNoteWrapper>
            <SmallText $style={{ marginRight: "5px", width: "15px" }}>
              1.
            </SmallText>
            <GoalLogWrapper>
              <TextArea
                ref={inputRef}
                $style={{
                  boxShadow: "0 0 0 2px var(--indigo)",
                  border: "1px solid transparent",
                  padding: "2px 5px",
                  minHeight: "80px",
                  background: "transparent",
                }}
                name="log"
                defaultValue=""
                placeholder="Add log..."
                onChange={(e) => handleOnChange(e)}
                spellCheck={false}
              />
              <ButtonWrapper>
                <GoalEditButton
                  $colored
                  onClick={() =>
                    handleOnSave({
                      parent: goals.attempts.length + 1,
                      child: 0,
                    })
                  }
                  disabled={!input}
                >
                  add
                </GoalEditButton>
              </ButtonWrapper>
            </GoalLogWrapper>
          </GoalsNoteWrapper>,
        ],
      },
    ];

    // make this conditionally appear when there's no log for the current day

    return grouped;
  };

  const goalStatsData = [
    {
      title: {
        content: `Progress Overview: "${goals.title.charAt(0).toUpperCase() + goals.title.slice(1)}"`,
        styling: { fontSize: "22px", textTransform: "unset", fontWeight: 500 },
      },
      items: [
        <>
          <GoalWrapper $style={{ gap: "2px", marginBottom: "10px" }}>
            <p>{goals.description}</p>
          </GoalWrapper>
          <ChartsTest />
        </>,
      ],
    },
  ];

  const goalStatsBody = [
    {
      title: {
        content: "Goal Logs",
        styling: { fontSize: "22px", fontWeight: 500 },
      },
      items: [<Accordion datas={groupedAttempts(goals)} startIcon={true} />],
    },
  ];

  console.log(goals);

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
