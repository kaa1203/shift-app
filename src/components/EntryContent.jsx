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
import { useState } from "react";
import { useLocation } from "react-router-dom";

const EntryContent = ({
  content,
  customOnEdit,
  customOnSave,
  customOnDelete,
  customOnCancel,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { isFullscreen } = useSelector((state) => state.fullscreen);

  const dispatch = useDispatch();

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  const handleOnEdit = () => {
    customOnEdit();
    setIsEditing(true);
  };

  const handleOnDelete = () => {
    customOnDelete();
  };

  const handleOnSave = () => {
    customOnSave();
    setIsEditing(false);
  };

  const handleOnCancel = () => {
    customOnCancel();
    setIsEditing(false);
  };

  const handleOpenModal = (type) => {
    let style;

    switch (type) {
      case "journals":
        style = {
          minHeight: "60vh",
          maxHeight: " calc(98vh - 15px)",
          width: "70vw",
        };
        break;
      case "goals":
        style = {
          minHeight: "60vh",
          maxHeight: " calc(98vh - 15px)",
          width: "45vw",
        };
        break;
      default:
        break;
    }

    dispatch(openModal({ type: `ADD_${type.toUpperCase()}`, style }));
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

  const entriesDropdown = {
    type: "custom",
    icon: <LuPlus size={25} />,
    items: [
      {
        content: (
          <>
            <LuPlus size={20} />
            add journal
          </>
        ),
        fn: () => handleOpenModal("journals"),
      },
      {
        content: (
          <>
            <LuPlus size={20} />
            add goal
          </>
        ),
        fn: () => handleOpenModal("goals"),
      },
      {
        content: (
          <>
            <LuPlus size={20} />
            add idea
          </>
        ),
        fn: () => handleOpenModal("ideas"),
      },
      {
        content: (
          <>
            <LuPlus size={20} />
            add mental health
          </>
        ),
        fn: () => handleOpenModal("mental-health"),
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
            <Dropdown data={dropdownData} iconSize={25} />
            {currentPage === "entries" ? (
              <Dropdown data={entriesDropdown} iconSize={25} />
            ) : (
              <HeaderButton onClick={() => handleOpenModal(currentPage)}>
                <LuPlus size="25" />
              </HeaderButton>
            )}
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

  return (
    <ColumnTwo>
      {generateHeader()}
      <ColumnTwoSection>
        <Article>{content}</Article>
      </ColumnTwoSection>
    </ColumnTwo>
  );
};
export default EntryContent;
