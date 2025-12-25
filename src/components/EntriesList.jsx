import { useSelector } from "react-redux";
import {
  ColumnOne,
  ContentWrapper,
  DummyDiv,
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
import { useLocation } from "react-router-dom";

const EntriesList = ({ data }) => {
  const { isFullscreen } = useSelector((state) => state.fullscreen);

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  if (isFullscreen[currentPage]) return;

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
      <ContentWrapper>
        <Section>
          <HeadingThree>August 2025</HeadingThree>
          <SectionList>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
          </SectionList>
        </Section>
        <Section>
          <HeadingThree>July 2025</HeadingThree>
          <SectionList>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
            <SectionItem>
              <DummyDiv>img</DummyDiv>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis, odio.
              </p>
              <DummyDiv>
                <h2>25</h2>
                <p>Mon</p>
              </DummyDiv>
            </SectionItem>
          </SectionList>
        </Section>
      </ContentWrapper>
    </ColumnOne>
  );
};

export default EntriesList;
