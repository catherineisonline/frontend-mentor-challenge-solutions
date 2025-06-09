import "./nav.css";
import { steps } from "../../data/steps";
import { useForm } from "../../context/FormContext";

const Nav = () => {
  const { nextStep, targetIndex } = useForm();
  return (
    <nav>
      <ul className="nav-steps">
        {steps.map((step) => {
          return (
            <li key={step.id}>
              <button
                className={`nav-step ${targetIndex === step.id && "selected"}`}
                onClick={(e) => {
                  nextStep(e, step.pos);
                }}>
                <p className="nav-step-icon">{step.pos + 1}</p>
                <div className="nav-step__description">
                  <span>STEP {step.pos + 1}</span>
                  <p>{step.title}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
