import "./step-4.css";
import "../index.css";
import ChangeStep from "../../../components/change-step/ChangeStep";
import { useForm } from "../../../context/FormContext";
import { prices } from "../../../data/steps";

const StepFour = () => {
  const { form, total, setTargetIndex } = useForm();
  const { plan, monthly, service, storage, customizable } = form;
  const billType = monthly ? "Yearly" : "Monthly";
  const billTypeAbbr = monthly ? "yr" : "mo";

  return (
    <section className="step" aria-labelledby="title">
      <div className="step__content">
        <header>
          <h1 id="title">Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </header>
        <ul className="step__summary">
          <li className="step__summary-billing">
            <div>
              <p>
                {plan} ({billType})
              </p>
              <button onClick={() => setTargetIndex(1)}>Change</button>
            </div>
            <p>
              ${prices[billType.toLowerCase()][plan.toLowerCase()]}/
              {billTypeAbbr}
            </p>
          </li>
          {service && <hr />}
          {service && (
            <li>
              <p>Online Service</p>
              <span>
                +${prices[billType.toLowerCase()].addons.service}/{billTypeAbbr}
              </span>
            </li>
          )}
          {storage && (
            <li>
              <p>Larger storage</p>
              <span>
                +${prices[billType.toLowerCase()].addons.storage}/{billTypeAbbr}
              </span>
            </li>
          )}
          {customizable && (
            <li>
              <p>Customizable Profile</p>
              <span>
                +${prices[billType.toLowerCase()].addons.customizable}/
                {billTypeAbbr}
              </span>
            </li>
          )}
        </ul>
        <section className="step__total">
          <p>Total (per {monthly ? "year" : "month"})</p>
          <span>
            +${total}/{billTypeAbbr}
          </span>
        </section>
      </div>
      <ChangeStep mode={form.monthly ? "yearly-4" : "monthly-4"} />
    </section>
  );
};

export default StepFour;
