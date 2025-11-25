import ReactDOM from "react-dom";

import {
  Overlay,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  ModalTitle,
  HeadingTwo,
  HeadingThree,
} from "../App.styled";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { LuClipboardPlus, LuX } from "react-icons/lu";
import { useEffect } from "react";
import Editor from "../TextEditor/TiptapEditor";

const GenerateHeader = (content) => {
  const { type, title } = content;
  let icon;

  if (type === "addEntry") icon = <LuClipboardPlus size={25} />;

  return (
    <ModalTitle>
      {icon}
      <HeadingThree>{title}</HeadingThree>
    </ModalTitle>
  );
};

const GenerateBody = (content) => {
  const { type } = content;

  if (type === "addEntry") return <Editor />;
};

const GenerateButton = (content) => {
  const { type } = content;

  if (type === "addEntry") return <Button>Add</Button>;
};

const Modal = () => {
  const { isOpen, isSubmitted, content } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleOnKeydown = (e) => {
      if (e.key === "Escape") return dispatch(closeModal());
    };
    document.addEventListener("keydown", handleOnKeydown);
    return () => {
      document.removeEventListener("keydown", handleOnKeydown);
    };
  }, []);

  if (!isOpen) return;

  return ReactDOM.createPortal(
    <Overlay onClick={() => dispatch(closeModal())}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          {GenerateHeader(content)}
          <Button onClick={() => dispatch(closeModal())}>
            <LuX size={25} />
          </Button>
        </ModalHeader>
        <ModalBody> {GenerateBody(content)}</ModalBody>
        <ModalFooter>{GenerateButton(content)}</ModalFooter>
      </ModalWrapper>
    </Overlay>,
    document.getElementById("modalRoot")
  );
};

export default Modal;
