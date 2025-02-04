import React from "react";
import {SidebarData} from "./SidebarData";
import {MeetingRoomOutlined} from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import Link from 'next/link';
import styles from '/styles/sidebar.module.css';
import { usePathname } from "next/navigation";
import { UserAuth } from "/context/AuthContext.js"


function SidebarMini({openModal}) {

  const pathname = usePathname();

  const { user, googleSignIn, logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.SidebarMini}>
      <div className={styles.LogoMini}>
        <Link className={styles.LogoMiniLink} href="/">
            m
        </Link>
       </div>
      <ul className={styles.SidebarList}>
        {SidebarData.map((val,key) => {
          return (
            <li
            className={styles.SidebarListRow}
            key={key}
            >
              <Link className={pathname === val.link ? styles.SidebarListActive :styles.link} href={val.link}>
                  <div id="icon">{val.icon}</div>
              </Link>
            </li>
          );
        })}
        <li className={styles.SidebarListRow}>
          <div className={styles.link}>
            <div onClick={openModal} id="icon"> <AddAPhotoIcon /> </div>
          </div>
        </li>
      </ul>
      <li className={styles.logout} onClick={handleSignOut}>
        <div id="icon">  <MeetingRoomOutlined/></div>
      </li>
    </div>
  );
}

export default SidebarMini;