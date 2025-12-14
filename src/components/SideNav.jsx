import {
  Collapse,
  CollapseWrapper,
  NavItem,
  NavMenu,
  StyledNavLink,
  SideNavWrapper,
} from "./App.styled";

import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
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

import { useState } from "react";

const SideNav = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const navOneItems = [
    {
      name: "all entries",
      to: "/entries",
      icon: <LuClipboardList size={28} />,
    },
    {
      name: "my journal",
      to: "/journals",
      icon: <LuNotebook size={28} />,
    },
    {
      name: "my goals",
      to: "/goals",
      icon: <LuTarget size={28} />,
    },
    {
      name: "my ideas",
      to: "/ideas",
      icon: <LuLightbulb size={28} />,
    },
    {
      name: "mental health",
      to: "/mental-health",
      icon: <LuHeartPulse size={28} />,
    },
    {
      name: "tags",
      to: "/tags",
      icon: <LuTags size={28} />,
    },
    {
      name: "favorites",
      to: "/favorites",
      icon: <LuStar size={28} />,
    },
    {
      name: "archive",
      to: "/archive",
      icon: <LuArchive size={28} />,
    },
  ];

  const navTwoItems = [
    {
      name: "insights",
      to: "/insights",
      icon: <LuChartBar size={28} />,
    },
    {
      name: "reminders",
      to: "/reminders",
      icon: <LuBell size={28} />,
    },
    {
      name: "settings",
      to: "/settings",
      icon: <LuSettings size={28} />,
    },
    {
      name: "profile",
      to: "/profile",
      icon: <LuUser size={28} />,
    },
  ];

  return (
    <SideNavWrapper>
      <CollapseWrapper $padding={isMenuToggled} $justify={isMenuToggled}>
        <Collapse onClick={() => setIsMenuToggled(!isMenuToggled)}>
          {!isMenuToggled ? (
            <GoSidebarExpand size="35" />
          ) : (
            <GoSidebarCollapse size="35" />
          )}
        </Collapse>
        {!isMenuToggled && (
          <NavLink to="/entries" end>
            <Logo />
          </NavLink>
        )}
      </CollapseWrapper>
      <NavMenu>
        {navOneItems.map((item, idx) => (
          <NavItem key={idx}>
            <StyledNavLink to={item.to} $padding={isMenuToggled}>
              {item.icon}
              {!isMenuToggled && item.name}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavMenu>
      <NavMenu $margin="bottom">
        {navTwoItems.map((item, idx) => (
          <NavItem key={idx}>
            <StyledNavLink to={item.to} $padding={isMenuToggled}>
              {item.icon}
              {!isMenuToggled && item.name}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavMenu>
    </SideNavWrapper>
  );
};

export default SideNav;
