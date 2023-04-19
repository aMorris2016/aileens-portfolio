import styles from "../styles/Contact.module.css"
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

import Link from "next/link";

const getcopyRightYear = () => new Date().getFullYear();

const concatStyles = () => `${styles.icon} animate-scale`

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
              className={concatStyles()}
              aria-label="Email Aileen"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s email</span>
                <FaEnvelope />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aileenmorris/" 
              className={concatStyles()}
              aria-label="Open Aileen's LinkedIn profile"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s LinkedIn profile</span>
                <FaLinkedin />
            </Link>
            <Link 
              href="https://github.com/aMorris2016" 
              className={concatStyles()}
              aria-label="Open Aileen's Github"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s Github</span>
                <FaGithub />
            </Link>
            <Link 
              href="https://public.tableau.com/app/profile/aileenmorris" 
              className={concatStyles()}
              aria-label="Open Aileen's Tableau"
            >
                <span className={styles.ariaIinvisible}>Link to Aileen&apos;s Tableau</span>
                <SiTableau />
            </Link>
          </div>
        </section>

        <footer style={{ textAlign: "center" }}>
          ©{getcopyRightYear()} Aileen Morris
        </footer>
    </div>
    )
  }
  