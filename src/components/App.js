import { BrowserRouter as Router } from "react-router-dom";

import PromoPanel from "./PromoPanel";
import HeaderApp from "./HeaderApp/HeaderApp";
import OfferHighlight from "./OfferHighlight";
import SliderSection from "./SliderSection/SliderSection";

import "../styles/main.scss";

function App() {
  return (
    <Router>
      <PromoPanel></PromoPanel>
      <HeaderApp></HeaderApp>
      <main>
        <div className="container">
          <OfferHighlight></OfferHighlight>
          <SliderSection></SliderSection>
        </div>
      </main>
    </Router>
  );
}

export default App;
