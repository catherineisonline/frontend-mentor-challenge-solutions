import { steps } from "../../data/steps";
import { useForm } from "../../context/FormContext";
import "./change-step.css";
const ChangeStep = ({ mode }) => {
  const { nextStep, previousStep, targetIndex, submitForm } = useForm();
  return (
    <div className={`change-step ${targetIndex > 0 ? "multiple" : ""} ${mode}`}>
      {targetIndex > 0 && (
        <button
          className="change-step--back"
          type="button"
          onClick={previousStep}>
          Go Back
        </button>
      )}
      {targetIndex < steps.length - 1 && (
        <button className="change-step--next" type="button" onClick={nextStep}>
          Next Step
        </button>
      )}
      {targetIndex === steps.length - 1 && (
        <button
          className="change-step--confirm"
          type="submit"
          onClick={submitForm}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default ChangeStep;
