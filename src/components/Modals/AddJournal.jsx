import { LuClipboardPlus, LuX } from "react-icons/lu";
import {
  Button,
  HeadingThree,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../App.styled";

import Editor from "../TextEditor/TiptapEditor";
import { useRef } from "react";
import { closeModal } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";

const AddJournal = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const handleOnSave = () => {
    const { editor, getImages } = editorRef.current;
    const contentJSON = editor.getJSON();
    const images = getImages();
    console.log(contentJSON);
  };

  return (
    <>
      <ModalHeader>
        <ModalTitle>
          <LuClipboardPlus size={25} />
          <HeadingThree>add journal</HeadingThree>
        </ModalTitle>
        <Button onClick={() => dispatch(closeModal())}>
          <LuX size={25} />
        </Button>
      </ModalHeader>
      <ModalBody>
        <Editor ref={editorRef} defaultShowToolbar={true} />
      </ModalBody>
      <ModalFooter>
        <ModalButton $colored={true} onClick={handleOnSave}>
          save
        </ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>cancel</ModalButton>
      </ModalFooter>
    </>
  );
};

export default AddJournal;
