import { useCallback, useState } from "react";
import { createEditor, Editor, Element, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";

import {
  LuBold,
  LuItalic,
  LuUnderline,
  LuStrikethrough,
  LuHighlighter,
} from "react-icons/lu";

const initialValue = [
  { type: "paragraph", children: [{ text: "wubbalubadubdub!" }] },
];

const buttonsArray = [
  { type: "normal", name: "bold", icon: <LuBold size={20} /> },
  { type: "normal", name: "italic", icon: <LuItalic size={20} /> },
  { type: "normal", name: "underline", icon: <LuUnderline size={20} /> },
  {
    type: "normal",
    name: "strikethrough",
    icon: <LuStrikethrough size={20} />,
  },
  { type: "normal", name: "highlight", icon: <LuHighlighter size={20} /> },
  { type: "normal", name: "heading1", icon: <LuHighlighter size={20} /> },
];

const CustomEditor = {
  isMarkActive(editor, type) {
    const marks = Editor.marks(editor);

    return marks ? marks[type] === true : false;
  },
  toggleMark(editor, type) {
    const isActive = CustomEditor.isMarkActive(editor, type);

    if (isActive) return Editor.removeMark(editor, `${type}`);

    Editor.addMark(editor, `${type}`, true);
  },
};

const SlateEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [isButtonActive, setIsButtonActive] = useState({ bold: false });

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;

      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const handleOnKeyDown = (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    switch (e.key) {
      case "b":
        e.preventDefault();
        CustomEditor.toggleMark(editor, "bold");
        break;
      case "i":
        e.preventDefault();
        CustomEditor.toggleMark(editor, "italic");
        break;
      case "u":
        e.preventDefault();
        CustomEditor.toggleMark(editor, "underline");
        break;
      case "s":
        e.preventDefault();
        CustomEditor.toggleMark(editor, "strikethrough");
        break;
      case "h":
        e.preventDefault();
        CustomEditor.toggleMark(editor, "highlight");
        break;
      default:
        break;
    }
  };

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <div>
        {buttonsArray.map((button, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              CustomEditor.toggleMark(editor, button.name);
              setIsButtonActive((prev) => ({
                ...prev,
                [button.name]: !prev[button.name],
              }));
            }}
            style={{ color: isButtonActive[button.name] ? "red" : "inherit" }}
          >
            {button.icon}
          </button>
        ))}
      </div>
      <Editable
        onKeyDown={handleOnKeyDown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const Leaf = ({ attributes, leaf, children }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.strikethrough) children = <s>{children}</s>;
  if (leaf.highlight) children = <mark>{children}</mark>;
  if (leaf.unordered) children = <ul>{children}</ul>;
  if (leaf.ordered) children = <ol>{children}</ol>;

  return <span {...attributes}>{children}</span>;
};

export default SlateEditor;
