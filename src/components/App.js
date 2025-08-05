import PromoPanel from "./PromoPanel";
import HeaderApp from "./HeaderApp";
import OfferHighlight from "./OfferHighlight";
import SliderSection from "./SliderSection";

import "../styles/main.scss";

function App() {
  return (
    <>
      <PromoPanel></PromoPanel>
      <HeaderApp></HeaderApp>
      <main>
        <div className="container">
          <OfferHighlight></OfferHighlight>
          <SliderSection></SliderSection>
        </div>
      </main>
    </>
  );
}

export default App;
