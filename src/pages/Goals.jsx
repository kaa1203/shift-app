import Content from "../components/Content";
import EntriesList from "../components/EntriesList";
import EntryContent from "../components/EntryContent";
import GoalContent from "../components/GoalContent";

const Goals = () => (
  <Content>
    <EntriesList />
    <EntryContent content={<GoalContent />} />
  </Content>
);

export default Goals;
