import About from "./components/About";
import AboutRedes from "./components/AboutRedes";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Skills from "./components/Skills";
import SkillsTwo from "./components/SkillsTwo";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <SkillsTwo></SkillsTwo>
      <Work></Work>
      <Contact></Contact>
      <AboutRedes></AboutRedes>
    </div>
  );
}

export default App;
