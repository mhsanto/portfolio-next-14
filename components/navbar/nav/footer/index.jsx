import Link from "next/link";
import styles from "./style.module.scss";
import Magnet from "@/components/MakeThingsMagnet";
const footerLinks = [
  {
    id: 1,
    href: "https://github.com/mhsanto",
    text: "GITHUB",
  },
  {
    id: 2,

    href: "https://www.linkedin.com/in/mh-santo/",
    text: "LINKEDIN",
  },
  {
    id: 3,

    href: "https://www.facebook.com/mhsanto072",
    text: "FACEBOOK",
  },
];
export default function index() {
  return (
    <div className={styles.footer}>
      {footerLinks.map(link=>(
        <Magnet>
        <Link href={link.href} target="_blank">
         {link.text}
        </Link>
      </Magnet>
      ))}
      
    </div>
  );
}
