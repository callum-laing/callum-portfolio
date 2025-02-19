import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.calImg} src="/assets/images/calscotland.jpg" alt="Cal Scotland" />
      <h2>Web Developer based in Cambridge, UK.</h2>
    </section>
  );
};

export default Hero;
