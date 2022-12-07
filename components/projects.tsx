import styles from '../styles/Project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import projectImage1 from '../public/project1image.png';
import projectImage2 from '../public/project2image.png';
import projectImage3 from '../public/project3image.png';
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  return (
    <section id="section_projects">
      <h2>Projects</h2>

      <ul className={styles.contentContainer}>
        <li>
          <Image
            src={projectImage1}
            alt="Picture of a bicycle icon"
            width={375}
            height={375}
            placeholder="blur"
          />
          <div className={styles.contentTextContainer}>
            <div className={styles.contentText}>
              <h3> Cyclistic Bike Sharing</h3>
              <p>SQL . BigQuery. Tableau. Excel</p>
            </div>        
            <Link 
              href="https://github.com/aMorris2016/Cyclistic" 
              className={styles.icon}
              aria-label="Open Aileen's Github Cyclistic project"
            >
                <FaGithub />
            </Link>
          </div>
        </li>

        <li>
          <Image
            src={projectImage2}
            alt="Picture of a laptop with chart images"
            width={375}
            height={375}
            placeholder="blur"
          />
          <div className={styles.contentTextContainer}>
            <div className={styles.contentText}>
            <h3>Customer Service Dashboard</h3>
            <p> Excel . Pivot Tables. Charts</p>
            </div>        
            <Link 
              href="https://github.com/aMorris2016/Customer_Service_Dashboard" 
              className={styles.icon}
              aria-label="Open Aileen's Github Customer Service Dashboard project"
            >
              <FaGithub />
            </Link>
          </div>
        </li>

        <li>
          <Image
            src={projectImage3}
            alt="Picture of a finance graph with crypto coins"
            width={375}
            height={375}
            placeholder="blur"
          />
          <div className={styles.contentTextContainer}>
            <div className={styles.contentText}>
            <h3>Cryptocurrency Analysis</h3>
            <p>Tableau. Data Visualization</p>
            </div>        
            <Link 
              href="https://github.com/aMorris2016/Cryptocurrency_Analysis" 
              className={styles.icon}
              aria-label="Open Aileen's Github Cryptocurrency Analysis project"
            >
              <FaGithub />
            </Link>
          </div>
        </li>
      </ul>
    </section>
  )
}
