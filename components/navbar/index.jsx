'use client'
'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>

      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
// "use client";

// import Link from "next/link";
// import React from "react";

// const HeaderPage = () => {
//   const links = [
//     {
//       id: 1,
//       href: "/",
//       text: "HOME",
//     },
//     { id: 2, href: "/about", text: "ABOUT" },
//     { id: 3, href: "/projects", text: "PROJECTS" },
//     { id: 4, href: "/skills", text: "SKILLS" },
//     { id: 5, href: "/footer", text: "CONTACT" },
//   ];
//   return (
//     <header className="flex bg-black text-white">
//       <div className="logo ">
//         <Link href="/">SANTO</Link>
//       </div>
//       <div className="header-items flex ">
//         {links.map((link) => (
//           <div key={link.id} className="header-item">
//             <Link href={link.href}>{link.text}</Link>
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// };

// export default HeaderPage;
