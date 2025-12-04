import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { EditorWrapper, StyledEditorContent } from "../App.styled";
import Toolbar from "./Toolbar";
import ImageGroup from "./ImageGroup";

const Editor = forwardRef((props, ref) => {
  const { defaultShowToolbar = false } = props;

  const [showToolbar, setShowToolbar] = useState(defaultShowToolbar);
  const [_, setRender] = useState(0);
  const [images, setImages] = useState([]);

  // const editorRef = useRef(null);

  // tiptap editor setup
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bulletList: true, orderedList: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
    ],
    content: "<p>Hello world!</p>",
    onCreate: ({ editor }) => {
      const endPos = editor.state.doc.content.size;
      editor.commands.setTextSelection(endPos);
    },
  });

  useImperativeHandle(ref, () => ({
    editor,
    getImages: () => images,
  }));

  useEffect(() => {
    if (!editor) return;

    // forced component to render to fix the visual bug
    const update = () => setRender((x) => x + 1);
    editor.on("selectionUpdate", update);
    editor.on("transaction", update);

    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <EditorWrapper onClick={() => setShowToolbar(true)}>
      {(showToolbar || images.length !== 0) && (
        <Toolbar editor={editor} setImages={setImages} />
      )}
      <StyledEditorContent
        editor={editor}
        onClick={() => editor.chain().focus().run()}
      />
      <ImageGroup images={images} setImages={setImages} />
    </EditorWrapper>
  );
});

export default Editor;
