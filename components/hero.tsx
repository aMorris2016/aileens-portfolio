import styles from '../styles/Hero.module.css'
import heroVid from '../public/hero.mp4';

export default function Hero() {
    return (
        <section id="section_hero" className={styles.hero}>
            <video className={styles.heroVideo} autoPlay loop muted>
                <source src={heroVid} type="video/mp4"/>
                <p>Your browser doesn't support video.</p>
            </video>
            
            <div className={styles.heroHeading}>
                <div className={styles.heroHeadingBackground}></div>
                <h1 className={styles.heroTitle}>
                    Hi, I&apos;m Aileen
                </h1>
                <h2 className={styles.heroSubtitle}>
                    I have a background in banking, crypto and technical customer support. My passion is using data analytics to solve customer pain points and business needs.
                </h2>
            </div>

        </section>
    )
}
  