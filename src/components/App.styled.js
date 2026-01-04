import { EditorContent } from "@tiptap/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/journal-bg.jpg";

// General Style
export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
`;

export const Section = styled.section``;

export const HeadingOne = styled.h1`
  font-weight: 600;
`;
export const HeadingTwo = styled.h2`
  position: ${({ $position }) => ($position ? $position : "unset")};
  font-weight: 500;
  font-size: 29px;
  color: ${({ $color }) => ($color ? $color : "inherit")};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "inherit"};
`;
export const HeadingThree = styled.h3`
  font-weight: 400;
  color: ${({ $color }) => ($color ? $color : "inherit")};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "inherit"};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--deep-slate);
  font: inherit;

  &:focus {
    box-shadow: 0 0 0 2px var(--indigo);
    border: 1px solid transparent;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const TextArea = styled.textarea`
  font: inherit;
  border: 1px solid var(--deep-slate);
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  resize: none;
  min-height: 0;

  &:focus {
    box-shadow: 0 0 0 2px var(--indigo);
    border: 1px solid transparent;
  }

  ${({ $style }) => $style}
`;

export const GroupedInputWrapper = styled(InputWrapper)`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const Label = styled.label`
  text-transform: capitalize;
`;

// Nav Style
export const SideNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid var(--muted-gray);
  max-width: 220px;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  position: relative;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: ${({ $justify }) =>
    $justify === "end" ? "end" : "space-between"};
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--muted-gray);
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  text-transform: capitalize;
`;

export const HeaderButton = styled.button`
  display: ${({ $display }) => ($display === "block" ? "block" : $display)};
  align-items: ${({ $align }) => ($align ? $align : "unset")};
  justify-content: ${({ $justify }) => ($justify ? $justify : "unset")};
  gap: ${({ $gap }) => ($gap ? $gap : "unset")};

  &:hover {
    color: ${({ $hover }) => ($hover ? $hover : "var(--soft-indigo)")};
  }
`;

export const LogoWrapper = styled.div`
  min-width: 30px;
  height: 20px;
  position: relative;
  z-index: 99999999999999;

  ${({ $style }) => $style};
`;

export const CollapseWrapper = styled.div`
  display: flex;
  justify-content: ${({ $padding }) =>
    $padding === true ? "center" : "start"};
  align-items: center;
  gap: 20px;
  padding: 5px 0;
  padding-left: ${({ $padding }) => ($padding === true ? "0" : "25px")};
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--off-white);
`;

export const Collapse = styled.button`
  display: inline-flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  &:hover {
    color: var(--soft-indigo);
  }
`;

export const Button = styled.button``;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0;
  margin-top: ${({ $margin }) => ($margin === "bottom" ? "auto" : "0")};
`;

export const NavItem = styled.li`
  font-size: 18px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: var(--off-white);
    background-color: var(--soft-indigo);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: ${({ $padding }) =>
    $padding === true ? "4px 20px" : "4px 8px 4px 25px"};

  &.active {
    background-color: var(--soft-indigo);
    color: var(--off-white);
  }
`;

export const Nav = styled.nav``;

export const Main = styled.main`
  display: flex;
  flex: 1;
  overflow: auto;
`;

// Entry

export const ColumnOne = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
  border-right: 1px solid var(--muted-gray);
`;

export const SectionList = styled.ul``;

export const SectionItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 4px;

  &:hover {
    cursor: pointer;
    background-color: var(--soft-indigo);
    color: var(--off-white);
  }
`;

export const ColumnTwo = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  border-right: 1px solid var(--muted-gray);
  overflow: hidden;
`;

export const ColumnTwoSection = styled.section`
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 2px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
  height: 100%;
`;

export const DummyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$width ? props.$width : "120px")};
  height: auto;
  background-color: var(--muted-gray);
`;

export const DummyPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 250px;
  background-color: var(--muted-gray);
  font-size: 60px;
`;

// Profile Page

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const IdentitySection = styled.section`
  position: relative;
  min-height: 300px;
  margin-bottom: 180px;
  color: var(--light-gray);
`;

export const ProfileWrapper = styled.div`
  position: relative;
  top: -80px;
  display: flex;
  align-items: end;
  gap: 16px;
  padding: 25px;
  background-color: var(--soft-indigo);
`;

export const ProfilePictureWrapper = styled.div`
  position: relative;
  top: -40px;
  height: 200px;
  width: 200px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    inset: -4px;
    border-radius: 50%;
    background-color: var(--soft-indigo);
    z-index: 9;
  }
`;

export const ProfilePicture = styled.img`
  position: relative;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
`;

export const ProfileIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 15%;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  z-index: 11;
  color: var(--off-white);
  background-color: var(--soft-indigo);
  border: 1px solid var(--off-white);

  &:hover {
    background-color: var(--off-white);
    border: 1px solid var(--soft-indigo);
    color: var(--soft-indigo);
  }
`;

export const ProfileBanner = styled.div`
  position: relative;
  height: 100%;
  // background: url("https://picsum.photos/200/1500") center center/cover
  //   no-repeat;
  background-color: grey;
  z-index: 5;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  justify-content: center;
`;

export const ProfileBody = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  border: 1px solid red;
`;

export const MiscWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 15px;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  align-self: end;
`;

export const ProfileButton = styled.button`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid var(--off-white);
  margin-left: 10px;

  &:hover {
    background-color: var(--off-white);
    color: var(--soft-indigo);
    border: 1px solid var(--soft-indigo);
  }
`;

export const QuickStatsWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const StatsCard = styled.div`
  flex: 0 0 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const MoodSection = styled.section``;

export const MoodContainer = styled.div``;

export const MoodWrapper = styled.div``;

export const MoodGraphWrapper = styled.div``;

export const ActivitySection = styled.section``;

export const AchievementSection = styled.section``;

export const EntrySection = styled.section`
  position: relative;
`;

export const EntryWrapper = styled.div`
  height: ${({ $isHidden }) => ($isHidden ? "200px" : "auto")};
  overflow: ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
  margin-bottom: ${({ $isHidden }) => ($isHidden ? "0" : "30px")};
`;

export const EntryMask = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
`;

export const EntryMaskButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: ${({ $isHidden }) =>
    $isHidden ? "var(--light-gray)" : "var(--soft-indigo)"};
  text-transform: capitalize;
  padding: 5px;

  &:hover {
    color: ${({ $isHidden }) =>
      $isHidden ? "var(--soft-indigo)" : "var(--black)"};
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 30px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  border: 1px solid var(--black);
  gap: 15px;
  padding: 5px;
  border-radius: 5px;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border: 1px solid var(--black);
  border-radius: 50%;
`;
// Settings

export const SettingsSection = styled.section`
  padding: 10px;

  & h2 {
    margin-bottom: 15px;
  }
`;

export const SettingsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: capitalize;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Insights

export const InsightsSection = styled.section`
  flex: 1;
  display: flex;
`;

export const InsightsColumnOne = styled.div`
  flex: 1 1 30%;
  border-right: 1px solid var(--muted-gray);
`;

export const InsightsColumnTwo = styled.div`
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
`;

export const InsightsMoodGraph = styled.div`
  flex: 1;
  border-bottom: 1px solid var(--muted-gray);
`;

export const InsightsJournalGraph = styled.div`
  flex: 1;
`;

// Modal

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--muted-gray);
  background-color: var(--off-white);
  border-radius: 10px;
  min-width: 40vw;
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ $style }) => $style}
`;

export const ModalHeader = styled.div`
  text-transform: capitalize;
  color: var(--off-white);
  background-color: var(--soft-indigo);
  border-radius: 8px 8px 0 0;
  padding: 8px;
  position: relative;
  font-size: 20px;

  & button {
    position: absolute;
    top: 7px;
    right: 8px;

    &:hover {
      color: var(--black);
    }
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ModalBody = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  ${({ $style }) => $style};
`;

export const ModalFooter = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  align-items: center;
  border-top: 1px solid var(--muted-gray-transparent);
`;

export const ModalButton = styled(Button)`
  text-align: center;
  font-weight: 500;
  padding: 8px 6px;
  width: 80px;
  background: ${({ $colored }) =>
    $colored ? "var(--soft-indigo)" : "transparent"};
  color: ${({ $colored }) => ($colored ? "var(--off-white)" : "inherit")};
  border-radius: 4px;
  text-transform: capitalize;
  border: 1px solid var(--muted-gray);

  &:hover {
    background: ${({ $colored }) =>
      $colored ? "var(--indigo)" : "transparent"};
    color: ${({ $colored }) => ($colored ? "var(--off-white)" : "inherit")};
    border: ${({ $colored }) =>
      $colored ? "1px solid var(--muted-gray)" : "1px solid var(--black)"};
  }
`;

//Editor

export const EditorWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  gap: 5px;
  overflow: hidden;
  user-select: none;
  font-family: "Libre Baskerville";
  background: var(--paper);
  padding: 20px 8px;
  box-shadow: 0 10px 30px rgba(60, 50, 40, 0.08);
`;

export const StyledEditorContent = styled(EditorContent)`
  flex: 1;
  overflow: auto;
  padding: 0 4px;
  hyphens: auto;

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
    padding-left: 0;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
    padding-left: 0;
  }

  li {
    margin: 0.25em 0;
  }
`;

// Toolbar

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px;
  border-bottom: 1px solid var(--muted-gray);
  margin-bottom: 15px;
`;

export const ToolbarButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ToolbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  color: ${({ $isActive }) => ($isActive ? "var(--soft-indigo)" : "unset")};
  box-shadow: ${({ $isActive }) =>
    $isActive ? "inset 0 2px 4px rgba(0, 0, 0, 0.3)" : "unset"};
`;

export const ToolbarLabel = styled.label`
  &:hover {
    color: var(--soft-indigo);
    cursor: pointer;
  }
`;

export const ToolbarInput = styled.input`
  display: none;
`;

// Image Group

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 120px;
  flex-shrink: 0;
  overflow-x: auto;
  padding: 6px;
  border: 1px solid var(--muted-gray);
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  user-select: none;

  & div {
    position: absolute;
    top: 2px;
    right: 5px;
    color: var(--off-white);

    &:hover {
      cursor: pointer;
      color: var(--soft-indigo);
    }
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 90px;
`;

export const ImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

// Dropdown

export const DropdownWrapper = styled.div`
  position: relative;
`;
export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;
export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0%;
  background: var(--off-white);
  border: 1px solid var(--muted-gray);
  border-radius: 4px;
  padding: 4px;
  z-index: 999;
  width: max-content;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 4px 12px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--soft-indigo);
    color: var(--off-white);
  }
`;

// Landing page

export const LandingWrapper = styled.section`
  display: flex;
  width: 100%;
  position: relative;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 40%;
  min-width: 0;
  background: url(${bg}) center center/cover no-repeat;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: var(--black-transparent);
    z-index: 9999;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex: 0 0 60%;
  padding: 10px;
  overflow: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: ${({ $width }) => ($width ? $width : "100%")};
  gap: 10px;
`;

export const FormButton = styled(Button)`
  padding: 10px;
  color: var(--off-white);
  background: var(--soft-indigo);
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 10px;

  &:hover {
    background: var(--indigo);
    color: var(--off-white);
  }
`;

export const SmallTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SmallText = styled.p`
  ${({ $style }) => $style}
`;

export const FormLink = styled.a`
  text-decoration: underline;
  color: var(--soft-indigo);

  &:first-child {
    margin-left: 10px;
  }

  &:hover {
    color: var(--indigo);
  }
`;

export const FormHeadingWrapper = styled(HeadingWrapper)`
  margin: 50px 0 20px 108px;

  align-self: start;

  & > h1 {
    font-size: 50px;
  }
`;

// Goal Page

export const GoalWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

export const GoalHeadingTwo = styled(HeadingTwo)`
  position: sticky;
  top: 0;
  left: 0;
  background: var(--paper);
  padding: 10px;
`;

export const GoalAccTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const GoalsNoteWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const GoalStatusIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 10px;
  width: 110px;
`;

export const GoalStatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  background: ${({ $status }) =>
    $status === "completed"
      ? "var(--soft-green)"
      : $status === "skipped"
        ? "var(--coral-red)"
        : "var(--sky-blue)"};
  border-radius: 50%;
`;

export const GoalLogWrapper = styled.div``;

// Custom input

export const CustomInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  width: 100%;
`;

export const CustomIconWrapper = styled(IconWrapper)`
  position: absolute;
  top: 60%;
  right: 3%;
  cursor: pointer;
`;

// Carousel

export const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CarouselPrev = styled(IconWrapper)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0.5;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }
`;

export const CarouselNext = styled(IconWrapper)`
  position: absolute;
  top: 50%;
  right: 0;
  opacity: 0.5;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }
`;

export const CarouselLegendWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
`;

export const CarouselLegend = styled.div`
  width: 12px;
  height: 12px;
  background: ${({ $current }) =>
    $current ? "var(--soft-indigo)" : "transparent"};
  border: 1px solid var(--off-white);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: var(--soft-indigo);
  }
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  align-items: center;
  width: 80%;
  position: absolute;
  inset: 0;
  margin: auto;
`;

// Accordion

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  ${({ $containerStyling }) => $containerStyling};
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--muted-gray);
  border-top: none;
  ${({ $wrapperStyling }) => $wrapperStyling};
`;

export const AccordionList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: justify;
  // gap: 5px;
  padding: 0 8px 5px 8px;
  ${({ $listStyling }) => $listStyling};
`;

export const AccordionItem = styled.li`
  padding: 5px;
  margin: ${({ $margin }) => ($margin ? $margin : "unset")};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "inherit"};
`;

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: inherit;
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "inherit"};
  padding: 8px;
  border-top: 1px solid var(--muted-gray);
  border-bottom: ${({ $isOpen }) =>
    $isOpen ? "1px solid var(--muted-gray)" : "none"};
  ${({ $buttonStyling }) => $buttonStyling}
`;

export const AccordionIconWrapper = styled(IconWrapper)`
  display: flex;
`;
