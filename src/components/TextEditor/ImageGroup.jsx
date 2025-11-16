import { Node } from "@tiptap/core";

const imageContainer = Node.create({
  name: "imageContainer",
  group: "block",
  content: "image+",
  parseHTML() {
    return [{ tag: "div.editor-image-container" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", { class: "editor-image-container", ...HTMLAttributes }, 0];
  },
});

export default imageContainer;
