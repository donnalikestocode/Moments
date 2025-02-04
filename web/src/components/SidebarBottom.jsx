import React from "react";
import {SidebarData} from "./SidebarData";
import {MeetingRoomOutlined} from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import Link from 'next/link';
import styles from '/styles/sidebar.module.css';
import { usePathname } from "next/navigation";
import { UserAuth } from "/context/AuthContext.js"

function SidebarBottom({openModal}) {

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
    <div className = {styles.SidebarBottom}>
      <div className = {styles.wrapper}>
        <ul className={styles.SidebarBottomList}>
          {SidebarData.map((val,key) => {
            return (
              <li
              className={styles.SidebarBottomListCol}
              key={key}
              >
                {" "}
                <Link
                  className={pathname === val.link ? styles.SidebarBottomListColLinkActive : styles.SidebarBottomListColLink} href={val.link}>
                  <div id="icon"> {val.icon} </div>
                </Link>
              </li>
            );
          })}
          <li className={styles.SidebarBottomListCol}>
              <div className={styles.SidebarBottomListColLink}>
                <div onClick={openModal} id="icon"> <AddAPhotoIcon /> </div>
              </div>
          </li>

          <li className={styles.SidebarBottomListCol} onClick={handleSignOut}>
            <div id="icon">  <MeetingRoomOutlined/></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarBottom;