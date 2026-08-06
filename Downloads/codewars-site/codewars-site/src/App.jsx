import { useState } from "react";
import useLenis from "./hooks/useLenis.js";
import useMouse from "./hooks/useMouse.js";
import BackgroundFX from "./components/BackgroundFX.jsx";
import Intro from "./components/Intro.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Missions from "./components/Missions.jsx";
import BattleFlow from "./components/BattleFlow.jsx";
import About from "./components/About.jsx";
import Rules from "./components/Rules.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx"; /* <--- ADDED IMPORT */
import RegisterCTA from "./components/RegisterCTA.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  useLenis();
  useMouse();

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      <BackgroundFX />
      <Nav />
      <main className={`page ${introDone ? "page--visible" : "page--hidden"}`}>
        <Hero />
        <Missions />
        <BattleFlow />
        <About />
        <Rules />
        <FAQ />
        <Contact /> {/* <--- ADDED SECTION */}
        <RegisterCTA />
      </main>
      <div className={introDone ? "page--visible" : "page--hidden"}>
        <Footer />
      </div>
    </>
  );
}