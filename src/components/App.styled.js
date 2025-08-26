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
  height: 100vh;
`;

export const Section = styled.section``;

export const HeadingThree = styled.h3``;

export const ColumnOne = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--muted-gray);
`;

export const SectionList = styled.ul``;

export const SectionItem = styled.li``;

export const ColumnTwo = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--muted-gray);
`;

// export const SectionHeader = styled.header`
//   display: flex;
//   flex-direction: column;
// `;
