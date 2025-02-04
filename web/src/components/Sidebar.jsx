import React from "react";
import {SidebarData} from "./SidebarData";
import {MeetingRoomOutlined} from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import Link from 'next/link';
import styles from '/styles/sidebar.module.css';
import { usePathname } from "next/navigation";
import { UserAuth } from "/context/AuthContext.js"

function Sidebar({openModal, closeModal}) {

  const { user, googleSignIn, logOut } = UserAuth()

  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await logOut()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ?
        (<div className = {styles.Sidebar}>
          <div className={styles.Logo}>
            <Link className={styles.LogoLink} href="/">
              moments
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
                    <div className={styles.icon}> {val.icon} </div>
                    <div className={styles.title}> {val.title} </div>
                  </Link>
                </li>
              );
            })}
            <li className={styles.SidebarListRow}>
              <div className={styles.link}>
                <div onClick={openModal} className={styles.icon}> <AddAPhotoIcon /> </div>
                <div onClick={openModal} className={styles.title}>create</div>
              </div>
            </li>
          </ul>
          <li className={styles.logout } onClick={handleSignOut}>
              <div id="icon" className={styles.logoutIcon}>  <MeetingRoomOutlined/></div>
              <div id="title" className={styles.logoutTitle}> logout</div>
          </li>
        </div>):<></>
      }
    </>
  );
}

export default Sidebar;