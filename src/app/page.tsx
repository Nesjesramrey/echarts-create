import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Charts Creator</h1>
        <p>Welcome to the Charts Creator application</p>
        
        <div className={styles.ctas}>
          <Link href="/dashboard" className={styles.primary}>
            Go to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
