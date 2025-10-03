import { EditorElem } from "../App.styled";
import Toolbar from "./Toolbar";

const Editor = () => {
  return (
    <EditorElem contentEditable>
      <Toolbar />
    </EditorElem>
  );
};

export default Editor;
