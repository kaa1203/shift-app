import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuHighlighter,
  LuItalic,
  LuList,
  LuListOrdered,
  LuMessageSquareQuote,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";
import { ToolbarButton, ToolbarWrapper } from "../App.styled";
import Dropdown from "../Dropdown";
import TextAlign from "@tiptap/extension-text-align";

const Toolbar = ({ editor }) => {
  const buttonArr = [
    { type: "format", name: "bold", icon: <LuBold size={24} /> },
    { type: "format", name: "italic", icon: <LuItalic size={24} /> },
    { type: "format", name: "underline", icon: <LuUnderline size={24} /> },
    { type: "format", name: "strike", icon: <LuStrikethrough size={24} /> },
    { type: "align", name: "alignLeft", icon: <LuAlignLeft size={24} /> },
    { type: "align", name: "alignCenter", icon: <LuAlignCenter size={24} /> },
    { type: "align", name: "alignRight", icon: <LuAlignRight size={24} /> },
    {
      type: "align",
      name: "alignJustify",
      icon: <LuAlignJustify size={24} />,
    },
    { type: "format", name: "orderedList", icon: <LuListOrdered size={24} /> },
    { type: "format", name: "bulletList", icon: <LuList size={24} /> },
    { type: "format", name: "highlight", icon: <LuHighlighter size={24} /> },
    {
      type: "format",
      name: "blockquote",
      icon: <LuMessageSquareQuote size={24} />,
    },
  ];

  const isActive = (format) => {
    return typeof format === "string"
      ? editor.isActive(format)
      : editor.isActive(format);
  };

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleOnClick = (name) => {
    let defaultChain = editor.chain().focus();

    if (name.startsWith("align")) {
      return defaultChain
        .setTextAlign(name.replace("align", "").toLowerCase())
        .run();
    }

    if (name === "bulletList") {
      return defaultChain.toggleBulletList().run();
    }

    if (name === "orderedList") {
      return defaultChain.toggleOrderedList().run();
    }

    if (name === "highlight") return defaultChain.toggleHighlight().run();

    return defaultChain[`toggle${capitalize(name)}`]().run();
  };

  return (
    <ToolbarWrapper>
      {buttonArr.map(({ type, name, icon }, idx) => (
        <ToolbarButton
          key={idx}
          onClick={() => handleOnClick(name)}
          $isActive={
            type === "format"
              ? isActive(name)
              : editor.isActive({ textAlign: name })
          }
        >
          {icon}
        </ToolbarButton>
      ))}
    </ToolbarWrapper>
  );
};

export default Toolbar;
