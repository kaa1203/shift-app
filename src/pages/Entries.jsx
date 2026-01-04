import { useRef, useState } from "react";
import Content from "../components/Content";
import EntriesList from "../components/EntriesList";
import EntryContent from "../components/EntryContent";

import { useGetRecentEntriesQuery } from "../redux/entriesApiSlice";
import { useDispatch } from "react-redux";
import Editor from "../components/TextEditor/TiptapEditor";
import { openModal } from "../redux/modalSlice";

const Entries = () => {
  // const { data, isLoading, result } = useGetRecentEntriesQuery();
  const [defaultShowToolbar, setDefaultShowToolbar] = useState(false);
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const handleOnSave = () => {
    const { editor, getImages } = editorRef.current;
    const contentJSON = editor.getJSON();
    const images = getImages();
    setDefaultShowToolbar(false);

    console.log(contentJSON);
  };

  const handleOnEdit = () => setDefaultShowToolbar(true);

  const handleOnDelete = () =>
    dispatch(openModal({ title: "delete entry *entry number* " }));

  const handleOnCancel = () => setDefaultShowToolbar(false);

  return (
    <Content>
      <EntriesList />
      <EntryContent
        content={
          <Editor ref={editorRef} defaultShowToolbar={defaultShowToolbar} />
        }
        customOnSave={handleOnSave}
        customOnCancel={handleOnCancel}
        customOnEdit={handleOnEdit}
        customOnDelete={handleOnDelete}
      />
    </Content>
  );
};

export default Entries;
