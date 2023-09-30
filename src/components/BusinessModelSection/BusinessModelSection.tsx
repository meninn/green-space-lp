import "./styles.scss"

import BusinessModel from "../../assets/svg/Business_model.svg";

const BusinessModelSection = () => {
    return (
        <div className="business__section">
            <h2>Business Model</h2>
            <h4>Modelo de negócios referente ao projeto Green Space</h4>


            <img src={BusinessModel} alt="A business model image" />
        </div>
    )
}

export default BusinessModelSection;