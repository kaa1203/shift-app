import {
  ColumnTwo,
  HeaderWrapper,
  HeaderButtonWrapper,
  HeaderButton,
  HeadingThree,
  SectionList,
  SectionItem,
  Article,
  DummyPicture,
  ColumnTwoSection,
} from "./App.styled";

import {
  LuArrowRight,
  LuArrowLeft,
  LuPlus,
  LuFullscreen,
  LuPencil,
  LuTrash,
  LuCheck,
  LuX,
} from "react-icons/lu";

import { useDispatch } from "react-redux";
import { setFullscreen } from "../redux/fullScreenSlice";
import { openModal } from "../redux/modalSlice";
import Dropdown from "./Dropdown";
import { useRef, useState } from "react";
import Editor from "./TextEditor/TiptapEditor";

const EntryContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [defaultShowToolbar, setDefaultShowToolbar] = useState(false);

  const dispatch = useDispatch();

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
    const { editor, getImages } = editorRef.current;
    const contentJSON = editor.getJSON();
    const images = getImages();
    console.log(contentJSON);
    setIsEditing(false);
    setDefaultShowToolbar(false);
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

  const GenerateHeader = () => {
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
          <h3>August 25. 2025</h3>
          <HeaderButtonWrapper>
            <HeaderButton onClick={() => dispatch(setFullscreen())}>
              <LuFullscreen size="25" />
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
      <HeaderWrapper $justify="end">
        <HeaderButtonWrapper>
          <HeaderButton>
            <LuCheck size="25" onClick={handleOnSave} />
          </HeaderButton>
          <HeaderButton onClick={handleOnCancel}>
            <LuX size="25" />
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
    );
  };

  return (
    <ColumnTwo>
      {GenerateHeader()}
      <ColumnTwoSection>
        <Article>
          <Editor ref={editorRef} defaultShowToolbar={defaultShowToolbar} />
        </Article>
      </ColumnTwoSection>
    </ColumnTwo>
  );
};
export default EntryContent;
