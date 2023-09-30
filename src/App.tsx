import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import BusinessModelSection from "./components/BusinessModelSection";
import ContactSection from "./components/ContactSection";

import "./styles/global.scss";

const App = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <BusinessModelSection />
      <ContactSection />
    </div>
  );
};

export default App;
