import {
  ProgressBarContainer,
  ProgressBarWrapper,
  ProgressBar,
  ProgressPercentage,
} from "./App.styled";

const Progress = () => {
  const percentage = 81;
  return (
    <ProgressBarWrapper>
      <ProgressBarContainer>
        <ProgressBar $percentage={percentage} />
        <ProgressPercentage>{percentage}%</ProgressPercentage>
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default Progress;
