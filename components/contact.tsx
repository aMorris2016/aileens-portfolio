import styles from "../styles/Contact.module.css"
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const getcopyRightYear = () => new Date().getFullYear();

export default function Contact() {
  return (
      <div>
        <section id="section_contact" className={styles.container}>
          <h2>Contact</h2>

          <p>
            Please connect with me and let&apos;s chat about opportunities, projects or food and travel!
          </p>

          <div className={styles.icons}>
            <Link 
              href="mailto:aileenmorris2012@gmail.com" 
              className={styles.icon}
              aria-label="Email Aileen"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s email</span>
                <FaEnvelope />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aileenmorris/" 
              className={styles.icon}
              aria-label="Open Aileen's LinkedIn profile"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s LinkedIn profile</span>
                <FaLinkedin />
            </Link>
            <Link 
              href="https://github.com/aMorris2016" 
              className={styles.icon}
              aria-label="Open Aileen's Github"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s Github</span>
                <FaGithub />
            </Link>
            <Link 
              href="https://www.instagram.com/aileendc88/" 
              className={styles.icon}
              aria-label="Open Aileen's Instagram"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s Instagram</span>
                <AiFillInstagram />
            </Link>
          </div>
        </section>

        <footer style={{ textAlign: "center" }}>
          ©{getcopyRightYear()} Aileen Morris
        </footer>
    </div>
    )
  }
  