import {
  ColumnTwo,
  HeaderWrapper,
  HeaderButtonWrapper,
  HeaderButton,
  Article,
  ColumnTwoSection,
  HeadingThree,
} from "./App.styled";

import {
  LuArrowRight,
  LuArrowLeft,
  LuPlus,
  LuFullscreen,
  LuPencil,
  LuTrash,
  LuMinimize,
} from "react-icons/lu";

import { useDispatch, useSelector } from "react-redux";
import { setFullscreen } from "../redux/fullscreenSlice";
import { openModal } from "../redux/modalSlice";
import Dropdown from "./Dropdown";
import { useRef, useState } from "react";
import Editor from "./TextEditor/TiptapEditor";
import { useLocation } from "react-router-dom";
import GoalContent from "./GoalContent";

const EntryContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [defaultShowToolbar, setDefaultShowToolbar] = useState(false);

  const { isFullscreen } = useSelector((state) => state.fullscreen);

  const dispatch = useDispatch();

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  const editorRef = useRef(null);

  const handleOnClick = (e) => {
    const type = e.target.closest("li").innerText.toLowerCase();

    if (type === "edit") {
      setIsEditing(true);
      setDefaultShowToolbar(true);
      return;
    }

    return dispatch(openModal({ title: "delete entry *entry number* " }));
  };

  const handleOnSave = () => {
    if (["entries", "journals"].includes(currentPage)) {
      const { editor, getImages } = editorRef.current;
      const contentJSON = editor.getJSON();
      const images = getImages();
      setDefaultShowToolbar(false);

      console.log(contentJSON);
    }

    setIsEditing(false);
  };

  const handleOnCancel = () => {
    setIsEditing(false);
    setDefaultShowToolbar(false);
  };

  const dropdownData = {
    type: "ellipsis",
    items: [
      {
        content: (
          <>
            <LuPencil size={20} />
            edit
          </>
        ),
        fn: handleOnClick,
      },
      {
        content: (
          <>
            <LuTrash size={20} />
            delete
          </>
        ),
        fn: handleOnClick,
      },
    ],
  };

  const generateHeader = () => {
    if (!isEditing)
      return (
        <HeaderWrapper>
          <HeaderButtonWrapper>
            <HeaderButton>
              <LuArrowLeft size="25" />
            </HeaderButton>
            <HeaderButton>
              <LuArrowRight size="25" />
            </HeaderButton>
          </HeaderButtonWrapper>
          <HeadingThree>August 25. 2025</HeadingThree>
          <HeaderButtonWrapper>
            <HeaderButton
              onClick={() => dispatch(setFullscreen({ currentPage }))}
            >
              {isFullscreen[currentPage] ? (
                <LuMinimize size="23" />
              ) : (
                <LuFullscreen size="25" />
              )}
            </HeaderButton>
            <Dropdown data={dropdownData} />
            <HeaderButton
              onClick={() =>
                dispatch(
                  openModal({
                    title: "add entry",
                    type: "addEntry",
                  })
                )
              }
            >
              <LuPlus size="25" />
            </HeaderButton>
          </HeaderButtonWrapper>
        </HeaderWrapper>
      );
    return (
      <HeaderWrapper $justify="space-between">
        <HeaderButtonWrapper>
          <HeaderButton onClick={handleOnCancel}>
            <LuArrowLeft size="25" />
          </HeaderButton>
        </HeaderButtonWrapper>
        <HeadingThree>Currently editing...</HeadingThree>
        <HeaderButtonWrapper>
          <HeaderButton $hover={"var(--coral-red)"} onClick={handleOnCancel}>
            Cancel
          </HeaderButton>
          <HeaderButton $hover={"var(--soft-green)"} onClick={handleOnSave}>
            save
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
    );
  };

  const generateBody = () => {
    if (["entries", "journals"].includes(currentPage)) {
      return <Editor ref={editorRef} defaultShowToolbar={defaultShowToolbar} />;
    }

    if (currentPage === "goals") return <GoalContent />;
  };

  return (
    <ColumnTwo>
      {generateHeader()}
      <ColumnTwoSection>
        <Article>{generateBody()}</Article>
      </ColumnTwoSection>
    </ColumnTwo>
  );
};
export default EntryContent;
