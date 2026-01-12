import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/teaser.png"
          alt="Next.js logo"
          fill
          priority
        />
      </main>
    </div>
  );
}
