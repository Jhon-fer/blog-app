import Link from "next/link"
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Blog's News</h1>
    <div className={styles.headerContainer}>
      <Link href='/' className={styles.link}>Blog</Link>
      <Link href='/about' className={styles.link}>About</Link>
      <Link href='/contact' className={styles.link}>Contact</Link>
    </div>
  </header>
  )
}
