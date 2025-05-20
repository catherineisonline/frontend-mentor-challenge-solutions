import { useForm } from "../../context/FormContext";
import StepOne from "../../components/steps/step-1/StepOne";
import StepTwo from "../../components/steps/step-2/StepTwo";
import StepThree from "../../components/steps/step-3/StepThree";
import StepFour from "../../components/steps/step-4/StepFour";
import StepFive from "../../components/steps/step-5/StepFive";
import Nav from "../../components/nav/Nav";
import "./main.css";

const Main = () => {
  const { targetIndex } = useForm();
  return (
    <main>
      <h1 className="visually-hidden">Multi-step Form</h1>
      <Nav />
      {targetIndex === 0 ? (
        <StepOne />
      ) : targetIndex === 1 ? (
        <StepTwo />
      ) : targetIndex === 2 ? (
        <StepThree />
      ) : targetIndex === 3 ? (
        <StepFour />
      ) : (
        <StepFive />
      )}
    </main>
  );
};

export default Main;
