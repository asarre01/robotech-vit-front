import AboutUs from "./components/AboutUs";
import Accueil from "./components/Accueil";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import Header from "./components/Header";
import SliderProjet from "./components/SliderProjet";
import Team from "./components/Team";

function App() {
  
  return (
    <div className="bg-alt-100 min-h-screen w-full overflow-hidden">
        <Header />
      <section id="accueil">
        <Accueil />
        <Banner />
      </section>
      <AboutUs />
      <Team />
      <SliderProjet />
      <Event />
      <ContactUs />
    </div>
  );
}

export default App;
