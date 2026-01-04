import {
  DummyDiv,
  HeadingTwo,
  InsightsColumnOne,
  InsightsColumnTwo,
  InsightsJournalGraph,
  InsightsMoodGraph,
  InsightsSection,
} from "../components/App.styled";

const Insights = () => (
  <InsightsSection>
    <InsightsColumnOne>asd</InsightsColumnOne>
    <InsightsColumnTwo>
      <InsightsMoodGraph>asdasd</InsightsMoodGraph>
      <InsightsJournalGraph>asdasd</InsightsJournalGraph>
    </InsightsColumnTwo>
  </InsightsSection>
);

export default Insights;
