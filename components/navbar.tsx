import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilstyle from '../styles/utils.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href="/">
        <a className={styles.navLink}>Services</a>
      </Link>
      <Image
        priority
        src="/images/rottylogosmall.png"
        alt="Rottweiler Protection Services"
        width={400}
        height={150}
      />
      <Link href="/">
        <a className={styles.navLink}>Meet the Team</a>
      </Link>
      <Link href="/">
        <a className={styles.navLink}>Contact Us</a>
      </Link>
    </div>
  )
}