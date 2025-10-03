import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
`;

export const SideNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid var(--muted-gray);
  width: 200px;
  height: 100vh;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  // flex: 0 0 auto;
  padding: 8px;
  border-bottom: 1px solid var(--muted-gray);
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderButton = styled.button``;

export const LogoWrapper = styled.div`
  width: 130px;
  height: 50px;
`;

export const CollapseWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Collapse = styled.button`
  display: inline-flex;
  align-items: center;
  transform: rotate(180deg);
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
  padding: 4px 8px;
  padding-left: 25px;

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

export const Section = styled.section``;

export const HeadingOne = styled.h1``;
export const HeadingThree = styled.h3``;

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
  width: 120px;
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

// Editor

export const EditorElem = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid red;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  background-color: red;
`;
