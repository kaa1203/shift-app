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
