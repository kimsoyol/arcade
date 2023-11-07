import Link from "next/link";
import styles from "./neon.module.css";

const Navbar = () => {
  return (
    <nav className="max-2xl:px-4 flex justify-between pt-4">
      <Link href="/">
        <h1 className={styles.neonText}>Arcade</h1>
      </Link>

      <Link
        href="https://github.com/kimsoyol/arcade"
        rel="noopener noreferrer"
        target="_blank"
        className={`${styles.neonText} ${styles.flick}`}
      >
        Source Code
      </Link>
    </nav>
  );
};
export default Navbar;
