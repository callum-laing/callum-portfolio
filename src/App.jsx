import Nav from "./Nav.jsx";
import Intro from "./Intro.jsx";
import Projects from "./Projects.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="main-container">
        <Intro />
        <Projects />
      </div>
    </>
  );
}

export default App;
