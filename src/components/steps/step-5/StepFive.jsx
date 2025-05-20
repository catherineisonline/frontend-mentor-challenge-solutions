import "./step-5.css";
import Success from "../../../assets/icon-thank-you.svg";

const StepFive = () => {
  return (
    <section className="step five" aria-labelledby="title">
      <img src={Success} alt="" aria-hidden="true" />
      <div>
        <h1 id="title">Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at{" "}
          <address
            href="mailto:support@loremgaming.com"
            aria-label="Send email to support@loremgaming.com">
            support@loremgaming.com
          </address>
          .
        </p>
      </div>
    </section>
  );
};

export default StepFive;
