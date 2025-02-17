import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <h2>Hey! I&apos;m Callum, a Web Developer based in Cambridge, UK.</h2>
        <p>
          My journey into web development started with a simple curiosity about
          how the web works, which soon grew into a love for building sleek,
          responsive designs that are both functional and visually engaging.
        </p>
        <p>
          I enjoy the challenge of problem-solving and the satisfaction of
          seeing a project come together. Whether it’s refining a user interface
          or making sure a site works seamlessly across devices, I take pride in
          creating clean, efficient code and delivering experiences that are
          intuitive and accessible.
        </p>
        <p>Currently seeking my next adventure as a Developer!</p>
        <div className="social-links">
          <a className="linkedin-link" href="https://www.linkedin.com/in/callumlaing91/">View LinkedIn
          </a>
          <a className="github-link" href="https://github.com/callum-laing">View Github</a>
          <a className="email-link" href="mailto:callum-laing91@hotmail.co.uk">Email Me</a>
        </div>
      </div>
      <img src="/cal.jpg" alt="" />
    </div>
  );
};

export default Intro;
