import Content from "../components/Content";
import EntriesList from "../components/EntriesList";
import EntryContent from "../components/EntryContent";

import { useGetRecentEntriesQuery } from "../redux/entriesApiSlice";

const Entries = () => {
  // const { data, isLoading, result } = useGetRecentEntriesQuery();

  return (
    <Content>
      <EntriesList />
      <EntryContent />
    </Content>
  );
};

export default Entries;
