
import "./App.css";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { About } from "./About";
import { Project } from "./Project";

import Link from "react-scroll/modules/components/Link";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
