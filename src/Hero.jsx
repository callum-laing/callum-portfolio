import styles from "./Hero.module.css";
import cal from './assets/images/calscotland.jpg';

const Hero = () => {
    return (
      <>
    <section className={styles.hero}>
      <img className={styles.calImg} src={cal} alt="Cal Scotland" />
      <h2>Web Developer based in Cambridge, UK.</h2>
    </section>
      </>
  );
};

export default Hero;
