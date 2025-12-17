import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Carousel from "../components/Carousel";
import {
  CarouselItemWrapper,
  HeadingThree,
  HeadingTwo,
} from "../components/App.styled";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(openModal({ content: "hehe" }));
  };

  const items = [
    {
      header: "Your thoughts, at your pace",
      subtitle: "No pressure. No noise",
    },
    {
      header: "Write without expectations",
      subtitle: "One sentence or a whole page",
    },
    {
      header: "Messy ideas welcome",
      subtitle: "Save it now. Organize it later",
    },
    {
      header: "Progress, gently",
      subtitle: "Small steps still move you forward",
    },
    {
      header: "Patterns, not labels",
      subtitle: "Understand how you feel over time",
    },
  ];

  const generateItems = (items) => {
    return items.map(({ header, subtitle }) => (
      <CarouselItemWrapper>
        <HeadingTwo>{header}</HeadingTwo>
        <HeadingThree>{subtitle}</HeadingThree>
      </CarouselItemWrapper>
    ));
  };

  return <Carousel items={generateItems(items)} hasControl={false} />;
};

export default Favorites;
