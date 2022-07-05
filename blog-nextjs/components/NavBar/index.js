import  Link  from "next/link"
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link  href="/"><a className={styles.link}>Accueil</a></Link>
      <Link  href="/Blog"><a className={styles.link}>Blog</a></Link>
      <Link  href="/Liste"><a className={styles.link}>Liste</a></Link>
    </nav>
  )
}
