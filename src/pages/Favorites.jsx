import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Rating from "../components/Rating";
import CheckboxComp from "../components/CheckboxComp";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(openModal({ content: "hehe" }));
  };

  const goalData = [
    {
      goal: "123123",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],

      isEditable: true,
    },
    {
      goal: "asdasdasd",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],
      isEditable: true,
    },
    {
      goal: "qweqwe",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],
      isEditable: true,
    },
    {
      goal: "zxzxzxzx",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],
      isEditable: true,
    },
    {
      goal: "qwexsa",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],
      isEditable: true,
    },
    {
      goal: "qwexasdasd",
      logs: [
        { content: "log1", timeSpent: "25", mood: "4" },
        { content: "log2", timeSpent: "15", mood: "3" },
        { content: "log3", timeSpent: "35", mood: "2" },
      ],
      isEditable: true,
    },
  ];

  return <CheckboxComp data={goalData} />;
};

export default Favorites;
