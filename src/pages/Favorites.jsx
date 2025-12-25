import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Accordion from "../components/Accordion";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(openModal({ content: "hehe" }));
  };

  // return <Accordion />;
};

export default Favorites;
