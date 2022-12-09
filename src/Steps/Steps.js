import StepsCard from "../StepsCard/Stepscard";
import "./Steps.css";
import { Input, Textarea } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Steps = ({ steps, handleChange }) => {
  //   const allSteps = steps.map((step) => {
  //     return (
  //       <div key={step}>
  //         <I step={step} deleteStep={deleteStep} />
  //       </div>
  //     );
  //   });
  return (
    <div>
      <h5 className="steps-header">Steps</h5>
      <div className="steps-container">
        <div className="saved-steps">
          <Textarea
            name="steps"
            value={steps}
            onChange={(event) => handleChange(event)}
          />
          {/* <CloseIcon onClick={() => deleteStep(steps)} /> */}
        </div>
        {/* <div className="new-step">
          <Input
            placeholder="Add New Step"
            name="newStep"
            onChange={(event) => handleChange(event)}
          />
          <AddIcon onClick={() => addStep()} />
        </div> */}
      </div>
    </div>
  );
};

export default Steps;
