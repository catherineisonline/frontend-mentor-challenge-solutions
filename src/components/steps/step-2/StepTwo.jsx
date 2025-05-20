import "./step-2.css";
import "../index.css";
import ChangeStep from "../../../components/change-step/ChangeStep";
import { useForm } from "../../../context/FormContext";
import { prices } from "../../../data/steps";
import Arcade from "../../../assets/icon-arcade.svg";
import Pro from "../../../assets/icon-pro.svg";
import Advanced from "../../../assets/icon-advanced.svg";

const StepTwo = () => {
  const { handleForm, errors, form } = useForm();
  return (
    <section className="step" aria-labelledby="title">
      <div className="step__content">
        <header>
          <h1 id="title">Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </header>
        <form className="step__form">
          <span className="form__error-second">{errors.plan}</span>
          <fieldset className="form__plans">
            <div className="form__plans-option">
              <img src={Arcade} alt="" aria-hidden="true" />
              <input
                type="radio"
                name="plan"
                value="Arcade"
                checked={form.plan === "Arcade"}
                onChange={handleForm}
              />
              <label htmlFor="plan">
                Arcade
                <span>
                  $
                  {!form.monthly
                    ? `${prices.monthly.arcade}/mo`
                    : `${prices.yearly.arcade}/yr`}
                </span>
                {form.monthly && <span className="bonus">2 months free</span>}
              </label>
            </div>
            <div className="form__plans-option">
              <img src={Advanced} alt="" aria-hidden="true" />
              <input
                type="radio"
                name="plan"
                value="Advanced"
                checked={form.plan === "Advanced"}
                onChange={handleForm}
              />
              <label htmlFor="plan">
                Advanced
                <span>
                  $
                  {!form.monthly
                    ? `${prices.monthly.advanced}/mo`
                    : `${prices.yearly.advanced}/yr`}
                </span>
                {form.monthly && <span className="bonus">2 months free</span>}
              </label>
            </div>
            <div className="form__plans-option">
              <img src={Pro} alt="" aria-hidden="true" />
              <input
                type="radio"
                name="plan"
                value="Pro"
                checked={form.plan === "Pro"}
                onChange={handleForm}
              />
              <label htmlFor="plan">
                Pro
                <span>
                  $
                  {!form.monthly
                    ? `${prices.monthly.pro}/mo`
                    : `${prices.yearly.pro}/yr`}
                </span>
                {form.monthly && <span className="bonus">2 months free</span>}
              </label>
            </div>
          </fieldset>
          <fieldset className="form__billing">
            <label htmlFor="monthly">
              <span className={!form.monthly ? "monthly" : ""}>Monthly</span>
              <input
                type="checkbox"
                id="monthly"
                name="monthly"
                checked={form.monthly}
                onChange={handleForm}
              />
              <span className={form.monthly ? "yearly" : ""}>Yearly</span>
            </label>
          </fieldset>
        </form>
      </div>
      <ChangeStep mode={form.monthly ? "yearly" : ""} />
    </section>
  );
};

export default StepTwo;
