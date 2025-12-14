import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Carousel from "../components/Carousel";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(openModal({ content: "hehe" }));
  };

  const items = ["item1", "item2", "item3", "item4", "item5"];

  return <Carousel items={items} duration={1000} />;
};

export default Favorites;
