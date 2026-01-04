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
  ModalButton,
} from "../App.styled";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { LuClipboardPlus, LuX } from "react-icons/lu";
import { useEffect, useRef } from "react";

import Editor from "../TextEditor/TiptapEditor";
import MODAL_REGISTRY from "../../utils/modalRegistry";

const Modal = () => {
  const { isOpen, isSubmitted, props } = useSelector((state) => state.modal);

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

  if (!isOpen) return null;

  const ActiveModal = MODAL_REGISTRY[props.type];

  if (!ActiveModal) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={() => dispatch(closeModal())}>
      <ModalWrapper $style={props.style} onClick={(e) => e.stopPropagation()}>
        <ActiveModal />
      </ModalWrapper>
    </Overlay>,
    document.getElementById("modalRoot")
  );
};

export default Modal;
