import html from './assets/images/htmlsvg.svg';
import css from './assets/images/csssvg.svg';
import javascript from './assets/images/javascriptsvg.svg';
import react from './assets/images/reactsvg.svg';
import vue from './assets/images/vuesvg.svg';
import git from './assets/images/gitsvg.svg';
import github from './assets/images/githubsvg.svg';
import vscode from './assets/images/vscodesvg.svg';
import vite from './assets/images/vitesvg.svg';
import powerbi from './assets/images/powerbisvg.svg';
import sql from './assets/images/sql.svg';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="aboutSection" className={styles.about}>
      <div className={styles.skillsHalf}>
        <h2>Skills</h2>
        <div className={styles.skillsFlex}>
          <div className={styles.skillItem}>
            <img src={html} alt="HTML Icon" />
            <p>HTML</p>
          </div>
          <div className={styles.skillItem}>
            <img src={css} alt="CSS Icon" />
            <p>CSS</p>
          </div>
          <div className={styles.skillItem}>
            <img src={javascript} alt="JavaScript Icon" />
            <p>JavaScript</p>
          </div>
          <div className={styles.skillItem}>
            <img src={vue} alt="Vue Icon" />
            <p>Vue</p>
          </div>

          <div className={styles.skillItem}>
            <img src={react} alt="React Icon" />
            <p>React</p>
          </div>
          <div className={styles.skillItem}>
            <img src={git} alt="Git Icon" />
            <p>Git</p>
          </div>
          <div className={styles.skillItem}>
            <img src={github} alt="GitHub Icon" />
            <p>GitHub</p>
          </div>
          <div className={styles.skillItem}>
            <img src={vscode} alt="VSCode Icon" />
            <p>VSCode</p>
          </div>
          <div className={styles.skillItem}>
            <img src={vite} alt="Vite Icon" />
            <p>Vite</p>
          </div>
          <div className={styles.skillItem}>
            <img src={sql} alt="SQL Icon" />
            <p>SQL</p>
          </div>
          <div className={styles.skillItem}>
            <img src={powerbi} alt="PowerBI Icon" />
            <p>PowerBI</p>
          </div>
        </div>
      </div>

      <div className={styles.aboutHalf}>
        <h2>About</h2>
        <span>
          <p>
            Hi there! I’m a front-end web developer with a passion for turning ideas into reality. My
            journey into web development started with a simple curiosity about how the web works, which
            soon grew into a love for building sleek, responsive designs that are both functional and
            visually engaging.
          </p>
          <br />
          <p>
            I enjoy the challenge of problem-solving and the satisfaction of seeing a project come
            together. Whether it’s refining a user interface or making sure a site works seamlessly
            across devices, I take pride in creating clean, efficient code and delivering experiences
            that are intuitive and accessible.
          </p>
          <br />
          <p>
            When I’m not coding, I like staying active by hitting the gym, hiking, or playing sports.
            I’m also a big fan of unwinding with a good movie or two. These interests keep me balanced
            and energized, and I find they often inspire fresh ideas in my work.
          </p>
        </span>
      </div>
    </section>
  );
};

export default About;
