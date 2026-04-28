import { StepsItem, StepsLabel, StepsList } from "./App.styled";

const Steps = () => {
  const steps = [
    {
      title: "checkpoint 1",
      status: "finished",
    },
    {
      title: "checkpoint 2",
      status: "finished",
    },
    {
      title: "checkpoint 3",
      status: "finished",
    },
    {
      title: "checkpoint 4",
      status: "in progress",
    },
    {
      title: "checkpoint 5",
      status: "pending",
    },
    {
      title: "checkpoint 6",
      status: "pending",
    },
    {
      title: "checkpoint 6",
      status: "pending",
    },
  ];
  return (
    <StepsList>
      {steps.map(({ title, status }, idx) => (
        <StepsItem key={idx}>
          <StepsLabel>{idx + 1}</StepsLabel>
          <p>checkpoint {idx + 1}</p>
          <p>{title}</p>
          <p>{status}</p>
        </StepsItem>
      ))}
    </StepsList>
  );
};

export default Steps;
