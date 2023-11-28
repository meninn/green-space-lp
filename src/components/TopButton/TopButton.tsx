import TopArrow from "../../../public/assets/svg/goToTopArrow.svg";
import "./styles.scss";

const TopButton = () => {
  const returnToTop = () => {
    if (document) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className="top-btn"
      onClick={() => {
        returnToTop();
      }}
    >
      <img className="top-btn__img" src={TopArrow} alt="arrow up"></img>
    </button>
  );
};

export default TopButton;
