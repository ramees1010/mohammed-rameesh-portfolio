import Navbar from "./Components/Navbar";

import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import GalaxyBackground from "./Components/GalaxyBackground";

function App() {
  return (
    <>
      <GalaxyBackground />

      <Navbar />

      <main>

        <section id="home">
          <Portfolio />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </>
  );
}

export default App;