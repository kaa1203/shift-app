import { EditorContent } from "@tiptap/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  font-weight: 500;
  font-size: 29px;
`;
export const HeadingThree = styled.h3``;

// Nav Style
export const SideNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid var(--muted-gray);
  max-width: 200px;
  height: 100vh;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid var(--muted-gray);
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderButton = styled.button``;

export const LogoWrapper = styled.div`
  min-width: 30px;
  height: 20px;
`;

export const CollapseWrapper = styled.div`
  display: flex;
  justify-content: ${({ $padding }) =>
    $padding === true ? "center" : "start"};
  align-items: center;
  gap: 20px;
  padding-left: ${({ $padding }) => ($padding === true ? "0" : "25px")};
`;

export const Collapse = styled.button`
  display: inline-flex;
  align-items: center;
`;

export const IconWrapper = styled.div``;

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
`;

export const ColumnTwoSection = styled.section`
  overflow: auto;
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
  background-color: pink;
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
  z-index: 9999;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--muted-gray);
  background-color: var(--off-white);
  width: 500px;
  max-height: calc(98vh - 15px);
  border-radius: 10px;
`;
export const ModalHeader = styled.div`
  text-align: center;
  color: var(--light-gray);
  background-color: var(--soft-indigo);
  border-radius: 8px 8px 0 0;
  padding: 4px;

  & button {
    position: relative;
    right: -135px;
    &:hover {
      color: var(--black);
    }
  }
`;
export const ModalBody = styled.div`
  padding: 10px;
`;
export const ModalFooter = styled.div``;

//Editor
export const EditorWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  border: 1px solid red;
  gap: 5px;
`;

export const StyledEditorContent = styled(EditorContent)`
  flex: 1;

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
  align-items: center;
  gap: 4px;
  padding: 2px;
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

export const ToolbarInput = styled.input``;

// Dropdown
export const DropdownWrapper = styled.div`
  position: relative;
  border: 1px solid red;
`;
export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;
export const DropdownList = styled.ul``;
export const DropdownItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: var(--soft-indigo);
    color: var(--off-white);
  }
`;
