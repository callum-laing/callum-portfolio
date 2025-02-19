import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import About from './About.jsx';
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.navContainer}>
        <p>Callum Laing</p>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#aboutSection">About</a>
          <a href="#contactContainer">Contact</a>
        </nav>
      </div>

      <main>
        <Hero />
        <hr />
        <Projects />
        <hr />
        <About />
        <hr />
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
