import "./StepsCard.css";
import { CloseIcon } from "@chakra-ui/icons";

const StepsCard = ({ step, deleteStep }) => {
  return (
    <div className="step">
      <p>{step}</p>
      <CloseIcon onClick={() => deleteStep(step)} />
    </div>
  );
};

export default StepsCard;
