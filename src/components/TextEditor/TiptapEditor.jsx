import { mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";

import { EditorWrapper, StyledEditorContent } from "../App.styled";
import Toolbar from "./Toolbar";
import { useEffect, useRef, useState } from "react";
import imageContainer from "./ImageGroup";

const Editor = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [_, setRender] = useState(0);

  const editorRef = useRef(null);

  const CustomImage = Image.extend({
    name: "customImage",

    renderHTML({ HTMLAttributes }) {
      return [
        "img",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          class: "editor-image",
        }),
      ];
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bulletList: true, orderedList: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      CustomImage,
      Image.configure({ inline: false, allowBase64: true }),
      imageContainer,
      Highlight,
    ],
    content: "<p>Hello world!</p>",
    onCreate: ({ editor }) => {
      const endPos = editor.state.doc.content.size;
      editor.commands.setTextSelection(endPos);
    },
  });

  useEffect(() => {
    if (!editor) return;

    const update = () => setRender((x) => x + 1);
    editor.on("selectionUpdate", update);
    editor.on("transaction", update);

    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  useEffect(() => {
    const handleOnBlur = (e) => {
      if (editorRef.current && !editorRef.current.contains(e.target)) {
        setIsFocus(false);
      }
    };

    document.addEventListener("click", handleOnBlur);

    return () => {
      document.removeEventListener("click", handleOnBlur);
    };
  }, []);

  if (!editor) return null;

  return (
    <EditorWrapper ref={editorRef} onClick={() => setIsFocus(true)}>
      {isFocus && <Toolbar editor={editor} />}
      <StyledEditorContent
        editor={editor}
        onClick={() => editor.chain().focus().run()}
      />
    </EditorWrapper>
  );
};

export default Editor;
