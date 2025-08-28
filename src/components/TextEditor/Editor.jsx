import { useEffect, useRef } from "react";
import { EditorContent, EditorWrapper } from "../App.styled";
import Toolbar from "./Toolbar";

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor && !editor.innerHTML.trim()) {
      editor.innerHTML = "<p><br></p>";
    }
  }, []);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const sel = window.getSelection();
      const range = sel.getRangeAt(0);

      const newP = document.createElement("p");
      newP.innerHTML = "<br>";

      let currentP = range.startContainer;

      while (currentP && currentP.nodeName !== "P") {
        currentP = currentP.parentNode;
      }

      if (currentP && currentP.parentNode) {
        currentP.parentNode.insertBefore(newP, currentP.nextSibling);

        range.setStart(newP, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };

  return (
    <EditorWrapper>
      <Toolbar editorRef={editorRef} />
      <EditorContent
        ref={editorRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyDown={handleOnKeyDown}
      />
    </EditorWrapper>
  );
};

export default Editor;
