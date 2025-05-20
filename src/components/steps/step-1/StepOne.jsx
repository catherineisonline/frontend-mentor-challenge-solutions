import "react-phone-number-input/style.css";
import "./step-1.css";
import "../index.css";
import ChangeStep from "../../../components/change-step/ChangeStep";
import { useForm } from "../../../context/FormContext";
import PhoneInput from "react-phone-number-input";

const StepOne = () => {
  const { handleForm, form, errors, isPhoneValid } = useForm();
  return (
    <section className="step" aria-labelledby="title">
      <div className="step__content">
        <header>
          <h1 id="title">Personal info</h1>
          <p> Please provide your name, email address, and phone number.</p>
        </header>
        <form className="step__form">
          <div className="form__group">
            <label htmlFor="name">
              Name
              {errors.name && (
                <span className="form__error">{errors.name}</span>
              )}
            </label>
            <input
              value={form.name}
              type="text"
              onChange={handleForm}
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">
              Email Address
              {errors.email && (
                <span className="form__error">{errors.email}</span>
              )}
            </label>
            <input
              value={form.email}
              type="text"
              onChange={handleForm}
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="form__group">
            <label htmlFor="number">
              Phone Number
              {errors.number && (
                <span className="form__error num">{errors.number}</span>
              )}
            </label>
            <PhoneInput
              value={form.number}
              onChange={handleForm}
              countryCallingCodeEditable={false}
              countrySelectProps={{ unicodeFlags: true }}
              international
              id="number"
              name="number"
              disabled={isPhoneValid}
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>
      <ChangeStep />
    </section>
  );
};

export default StepOne;
