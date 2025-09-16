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
  margin-top: ${(props) => (props.$margin === "bottom" ? "auto" : "0")};
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
`;

export const Section = styled.section``;

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

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const IdentitySection = styled.section`
  position: relative;
  height: 350px;
  margin-bottom: 90px;
`;

export const ProfilePicture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 1px dashed red;
  object-fit: cover;
`;

export const ProfileBanner = styled.div`
  height: 100%;
  background: url("https://picsum.photos/400/200") center center/cover no-repeat;
`;

export const QuickStatsWrapper = styled.div`
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--off-white);
  border-radius: 15px;
  box-shadow: 0px 0px 10px 1px black;
`;

export const StatsCard = styled.div`
  flex: 1;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    border-left: 1px solid red;
    border-right: 1px solid red;
  }
`;
export const MoodSection = styled.section`
  padding: 10px;
`;

export const MoodContainer = styled.div``;

export const MoodWrapper = styled.div``;

export const MoodGraphWrapper = styled.div``;

export const ActivitySection = styled.section``;

export const AchievementSection = styled.section`
  padding: 10px;
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
