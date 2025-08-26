import {
  Collapse,
  CollapseWrapper,
  NavItem,
  NavMenu,
  StyledNavLink,
  SideNavWrapper,
} from "./App.styled";

import { GoSidebarCollapse } from "react-icons/go";
import Logo from "./Logo";

import { NavLink } from "react-router-dom";

import {
  LuClipboardList,
  LuNotebook,
  LuTarget,
  LuLightbulb,
  LuHeartPulse,
  LuTags,
  LuStar,
  LuArchive,
  LuChartBar,
  LuBell,
  LuSettings,
  LuUser,
} from "react-icons/lu";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <CollapseWrapper>
        <Collapse>
          <GoSidebarCollapse size="32" />
        </Collapse>
        <NavLink to="/" end>
          <Logo />
        </NavLink>
      </CollapseWrapper>
      <NavMenu>
        <NavItem>
          <StyledNavLink to="/entries">
            <LuClipboardList size="24" />
            All entries
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/journals">
            <LuNotebook size="24" />
            My Journal
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/goals">
            <LuTarget size="24" />
            My Goals
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/ideas">
            <LuLightbulb size="24" />
            Ideas
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/mental-health">
            <LuHeartPulse size="24" />
            Mental Health
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/tags">
            <LuTags size="24" />
            Tags
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/favorites">
            <LuStar size="24" />
            Favorites
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/archive">
            <LuArchive size="24" />
            Archive
          </StyledNavLink>
        </NavItem>
      </NavMenu>
      <NavMenu $margin="bottom">
        <NavItem>
          <StyledNavLink to="insights">
            <LuChartBar size="24" />
            Insights
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="reminders">
            <LuBell size="24" />
            Reminders
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="settings">
            <LuSettings size="24" />
            Settings
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="profile">
            <LuUser size="24" />
            Profile
          </StyledNavLink>
        </NavItem>
      </NavMenu>
    </SideNavWrapper>
  );
};

export default SideNav;
