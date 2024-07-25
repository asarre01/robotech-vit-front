import AboutUs from "./components/AboutUs";
import Accueil from "./components/Accueil";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import Header from "./components/Header";
import SliderProjet from "./components/SliderProjet";
import Team from "./components/Team";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";

function App() {
  
  return (
    <div className="bg-alt-100 min-h-screen w-full overflow-hidden space-y-8 md:space-y-12">
      <Header />
      <Fade top>
        <section id="accueil" className=" lg:px-12">
          <Accueil />
          {/* <Banner /> */}
        </section>
      </Fade>
      <Zoom>
        <AboutUs />
      </Zoom>
      <Flip left>
        <Team />
      </Flip>
      <Rotate bottom left>
        <SliderProjet />
      </Rotate>
      <Event />
      <ContactUs />
    </div>
  );
}

export default App;
