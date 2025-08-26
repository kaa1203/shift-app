import {
  Button,
  HeaderButton,
  HeaderButtonWrapper,
  HeaderWrapper,
} from "./App.styled";
import {
  LuLayoutDashboard,
  LuCalendarDays,
  LuList,
  LuFilter,
  LuSearch,
} from "react-icons/lu";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderButtonWrapper>
        <HeaderButton>
          <LuList size="25" />
        </HeaderButton>
        <HeaderButton>
          <LuLayoutDashboard size="25" />
        </HeaderButton>
        <HeaderButton>
          <LuCalendarDays size="25" />
        </HeaderButton>
        <HeaderButton>
          <LuFilter size="25" />
        </HeaderButton>
        <HeaderButton>
          <LuSearch size="25" />
        </HeaderButton>
      </HeaderButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
