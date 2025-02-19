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
          <a className={styles.navLink} href="#projects">Projects</a>
          <a className={styles.navLink} href="#aboutSection">About</a>
          <a className={styles.navLink} href="#contactContainer">Contact</a>
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
