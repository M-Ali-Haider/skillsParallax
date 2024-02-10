import styles from "./page.module.css";
import Parallax from "@/parallax/parallax";
export default function Home() {
  return (
    <>
    <main>
      <div className={styles.space}></div>
      <Parallax/>
      <div className={styles.space}></div>
    </main>
    </>
  );
}
