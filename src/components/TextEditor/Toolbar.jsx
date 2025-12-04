import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHighlighter,
  LuImage,
  LuItalic,
  LuList,
  LuListOrdered,
  LuMessageSquareQuote,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";

import {
  ToolbarButton,
  ToolbarButtonWrapper,
  ToolbarInput,
  ToolbarLabel,
  ToolbarWrapper,
} from "../App.styled";
import { handleImageUpload } from "../../utils/handleImageUpload";

const MergedButtons = (buttons) => {
  return Object.values(buttons).reduce((acc, btn) => {
    const { type, ...rest } = btn;

    if (!acc[type]) acc[type] = [];

    acc[type].push(rest);
    return acc;
  }, {});
};

const GenerateButtons = (btns, isActive, handleOnClick) => {
  const buttons = MergedButtons(btns);
  return Object.entries(buttons).map(([key, value]) => (
    <ToolbarButtonWrapper key={key}>
      {value.map(({ name, icon, level }) => (
        <ToolbarButton
          key={name}
          onClick={() => handleOnClick(name, level)}
          $isActive={isActive(name, level)}
        >
          {icon}
        </ToolbarButton>
      ))}
    </ToolbarButtonWrapper>
  ));
};

const Toolbar = ({ editor, setImages }) => {
  const buttonArr = [
    { type: "format", name: "bold", icon: <LuBold size={28} /> },
    { type: "format", name: "italic", icon: <LuItalic size={28} /> },
    { type: "format", name: "underline", icon: <LuUnderline size={28} /> },
    { type: "format", name: "strike", icon: <LuStrikethrough size={28} /> },
    {
      type: "format2",
      name: "heading1",
      icon: <LuHeading1 size={28} />,
      level: 1,
    },
    {
      type: "format2",
      name: "heading2",
      icon: <LuHeading2 size={28} />,
      level: 2,
    },
    { type: "align", name: "alignLeft", icon: <LuAlignLeft size={28} /> },
    { type: "align", name: "alignCenter", icon: <LuAlignCenter size={28} /> },
    { type: "align", name: "alignRight", icon: <LuAlignRight size={28} /> },
    {
      type: "align",
      name: "alignJustify",
      icon: <LuAlignJustify size={28} />,
    },
    { type: "list", name: "orderedList", icon: <LuListOrdered size={28} /> },
    { type: "list", name: "bulletList", icon: <LuList size={28} /> },
    { type: "format2", name: "highlight", icon: <LuHighlighter size={28} /> },
    {
      type: "format2",
      name: "blockquote",
      icon: <LuMessageSquareQuote size={28} />,
    },
  ];

  const isActive = (format, level) => {
    if (format.startsWith("heading"))
      return editor.isActive("heading", { level });

    if (format.startsWith("align")) {
      const name = format.slice(5).toLowerCase();

      return editor.isActive({ textAlign: name });
    }

    return editor.isActive(format);
  };

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleOnClick = (name, level) => {
    let defaultChain = editor.chain().focus();

    if (name.startsWith("align")) {
      const current = editor.getAttributes("paragraph").textAlign;
      const align = name.replace("align", "").toLowerCase();

      if (current === align) return defaultChain.setTextAlign("left").run();
      return defaultChain.setTextAlign(align).run();
    }

    if (name.startsWith("heading"))
      return defaultChain.toggleHeading({ level }).run();

    if (name === "bulletList") return defaultChain.toggleBulletList().run();

    if (name === "orderedList") return defaultChain.toggleOrderedList().run();

    if (name === "highlight") return defaultChain.toggleHighlight().run();

    return defaultChain[`toggle${capitalize(name)}`]().run();
  };

  return (
    <ToolbarWrapper>
      {/* {buttonArr.map(({ type, name, icon, level }, idx) => (
        <ToolbarButton
          key={idx}
          onClick={() => handleOnClick(name, level)}
          $isActive={isActive(name, level)}
        >
          {icon}
        </ToolbarButton>
      ))} */}
      {GenerateButtons(buttonArr, isActive, handleOnClick)}
      <ToolbarLabel>
        <LuImage size={28} />
        <ToolbarInput
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleImageUpload(e, setImages)}
        />
      </ToolbarLabel>
    </ToolbarWrapper>
  );
};

export default Toolbar;
