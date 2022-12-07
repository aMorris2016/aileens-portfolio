import styles from '../styles/Nav.module.css';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <Link 
            to="section_hero" 
            spy={true} 
            smooth={true}
            offset={-100} 
            className={styles.navItem}
            aria-label="Scroll up to the Hero section"
        >
            Aileen Morris
        </Link>
        <div className={styles.navItems}>
            <Link 
                to="section_projects" 
                spy={true} 
                smooth={true}
                offset={-100} 
                className={styles.navItem}
                aria-label="Scroll down to the Projects section"
            >
                Projects
            </Link>
            <Link   
                to="section_about" 
                spy={true} 
                smooth={true}
                className={styles.navItem}
                aria-label="Scroll down to the About section"
            >
                About
            </Link>
            <Link 
                to="section_contact" 
                spy={true} 
                smooth={true}
                aria-label="Scroll down to the Contact section"
            >
                Contact
            </Link>
        </div>
    </nav>
  )
}
