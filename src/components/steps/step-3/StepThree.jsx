import "./step-3.css";
import "../index.css";
import ChangeStep from "../../../components/change-step/ChangeStep";
import { useForm } from "../../../context/FormContext";
import { prices } from "../../../data/steps";

const StepThree = () => {
  const { handleForm, form } = useForm();
  const addonsMo = prices.monthly.addons;
  const addonsYr = prices.yearly.addons;
  return (
    <section className="step" aria-labelledby="title">
      <div className="step__content">
        <header>
          <h2 id="title">Pick add-ons</h2>
          <p>Add-ons help enhance your gaming experience.</p>
        </header>
        <form className="step__form">
          <div className="form__service">
            <input
              type="checkbox"
              id="service"
              name="service"
              checked={form.service}
              onChange={handleForm}
            />
            <span className="custom-checkbox"></span>
            <label>
              Online service <span>Access to multiplayer games</span>
            </label>
            <p>
              {!form.monthly
                ? `+$${addonsMo.service}/mo`
                : `+$${addonsYr.service}/yr`}
            </p>
          </div>
          <div className="form__service">
            <input
              type="checkbox"
              id="storage"
              name="storage"
              checked={form.storage}
              onChange={handleForm}
            />
            <span className="custom-checkbox"></span>
            <label>
              Larger storage <span>Extra 1TB of cloud save</span>
            </label>
            <p>
              {!form.monthly
                ? `+$${addonsMo.storage}/mo`
                : `+$${addonsYr.storage}/yr`}
            </p>
          </div>
          <div className="form__service">
            <input
              type="checkbox"
              id="customizable"
              name="customizable"
              checked={form.customizable}
              onChange={handleForm}
            />
            <span className="custom-checkbox"></span>
            <label>
              Customizable Profile <span>Custom theme on your profile</span>
            </label>
            <p>
              {!form.monthly
                ? `+$${addonsMo.customizable}/mo`
                : `+$${addonsYr.customizable}/yr`}
            </p>
          </div>
        </form>
      </div>
      <ChangeStep mode="addons" />
    </section>
  );
};

export default StepThree;
