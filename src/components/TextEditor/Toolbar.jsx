import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";
import { ToolbarWrapper } from "../App.styled";

const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <button>
        <LuBold size={24} />
      </button>
      <button>
        <LuUnderline size={24} />
      </button>
      <button>
        <LuItalic size={24} />
      </button>
    </ToolbarWrapper>
  );
};

export default Toolbar;
