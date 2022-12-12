
import "./Steps.css";
import { Textarea } from "@chakra-ui/react";


const Steps = ({ steps, handleChange }) => {
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
        </div>
    
      </div>
    </div>
  );
};

export default Steps;
