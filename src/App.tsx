import Header from "./components/Header";
import { HeaderSpacing } from "./components/Header/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import BusinessModelSection from "./components/BusinessModelSection";
import ContactSection from "./components/ContactSection";
import TopButton from "./components/TopButton";
import Footer from "./components/Footer";
import Diagrams from "./components/DiagramsSection";

import "./styles/global.scss";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderSpacing />
      <HomeSection />
      <AboutSection />
      <BusinessModelSection />
      <Diagrams />
      <ContactSection />
      <Footer />
      <TopButton />
    </div>
  );
};

export default App;
