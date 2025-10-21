import ReactDOM from "react-dom";

import {
  Overlay,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { LuX } from "react-icons/lu";
import { useEffect } from "react";

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
          this is where the title goes
          <Button onClick={() => dispatch(closeModal())}>
            <LuX size={25} />
          </Button>
        </ModalHeader>
        <ModalBody> This is where the content goes</ModalBody>
        <ModalFooter>This is where the footer goes</ModalFooter>
      </ModalWrapper>
    </Overlay>,
    document.getElementById("modalRoot")
  );
};

export default Modal;
