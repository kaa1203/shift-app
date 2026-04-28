import { useEffect, useRef, useState } from "react";
import {
  CheckboxButton,
  CheckboxButtonWrapper,
  CheckboxContentDisplay,
  CheckboxContentDisplayIcon,
  CheckboxContentDisplayP,
  CheckboxContentDisplayStats,
  CheckboxContentDisplayWrapper,
  CheckboxContentEdit,
  CheckboxContentWrapper,
  CheckboxIconWrapper,
  CheckboxInput,
  CheckboxItem,
  CheckboxLabel,
  CheckboxList,
  CheckboxMood,
  CheckboxMoodContainer,
  CheckboxNumInput,
  CheckboxTextWrapper,
  Label,
} from "./App.styled";
import { FaCheck } from "react-icons/fa6";
import Rating from "./Rating";
import Dropdown from "./Dropdown";
import { LuEllipsisVertical, LuPencil, LuTrash } from "react-icons/lu";

const CheckboxComp = ({ data }) => {
  const [isChecked, setIsChecked] = useState({});
  const [activeEditor, setActiveEditor] = useState(false);
  const [list, setList] = useState(data);
  const [editedData, setEditedData] = useState({});

  const elemRef = useRef(null);

  useEffect(() => {
    const elem = elemRef.current;

    if (elem) {
      const length = elem.value.length;
      elem.focus();
      elem.setSelectionRange(length, length);
    }
  }, [elemRef, activeEditor]);

  const handleCheckboxOnChange = (idx) => {
    setIsChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleOnChange = (e, idx) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSave = (parentIdx, idx) => {
    setList((prev) =>
      prev.map((item, prevId) =>
        prevId === parentIdx
          ? {
              ...item,
              logs: item.logs.map((log, id) => (id === idx ? editedData : log)),
            }
          : item,
      ),
    );
    setActiveEditor({});
    setEditedData({});
  };

  const handleOnBlur = (e, parentIdx) => {
    const { value } = e.target;
    setActiveEditor({});

    setList((prev) =>
      prev.map((item, prevId) =>
        prevId === parentIdx ? { ...item, goal: value } : item,
      ),
    );
  };

  const handleOnEdit = (idx, data) => {
    setEditedData(data);
    setActiveEditor({ mode: "goalEdit", id: idx });
  };

  const handleLogOnEdit = (parentIdx, idx, data) => {
    setEditedData(data);
    setActiveEditor({ mode: "logEdit", id: { parent: parentIdx, log: idx } });
  };

  const handleOnDelete = (idx) => {
    setList((prev) => prev.filter((_, id) => id !== idx));
  };

  const handleLogOnDelete = (parentIdx, idx) => {
    setList((prev) =>
      prev.map((item, prevId) =>
        prevId === parentIdx
          ? {
              ...item,
              logs: item.logs.filter((_, id) => id !== idx),
            }
          : item,
      ),
    );
  };

  const dropdownData = (idx, data) => ({
    type: "ellipsis-vertical",
    items: [
      {
        content: (
          <>
            <LuPencil size={18} />
            edit
          </>
        ),
        fn: () => handleOnEdit(idx, data),
      },
      {
        content: (
          <>
            <LuTrash size={18} />
            delete
          </>
        ),
        fn: () => handleOnDelete(idx),
      },
    ],
  });

  const dropdownLogData = (parentIdx, idx, data) => ({
    type: "ellipsis-vertical",
    items: [
      {
        content: (
          <>
            <LuPencil size={18} />
            edit
          </>
        ),
        fn: () => handleLogOnEdit(parentIdx, idx, data),
      },
      {
        content: (
          <>
            <LuTrash size={18} />
            delete
          </>
        ),
        fn: () => handleLogOnDelete(parentIdx, idx),
      },
    ],
  });

  const displayLogs = (logs, parentIdx) => {
    return logs.map(({ content, timeSpent, mood }, idx) => {
      if (
        activeEditor.mode === "logEdit" &&
        activeEditor.id.parent === parentIdx &&
        activeEditor.id.log === idx
      )
        return (
          <CheckboxContentDisplayWrapper key={idx}>
            <CheckboxContentEdit
              name="content"
              ref={elemRef}
              value={editedData.content}
              onChange={(e) => handleOnChange(e)}
            />
            <CheckboxMoodContainer>
              <CheckboxMood>
                <CheckboxContentDisplayP>time spent:</CheckboxContentDisplayP>
                <CheckboxNumInput
                  type="number"
                  name="timeSpent"
                  value={editedData.timeSpent}
                  onChange={(e) => handleOnChange(e)}
                />
              </CheckboxMood>
              <CheckboxMood>
                <CheckboxContentDisplayP>mood:</CheckboxContentDisplayP>
                <Rating
                  setData={setEditedData}
                  sizeProp={23}
                  mood={Number(editedData.mood)}
                />
              </CheckboxMood>
            </CheckboxMoodContainer>
            <CheckboxButtonWrapper>
              <CheckboxButton
                $colored
                onClick={() => handleOnSave(parentIdx, idx)}
              >
                save
              </CheckboxButton>
              <CheckboxButton
                onClick={() => {
                  setActiveEditor(false);
                }}
              >
                cancel
              </CheckboxButton>
            </CheckboxButtonWrapper>
          </CheckboxContentDisplayWrapper>
        );

      return (
        <CheckboxContentDisplay key={idx}>
          <CheckboxContentDisplayIcon>
            <Dropdown
              data={dropdownLogData(parentIdx, idx, {
                content,
                timeSpent,
                mood,
              })}
              iconSize={16}
            />
          </CheckboxContentDisplayIcon>
          <div>{content}</div>
          <CheckboxContentDisplayStats>
            <CheckboxContentDisplayP>
              time spent: {timeSpent}
            </CheckboxContentDisplayP>
            <CheckboxContentDisplayP>mood: {mood}</CheckboxContentDisplayP>
          </CheckboxContentDisplayStats>
        </CheckboxContentDisplay>
      );
    });
  };

  return (
    <CheckboxList>
      {list.map((item, idx) => (
        <CheckboxItem key={idx}>
          <CheckboxInput
            type="checkbox"
            name="checkbox"
            checked={!!isChecked[idx]}
            onChange={() => handleCheckboxOnChange(idx)}
            id={`checkbox-${idx}`}
          />
          <CheckboxLabel htmlFor={`checkbox-${idx}`}>
            <CheckboxIconWrapper $isChecked={!!isChecked[idx]}>
              <FaCheck size={23} />
            </CheckboxIconWrapper>
          </CheckboxLabel>
          <CheckboxContentWrapper $isChecked={!!isChecked[idx]}>
            <CheckboxTextWrapper
              $style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "unset",
              }}
            >
              {activeEditor.mode === "goalEdit" && activeEditor.id === idx ? (
                <input
                  type="text"
                  value={editedData}
                  ref={elemRef}
                  name="goal"
                  onBlur={(e) => handleOnBlur(e, idx)}
                  onChange={(e) => setEditedData(e.target.value)}
                />
              ) : (
                <p>{item.goal}</p>
              )}
              <Dropdown data={dropdownData(idx, item.goal)} iconSize={16} />
            </CheckboxTextWrapper>
            {displayLogs(item.logs, idx)}
          </CheckboxContentWrapper>
        </CheckboxItem>
      ))}
    </CheckboxList>
  );
};

export default CheckboxComp;
