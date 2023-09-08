import Link from "next/link";
import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      
      <Link href="https://github.com/mhsanto" target="_blank">
        GITHUB
      </Link>
      <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
        LINKEDIN
      </Link>
      <Link href="https://www.facebook.com/mhsanto072" target="_blank">
        FACEBOOK
      </Link>
 
    </div>
  );
}
