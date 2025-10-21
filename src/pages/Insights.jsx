import {
  InsightsColumnOne,
  InsightsColumnTwo,
  InsightsJournalGraph,
  InsightsMoodGraph,
  InsightsSection,
} from "../components/App.styled";
import Chart from "../components/Charts";

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
