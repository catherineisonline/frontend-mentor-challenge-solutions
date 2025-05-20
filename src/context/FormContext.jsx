import { useContext, useEffect, useState, createContext, useMemo } from "react";
import { prices, steps } from "../data/steps";
import { validate } from "../helpers/validate";

const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    plan: "",
    monthly: true,
    service: false,
    storage: false,
    customizable: false,
  });
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);
  const [targetIndex, setTargetIndex] = useState(0);

  const total = useMemo(() => {
    let price = 0;
    let billing = form.monthly ? "yearly" : "monthly";
    for (let key of Object.keys(form)) {
      if (form[key] === true && prices[billing].addons[key]) {
        price += prices[billing].addons[key];
      }
    }
    price += prices[billing][form.plan.toLowerCase()];
    return price;
  }, [form]);

  useEffect(() => {
    function handleBeforeUnload(e) {
      if (isDirty) {
        e.returnValue = "Changes that you made may not be saved.";
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });
  const handleForm = (e) => {
    if (!e) return;
    if (!e.target && e.length > 0) {
      setForm({ ...form, number: e });
    } else if (
      e.target.id === "monthly" ||
      e.target.id === "service" ||
      e.target.id === "storage" ||
      e.target.id === "customizable"
    ) {
      const checkbox = e.target.id;
      setForm({ ...form, [checkbox]: e.target.checked });
    } else {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
    setIsDirty(true);
  };

  const nextStep = (e, step) => {
    setErrors(validate(form, targetIndex));
    if (Object.keys(validate(form, targetIndex)).length > 0) {
      e.preventDefault();
      return;
    } else if (step !== undefined) {
      setTargetIndex(step);
    } else if (targetIndex < steps.length - 1 && !step) {
      setTargetIndex((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (targetIndex > 0) {
      setTargetIndex((prev) => prev - 1);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      number: "",
      plan: "",
      monthly: true,
      service: false,
      storage: false,
      customizable: false,
    });
    setErrors({});
    setTargetIndex(4);
    setIsDirty(false);
  };
  return (
    <FormContext.Provider
      value={{
        handleForm,
        nextStep,
        previousStep,
        submitForm,
        setTargetIndex,
        form,
        setForm,
        total,
        errors,
        targetIndex,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
