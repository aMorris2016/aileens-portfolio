import styles from '../styles/Project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cyclist from '../public/cyclist.png';
import laptop from '../public/laptop.png';
import crypto from '../public/crypto.png';
import excel_dashboard from '../public/excel_dashboard.png';
import cali_layoffs from '../public/cali_layoffs.png';
import python_challenges from '../public/python_challenges.png';
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  return (
    <section id="section_projects">
      <h2>Projects</h2>

      <ul className={styles.contentContainer}>
        <li className={"animate-scale"}>
          <Link 
              href="https://github.com/aMorris2016/California_Layoffs_Visualization"
              aria-label="Open Aileen's Github California Layoff Visualization project"
          >
            <Image
              src={cali_layoffs}
              alt="Picture of a bicycle icon"
              width={375}
              height={375}
              placeholder="blur"
            />
            <div className={styles.contentTextContainer}>
              <div className={styles.contentText}>
                <h3>California Layoffs Visualization</h3>
                <p>SQL. Tableau. Data Visualization</p>
              </div>        
            </div>
          </Link>
        </li>

        <li className={"animate-scale"}>
          <Link 
              href="https://github.com/aMorris2016/Interactive_Excel_Dashboards" 
              aria-label="Open Aileen's Github Interactive Excel Dashboards project"
          >
            <Image
              src={excel_dashboard}
              alt="Picture of a visualization dashboard"
              width={375}
              height={375}
              placeholder="blur"
            />
            <div className={styles.contentTextContainer}>
              <div className={styles.contentText}>
                <h3>Interactive Excel Dashboards</h3>
                <p>Excel. Dashboards. Visualizations</p>
              </div>        
            </div>
          </Link>
        </li>
        
        <li className={"animate-scale"}>
          <Link 
              href="https://github.com/aMorris2016/Cyclistic" 
              aria-label="Open Aileen's Github Cyclistic project"
          >
            <Image
              src={cyclist}
              alt="Picture of a bicycle icon"
              width={375}
              height={375}
              placeholder="blur"
            />
            <div className={styles.contentTextContainer}>
              <div className={styles.contentText}>
                <h3>Cyclistic Bike Sharing</h3>
                <p>SQL . BigQuery. Tableau. Excel</p>
              </div>        
            </div>
          </Link> 
        </li>

        <li className={"animate-scale"}>
          <Image
            src={laptop}
            alt="Picture of a laptop with chart images"
            width={375}
            height={375}
            placeholder="blur"
          />
          <div className={styles.contentTextContainer}>
            <div className={styles.contentText}>
            <h3>Business Service Dashboard</h3>
            <p> Excel. Pivot Tables. Charts</p>
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

        <li className={"animate-scale"}>
          <Link 
              href="https://github.com/aMorris2016/Cryptocurrency_Analysis" 
              aria-label="Open Aileen's Github Cryptocurrency Analysis project"
          >
            <Image
              src={crypto}
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
            </div>
          </Link>
        </li>

        <li className={"animate-scale"}>
          <Link 
              href="https://github.com/aMorris2016/PythonChallenges" 
              aria-label="Open Aileen's Github Python Challenges project"
          >
            <Image
              src={python_challenges}
              alt="Picture of the python logo"
              width={375}
              height={375}
              placeholder="blur"
            />
            <div className={styles.contentTextContainer}>
              <div className={styles.contentText}>
              <h3>Python Challenges</h3>
              <p>Python. Progamming</p>
              </div>        
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}
