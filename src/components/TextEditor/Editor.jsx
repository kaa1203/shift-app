import React, { useEffect, useRef, useState } from "react";
import { EditorElem, EditorWrapper } from "../App.styled";
import Toolbar from "./Toolbar";
import throttle from "../../utils/throttle";

const generateNode = (node, index, parentIndex = null) => {
  if (node.text)
    return (
      <span key={index} data-path={[parentIndex, index]}>
        {node.text}
      </span>
    );

  return React.createElement(
    node.type,
    { key: index, "data-path": [index] },
    node.children.map((child, childIndex) =>
      generateNode(child, childIndex, index)
    )
  );
};

const moveCaretLeft = (selection, caret) => {
  const range = selection.getRangeAt(0);
  const startNode = document.querySelector(`[data-path="${caret.anchorPath}"]`);
  const startOffset = caret.anchorOffset;
  const endNode = document.querySelector(`[data-path="${caret.focusPath}"]`);
  const endOffset = caret.focusOffset;
  const textNode = startNode.firstChild || startNode;
  const prevNode = startNode.previousElementSibling;
  const prevTextNode = prevNode?.firstChild || prevNode;
  const prevNodeLastChar = prevNode?.textContent?.length || 0;

  const offset = Math.max(0, startOffset - 1);

  if (offset === startOffset) return;

  range.setStart(textNode, offset);

  if (offset === 0 && prevTextNode) {
    range.setStart(prevTextNode, prevNodeLastChar);
  }

  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
};

const moveCaretRight = (selection) => {
  const range = selection.getRangeAt(0);
  const node = selection.baseNode;
  const nextNode = node.parentElement.nextSibling;
  const textLength = node.textContent.length;
  const offset = (textLength, selection.anchorOffset + 1);

  if (offset < textLength) {
    range.setStart(node, offset);
  } else if (nextNode) {
    const target =
      nextNode.nodeType === Node.TEXT_NODE ? nextNode : nextNode.firstChild;
    range.setStart(target, 0);
  } else {
    range.setStart(node, textLength);
  }

  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
};

const Editor = () => {
  const [domTree, setDomTree] = useState([
    {
      type: "p",
      children: [{ text: "hello" }, { text: " " }, { text: "world" }],
    },
    {
      type: "p",
      children: [{ text: "hello" }, { text: " " }, { text: "world" }],
    },
    {
      type: "p",
      children: [{ text: "hello world" }],
    },
  ]);

  const [caret, setCaret] = useState({
    anchorPath: 0,
    anchorOffset: 0,
    focusPath: 0,
    focusOffset: 0,
  });

  const editorRef = useRef(null);

  useEffect(() => {
    const handleSelectionOnChange = () => {
      const splitFn = (nodePath) =>
        nodePath?.split(",").map((np) => Number(np));
      const selection = window.getSelection();
      const startPath = selection.anchorNode.parentElement.dataset.path;
      const endPath = selection.focusNode.parentElement.dataset.path;

      setCaret({
        anchorPath: splitFn(startPath),
        anchorOffset: selection.anchorOffset,
        focusPath: splitFn(endPath),
        focusOffset: selection.focusOffset,
      });
    };

    document.addEventListener(
      "selectionchange",
      throttle(handleSelectionOnChange, 25)
    );

    return () =>
      document.removeEventListener(
        "selectionchange",
        throttle(handleSelectionOnChange, 25)
      );
  }, []);

  const handleOnKeyDown = (e) => {
    e.preventDefault();
    const selection = window.getSelection();

    switch (e.key) {
      case "ArrowLeft":
        moveCaretLeft(selection, caret);
        break;
      case "ArrowRight":
        moveCaretRight(selection);
        break;

      default:
        setDomTree((prev) => {
          const updated = [...prev];
          const branch = { ...updated[0] };
          const leaves = [...branch.children];
          const leaf = { ...leaves[0] };

          leaf.text += e.key;
          leaves[0] = leaf;
          branch.children = leaves;
          updated[0] = branch;
          return updated;
        });
        break;
    }
  };

  return (
    <EditorWrapper>
      <Toolbar />
      <EditorElem
        ref={editorRef}
        onKeyDown={handleOnKeyDown}
        contentEditable
        suppressContentEditableWarning
      >
        {domTree.map((child, index) => generateNode(child, index))}
      </EditorElem>
    </EditorWrapper>
  );
};

export default Editor;
