import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(openModal({ content: "hehe" }));
  };
  return <button onClick={handleOnClick}>Favorites</button>;
};

export default Favorites;
