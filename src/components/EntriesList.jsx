import {
  ColumnOne,
  HeaderButton,
  HeaderButtonWrapper,
  HeaderWrapper,
  HeadingThree,
  Section,
  SectionItem,
  SectionList,
} from "./App.styled";

import {
  LuLayoutDashboard,
  LuCalendarDays,
  LuList,
  LuFilter,
  LuSearch,
} from "react-icons/lu";

const EntriesList = ({ data }) => {
  return (
    <ColumnOne>
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
        </HeaderButtonWrapper>
        <HeaderButtonWrapper>
          <HeaderButton>
            <LuFilter size="25" />
          </HeaderButton>
          <HeaderButton>
            <LuSearch size="25" />
          </HeaderButton>
        </HeaderButtonWrapper>
      </HeaderWrapper>
      <Section>
        <HeadingThree>August 25. 2025</HeadingThree>
        <SectionList>
          <SectionItem>list</SectionItem>
        </SectionList>
      </Section>
    </ColumnOne>
  );
};

export default EntriesList;
