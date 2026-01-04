import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { LuGoal, LuX } from "react-icons/lu";
import {
  Button,
  Form,
  HeadingThree,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../App.styled";
import generateInput from "../../utils/GenerateInput";
import { useState } from "react";

const AddGoal = () => {
  const [inputValue, setInputValue] = useState({});

  const dispatch = useDispatch();

  const handleOnSave = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const inputData = [
    {
      type: "text",
      placeholder: "Title",
      name: "title",
      id: "title",
      label: "title",
    },
    {
      type: "textarea",
      placeholder: "Description",
      name: "description",
      id: "description",
      label: "description",
      style: { height: "100px" },
    },
    {
      type: "text",
      placeholder: "Unit",
      name: "unit",
      id: "unit",
      label: "unit",
    },
    [
      {
        type: "text",
        placeholder: "Start Date",
        name: "start",
        id: "start",
        label: "start date",
      },
      {
        type: "text",
        placeholder: "End Date",
        name: "end",
        id: "end",
        label: "end date",
      },
    ],
  ];

  return (
    <>
      <ModalHeader>
        <ModalTitle>
          <LuGoal size={25} />
          <HeadingThree>add goal</HeadingThree>
        </ModalTitle>
        <Button onClick={() => dispatch(closeModal())}>
          <LuX size={25} />
        </Button>
      </ModalHeader>
      <ModalBody $style={{ padding: "10px 15px" }}>
        <Form>{generateInput(inputData, handleOnChange, inputValue)}</Form>
      </ModalBody>
      <ModalFooter>
        <ModalButton type="submit" $colored={true} onClick={handleOnSave}>
          save
        </ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>cancel</ModalButton>
      </ModalFooter>
    </>
  );
};

export default AddGoal;
