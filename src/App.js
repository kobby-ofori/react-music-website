import "./App.css";
import Controls from "./components/Controls";
import Find from "./components/Find";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PlatformsConnect from "./components/PlatformsConnect";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Find />
      <Gallery />
      <PlatformsConnect />
      <Footer />
      <Controls />
    </div>
  );
}

export default App;
