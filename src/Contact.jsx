import styles from "./Contact.module.css"; // Import the CSS Module
import github from "../assets/svg/github2.svg";
import email from "../assets/svg/email2.svg";
import linkedin from "../assets/svg/linked.svg";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div id={styles.contactContainer}>
        <h2>Contact</h2>

        <form action="https://formspree.io/f/xknykdjb" method="POST">
          <label htmlFor="name">
            <p className={styles.formHeader}>Your Name:</p>
            <input type="text" name="name" placeholder="What should I call you?" required />
          </label>
          <label htmlFor="email">
            <p className={styles.formHeader}>Your Email:</p>
            <input type="email" name="email" placeholder="What is your email?" required />
          </label>
          <label htmlFor="message">
            <p className={styles.formHeader}>Message:</p>
            <textarea
              rows="8"
              name="message"
              className={styles.body}
              placeholder="Please leave your message here..."
              required
            ></textarea>
          </label>
          <button className={styles.formSubmit} type="submit">Submit</button>
        </form>

        <div className={styles.contactLinks}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={email} alt="Email" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
