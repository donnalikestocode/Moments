'use client'
import React, {useState} from 'react';
import '/styles/global.css';
import Sidebar from "/src/components/Sidebar.jsx"
import SidebarMini from "/src/components/SidebarMini.jsx"
import SidebarBottom from "/src/components/SidebarBottom.jsx"
import UploadMoment from "/src/components/UploadMoment.jsx"
import { UserAuth } from "/context/AuthContext"

function Navigation (){

  const { user, googleSignIn, logout } = UserAuth();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpload = ({ caption, selectedFile }) => {
    // Handle the upload here (e.g., send the data to an API)
    console.log('Caption:', caption);
    console.log('Selected File:', selectedFile);
  };

  return(
    <div>
      {user ?
      ( <>
            < Sidebar
              openModal={openModal}
              closeModal={closeModal}
            />
            < SidebarMini openModal={openModal} />

            <SidebarBottom openModal={openModal}/>
            <UploadMoment
              isOpen={modalIsOpen}
              onClose={closeModal}
              onUpload={handleUpload}
            />
        </>):<></>
      }
    </div>

  )
}

export default Navigation;