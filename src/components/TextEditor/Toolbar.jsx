import { ToolbarWrapper } from "../App.styled";
import {
  LuBold,
  LuCaseLower,
  LuCaseSensitive,
  LuCaseUpper,
  LuItalic,
  LuList,
  LuMessageSquareQuote,
  LuType,
  LuUnderline,
} from "react-icons/lu";

const Toolbar = ({ editorRef }) => {
  const handleOnClick = (e) => {
    editorRef.current.focus();
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);

    const strong = document.createElement("strong");
    strong.textContent = sel.toString();

    range.deleteContents();
    range.insertNode(strong);
  };

  return (
    <ToolbarWrapper>
      <button onClick={handleOnClick}>
        <LuBold size="20" />
      </button>
      <button>
        <LuItalic size="20" />
      </button>
      <button>
        <LuUnderline size="20" />
      </button>
      <button>
        <LuList size="20" />
      </button>
      <button>
        <LuType size="20" />
      </button>
      <button>
        <LuCaseUpper size="20" />
      </button>
      <button>
        <LuCaseLower size="20" />
      </button>
      <button>
        <LuCaseSensitive size="20" />
      </button>
      <button>
        <LuMessageSquareQuote size="20" />
      </button>
    </ToolbarWrapper>
  );
};
export default Toolbar;
