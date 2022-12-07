import StepsCard from "../StepsCard/Stepscard";
import "./Steps.css";
import { Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Steps = ({ steps, deleteStep, handleChange, addStep }) => {
  const allSteps = steps.map((step) => {
    return (
      <div key={step}>
        <StepsCard step={step} deleteStep={deleteStep} />
      </div>
    );
  });
  return (
    <div>
      <h5 className="steps-header">Steps</h5>
      <div className="steps-container">
        <div className="saved-steps">{allSteps}</div>
        <div className="new-step">
          <Input
            placeholder="Add New Step"
            name="newStep"
            onChange={(event) => handleChange(event)}
          />
          <AddIcon onClick={() => addStep()} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
