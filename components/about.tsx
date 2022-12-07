import styles from '../styles/About.module.css';
import Image from 'next/image';
import profilePic from '../public/aboutme.png';
import Link from 'next/link';

export default function About() {
    return (
      <section id="section_about" className={styles.container}>
        <h2 style={{ paddingTop: "3rem" }}>About</h2>

        <div className={styles.content}>
          <Image
            src={profilePic}
            alt="Picture of the Aileen Morris"
            width={375}
            height={375}
            className={styles.contentImg}
            placeholder="blur"
          />
          <div className={styles.contentText}>        
            <h3>Problem-Solver | Lifelong Learner | Adventurer</h3>
            <p className={styles.contentTextPadding}>
              I am Aileen Morris, a <em>Data Analyst</em> with a background in industrial banking and technical customer support.</p>
            <p>
              In June 2022, I was among those who were let go from my Technical Analyst job when Coinbase laid off 18% of its workforce. 
              Prior to Coinbase, I worked as a Techincal Support Analyst for Ads as a contractor at Facebook.
            </p>
            <p className={styles.contentTextPadding}>
              One thing I learned on my analytics journey so far, I am very enthusiastic about using my data analytics skills to discover insights 
              to make better business decisions. After being laid off, I decided to go all in on data analytics and recently completed
              <em>
                <Link 
                href="https://grow.google/certificates/data-analytics/#?modal_active=none" 
                aria-label="Google Data Analytics Certificate course"
                >
                  &nbsp;Google Data Analytics Certificate&nbsp;
                </Link>
              </em>
              course!
            </p>
            <p>
              When I&apos;m not in front of the computer (or TV), I love long walks on the beach, exploring thrift shops or sampling street tacos 
              with my husband.
            </p>            
            <div className={styles.contentLinkPadding}>
              <Link 
                href="https://drive.google.com/file/d/130sEVZQwJIM6wekPxXOre3raQsllkPXI/view?usp=sharing" 
                className={styles.contentLink}
                aria-label="Open a Google drive link to Aileen's resume"
              >
                Check out my resume for details
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  