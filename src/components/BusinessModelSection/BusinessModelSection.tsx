import "./styles.scss"

import BusinessModel from "../../assets/svg/Business_model.svg";

const BusinessModelSection = () => {
  return (
    <section className="business__section">
      <h2 className="business__section__title">Business Model</h2>
      <h4 className="business__section__subtitle">
        Modelo de negócios referente ao projeto Green Space
      </h4>

      <img
        className="business__section__img"
        src={BusinessModel}
        alt="A business model image"
      />
    </section>
  );
};

export default BusinessModelSection;
